import React from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Linking from "expo-linking";
const { width, height } = Dimensions.get("window");

const ImageCard = (props) => {
  return (
    <View style={[styles.cardView, props.style]}>
      <TouchableOpacity
        onPress={() => Linking.openURL(props.url)}
        style={[styles.touchable, props.style]}
      >
        <Image
          resizeMode="contain"
          style={styles.image}
          source={props.source}
        />
        <View style={styles.textView}>
          <Text style={styles.itemTitle}> {props.title}</Text>
          <Text style={styles.itemDescription}>{props.description}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    width: 0.9 * width,
    height: height / 6,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  touchable: {
    width: 0.9 * width,
    height: height / 6,
  },

  textView: {
    position: "absolute",
    bottom: 10,
    margin: 10,
    left: 5,
  },
  image: {
    width: 0.8 * width,
    height: 200,
    borderRadius: 10,
  },
  itemTitle: {
    color: "white",
    fontSize: 22,
    shadowColor: "#000",
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    marginBottom: 5,
    fontWeight: "bold",
    elevation: 5,
  },
  itemDescription: {
    color: "white",
    fontSize: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
  },
});

export default ImageCard;
