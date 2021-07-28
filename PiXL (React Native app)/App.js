import React, { useState, useEffect } from "react";
import { StyleSheet, View, AsyncStorage } from "react-native";
import Auth from "./Screens/Login/Auth";
import TabNav from "./Navigation/TabNav";
import { AppLoading } from "expo";
import socketIoClient from "socket.io-client";
import { useStateValue } from "./context/StateProvider";
import * as Font from "expo-font";
import Axios from "axios";

Axios.defaults.headers.common["authorization"] = "";

const fetchFonts = () => {
  return Font.loadAsync({
    AdventPro: require("./style/fonts/advent-pro/adventpro-regular.ttf"),
    InriaSans: require("./style/fonts/inria-sans/InriaSans-Regular.otf"),
    "InriaSans-Bold": require("./style/fonts/inria-sans/InriaSans-Bold.otf"),
    "InriaSans-Italic": require("./style/fonts/inria-sans/InriaSans-Italic.otf"),
    MontserratLight: require("./style/fonts/Montserrat-Light.ttf"),
    HammersmithOne: require("./style/fonts/HammersmithOne-Regular.ttf"),
  });
};

export const AppContext = React.createContext(undefined);
const socket = socketIoClient("http://51.178.86.48:3000");

export default function App() {
  const [fontLoading, setFontLoading] = useState(true);

  const [jwt, setJwt] = useState("");
  const [tokenLoading, setTokenLoading] = useState(true);
  const [userId, setUserId] = useState(undefined);
  const [{ global }, dsp] = useStateValue();

  const deleteJwt = async () => {
    try {
      await AsyncStorage.removeItem("id_token").then(() => {
        setJwt("");
        setUserId(undefined);
        console.log("deleted");

        dsp({
          type: "SET_USER_ID",
          userId: 37,
        });
      });
    } catch (error) {
      console.log("AsyncStorage Error: " + error.message);
    }
    socket.disconnect();
  };

  const loadJWT = async () => {
    try {
      const value = await AsyncStorage.getItem("id_token");
      if (value !== null) {
        setJwt(value);
        Axios.defaults.headers.common["authorization"] = value;
        await Axios.get("http://51.178.86.48:3000/user/access").then((res) => {
          if (res.data.uuid !== undefined) {
            setUserId(res.data.uuid);
          } else {
            alert("Veuillez vous reconnectez");
            deleteJwt();
          }
        });
        setTokenLoading(false);
      } else {
        setTokenLoading(false);
      }
      socket = socketIoClient("http://51.178.86.48:3000");
    } catch (error) {
      console.log("AsyncStorage Error: " + error.message);
    }
  };

  loadJWT();

  const newJWT = (jwt) => {
    setJwt(jwt);
  };

  if (fontLoading) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoading(false)}
        onError={(err) => console.log("error loading the fonts" + err)}
      />
    );
  }

  if (tokenLoading) {
    return (
      <AppLoading
        startAsync={loadJWT}
        onFinish={() => setTokenLoading(false)}
      />
    );
  }

  return (
    <AppContext.Provider
      value={{
        jwt: jwt,
        delete: deleteJwt,
        socket: socket,
        uuid: userId,
      }}
    >
      <View style={styles.container}>
        <View style={styles.tab}>
          {!jwt ? <Auth newJWT={newJWT} /> : <TabNav jwt={jwt} />}
        </View>
      </View>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tab: {
    flex: 1,
  },
});
