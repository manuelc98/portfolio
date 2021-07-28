import React, { useState } from "react";
import { View, StyleSheet, PanResponder, Dimensions } from "react-native";
import color from "../../style/color";

const ResponsiveSquare = (props) => {
  const [col, setCol] = useState(color.main);
  return (
    <View
      onStartShouldSetResponder={(event) => console.log(event)}
      onResponderGrant={() => {
        setCol(color.secondary);
      }}
      onResponderMove={(event) => {
        return false;
      }}
      onResponderTerminationRequest={() => {
        true;
      }}
      style={[styles.square, { backgroundColor: col }]}
    />
  );
};

export default ResponsiveSquare;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  square: {
    height: 100,
    width: 100,
    borderWidth: 1,
    borderColor: "black",
  },
});
