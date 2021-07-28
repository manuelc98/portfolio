import React from "react";
import { View, StyleSheet, Dimensions, ScrollView, Image } from "react-native";
import ImageCard from "../../Components/common/ImageCard";
import Subtitle from "../../Components/common/Subtitle";
import MainButton from "../../Components/common/MainButton";
import GreyButton from "../../Components/common/GreyButton";
const { width, height } = Dimensions.get("window");
import * as Linking from "expo-linking";

const recycleScreen = (props) => {
  return (
    <ScrollView contentContainerStyle={styles.screenContainer}>
      <View style={styles.itemContainer}>
        <Subtitle style={{ fontSize: 24 }} text="ecosystem" />
        <ImageCard
          source={require("../../assets/jedonnemontelephoneScreen.png")}
          url="https://www.jedonnemontelephone.fr/"
          style={{ height: 200 }}
        />
        <Subtitle
          style={{ fontSize: 14, textAlign: "justify" }}
          text="Valorisez votre téléphone en ayant un impact social et environnemental positif"
        />
      </View>
      <View style={styles.infoContainer}>
        <Image
          style={styles.okPicto}
          source={require("../../assets/common/okay_picto.png")}
        />
        <View style={{ paddingLeft: 10, marginBottom: 10 }}>
          <Subtitle
            style={{ fontSize: 16, textAlign: "justify" }}
            text="Envoi simple et gratuit par la Poste avec une étiquette pré-affranchie"
          />
        </View>
      </View>

      <View style={styles.infoContainer}>
        <Image
          style={styles.okPicto}
          source={require("../../assets/common/okay_picto.png")}
        />
        <View style={{ paddingLeft: 10, marginBottom: 10 }}>
          <Subtitle
            style={{ fontSize: 16, textAlign: "justify" }}
            text="Remise en état aux Ateliers du Bocage d'Emmaus employant des personnes en réinsertion"
          />
        </View>
      </View>

      <View style={styles.infoContainer}>
        <Image
          style={styles.okPicto}
          source={require("../../assets/common/okay_picto.png")}
        />
        <View style={{ paddingLeft: 10, marginBottom: 10 }}>
          <Subtitle
            style={{ fontSize: 16, textAlign: "justify" }}
            text="Ou recyclage chez un partenaire d‛ecosystem, pour y être dépollué et recyclé sous forme de nouvelles matières premières qui serviront à fabriquer de nouveaux équipements et objets."
          />
        </View>
      </View>
      <View
        style={{
          marginLeft: 0.1 * width,
          marginRight: 0.1 * width,
          width: 0.8 * width,
          paddingTop: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <MainButton
          style={{ width: 0.25 * width, height: 51, padding: 10, backgroundColor: color.lightGrey }}
          title="Retour"
          onPress={() => props.navigation.goBack()}
        />
        <MainButton
          style={{ width: 0.5 * width, height: 51, padding: 10 }}
          title="Recycler"
          onPress={() => Linking.openURL("https://www.jedonnemontelephone.fr/")}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingLeft: 0.1 * width,
    paddingRight: 0.1 * width,
    paddingTop: 0.05 * height,
  },
  touchable: {
    width: 300,
    height: 200,
  },
  itemContainer: {
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    flexDirection: "row",
  },
  okPicto: {
    height: 20,
    width: 20,
    borderRadius: 10,
    marginTop: 8,
  },
});

export default recycleScreen;
