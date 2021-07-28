import React from "react";
import { Image, StyleSheet } from "react-native";

const Dot = (props) => {
  return (
    <Image
      style={[styles.dot, { opacity: props.clef }]}
      source={{
        uri: "https://www.vhv.rs/file/max/36/366452_black-dot-png.jpg",
      }}
    />
  );
};

const styles = StyleSheet.create({
  dot: {
    height: 10,
    width: 10,
    borderRadius: 10,
    marginHorizontal: 20,
  },
});

export default Dot;
