import React, { useEffect, useState } from "react";
import { Platform, View, Text, StyleSheet, Modal } from "react-native";
import * as Brightness from "expo-brightness";
import MainButton from "../../../Components/common/MainButton";
import Subtitle from "../../../Components/common/Subtitle";

const BrightnessTest = ({ props, route, navigation }) => {
  const rnd = Math.floor(Math.random() * 3);
  const countTest = route.params.countTest;
  console.log(countTest);
  const [modalOutVisible, setModalOutVisible] = useState(false);
  const [modalTransition, setModadlTransition] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Brightness.requestPermissionsAsync();
      const screen1 = await Brightness.getBrightnessAsync();
      console.log("luminosité de l'écran initiale = " + screen1);

      const system1 = await Brightness.getSystemBrightnessAsync();
      console.log("luminosité du système initiale = " + system1);

      const check = await Brightness.isUsingSystemBrightnessAsync();
      console.log(" check Android = " + check);

      if (status === "granted") {
        var i = 0;
        const ID = setInterval(() => {
          Brightness.setBrightnessAsync(i);
          i = i + 0.01;
          // console.log(i);
          if (i > 1) {
            clearInterval(ID);
          }
        }, 15);

        const reinitializeBrightness = async () => {
          const screen2 = await Brightness.getBrightnessAsync();
          console.log("luminosité de l'écran finale = " + screen2);
          const check2 = await Brightness.isUsingSystemBrightnessAsync();
          console.log(" check Android = " + check2);
          // Resetting brightness to initial value
          Platform.OS === "ios"
            ? Brightness.setBrightnessAsync(screen1)
            : Brightness.useSystemBrightnessAsync();
        };

        setTimeout(reinitializeBrightness, 2000);

        setTimeout(async () => {
          const screen3 = await Brightness.getBrightnessAsync();
          console.log("luminosité de l'écran réinitialisée = " + screen3);
          const system1 = await Brightness.getSystemBrightnessAsync();
          console.log("luminosité du système finale = " + system1);
          const check3 = await Brightness.isUsingSystemBrightnessAsync();
          console.log(" check Android = " + check3);
        }, 2100);
      }
    })();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Modal //Pop up de fin du test
        animationType="slide"
        transparent={true}
        visible={modalOutVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Subtitle
              style={{ marginBottom: 10 }}
              text={success ? "Test réussi" : "Mince... "}
            />
            <MainButton
              onPress={() => {
                setModalOutVisible(false), setModadlTransition(true);
              }}
              title={"Continuer"}
              style={{ width: 100, height: 50, borderRadius: 10 }}
            />
          </View>
        </View>
      </Modal>
      <Modal //Pop up de transition
        animationType="slide"
        transparent={false}
        visible={modalTransition}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Subtitle
              style={{ marginBottom: 10 }}
              text={
                <Text style={{ textAlign: "center" }}>
                  Des écrans de couleur vont défiler, vérifiez qu'il n'y a
                  aucune tâche ou pixel mort
                </Text>
              }
            />
            <MainButton
              onPress={() => {
                navigation.navigate(
                  "PixelsTest",
                  success
                    ? {
                      countTest: { ...countTest, "Luminosité": 1 },
                    }
                    : {
                      countTest: { ...countTest, "Luminosité": 0 },
                    }
                ),
                  setModadlTransition(false);
              }}
              title={"C'est parti !"}
              style={{ width: 100, height: 50, borderRadius: 10 }}
            />
          </View>
        </View>
      </Modal>
      <Text style={styles.txt}>
        Remarquez-vous un changement de luminosité ?
      </Text>
      <MainButton
        style={styles.mainButton}
        onPress={() => {
          setSuccess(true), setModalOutVisible(true);
        }}
        title="Croissant"
      />
      <MainButton
        style={styles.mainButton}
        onPress={() => setModalOutVisible(true)}
        title="Décroissant"
      />
      <MainButton
        style={styles.mainButton}
        onPress={() => setModalOutVisible(true)}
        title="Pas de changement"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  mainButton: {
    height: 51,
    width: 349,
    marginTop: 20,
  },
  txt: {
    color: color.secondary,
    fontFamily: "AdventPro",
    fontSize: 25,
    textAlign: "center",
    margin: 10,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 350,
    height: 200,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
});
export default BrightnessTest;
