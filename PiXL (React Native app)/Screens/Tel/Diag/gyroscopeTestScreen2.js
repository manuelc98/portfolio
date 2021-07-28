import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Modal, Image } from "react-native";
import { Gyroscope } from "expo-sensors";
import MainButton from "../../../Components/common/MainButton";
import Subtitle from "../../../Components/common/Subtitle";

const GyroscopeTest2 = ({ props, route, navigation }) => {
  const countTest = route.params.countTest;
  const [data, setData] = useState({});
  const [modalOutVisible, setModalOutVisible] = useState(false);
  const [modalTransition, setModalTransition] = useState(false);
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

  Gyroscope.setUpdateInterval(200);

  const _subscribe = () => {
    set_subscription(
      Gyroscope.addListener((gyroscopeData) => {
        setData((prevData) => {
          testFailed.current =
            prevData.x === gyroscopeData.x &&
            prevData.y === gyroscopeData.y &&
            prevData.z === gyroscopeData.z;
          console.log("samePosition=", testFailed.current);
          console.log(prevData, gyroscopeData);

          return gyroscopeData;
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
                  : "Il semble y avoir un problème"
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
            <Subtitle style={{ marginBottom: 10 }} text="Test batterie" />
            <MainButton
              onPress={() => {
                navigation.navigate("battery", {
                  countTest: { ...countTest, "Gyroscope": testFailed.current === false ? 1 : 0 },

                }),
                  setModalTransition(false);
              }}
              title={"Continuer"}
              style={{ width: 150, height: 50, borderRadius: 10 }}
            />
          </View>
        </View>
      </Modal>
      <Text style={styles.title}>
        Effectuez un mouvement de rotation avec votre téléphone
      </Text>

      {/* <Text style={styles.text}>
        Niveau de rotation de votre téléphone x: {round(x)} y: {round(y)} z:
        {round(z)}
      </Text> */}
      <View style={styles.gif}>
        <Image style={{ height: "60 %", width: "60 %" }} source={require('../../../assets/diagnostic/gyroscope-interface.gif')} />
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
    backgroundColor: "white",
  },
  title: {
    color: color.secondary,
    fontFamily: "AdventPro",
    fontSize: 25,
    textAlign: "center",
  },
  gif: { justifyContent: "center", alignItems: "center" },
  text: { fontFamily: "InriaSans", fontSize: 16 },
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
export default GyroscopeTest2;
