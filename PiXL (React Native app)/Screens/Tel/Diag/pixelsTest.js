import React, { useState } from "react";
import { View, Text, Alert, StyleSheet, Modal } from "react-native";
import MainButton from "../../../Components/common/MainButton";
import Subtitle from "../../../Components/common/Subtitle";

const PixelsTest = ({ props, route, navigation }) => {
  const countTest = route.params.countTest;
  console.log(countTest);
  const [modalOutVisible, setModalOutVisible] = useState(false);
  const [modalTransition, setModalTransition] = useState(false);
  const [success, setSuccess] = useState(false);
  const [color, setColor] = useState("red");
  const [texte, setTexte] = useState("");
  const [ended, setEnded] = useState(false);

  setTimeout(() => {
    if (color === "red") {
      setColor("green");
    } else if (color === "green") {
      setColor("blue");
    } else if (color === "blue") {
      setColor("black");
    } else if (color === "black") {
      setColor("white");
    } else if (color === "white") {
      setTexte("Avez-vous remarqué des anomalies ?"), setEnded(true);
    }
  }, 1000);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: color,
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
                  Testons l'accéléromètre de votre téléphone
                </Text>
              }
            />
            <MainButton
              onPress={() => {
                navigation.navigate(
                  "AccelerometerTest2",
                  success
                    ? {
                      countTest: { ...countTest, "Pixels": 1 },
                    }
                    : {
                      countTest: { ...countTest, "Pixels": 0 },
                    }
                ),
                  setModalTransition(false);
              }}
              title={"C'est parti"}
              style={{ width: 100, height: 50, borderRadius: 10 }}
            />
          </View>
        </View>
      </Modal>
      {ended ? (
        <View>
          <Text style={styles.txt}>{texte}</Text>
          <MainButton
            style={{ margin: 20 }}
            onPress={() => {
              setSuccess(true), setModalOutVisible(true);
            }}
            title="Rien d'anormal"
          />
          <MainButton
            style={{ margin: 20 }}
            onPress={() => setModalOutVisible(true)}
            title="Certaines zones sont tâchées"
          />
        </View>
      ) : (
          <View />
        )}
    </View>
  );
};

const styles = StyleSheet.create({
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
    height: 175,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
});

export default PixelsTest;
