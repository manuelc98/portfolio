import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function BandeAnnonceDemande(props) {
  return (
    <TouchableOpacity onPress={() => props.onTouched()} style={styles.bande}>
      <View style={styles.adContainer}>
        <View style={styles.infoContainer}>
          <Text>{props.pseudo}</Text>
          <Text>{props.time}</Text>
        </View>
        <View style={{ justifyContent: "center" }}>
          <Text style={{ fontSize: 20 }}>{props.price}</Text>
        </View>
        <View style={{ justifyContent: "center" }}>
          <Text style={{ fontSize: 20 }}>{props.status}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  bande: {
    backgroundColor: "#D0D6E3",
    marginHorizontal: 10,
    height: 100,
    shadowOpacity: 0.7,
    shadowColor: "black",
  },
  contentContainer: {
    flexDirection: "row",
  },
  adContainer: { flexDirection: "row", justifyContent: "space-around" },
  img: {
    borderRadius: 5,
    margin: 5,
    flex: 1,
    height: 90,
  },
  infoContainer: {
    justifyContent: "space-evenly",
    height: 100,
  },
});
