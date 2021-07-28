import React from "react";
import { Text, View } from "react-native";
import color from "../../style/color.js";

const YellowStrip = (props) => {
  return (
    <View
      style={{
        backgroundColor: color.lightYellow,
        paddingVertical: 15,
        ...props.style,
      }}
    >
      {props.children}
    </View>
  );
};

export default YellowStrip;
