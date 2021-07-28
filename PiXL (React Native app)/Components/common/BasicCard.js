import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function BasicCard(props) {
  return (
    <View style={{ alignItems: "center" }}>
      <View style={[props.style, styles.cardContainer]}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.content}>{props.content}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    shadowOpacity: 0.8,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 5,
    backgroundColor: "white",
    marginVertical: 10,
    maxWidth: "80%",
    shadowRadius: 20,
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.6,
    elevation: 5,
  },
  title: {
    fontWeight: "bold",
    color: "black",
    fontSize: 18,
    padding: 10,
  },
  content: {
    color: "black",
    fontSize: 16,
    padding: 10,
  },
});
