import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  SafeAreaView,
  Image,
  Dimensions,
} from "react-native";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

import DropdownMenu from "../../Components/Home/DropdownMenu";
import CaracHideShow from "../../Components/Home/CaracHideShow";
import color from "../../style/color.js";
import MainButton from "../../Components/common/MainButton.js";
import { TouchableOpacity } from "react-native-gesture-handler";

const argusScreenFinal = (props) => {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView style={styles.screen}>
        <View style={styles.top}>
          <View>
            <View style={styles.topWindow}>
              <View style={styles.photo}>
                <Image
                  source={require("../../assets/image24.png")}
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
          </View>
          <View style={{ marginLeft: 18, flex: 1 }}>
            <View>
              <Text style={styles.adTitle}>SAMSUNG GALAXY S9</Text>

              <Text
                style={{
                  fontSize: "InriaSans",
                  fontSize: 18,
                  color: color.secondary,
                  marginBottom: 14,
                }}
              >
                128Go - Violet
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
                Prix moyen actuel
              </Text>
              <Text
                style={{
                  fontFamily: "AdventPro",
                  fontSize: 36,
                  color: color.main,
                }}
              >
                369€
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
              padding: 15,
            }}
          >
            <Text
              style={{
                fontFamily: "InriaSans",
                fontSize: 14,
                color: color.secondary,
              }}
            >
              Date de sortie
            </Text>
            <Text
              style={{
                fontFamily: "AdventPro",
                fontSize: 18,
                color: color.main,
              }}
            >
              2017
            </Text>
          </View>
          <View
            style={{
              borderColor: color.secondary,
              borderWidth: 1,
              width: width / 2.7 + 22,
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 15,
            }}
          >
            <Text
              style={{
                fontFamily: "InriaSans",
                fontSize: 14,
                color: color.secondary,
              }}
            >
              Prix au lancement
            </Text>
            <Text
              style={{
                fontFamily: "AdventPro",
                fontSize: 18,
                color: color.main,
              }}
            >
              680€
            </Text>
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
              Top Facts
            </Text>
            <Text
              style={{
                fontFamily: "InriaSans",
                fontSize: 15,
                color: color.secondary,
                marginTop: 5,
              }}
            >
              - 71 % des téléphones sont revendus en moins de 48h !
            </Text>
            <Text
              style={{
                fontFamily: "InriaSans",
                fontSize: 15,
                color: color.secondary,
                marginTop: 5,
              }}
            >
              - Moins de 4% ont dû être réparés avant la vente
            </Text>
            <Text
              style={{
                fontFamily: "InriaSans",
                fontSize: 15,
                color: color.secondary,
                marginTop: 5,
              }}
            >
              - 42% sont encore sous garantie
            </Text>
          </View>
        </View>
        <View>
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
              Caractéristiques
            </Text>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../assets/image15.png")}
                style={{
                  height: height / 2.5,
                  width: width / 1.5,
                  resizeMode: "contain",
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "InriaSans",
                  fontSize: 15,
                  color: color.secondary,
                  marginTop: 5,
                }}
              >
                Stockage : 128Go
              </Text>
              <Text
                style={{
                  fontFamily: "InriaSans",
                  fontSize: 15,
                  color: color.secondary,
                  marginTop: 5,
                }}
              >
                APN: 12 Mpx
              </Text>
              <Text
                style={{
                  fontFamily: "InriaSans",
                  fontSize: 15,
                  color: color.secondary,
                  marginTop: 5,
                }}
              >
                Audio: 5.1 Dolby Atmos
              </Text>
              <MainButton
                title="Comparer mon téléphone"
                style={{ padding: 10, marginTop: 41 }}
              />
            </View>
          </View>
        </View>
        <View>
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
              Prévision de prix
            </Text>
            <View
              style={{
                flex: 1,
              }}
            >
              <Image
                source={require("../../assets/Graphique.png")}
                style={{
                  height: height / 2.2,
                  width: width / 1.2,
                  resizeMode: "contain",
                }}
              />
            </View>
          </View>
        </View>
        <MainButton
          title="Voir les annonces"
          style={{ padding: 15, margin: 15 }}
        />
      </ScrollView>
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
    marginTop: 15,
    marginLeft: 15,
    flex: 1,
    // justifyContent: "space-between",
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

export default argusScreenFinal;
