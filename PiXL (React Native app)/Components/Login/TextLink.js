import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const TextLink = (props) => {
  const { container, text } = styles;
  return (
    <TouchableOpacity {...props} style={container}>
      <Text style={props.textStyle}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 5,
    marginBottom: 5,
  },
  text: {
    color: "#DCDCDC",
    fontFamily: "InriaSans-Italic",
    fontSize: 15,
    fontWeight: "300",
    textDecorationLine: "underline",
    paddingVertical: 15,
    textAlign: "center",
  },
});

export { TextLink };
