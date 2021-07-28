import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Modal,
} from "react-native";
import { Accelerometer } from "expo-sensors";
import MainButton from "../../../Components/common/MainButton";
import Subtitle from "../../../Components/common/Subtitle";

const AccelerometerTest2 = ({ props, route, navigation }) => {
  const countTest = route.params.countTest;
  // console.log(countTest);
  const [modalOutVisible, setModalOutVisible] = useState(false);
  const [modalTransition, setModalTransition] = useState(false);
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState({});
  const [_subscription, set_subscription] = useState();
  const testFailed = useRef();

  useEffect(() => {
    if (_subscription) {
      _unsubscribe();
    } else {
      _subscribe();
    }
  }, []);

  // useEffect(() => {
  //   return () => {
  //     _unsubscribe();
  //   };
  // }, []);

  Accelerometer.setUpdateInterval(200);

  const _subscribe = () => {
    set_subscription(
      Accelerometer.addListener((accelerometerData) => {
        setData((prevData) => {
          testFailed.current =
            prevData.x === accelerometerData.x &&
            prevData.y === accelerometerData.y &&
            prevData.z === accelerometerData.z;
          console.log("testFailed=", testFailed.current);

          return accelerometerData;
        });
      })
    );
  };

  const _unsubscribe = () => {
    _subscription && _subscription.remove();
    set_subscription(null);
  };

  let { x, y, z } = data;

  const round = (n) => {
    if (!n) {
      return 0;
    }
    return Math.floor(n * 100) / 100;
  };
  const resultHandler = () => {
    _unsubscribe(), setModalOutVisible(true);
  };
  console.log(round(x), round(y), round(z));

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
              text={
                testFailed.current === false
                  ? "Test réussi"
                  : "Mince..."
              }
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
                  Testons le gyroscope de votre téléphone
                </Text>
              }
            />
            <MainButton
              onPress={() => {
                navigation.navigate("GyroscopeTest2", {
                  countTest: { ...countTest, "Accéléromètre": testFailed.current === false ? 1 : 0 },

                }),
                  setModalTransition(false);
              }}
              title={"C'est parti !"}
              style={{ width: 100, height: 50, borderRadius: 10 }}
            />
          </View>
        </View>
      </Modal>

      <Text style={styles.title}>
        Faites bouger votre téléphone dans l'espace
      </Text>
      {/* <Text style={styles.text}>
        Position de votre téléphone x: {round(x)} y: {round(y)} z: {round(z)}
      </Text> */}

      <View style={styles.gif}>
        <Image style={{ height: "60 %", width: "60 %" }} source={require('../../../assets/diagnostic/accelemeter-interface.gif')} />
      </View>
      <View style={styles.buttonContainer}>
        <MainButton onPress={resultHandler} title="Stop" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 25,
    width: "100%",
    justifyContent: "space-around",
    backgroundColor: 'white'
  },
  title: {
    color: color.secondary,
    fontFamily: "AdventPro",
    fontSize: 25,
    textAlign: "center",
  },
  text: { fontFamily: "InriaSans", fontSize: 16 },
  gif: { justifyContent: "center", alignItems: "center" },

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
export default AccelerometerTest2;
