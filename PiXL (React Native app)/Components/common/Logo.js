import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import color from "../../style/color.js";

const Logo = (props) => {
  const size = props.size;
  return (
    <TouchableHighlight>
      <Text
        style={{
          color: color.main,
          fontFamily: "AdventPro",
          fontWeight: "500",
          paddingVertical: 15,
          textAlign: "left",
          fontSize: size,
          letterSpacing: size * 0.13,
        }}
        {...props}
      >
        PiXL
      </Text>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    marginTop: 5,
    marginBottom: 5,
  },
  text: {
    color: color.main,
    fontFamily: "AdventPro",
    fontWeight: "500",
    paddingVertical: 15,
    textAlign: "center",
  },
});

export default Logo;
