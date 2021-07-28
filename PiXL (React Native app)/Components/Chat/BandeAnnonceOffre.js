import React from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function BandeAnnonceOffre(props) {
  return (
    <TouchableOpacity onPress={() => props.onTouched()} style={styles.bande}>
      <View style={styles.rowContainer}>
        <Image source={{ uri: props.url }} style={styles.img} />

        <View style={styles.infoContainer}>
          <View style={styles.pseudo}>
            <Text style={styles.pseudotxt}>{props.pseudo}</Text>
          </View>
          <View style={styles.price}>
            <Text style={styles.pricetxt}> {props.price + " €"} </Text>
          </View>
          <View style={styles.phone}>
            <Text style={styles.phonetxt}> {props.phone} </Text>
          </View>
          <View style={styles.bottom}>
            <View style={styles.time}>
              <Text style={styles.timetxt}> {props.time} </Text>
            </View>
            <View style={styles.status}>
              <Text style={styles.statustxt}> {props.status} </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  bande: {
    height: height / 8,
    width: "100%",
    marginHorizontal: 5,
    marginVertical: 10,
  },
  rowContainer: { flexDirection: "row" },
  img: { height: height / 8, width: height / 8 },
  infoContainer: {
    backgroundColor: "#FFFFFF",
    height: height / 8,
    width: 0.6 * width,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderRightWidth: 0.5,
    borderColor: "#071442",
    flexDirection: "row",
  },
  pseudo: {
    position: "absolute",
    top: 7,
    left: 9,
  },
  pseudotxt: {
    fontFamily: "InriaSans",
    fontSize: 19,
    color: "#071442",
  },
  price: {
    position: "absolute",
    top: 7,
    right: 6,
  },
  pricetxt: {
    fontFamily: "InriaSans",
    fontSize: 19,
    color: "#071442",
  },
  phone: {
    position: "absolute",
    top: 35,
    left: 9,
  },
  phonetxt: {
    fontFamily: "InriaSans",
    fontSize: 18,
    color: "#071442",
    fontWeight: "300",
  },
  time: { marginLeft: 7 },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "flex-end",
    width: "100%",
    alignItems: "center",
  },
  timetxt: {
    fontSize: 16,
    fontFamily: "InriaSans",
    color: "#E7BD4F",
  },
  status: {
    width: 86,
    height: 26,
    backgroundColor: "#DDE4FF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  statustxt: { fontSize: 14, color: "#071442", textAlign: "center" },
});
