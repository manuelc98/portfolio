import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default function Entete(props) {
  return (
    <View style={[props.style, styles.enteteContainer]}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri:
              "http://www.marismith.com/wp-content/uploads/2014/07/facebook-profile-blank-face.jpeg",
          }}
          style={styles.pp}
        />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.profileName}>Bobo38</Text>
      </View>

      <View style={styles.loc}>
        <Image
          style={styles.picto}
          source={require("../../assets/profilePicto/picto_localisation.png")}
        />
      </View>
      <View style={styles.loctxt}>
        <Text style={styles.infosPersoTxt}>25 rue de la Pia 95016 Paris</Text>
      </View>

      <View style={styles.mobil}>
        <Image
          style={styles.picto}
          source={require("../../assets/profilePicto/picto-mobil.png")}
        />
      </View>
      <View style={styles.mobiltxt}>
        <Text style={styles.infosPersoTxt}>06 00 00 00 00</Text>
      </View>

      <View style={styles.mail}>
        <Image
          style={styles.picto}
          source={require("../../assets/profilePicto/picto-maim.png")}
        />
      </View>
      <View style={styles.mailtxt}>
        <Text style={styles.infosPersoTxt}>bobo38@gmail.com</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pp: {
    height: 75,
    width: 75,
    borderRadius: 50,
    position: "absolute",
    top: 23,
    left: 24,
  },

  imageContainer: {
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.3,
  },
  nameContainer: { position: "absolute", top: 23, left: 126 },
  profileName: {
    fontFamily: "AdventPro",
    fontWeight: "bold",
    fontSize: 30,
    letterSpacing: 0.64,
    color: "#B78400",
    lineHeight: 37,
    textTransform: "uppercase",
  },
  enteteContainer: {
    height: 202,
    width: 354,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 1, height: 1 },
    backgroundColor: "#FFFFFF",
  },
  picto: {
    width: 20,
    height: 20,
  },
  pictoContainer: {
    position: "absolute",
    top: 102,
    bottom: 19,
    right: 33,
    left: 125,
    width: 196,
    height: 82,
  },
  infosPersoTxt: {
    fontSize: 14,
    fontFamily: "InriaSans",
    fontWeight: "300",
    lineHeight: 17,
  },
  loc: {
    position: "absolute",
    top: 100,
    left: 126,
  },
  loctxt: {
    position: "absolute",
    top: 100,
    left: 156,
  },
  mobil: {
    position: "absolute",
    top: 130,
    left: 126,
  },
  mobiltxt: {
    position: "absolute",
    top: 130,
    left: 156,
  },
  mail: {
    position: "absolute",
    top: 160,
    left: 126,
  },
  mailtxt: {
    position: "absolute",
    top: 160,
    left: 156,
  },
});
