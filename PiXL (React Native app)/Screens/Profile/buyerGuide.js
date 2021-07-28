import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import color from "../../style/color";
import { ScrollView } from "react-native-gesture-handler";
import Subtitle from "../../Components/common/Subtitle";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const buyerGuide = (props) => {
  return (
    <View style={styles.screenContainer}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
        }}
      >
        <View style={styles.entete}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Image
              style={{
                width: 30,
                height: 30,
              }}
              source={require("../../assets/common/return_grey_picto.png")}
            />
          </TouchableOpacity>
          <Text style={styles.subtitle}>PiXL</Text>
          <Text style={styles.bigtext}>Guide de l'acheteur</Text>
          <Text style={styles.subtitle}>
            Pourquoi vous trouverez la bonne affaire sur PiXL
          </Text>
          <View style={{ alignItems: "center", paddingTop: 10 }}>
            <View style={styles.sep} />
          </View>
        </View>
        <View style={styles.fullView}>
          <View style={styles.box}>
            <View style={styles.title}>
              <Subtitle
                style={{ fontFamily: "HammersmithOne" }}
                color={color.secondary}
                text="Pas de mauvaises surprises"
              />
            </View>
            <View style={styles.fact}>
              <Image
                style={styles.smallpicto}
                source={require("../../assets/buyerGuide/diagnostic.png")}
              />
              <View style={styles.subtitleContainer}>
                <Subtitle
                  style={styles.text}
                  text="Un diagnostic complet et obligatoire garantit l'état fonctionnel des téléphones"
                />
              </View>
            </View>
            <View style={styles.fact}>
              <Image
                style={styles.smallpicto}
                source={require("../../assets/buyerGuide/AI.png")}
              />
              <View style={styles.subtitleContainer}>
                <Subtitle
                  style={styles.text}
                  text="Notre intelligence artificielle filtre les téléphones en très mauvais état physique"
                />
              </View>
            </View>
          </View>
          <View style={{ alignItems: "center", paddingTop: 10 }}>
            <View style={styles.lightSep} />
          </View>
          <View style={styles.box}>
            <View style={styles.title}>
              <Subtitle
                style={{ fontFamily: "HammersmithOne" }}
                color={color.secondary}
                text="Le prix juste"
              />
            </View>
            <View style={styles.fact}>
              <Image
                style={styles.smallpicto}
                source={require("../../assets/buyerGuide/save_money.png")}
              />
              <View style={styles.subtitleContainer}>
                <Subtitle
                  style={styles.text}
                  text="Payez le prix juste grâce à nos indicateurs et la recommendation de prix"
                />
              </View>
            </View>
            <View style={styles.fact}>
              <Image
                style={styles.smallpicto}
                source={require("../../assets/buyerGuide/tresor.png")}
              />
              <View style={styles.subtitleContainer}>
                <Subtitle
                  style={styles.text}
                  text="Dénichez les meilleures affaires, des accessoires uniques et négociez avec les vendeurs"
                />
              </View>
            </View>
          </View>
          <View style={{ alignItems: "center", paddingTop: 10 }}>
            <View style={styles.lightSep} />
          </View>
          <View style={styles.box}>
            <View style={styles.title}>
              <Subtitle
                style={{ fontFamily: "HammersmithOne" }}
                color={color.secondary}
                text="Sécurité et confiance"
              />
            </View>
            <View style={styles.fact}>
              <Image
                style={styles.smallpicto}
                source={require("../../assets/buyerGuide/lock.png")}
              />
              <View style={styles.subtitleContainer}>
                <Subtitle
                  style={styles.text}
                  text="Vous êtes sûrs de recevoir le bon téléphone : nous identifions l'IMEI afin de vous le garantir"
                />
              </View>
            </View>
            <View style={styles.fact}>
              <Image
                style={styles.smallpicto}
                source={require("../../assets/buyerGuide/secure_payment.png")}
              />
              <View style={styles.subtitleContainer}>
                <Subtitle
                  style={styles.text}
                  text="Un paiement sécurisé : l’argent transite sur notre plateforme et n’est libéré qu’une fois le téléphone reçu et que vous confirmez qu’il est conforme à vos attentes."
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default buyerGuide;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: color.lightGrey,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 0.05 * height,
  },
  entete: {
    justifyContent: "space-evenly",
    backgroundColor: color.lightGrey,
    paddingBottom: 20,
    height: 300,
  },
  subtitle: {
    fontFamily: "MontserratLight",
    fontSize: 21,
    color: color.secondary,
    textAlign: "center",
  },
  subtitleContainer: { paddingLeft: 20, paddingRight: 0.1 * width },
  bigtext: {
    fontFamily: "HammersmithOne",
    fontSize: 60,
    textTransform: "uppercase",
    color: color.secondary,
    textAlign: "center",
    lineHeight: 60,
  },
  fullView: {
    width: width,
  },
  smallpicto: {
    height: 40,
    width: 40,
  },
  title: {
    flexDirection: "row",
    paddingLeft: 0.05 * width,
    paddingRight: 0.05 * width,
    alignItems: "center",
    justifyContent: "center",
  },
  fact: {
    flexDirection: "row",
    paddingLeft: 0.1 * width,
    paddingRight: 0.1 * width,
    paddingTop: 10,
    alignItems: "center",
  },
  box: {
    paddingTop: 10,
  },
  text: {
    fontSize: 16,
    fontFamily: "MontserratLight",
    textAlign: "justify",
    color: color.secondary,
  },
  sep: {
    height: 2,
    width: 0.8 * width,
    backgroundColor: color.secondary,
  },
  lightSep: {
    height: 1,
    width: 0.8 * width,
    backgroundColor: color.secondary,
    opacity: 0.3,
  },
});
