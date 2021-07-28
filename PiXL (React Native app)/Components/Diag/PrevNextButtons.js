import React from "react";
import { View, StyleSheet } from "react-native";
import MainButton from "../common/MainButton.js";

const PrevNextButtons = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        ...props.containerStyle,
      }}
    >
      <MainButton
        onPress={props.onPrevious}
        title="Précédent"
        style={styles.prevButton}
      />
      <MainButton
        onPress={props.onNext}
        title="Suivant"
        {...props}
        style={styles.nextButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  prevButton: {
    height: 51,
    width: 120,
    marginTop: 20,
    backgroundColor: color.lightGrey,
    borderRadius: 5,
  },
  nextButton: {
    height: 51,
    width: 185,
    marginTop: 20,
    borderRadius: 5,
  },
});
export default PrevNextButtons;
