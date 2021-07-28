import React, { useState } from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import InputComponent from "../../Components/Profile/Mes infos/InputComponent";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Title from "../../Components/common/Title";
import Subtitle from "../../Components/common/Subtitle";
import color from "../../style/color";
import MainButton from "../../Components/common/MainButton";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const infosPersoScreen = (props) => {
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState("");
  const [username, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [adress, setAdress] = useState("");
  const [adress2, setAdress2] = useState("");
  const [postal, setPostal] = useState("");
  const [city, setCity] = useState("");
  return (
    <View style={{ backgroundColor: "white" }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: "#FFFFFF",
          paddingLeft: "5%",
          paddingRight: "5%",
          paddingTop: 0.05 * height,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            style={{ width: 25, height: 25, paddingRight: 0.1 * width }}
            onPress={() => props.navigation.goBack()}
          >
            <Image
              style={{ width: 25, height: 25 }}
              source={require("../../assets/common/return_blue_picto.png")}
            />
          </TouchableOpacity>
          <Title text="Mes informations" />
        </View>
        <Subtitle style={{ fontSize: 30 }} text="Identité" />
        <InputComponent
          inputHandler={(input) => setName(input)}
          placeholder="Nom"
          color={color.secondary}
        />
        <InputComponent
          inputHandler={(input) => setFirstName(input)}
          placeholder="Prénom"
          color={color.secondary}
        />
        <InputComponent
          inputHandler={(input) => setAge(input)}
          placeholder="Age"
          color={color.secondary}
        />

        <View style={styles.account}>
          <Subtitle style={{ fontSize: 30 }} text="Mon compte" />
          <InputComponent
            inputHandler={(input) => setUserName(input)}
            placeholder="Nom d'utilisateur"
            color={color.secondary}
          />
          <InputComponent
            inputHandler={(input) => setPhone(input)}
            color={color.secondary}
            placeholder="Téléphone"
          />
          <InputComponent
            inputHandler={(input) => setMail(input)}
            color={color.secondary}
            placeholder="Mail"
          />
        </View>

        <View style={styles.adress}>
          <Subtitle style={{ fontSize: 30 }} text="Mon adresse" />
          <InputComponent
            inputHandler={(input) => setAdress(input)}
            color={color.secondary}
            placeholder="Adresse"
          />
          <InputComponent
            inputHandler={(input) => setAdress2(input)}
            color={color.secondary}
            placeholder="Complément d'adresse"
          />

          <InputComponent
            inputHandler={(input) => setPostal(input)}
            color={color.secondary}
            placeholder="Code postal"
          />
          <InputComponent
            inputHandler={(input) => setCity(input)}
            color={color.secondary}
            placeholder="Ville"
          />
        </View>
        <View style={{ alignItems: "center", marginBottom: 30 }}>
          <MainButton
            title="Sauvegarder"
            onPress={() => props.navigation.goBack()}
            style={{ width: "80%" }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default infosPersoScreen;

const styles = StyleSheet.create({
  id: {
    padding: 10,
    paddingVertical: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  modifyIcon: {
    height: 20,
    width: 20,
  },
  inputComponent: { flexDirection: "row" },
  account: {
    paddingVertical: 30,
  },
  adress: {
    paddingVertical: 30,
  },
});
