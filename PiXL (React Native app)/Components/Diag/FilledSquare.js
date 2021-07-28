import React from "react";
import { View, StyleSheet, Image } from "react-native";

const FilledSquare = () => {
  return (
    <View>
      <Image
        style={styles.square}
        source={require("../../assets/filledSquare.png")}
      />
    </View>
  );
};

export default FilledSquare;

const styles = StyleSheet.create({
  square: { height: 50, width: 50 },
});
