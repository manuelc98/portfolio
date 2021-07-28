import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
const picto = require("../../assets/common/question_picto.png");

const QuestionButton = (props) => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Image source={picto} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default QuestionButton;
