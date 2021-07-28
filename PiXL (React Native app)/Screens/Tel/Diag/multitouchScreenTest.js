import React, { useState } from "react";
import { View, Text, StyleSheet, Alert, Modal } from "react-native";
import color from "../../../style/color";
import GreyButton from "../../../Components/common/GreyButton";
import Subtitle from "../../../Components/common/Subtitle";
import MainButton from "../../../Components/common/MainButton";
// touches.touchHistory.numberActiveTouches = nb de doigts sur l'écran

const multitouchScreenTest = ({ props, route, navigation }) => {
  const [modalOutVisible, setModalOutVisible] = useState(false);
  const [testFailed, setTestFailed] = useState(false);
  const [multitouched, setMultitouched] = useState(false);
  const countTest = route.params.countTest;
  console.log(countTest);
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
              text={multitouched ? "Test réussi" : "Mince... "}
            />
            <MainButton
              onPress={() => {
                Platform.OS === "ios"
                  ? navigation.navigate(
                    "3DTouch",
                    testFailed
                      ? {
                        countTest: { ...countTest, "Multitouch": 0 },
                      }
                      : {
                        countTest: { ...countTest, "Multitouch": 1 },
                      }
                  )
                  : navigation.navigate(
                    "haptic",
                    testFailed
                      ? {
                        countTest: { ...countTest, "Multitouch": 0 },
                      }
                      : {
                        countTest: { ...countTest, "Multitouch": 1 },
                      }
                  ),
                  setModalOutVisible(false);
              }}
              title={"Continuer"}
              style={{ width: 100, height: 50, borderRadius: 10 }}
            />
          </View>
        </View>
      </Modal>
      <Text style={styles.txt}>Touchez le carré avec 2 doigts</Text>

      <View
        onStartShouldSetResponder={() => true}
        onResponderStart={(event) => {
          if (event.touchHistory.numberActiveTouches >= 2) {
            setMultitouched(true);
          }
        }}
        onResponderRelease={() => {
          if (multitouched) {
            setModalOutVisible(true);
            /* Alert.alert(
              "Test du multitouch",
              "Réussi",
              [
                {
                  text: "Continuer",
                  onPress: () =>
                    Platform.OS === "ios"
                      ? navigation.navigate("3DTouch", {
                          countTest: countTest.concat([["Multitouch", 1]]),
                        })
                      : navigation.navigate("haptic", {
                          countTest: countTest.concat([["Multitouch", 1]]),
                        }),
                },
              ],
              { cancelable: false }
            );*/
          }
        }}
        style={styles.box}
      />
      <GreyButton
        title="Ça ne marche pas"
        onPress={() => {
          setTestFailed(true), setModalOutVisible(true);
        }}
        style={{ margin: 20, width: 200 }}
      />
    </View>
  );
};

export default multitouchScreenTest;

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
  },
  box: {
    backgroundColor: color.main,
    width: 200,
    height: 200,
    borderRadius: 20,
    margin: 20,
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
