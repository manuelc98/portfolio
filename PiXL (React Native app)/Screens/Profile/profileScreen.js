import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Button,
  StyleSheet,
  ScrollView,
  AsyncStorage,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";
import Strip from "../../Components/Profile/Strip";
import Entete from "../../Components/Profile/Entete";
import deviceStorage from "../../deviceStorage";
import Auth from "../Login/Auth";
import { AppContext } from "../../App";
import Title from "../../Components/common/Title";
import TouchableTag from "../../Components/Home/TouchableTag";
import color from "../../style/color";

const ProfileScreen = (props) => {
  const width = Dimensions.get("window").width;
  const [jwt, setJwt] = useState(props.jwt);
  const context = React.useContext(AppContext);

  const deleteJWT = async () => {
    try {
      await AsyncStorage.removeItem("id_token").then(() => {
        setJwt("");
        console.log("deleted");
      });
    } catch (error) {
      console.log("AsyncStorage Error: " + error.message);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: "center",
        paddingTop: 30,
      }}
    >
      <Title text="Mon profil" />
      <Entete style={styles.entete} />

      <View style={{ flexDirection: "row" }}>
        <TouchableTag
          width={0.4 * width}
          height={50}
          borderRadius={20}
          backgroundColor={color.lightGrey}
          color={color.secondary}
          label="Guide de l'acheteur"
          margin={10}
          fontSize={18}
          onPress={() => props.navigation.navigate("Guide achat")}
        />
        <TouchableTag
          width={0.4 * width}
          height={50}
          borderRadius={20}
          backgroundColor={color.secondary}
          color={color.lightGrey}
          label="Guide du vendeur"
          margin={10}
          fontSize={18}
          onPress={() => props.navigation.navigate("Guide vente")}
        />
      </View>

      <View style={styles.bandesContainer}>
        <Strip
          titre="Mon annonce"
          onTouched={() => props.navigation.navigate("Mon annonce")}
          style={styles.strip}
        />
        <Strip
          titre="Mes transactions"
          onTouched={() => props.navigation.navigate("Mes transactions")}
          style={styles.strip}
        />
        <Strip
          titre="Informations personnelles"
          onTouched={() => props.navigation.navigate("Mes infos perso")}
          style={styles.strip}
        />

        <Strip
          titre="Informations pratiques"
          onTouched={() => props.navigation.navigate("Infos pratiques")}
          style={styles.strip}
        />
      </View>
      <TouchableOpacity style={{ paddingBottom: 20 }} onPress={context.delete}>
        <Text style={styles.logout}>Me déconnecter</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#ECEEF2",
  },
  cubesContainer: {
    flexDirection: "row",
    flex: 6,
    justifyContent: "space-evenly",
  },
  bandesContainer: {
    flex: 10,
    justifyContent: "space-evenly",
    paddingVertical: 20,
    alignItems: "center",
  },
  logoutContainer: {
    marginBottom: 20,
    flex: 1,
  },
  entete: {
    flex: 4,
    margin: 20,
  },
  logout: {
    fontSize: 15,
    fontWeight: "300",
    lineHeight: 16,
    textDecorationLine: "underline",
    color: "#000000",
    fontFamily: "InriaSans",
    textAlign: "center",
    fontStyle: "italic",
  },
  strip: {
    backgroundColor: "white",
  },
});
