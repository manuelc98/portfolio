import React from "react";
import { View, StyleSheet, Text, Platform } from "react-native";

import color from "../../../style/color";
import MainButton from "../../../Components/common/MainButton";

const AccueilDiag = ({ props, navigation }) => {
  return (
    <View style={styles.screenContainer}>
      <View style={{ flex: 6, marginTop: 50 }}>
        <Text style={styles.txt}>Testons votre téléphone !</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          padding: 20,
        }}
      >
        <MainButton
          onPress={() => navigation.navigate("tactile")}
          title="Commencer le diagnostic"
          style={{ width: "90%" }}
        />
      </View>
    </View>
  );
};

export default AccueilDiag;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  txt: {
    color: color.secondary,
    fontFamily: "AdventPro",
    fontSize: 50,
    textAlign: "center",
    padding: 20,
  },
  mainButton: {
    height: 51,
    width: 349,
    marginTop: 20,
  },
});
