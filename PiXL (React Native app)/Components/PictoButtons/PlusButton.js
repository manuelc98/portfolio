import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
const plusPicto = require("../../assets/common/plusPicto.png");

const PlusButton = (props) => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Image source={plusPicto} />
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
export default PlusButton;
