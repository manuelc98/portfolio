import React from "react";
import { View } from "react-native";
import color from "../../style/color.js";

const SliderDots = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          boderColor: color.secondary,
          height: 15,
          width: 15,
          padding: 3,
          justifyContent: "center",
          alignItems: "center",
          margin: 5,
        }}
      >
        <View
          style={{
            backgroundColor: color.secondary,
            height: 8,
            width: 8,
          }}
        ></View>
      </View>
      <View
        style={{
          borderWidth: 1,
          boderColor: color.secondary,
          height: 15,
          width: 15,
          padding: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: color.secondary,
            height: 8,
            width: 8,
          }}
        ></View>
      </View>
    </View>
  );
};
export default SliderDots;
