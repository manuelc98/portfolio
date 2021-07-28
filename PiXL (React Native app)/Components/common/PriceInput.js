import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, Image } from "react-native";

import PlusButton from "../PictoButtons/PlusButton";
import MinusButton from "../PictoButtons/MinusButton";
import color from "../../style/color.js";

const PriceInput = (props) => {
  return (
    <View style={{ ...styles.mainContainer, ...props.containerStyle }}>
      <MinusButton onPress={props.minusHandler} />
      <TextInput
        {...props}
        placeholder="Prix"
        placeholderTextColor={color.lightGrey}
        keyboardType="numeric"
        textAlign="center"
        style={styles.inputContainer}
        maxLength={6}
      />
      <PlusButton onPress={props.plusHandler} />
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    padding: 10,
    borderColor: color.secondary,
    borderWidth: 1,
    justifyContent: "space-between",
    alignContent: "center",
    alignSelf: "center",
    alignItems: "center",
    width: "100%",
  },
  minusPicto: { justifyContent: "flex-start" },
  inputContainer: {
    //Text style
    marginHorizontal: 15,
    textAlign: "center",
    fontFamily: "AdventPro",
    fontSize: 36,
    color: color.darkYellow,
  },
});

export default PriceInput;
