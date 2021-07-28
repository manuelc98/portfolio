import React from "react";
import { View, Text, Dimensions } from "react-native";

import Color from "../../style/color.js";
let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;
const NumberBox = (props) => {
  return (
    <View
      style={{
        borderColor: color.secondary,
        borderWidth: 1,
        width: width / 2.7 + 22,
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Text
        style={{
          fontFamily: "InriaSans",
          fontSize: 14,
          color: color.secondary,
          ...props.styleLine1,
        }}
      >
        {props.line1}
      </Text>
      <Text
        style={{
          fontFamily: "AdventPro",
          fontSize: 18,
          color: color.darkYellow,
          ...props.styleLine2,
        }}
      >
        {props.line2}
      </Text>
    </View>
  );
};
export default NumberBox;
