import React, { useState } from "react";
import { View, Text, StyleSheet, Vibration, Modal } from "react-native";
import color from "../../../style/color";
import MainButton from "../../../Components/common/MainButton";
import GreyButton from "../../../Components/common/GreyButton";
import Subtitle from "../../../Components/common/Subtitle";

// touches.touchHistory.numberActiveTouches = nb de doigts sur l'écran

const forceTouchScreenTest = ({ props, route, navigation }) => {
  const countTest = route.params.countTest;
  console.log(countTest);
  const [modalOutVisible, setModalOutVisible] = useState(false);
  const [success, setSuccess] = useState(false);
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
                navigation.navigate(
                  "haptic",
                  success
                    ? {
                      countTest: { ...countTest, "3DTouch": 1 },

                    }
                    : {
                      countTest: { ...countTest, "3DTouch": 0 },
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

      <Text style={styles.txt}>Appuyez fort sur le carré</Text>

      <View
        onStartShouldSetResponder={() => true}
        onResponderMove={(event) => {
          if (event.nativeEvent.force === 1) {
            setSuccess(true), Vibration.vibrate(), setModalOutVisible(true);
          }
        }}
        style={styles.box}
      />
      <GreyButton
        style={{ margin: 20, width: 200 }}
        title="Ça ne marche pas"
        onPress={() => {
          setModalOutVisible(true);
        }}
      />
    </View>
  );
};

export default forceTouchScreenTest;

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
    borderRadius: 5,
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
