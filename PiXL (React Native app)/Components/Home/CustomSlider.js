import React, { useState } from "react";
import { Slider, View, StyleSheet } from "react-native";
import Subtitle from "../../Components/common/Subtitle";

const CustomSlider = (props) => {
  const [value, setValue] = useState(0);
  return (
    <View style={styles.centeredView}>
      <Subtitle text={props.title} style={{ fontSize: 18 }} />
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Slider
          style={{ width: 180, height: 40 }}
          minimumValue={props.min}
          maximumValue={props.max}
          step={props.stepValue}
          minimumTrackTintColor="#e7bd4f"
          maximumTrackTintColor="#071442"
          onValueChange={(value) => setValue(value)}
        />
        <Subtitle text={JSON.stringify(value) + props.unit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    alignItems: "center",
  },
});

export default CustomSlider;
