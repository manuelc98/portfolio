import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
const minusPicto = require("../../assets/common/minusPicto.png");

const MinusButton = (props) => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Image source={minusPicto} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default MinusButton;
