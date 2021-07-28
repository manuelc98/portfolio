import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Subtitle from "../../Components/common/Subtitle";

export default function Tag(props) {
  return (
    <View
      style={{
        width: props.width,
        height: props.height,
        borderRadius: props.borderRadius,
        backgroundColor: props.backgroundColor,
        alignItems: "center",
        justifyContent: "center",
        margin: props.margin,
      }}
    >
      <Subtitle
        style={{ fontSize: 12, color: props.color }}
        text={props.label}
      />
    </View>
  );
}
