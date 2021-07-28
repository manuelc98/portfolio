import React, { useState } from "react";
import {
  View,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
  FlatList,
  ScrollView,
} from "react-native";
import { TextLink, Loading } from "../../Components/Login";
import axios from "axios";

import Logo from "../../Components/common/Logo";
import UserTextInput from "../../Components/Login/UserTextInput";
import BirthDatePicker from "../../Components/Login/BirthDatePicker";
import MainButton from "../../Components/common/MainButton";
import VerifyUserName from "../../Components/Login/VerifyUserName";
import color from "../../style/color.js";

let width = Dimensions.get("window").width;

const Registration = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");

  const registerUser = () => {
    const saveKey = async (key, valueToSave) => {
      try {
        await AsyncStorage.setItem(key, valueToSave);
        console.log("key saved");
      } catch (error) {
        console.log("AsyncStorage Error: " + error.message);
      }
    };

    setLoading(true);
    console.log("user registered with ", email, password, passwordConfirmation);

    axios({
      method: "post",
      url: "http://51.178.86.48:3000/user/sign_up",
      data: {
        email: email,
        password: password,
        passwordConfirmation: passwordConfirmation,
      },
    })
      .then((response) => {
        setLoading(false);
        setError("");
        console.log(response.data.id_token);
        saveKey("id_token", response.data.id_token);
        props.newJWT(response.data.id_token);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        onRegistrationFail();
      });
  };

  const onRegistrationFail = () => {
    setError("Registration Failed");
  };

  const formFields = [
    {
      id: "1",
      title: "Nom d'utilisateur",
      placeholder: "Exemple : Bobo38",
      onChangeText: (input) => setUserName(input),
      value: userName,
    },
    {
      id: "2",
      title: "Adresse e-mail",
      placeholder: "exemple@exemple.com",
      onChangeText: (input) => setEmail(input),
      value: email,
    },
    {
      id: "3",
      title: "Mot de passe",
      placeholder: "*********",
      onChangeText: (input) => setPassword(input),
      value: password,
      secure: true,
    },
    {
      id: "4",
      title: "Confirmez votre mot de passe",
      placeholder: "*********",
      onChangeText: (input) => setPasswordConfirmation(input),
      value: passwordConfirmation,
      secure: true,
    },
  ];

  const { container, titleText, errorTextStyle, textLink } = styles;
  return (
    <View style={styles.screen}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
        }}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View style={container}>
            <Logo size={36} />
            <View>
              <Text style={titleText}>Créer un compte</Text>

              <FlatList
                nestedScrollEnabled
                scrollEnabled={false}
                data={formFields}
                renderItem={({ item }) => (
                  <UserTextInput
                    title={item.title}
                    placeholder={item.placeholder}
                    onChangeText={item.onChangeText}
                    value={item.value}
                    secureTextEntry={item.secure}
                    placeholderTextColor="#DCDCDC"
                    screenType={false}
                  />
                )}
              />

              {/* <BirthDatePicker /> */}
            </View>
            <Text style={errorTextStyle}>{error}</Text>

            {!loading ? (
              <MainButton title="Créer un compte" onPress={registerUser} />
            ) : (
              // <Button onPress={registerUser} title="Créer un compte" />
              <Loading size={"large"} />
            )}
            <TextLink
              onPress={props.authSwitch}
              title="Déjà inscrit ? Se connecter"
              textStyle={textLink}
            />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: color.secondary,
  },
  container: {
    flex: 1,
    paddingVertical: 25,
    paddingHorizontal: 25,
    width: width,
    backgroundColor: color.secondary,
  },
  titleText: {
    fontFamily: "AdventPro",
    fontSize: 36,
    fontWeight: "normal",
    letterSpacing: 1.44,
    textTransform: "uppercase",
    paddingVertical: 30,
    color: "#FEFEFE",
  },

  errorTextStyle: {
    alignSelf: "center",
    fontSize: 18,
    color: "red",
  },
  textLink: {
    color: "#DCDCDC",
    fontFamily: "InriaSans-Italic",
    fontSize: 15,
    fontWeight: "300",
    textDecorationLine: "underline",
    paddingVertical: 15,
    textAlign: "center",
  },
});

export { Registration };
