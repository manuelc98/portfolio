import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as Device from "expo-device";

import MainButton from "../../Components/common/MainButton";
import GreyButton from "../../Components/common/GreyButton";
import BasicCard from "../../Components/common/BasicCard";
import Axios from "axios";
import { AppContext } from "../../App";
import { Subtitle } from "../../Components/common";
import color from "../../style/color";

const telScreen = ({ navigation, route }) => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [size, setSize] = useState("64Go");
  const [photoUri, setPhotoUri] = useState("");
  const context = React.useContext(AppContext);
  const [diag, setDiag] = useState(0);
  const [resultDiag, setResultDiag] = useState({});

  useEffect(() => {
    const isDiag = () => {
      Axios.get("http://51.178.86.48:3000/phones/is_diag/" + context.uuid).then(
        (res) => {
          if (res.data === "OK") {
            setDiag(1);
            Axios.get(
              "http://51.178.86.48:3000/phones/get_result/" + context.uuid
            ).then((res) => {
              setResultDiag(res.data);
              console.log(res.data);
            });
          } else setDiag(0);
        }
      );
    };
    isDiag();
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "flex-start",
        paddingTop: 40,
        backgroundColor: "white",
      }}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.pageTitle}>MON SMARTPHONE</Text>
      </View>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={{
            uri:
              "https://www.cdiscount.com/pdt2/6/6/2/1/700x700/app0190198792662/rw/apple-iphone-xs-256-go-or.jpg",
          }}
        />
      </View>
      <View style={styles.modelContainer}>
        <Subtitle
          text={Device.brand + " " + Device.modelName + " - " + size}
          color={color.secondary}
        />
      </View>

      <BasicCard
        content={
          <Text>
            Couleur : {"\n"} {"\n"}
            Taille de l'écran : {"\n"} {"\n"}
            Système d'exploitation : {Device.osName} {Device.osVersion}
          </Text>
        }
        title="Prix du marché : 400€"
        style={styles.card}
      />
      {diag === 1 ? (
        <View style={styles.buttonContainer}>
          <MainButton
            onPress={() => navigation.navigate("PhysicalTest")}
            title="Vendre"
            style={{ width: "45%", height: 51 }}
          />
          <GreyButton
            onPress={() => navigation.navigate("Accueil Diagnostic")}
            title="Tester"
            style={{ width: "45%", height: 51 }}
          />
        </View>
      ) : (
        <View style={styles.buttonContainer}>
          <GreyButton
            onPress={() => navigation.navigate("PhysicalTest")}
            title="Vendre"
            style={{ width: 105, height: 51 }}
          />
          <MainButton
            onPress={() => navigation.navigate("Accueil Diagnostic")}
            title="Tester"
            style={{ width: 105, height: 51 }}
          />
        </View>
      )}
      <View
        style={{
          flex: 1,
          marginTop: 10,
          marginBottom: 10,
          alignItems: "center",
        }}
      >
        <MainButton
          onPress={() => navigation.navigate("Recycle")}
          title="Valoriser mes vieux téléphones"
          style={{ width: "80%" }}
        />
      </View>
    </ScrollView>
  );
};

export default telScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: "10%",
    paddingRight: "10%",
    marginTop: 10,
    flex: 1,
  },
  img: {
    height: 221,
    width: 200,
    borderRadius: 30,
  },
  imgContainer: {
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { height: 2, width: 2 },
    shadowOpacity: 0.5,
    borderRadius: 10,
    flex: 2,
  },
  modelContainer: {
    alignItems: "center",
    flex: 1,
  },

  detailsContainer: {
    height: 100,
    borderColor: "black",
    borderWidth: 2,
    margin: 20,
    borderRadius: 5,
    flex: 4,
  },
  pageTitle: {
    fontFamily: "AdventPro",
    fontSize: 36,
    letterSpacing: 0.64,
    color: "#071442",
  },
  modelText: {
    fontFamily: "InriaSans",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 22,
    color: "#000000",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 1,
    marginTop: 10,
  },
  card: {
    width: 354,
    height: 186,
    marginTop: 20,
  },
});
