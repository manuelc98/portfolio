import React from "react";
import { View, StyleSheet, Image } from "react-native";

const EmptySquare = () => {
  return (
    <View>
      <Image
        style={styles.square}
        source={require("../../assets/square.png")}
      />
    </View>
  );
};

export default EmptySquare;

const styles = StyleSheet.create({
  square: { height: 50, width: 50 },
});
