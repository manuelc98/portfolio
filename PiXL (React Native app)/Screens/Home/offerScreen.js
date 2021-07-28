import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import Axios from "axios";
import { AppContext } from "../../App";
import {
  MainButton,
  InputBox,
  Subtitle,
  PriceInput,
} from "../../Components/common/";
import color from "../../style/color";
import NumberBox from "../../Components/common/NumberBox";
const locationPicto = require("../../assets/home/picto_localisation.png");

const offerScreen = (props) => {
  const context = useContext(AppContext);
  const { details } = props.route.params;
  const { diagnostic } = props.route.params;

  const [userInput, setUserInput] = useState("");
  const messageHandler = (value) => {
    setUserInput(value);
  };

  const createConv = () => {
    Axios.get(
      "http://51.178.86.48:3000/conversation/new_conversation/" +
        details.annonceid +
        "/" +
        context.uuid
    );
    Alert.alert(
      "Confirmation",
      "Félicitaiton, votre offre a bien été envoyée",
      [
        {
          text: "Super !",
          onPress: () => props.navigation.navigate("Recherche"),
        },
      ]
    );
  };

  const [priceInput, setPriceInput] = useState(details.price.toString());
  const minusHandler = () => {
    setPriceInput((prevState) => {
      let price = parseInt(prevState);
      let newPrice = price - 10;
      return price <= 1 ? "0" : newPrice.toString();
    });
  };
  const plusHandler = () => {
    setPriceInput((prevState) => {
      let price = parseInt(prevState);
      let newPrice = price + 10;
      return newPrice.toString();
    });
  };

  const {
    screenContainer,
    priceRecap,
    locationRecap,
    locationText,
    offerButton,
  } = styles;

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <SafeAreaView style={screenContainer}>
        <View style={screenContainer}>
          <View style={priceRecap}>
            <NumberBox
              line1="Prix demandé par le vendeur"
              line2={details.price + " €"}
              styleLine2={{ fontSize: 24 }}
            />
            <NumberBox
              line1="Prix du marché"
              line2="450€"
              styleLine2={{ fontSize: 24 }}
            />
          </View>

          <PriceInput
            containerStyle={{ flex: 1 }}
            minusHandler={minusHandler}
            onChangeText={(value) => {
              setPriceInput(value);
            }}
            value={priceInput}
            plusHandler={plusHandler}
          />

          <View style={locationRecap}>
            <Image source={locationPicto} />
            <Text style={locationText}>
              Localisation du vendeur: 75016 Paris
            </Text>
          </View>

          <InputBox
            containerStyle={{ flex: 3 }}
            title="Message au vendeur"
            placeholder="Indiquez ici vos disponibilités, justifiez votre offre. Gardez à l’esprit que plus vous renseignerez d’informations, plus votre offre sera susceptible d’être acceptée."
            onChangeText={messageHandler}
          />
        </View>
        <MainButton
          title="FAIRE OFFRE"
          onPress={() => createConv()}
          style={offerButton}
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
  priceRecap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    marginVertical: 35,
    flex: 2,
    width: "100%",
  },
  locationRecap: {
    marginTop: 35,
    marginBottom: 13,
    flexDirection: "row",
  },
  locationText: {
    fontFamily: "InriaSans",
    color: color.secondary,
    fontSize: 15,
  },
  offerButton: {
    width: "80%",
    alignSelf: "center",
    marginVertical: 20,
  },
});

export default offerScreen;
