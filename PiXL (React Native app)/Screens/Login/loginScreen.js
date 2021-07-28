import React, { useState } from "react";
import { View, Text, Button, AsyncStorage, ScrollView } from "react-native";
import { TextLink, Loading } from "../../Components/Login";
import axios from "axios";
import deviceStorage from "../../deviceStorage";

import UserTextInput from "../../Components/Login/UserTextInput";
import Logo from "../../Components/common/Logo";
import color from "../../style/color.js";
import MainButton from "../../Components/common/MainButton";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const loginUser = () => {
    const saveKey = async (key, valueToSave) => {
      try {
        await AsyncStorage.setItem(key, valueToSave);
        console.log("key saved");
      } catch (error) {
        console.log("AsyncStorage Error: " + error.message);
      }
    };

    setLoading(true);

    axios
      .post("http://51.178.86.48:3000/user/sign_in", {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.data.id_token == undefined) {
          onLoginFail();
          setLoading(false);
        } else {
          saveKey("id_token", response.data.id_token);
          setTimeout(() => {
            props.newJWT(response.data.id_token);
          }, 1000);
          setLoading(false);
          console.log("connected with id_token", response.data.id_token);
          setError("");
        }
      })
      .catch((error) => {
        console.log(error);
        onLoginFail();
      });
  };
  const onLoginFail = () => {
    setError("Login Failed");
    setLoading(false);
  };
  const { container, titleText, textInput, errorTextStyle, textLink } = styles;
  return (
    <View style={container}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, backgroundColor: "white" }}
      >
        <Logo size={36} />
        <View style={{ flex: 1, justifyContent: "space-between" }}>
          <Text style={titleText}>Se connecter</Text>
          <View>
            <UserTextInput
              placeholder="user@email.com"
              title="Adresse e-mail"
              value={email}
              onChangeText={(input) => setEmail(input)}
              placeholderTextColor="#898989"
              screenType={true}
            />
            <UserTextInput
              secureTextEntry
              placeholder="*********"
              title="Mot de passe"
              value={password}
              onChangeText={(input) => setPassword(input)}
              placeholderTextColor="#898989"
              screenType={true}
            />
            <Text style={errorTextStyle}>{error}</Text>
          </View>

          <View>
            {!loading ? (
              <MainButton onPress={loginUser} title="Se connecter" />
            ) : (
              //
              <Loading size={"large"} />
            )}
            <TextLink
              textStyle={textLink}
              onPress={props.authSwitch}
              title="Pas de compte ? S'inscrire"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    paddingVertical: 25,
    paddingHorizontal: 25,
    width: "100%",
    backgroundColor: "#FEFEFE",
  },
  titleText: {
    fontFamily: "AdventPro",
    fontSize: 36,
    fontWeight: "normal",
    letterSpacing: 1.44,
    textTransform: "uppercase",
    paddingVertical: 30,
    color: color.secondary,
  },
  // textInput: {
  //   color: color.secondary,
  //   paddingTop: 4,
  //   paddingBottom: 0,
  //   borderColor: "#FAF1D9",
  // },
  errorTextStyle: {
    alignSelf: "center",
    fontSize: 18,
    color: "red",
  },
  textLink: {
    color: "#343434",
    fontFamily: "InriaSans-Italic",
    fontSize: 15,
    fontWeight: "300",
    textDecorationLine: "underline",
    paddingVertical: 15,
    textAlign: "center",
  },
};
export { Login };
