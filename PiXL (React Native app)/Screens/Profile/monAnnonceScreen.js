import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

import DropdownMenu from "../../Components/Home/DropdownMenu.js";
import color from "../../style/color.js";
import MainButton from "../../Components/common/MainButton.js";
import Title from "../../Components/common/Title";

const ad = (props) => {
  // console.log(
  //   screenCondition,
  //   backCondition,
  //   additionalPhysicalInfo,
  //   invoice,
  //   charger,
  //   originalBox,
  //   phoneShell,
  //   price,
  //   description,
  //   images
  // );

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: "#FFFFFF",
          paddingLeft: "2.5%",
          paddingRight: "2.5%",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            style={{ width: 25, height: 25, paddingRight: 0.2 * width }}
            onPress={() => props.navigation.goBack()}
          >
            <Image
              style={{ width: 25, height: 25 }}
              source={require("../../assets/common/return_blue_picto.png")}
            />
          </TouchableOpacity>
          <Title text="Mon annonce" />
        </View>
        <View style={styles.top}>
          <View>
            <View style={styles.topWindow}>
              <View style={styles.photo}>
                <Image
                  source={{
                    uri:
                      "https://www.cdiscount.com/pdt2/6/6/2/1/700x700/app0190198792662/rw/apple-iphone-xs-256-go-or.jpg",
                  }}
                  style={{
                    height: height / 4,
                    width: width / 2.7,
                    resizeMode: "contain",
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    borderWidth: 1,
                    boderColor: color.secondary,
                    height: 15,
                    width: 15,
                    padding: 2,
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: color.secondary,
                      height: 10,
                      width: 10,
                    }}
                  ></View>
                </View>
                <View
                  style={{
                    borderWidth: 1,
                    boderColor: color.secondary,
                    height: 15,
                    width: 15,
                    padding: 2,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: color.secondary,
                      height: 10,
                      width: 10,
                    }}
                  ></View>
                </View>
              </View>
            </View>
            {/* <View>
              <CaracHideShow
                intitule="Caractéristiques"
                capacity={diagnostic.data.capacity}
                color={diagnostic.data.color}
                brand={diagnostic.data.brand}
                model={diagnostic.data.model}
              />
            </View> */}
          </View>
          <View style={{ marginLeft: 18, flex: 1 }}>
            <View>
              <Text style={styles.adTitle}>IPHONE XS MAX</Text>
              <Text
                style={{
                  fontFamily: "AdventPro",
                  fontSize: 24,
                  color: color.secondary,
                  marginBottom: 14,
                }}
              >
                DE BOBO38
              </Text>
              <Text
                style={{
                  fontSize: "InriaSans",
                  fontSize: 18,
                  color: color.secondary,
                  marginBottom: 14,
                }}
              >
                64Go - Argent
              </Text>
            </View>
            <View style={{ flexDirection: "row", flex: 1, marginBottom: 14 }}>
              <Image
                source={require("../../assets/Fleche_baisse_importante.png")}
                style={{ height: 31, width: 48, resizeMode: "contain" }}
              />
              <Text
                style={{
                  fontFamily: "InriaSans",
                  fontSize: 14,
                  color: color.main,
                  marginLeft: 6,
                  marginTop: 14,
                }}
              >
                Prix en baisse
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontFamily: "InriaSans",
                  fontSize: 14,
                  color: color.secondary,
                }}
              >
                Prix
              </Text>
              <Text
                style={{
                  fontFamily: "AdventPro",
                  fontSize: 36,
                  color: color.main,
                }}
              >
                400€
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.top1}>
          <View
            style={{
              borderColor: color.secondary,
              borderWidth: 1,
              width: width / 2.7 + 22,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "InriaSans",
                fontSize: 14,
                color: color.secondary,
              }}
            >
              Note
            </Text>
            <Text
              style={{
                fontFamily: "AdventPro",
                fontSize: 18,
                color: color.main,
              }}
            >
              9 / 10
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1, marginLeft: 15 }}></View>
          </View>
        </View>

        <View style={styles.announce}>
          <View
            style={{
              borderColor: color.secondary,
              borderWidth: 1,
              marginHorizontal: 15,
              padding: 13,
              marginBottom: 15,
            }}
          >
            <Text
              style={{
                fontFamily: "InriaSans-Bold",
                fontSize: 17,
                color: color.secondary,
              }}
            >
              Description
            </Text>
            <Text
              style={{
                fontFamily: "InriaSans",
                fontSize: 15,
                color: color.secondary,
                marginTop: 5,
              }}
            >
              Je vends cet Iphone quasi neuf car je compte m’acheter le nouveau.
              Il marche très bien et la batterie tiens encore très bien.
            </Text>
          </View>
          <View>
            <DropdownMenu
              title="Diagnostic"
              body="Base de donnée en construction"
            />
          </View>
          <View>
            <DropdownMenu
              title="Détails de vente"
              body="Base de donnée en construction"
            />
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <MainButton title="Modifier" style={{ width: "92.5%", height: 50 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "white",
    flex: 1,
  },
  top: {
    flexDirection: "row",
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

export default ad;
