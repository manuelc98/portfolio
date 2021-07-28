import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import color from "../../style/color.js";

const MainButton = (props) => {
  return (
    <TouchableHighlight
      {...props}
      style={{ ...styles.container, ...props.style }}
    >
      <Text style={styles.text}>{props.title}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.main,
    alignItems: "center",
    paddingVertical: 11.5,
    borderRadius: 5,
  },
  text: {
    fontFamily: "InriaSans-Bold",
    fontSize: 19,
    color: color.secondary,
    textAlign: "center",
  },
});
export default MainButton;
