import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import color from "../../style/color.js";

const UserTextInput = (props) => {
  const {
    container,
    titleContainer,
    titleR,
    inputContainerR,
    titleL,
    inputContainerL,
    errorMessage,
  } = styles;

  return (
    <View style={container}>
      <View style={titleContainer}>
        <Text style={!props.screenType ? titleR : titleL}>{props.title}</Text>
      </View>

      <TextInput
        {...props}
        style={!props.screenType ? inputContainerR : inputContainerL}
      />

      <View>
        <Text style={errorMessage}>{props.verifHandler}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 0,
  },
  titleContainer: { paddingBottom: 2 },
  errorMessage: {
    color: "red",
  },
  titleR: {
    fontFamily: "InriaSans",
    fontSize: 19,
    color: color.main,
  },
  inputContainerR: {
    height: 40,
    borderColor: "#FAF1D9",
    borderBottomWidth: 1,
    width: "100%",
    paddingTop: 4,
    paddingBottom: 0,
    color: "#DCDCDC",
  },

  titleL: {
    fontFamily: "InriaSans",
    fontSize: 19,
    color: color.secondary,
  },
  inputContainerL: {
    height: 40,
    borderColor: color.secondary,
    borderBottomWidth: 1,
    width: "100%",
    paddingTop: 4,
    paddingBottom: 0,
  },
});
export default UserTextInput;
