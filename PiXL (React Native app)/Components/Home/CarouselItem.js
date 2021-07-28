import React from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const CarouselItem = ({ props, item }) => {
  return (
    <View style={styles.cardView}>
      <Image style={styles.image} source={require(item.url)} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width - 20,
    height: height / 3,
    backgroundColor: "white",
    margin: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },

  image: {
    width: width - 20,
    height: height / 3,
    borderRadius: 10,
  },
});

export default CarouselItem;
