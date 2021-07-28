import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import color from "../../style/color";

export default function Strip(props) {
  return (
    <TouchableOpacity
      style={[styles.bande, props.style]}
      onPress={() => props.onTouched()}
    >
      <Text style={styles.text}>{props.titre}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  bande: {
    backgroundColor: color.secondary,
    height: 51,
    width: 352,
    borderRadius: 5,
    justifyContent: "center",
    margin: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 19,
    fontFamily: "InriaSans",
    lineHeight: 23,
    color: color.secondary,
  },
});
