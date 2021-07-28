import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Subtitle from "../../Components/common/Subtitle";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Tag(props) {
  return (
    <TouchableOpacity
      style={{
        width: props.width,
        height: props.height,
        borderRadius: props.borderRadius,
        backgroundColor: props.backgroundColor,
        alignItems: "center",
        justifyContent: "center",
        margin: props.margin,
      }}
      {...props}
    >
      <Subtitle
        style={{ fontSize: props.fontSize, color: props.color }}
        text={props.label}
      />
    </TouchableOpacity>
  );
}
