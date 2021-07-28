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
              source={require("../../assets/common/return_lightGrey_picto.png")}
            />
          </TouchableOpacity>
          <Text style={styles.subtitle}>PiXL</Text>
          <Text style={styles.bigtext}>Guide du vendeur</Text>
          <Text style={styles.subtitle}>
            Nos conseils pour que votre vente se déroule à merveille
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
                color={color.lightGrey}
                text="Soignez votre annonce"
              />
            </View>
            <View style={styles.fact}>
              <Image
                style={styles.smallpicto}
                source={require("../../assets/sellerGuide/flash.png")}
              />
              <View style={styles.subtitleContainer}>
                <Subtitle
                  style={styles.text}
                  text="Prenez des photos simples et bien cadrées avec une bonne luminosité pour augmenter vos chances de ventes."
                />
              </View>
            </View>
            <View style={styles.fact}>
              <Image
                style={styles.smallpicto}
                source={require("../../assets/sellerGuide/idea.png")}
              />
              <View style={styles.subtitleContainer}>
                <Subtitle
                  style={styles.text}
                  text="Dites leur pourquoi vous vendez votre téléphone, ajoutez vos accessoires et mettez les en avant pour vous différencier"
                />
              </View>
            </View>
            <View style={styles.fact}>
              <Image
                style={styles.smallpicto}
                source={require("../../assets/sellerGuide/price.png")}
              />
              <View style={styles.subtitleContainer}>
                <Subtitle
                  style={styles.text}
                  text="Appuyez-vous sur la recommandation de prix pour être le plus compétitif possible et ajustez en fonction des accessoires que vous ajoutez."
                />
              </View>
            </View>
            <View style={styles.fact}>
              <Image
                style={styles.smallpicto}
                source={require("../../assets/sellerGuide/rocket.png")}
              />
              <View style={styles.subtitleContainer}>
                <Subtitle
                  style={styles.text}
                  text="Utilisez nos services de mise en avant si vous voulez vendre rapidement !"
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
                color={color.lightGrey}
                text="Expédiez"
              />
            </View>
            <View style={styles.fact}>
              <Image
                style={styles.smallpicto}
                source={require("../../assets/sellerGuide/checklist.png")}
              />
              <View style={styles.subtitleContainer}>
                <Subtitle
                  style={styles.text}
                  text="Félicitations pour votre vente ! Vous n'avez plus qu'à suivre les étapes indiquées dans le mail pour l'envoi."
                />
              </View>
            </View>
            <View style={styles.fact}>
              <Image
                style={styles.smallpicto}
                source={require("../../assets/sellerGuide/fragile.png")}
              />
              <View style={styles.subtitleContainer}>
                <Subtitle
                  style={styles.text}
                  text="Protégez bien votre envoi : ajoutez du papier bulle, du polystyrène, du papier… afin de ne laisser aucun espace libre puis expédiez."
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
                color={color.lightGrey}
                text="Encaissez"
              />
            </View>
            <View style={styles.fact}>
              <Image
                style={styles.smallpicto}
                source={require("../../assets/sellerGuide/earn.png")}
              />
              <View style={styles.subtitleContainer}>
                <Subtitle
                  style={styles.text}
                  text="Vous n’avez plus qu’à attendre la bonne réception de l’acheteur et l’argent est versé sur votre compte !"
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
    backgroundColor: color.secondary,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 0.05 * height,
  },
  entete: {
    justifyContent: "space-evenly",
    backgroundColor: color.secondary,
    paddingBottom: 20,
    height: 300,
  },
  subtitle: {
    fontFamily: "MontserratLight",
    fontSize: 21,
    color: color.lightGrey,
    textAlign: "center",
  },
  subtitleContainer: { paddingLeft: 20, paddingRight: 0.1 * width },
  bigtext: {
    fontFamily: "HammersmithOne",
    fontSize: 60,
    textTransform: "uppercase",
    color: color.lightGrey,
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
    color: color.lightGrey,
  },
  sep: {
    height: 2,
    width: 0.8 * width,
    backgroundColor: color.lightGrey,
  },
  lightSep: {
    height: 1,
    width: 0.8 * width,
    backgroundColor: color.lightGrey,
    opacity: 0.3,
  },
});
