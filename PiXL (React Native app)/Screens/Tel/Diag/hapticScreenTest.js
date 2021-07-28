import React, { useState } from "react";
import { View, Text, StyleSheet, Vibration, Modal } from "react-native";
import color from "../../../style/color";
import MainButton from "../../../Components/common/MainButton";
import Subtitle from "../../../Components/common/Subtitle";

const hapticScreenTest = ({ props, route, navigation }) => {
  const countTest = route.params.countTest;
  console.log(countTest);
  const [modalOutVisible, setModalOutVisible] = useState(false);
  const [modalTransition, setModalTransition] = useState(false);
  const [success, setSuccess] = useState(false);

  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: true,
  };

  return (
    <View style={styles.screenContainer}>
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
                setModalOutVisible(false), setModalTransition(true);
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
                  Observez le changement de luminosité
                </Text>
              }
            />
            <MainButton
              onPress={() => {
                navigation.navigate(
                  "BrightnessTest",
                  success
                    ? {
                      countTest: { ...countTest, "Vibration": 1 },
                    }
                    : {
                      countTest: { ...countTest, "Vibration": 0 },
                    }
                ),
                  setModalTransition(false);
              }}
              title={"C'est parti !"}
              style={{ width: 100, height: 50, borderRadius: 10 }}
            />
          </View>
        </View>
      </Modal>
      <View style={{ flex: 1 }}></View>
      <Text style={styles.txt}>
        Touchez les carrés, lequel vous renvoie une vibration ?
      </Text>

      <View style={styles.boxesContainer}>
        <View style={styles.testContainer}>
          <View style={styles.box} />
          <MainButton
            onPress={() => setModalOutVisible(true)}
            title="C'est moi !"
            style={{ height: 51, width: 105, margin: 10 }}
          />
        </View>
        <View style={styles.testContainer}>
          <View
            onStartShouldSetResponder={() => true}
            onResponderGrant={() => {
              Vibration.vibrate(100);
            }}
            style={styles.box}
          />
          <MainButton
            onPress={() => {
              setSuccess(true), setModalOutVisible(true);
            }}
            title="C'est moi !"
            style={{ height: 51, width: 105, margin: 10 }}
          />
        </View>
        <View style={styles.testContainer}>
          <View style={styles.box} />
          <MainButton
            onPress={() => setModalOutVisible(true)}
            title="C'est moi !"
            style={{ height: 51, width: 105, margin: 10 }}
          />
        </View>
      </View>
      <Text style={styles.txt}> Désactivez bien le mode silencieux</Text>
      <View style={{ flex: 1 }}></View>
    </View>
  );
};

export default hapticScreenTest;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    color: color.secondary,
    fontFamily: "AdventPro",
    fontSize: 25,
    textAlign: "center",
    marginVertical: 50,
    marginHorizontal: 20,
  },
  box: {
    backgroundColor: color.secondary,
    width: 100,
    height: 100,
    borderRadius: 5,
    margin: 10,
  },
  boxesContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flex: 1,
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
    height: 175,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
});
