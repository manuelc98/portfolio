import React from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import color from "../../style/color.js";

const Subtitle = (props) => {
  return (
    <TouchableWithoutFeedback {...props}>
      <View style={props.containerStyle}>
        <Text
          style={{
            color: props.color,
            fontFamily: "InriaSans",
            fontSize: 19,
            paddingVertical: 8,
            ...props.style,
          }}
        >
          {props.text}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Subtitle;
