import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

import DropdownMenu from "../../Components/Home/DropdownMenu";
import CaracHideShow from "../../Components/Home/CaracHideShow";
import NumberBox from "../../Components/common/NumberBox";
import color from "../../style/color.js";
import MainButton from "../../Components/common/MainButton.js";
import { Ad } from "../../Components/Ads";

const detailsVente = [
  {
    id: "invoice",
    available: true,
    label: "Facture d'achat",
    pictoUri: require("../../assets/phoneAccessories/invoice.png"),
  },
  {
    id: "charger",
    available: true,
    label: "Chargeur",
    pictoUri: require("../../assets/phoneAccessories/charger.png"),
  },
  {
    id: "earPhones",
    available: false,
    label: "Écouteurs",
    pictoUri: require("../../assets/phoneAccessories/earPhones.png"),
  },

  {
    id: "phoneShell",
    available: false,
    label: "Coque de protection",
    pictoUri: require("../../assets/phoneAccessories/phoneShell.png"),
  },
  {
    id: "originalBox",
    available: true,
    label: "Boîtier d'origine",
    pictoUri: require("../../assets/phoneAccessories/originalBox.png"),
  },
  {
    id: "noAccessories",
    available: false,
    label: "Pas d'accessoires",
    pictoUri: require("../../assets/phoneAccessories/noAccessories.png"),
  },
];

const adScreen = (props) => {
  const { details } = props.route.params;
  const { diagnostic } = props.route.params;
  const i = useRef(0);
  const [images, setImages] = useState([
    { id: i.current.toString(), image_url: details.image_url },
  ]);

  // const addImage = () => {
  //   i.current = i.current + 1;
  //   setImages((prevState) => [
  //     ...prevState,
  //     { id: i.current.toString(), image_url: details.image_url },
  //   ]);
  //   return;
  // };
  // addImage();
  console.log(details);

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView style={styles.screen}>
        <Ad
          imageArray={images}
          adTitle={details.title.toUpperCase()}
          adSubtitle={
            diagnostic.data.capacity +
            " - " +
            diagnostic.data.color.toLowerCase()
          }
          firstPrice={details.price}
          averageCondition={details.rating}
          accessories={detailsVente}
          description={details.desc}
        />

        <DropdownMenu
          title="Détails de vente"
          body="Base de donnée en construction"
        />
        <DropdownMenu
          title="Caractéristiques techniques"
          body="Base de donnée en construction"
        />
      </ScrollView>
      <View style={styles.bottomAction}>
        <View style={styles.favButton}>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: color.main,
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 11.5,
              }}
            >
              <Text
                style={{
                  fontFamily: "InriaSans-Bold",
                  fontSize: 19,
                  color: color.secondary,
                }}
              >
                Favoris
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.offerButton}>
          <MainButton
            title="Faire offre"
            onPress={() =>
              props.navigation.navigate("Offre", {
                details: details,
                diagnostic: diagnostic,
              })
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
  },
  top: {
    flexDirection: "row",
    marginTop: 30,
    marginHorizontal: 15,
    flex: 1,
  },
  top1: {
    flexDirection: "row",
    marginTop: 10,
    marginHorizontal: 15,
    flex: 1,
  },

  announce: { marginTop: 17 },

  header1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginTop: 10,
  },
  adTitle: {
    fontSize: 30,
    fontWeight: "700",
    fontFamily: "AdventPro",
    flex: 1,
    color: color.secondary,
  },
  adPrice: {
    fontSize: 22,
    fontWeight: "400",
  },
  adPriceWithSell: { fontSize: 20, fontWeight: "300", color: "green" },
  topWindow: {
    borderColor: color.secondary,
    borderWidth: 1,
    paddingBottom: 25,
    backgroundColor: "white",
  },
  photo: {
    backgroundColor: "white",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  adPicture: {},
  description: {
    borderColor: "black",
    backgroundColor: "white",
    margin: 10,
  },
  diagnostic: {
    borderColor: "black",
    backgroundColor: "white",
    margin: 10,
  },
  sellDetails: {
    borderColor: "black",
    backgroundColor: "white",
    margin: 10,
  },
  bottomAction: {
    flexDirection: "row",
    margin: 10,
  },
  favButton: {
    flex: 1,
    marginRight: 10,
  },
  offerButton: {
    flex: 3,
  },
});

export default adScreen;
