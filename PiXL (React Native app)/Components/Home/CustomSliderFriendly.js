import React, { useState } from "react";
import { Slider, View, StyleSheet, Image, Dimensions } from "react-native";
import Subtitle from "../../Components/common/Subtitle";

const CustomSliderFriendly = (props) => {
  const width = Dimensions.get("window").width;
  const [value, setValue] = useState(false);
  return (
    <View
      style={{
        alignItems: "center",
        marginRight: 0.05 * width,
        marginLeft: 0.05 * width,
      }}
    >
      <Subtitle text={props.title} style={{ fontSize: 18 }} />
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            height: 50,
            width: 80,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={props.img1}
            style={{ height: 20, width: 20, ...props.pictoStyle }}
          />
          <Subtitle style={{ fontSize: 16 }} text={props.subtitle1} />
        </View>
        <Slider
          {...props}
          style={{ width: 180, height: 40, ...props.sliderStyle }}
          minimumValue={props.min}
          maximumValue={props.max}
          step={props.stepValue}
          minimumTrackTintColor="#e7bd4f"
          maximumTrackTintColor="#071442"
          // onValueChange={(value) => setValue(value)}
        />
        <View
          style={{
            height: 50,
            width: 80,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ width: 20, height: 20, ...props.pictoStyle }}
            source={props.img2}
          />
          <Subtitle style={{ fontSize: 16 }} text={props.subtitle2} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    alignItems: "center",
  },
});

export default CustomSliderFriendly;
