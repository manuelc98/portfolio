import React from "react";
import { View, StyleSheet, Text, Dimensions, Image } from "react-native";

const GuideFact = (props) => {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  return (
    <View
      style={{
        width: width,
        height: props.height,
        backgroundColor: props.backgroundColor,
        justifyContent: "space-evenly",
        padding: 10,
      }}
    >
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Image
          source={props.source}
          style={{
            width: props.imgDim,
            height: props.imgDim,
          }}
        />
      </View>

      <Text
        style={{
          fontSize: 24,
          fontFamily: "HammersmithOne",
          textAlign: "center",
          textTransform: "uppercase",
          color: props.color,
        }}
      >
        {props.title}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontFamily: "HammersmithOne",
          textAlign: "center",
          textTransform: "uppercase",
          color: props.color,
        }}
      >
        {props.subtitle}
      </Text>
      <Text
        style={{
          fontSize: 13.5,
          fontFamily: "MontserratLight",
          textAlign: "justify",
          color: props.color,
        }}
      >
        {props.text}
      </Text>
    </View>
  );
};

export default GuideFact;
