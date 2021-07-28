import React from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";

import Subtitle from "./Subtitle.js";
import Color from "../../style/color.js";

const InputBox = (props) => {
  return (
    <View style={{ ...styles.mainContainer, ...props.containerStyle }}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <Subtitle text={props.title} color={color.secondary} />
        <TextInput
          {...props}
          multiline={true}
          placeholderTextColor="#898989"
          style={{ paddingVertical: 10 }}
        />
      </KeyboardAvoidingView>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    borderColor: color.secondary,
    borderWidth: 1,
    width: "100%",
    paddingVertical: 5,
    paddingHorizontal: 18,
    justifyContent: "center",
  },
});

export default InputBox;
