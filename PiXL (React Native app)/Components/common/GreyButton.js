import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import color from "../../style/color.js";

const GreyButton = (props) => {
  return (
    <TouchableHighlight {...props} style={[styles.container, props.style]}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DCDCDC",
    alignItems: "center",
    paddingVertical: 11.5,
    borderRadius: 5,
  },
  text: {
    fontFamily: "InriaSans",
    lineHeight: 23,
    fontSize: 19,
    color: "#898989",
    textAlign: "center",
  },
});
export default GreyButton;
