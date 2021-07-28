import React from "react";
import { Text, View } from "react-native";
import color from "../../style/color.js";

const Title = (props) => {
  return (
    <View style={props.containerStyle}>
      <Text
        style={{
          fontFamily: "AdventPro",
          fontSize: 36,
          fontWeight: "normal",
          letterSpacing: 1.44,
          textTransform: "uppercase",
          paddingVertical: 30,
          color: props.color,
        }}
      >
        {props.text}
      </Text>
    </View>
  );
};

export default Title;
