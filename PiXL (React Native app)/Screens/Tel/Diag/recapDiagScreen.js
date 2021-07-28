import React from "react";
import { View, StyleSheet, Text, Platform } from "react-native";
import MainButton from "../../../Components/common/MainButton";
import Axios from "axios";
import { AppContext } from '../../../App'

const numberTestsApple = 8;
const numberTestsAndroid = 7;


const countTestHandler = (counter) => {
  let result = 0;
  for (let i = 0; i < counter.length; i++) {
    result += counter[i][1];
  }
  return result;
};

const displayResultHandler = (counter, x) => {
  let result = [];
  for (let i = 0; i < counter.length; i++) {
    if (counter[i][1] === 1) {
      result.push(counter[i][0] + " :" + " OK");
    } else {
      result.push(counter[i][0] + " :" + "");
    }
  }
  return result[x];
};

const recapDiagScreen = ({ props, route, navigation }) => {
  const context = React.useContext(AppContext)
  const countTest = route.params.countTest;
  console.log(countTest);

  const sendResultAndGoBack = () => {
    Axios.post("http://51.178.86.48:3000/phones/add_phone", {
      brand: "",
      model: "",
      color: "null",
      capacity: 0,
      tactile: countTest["Tactile"],
      multitouch: countTest["Multitouch"],
      '3DTouch': countTest["3DTouch"],
      haptic: countTest["Vibration"],
      luminosity: countTest["Luminosité"],
      pixels: countTest["Pixels"],
      accelerometer: countTest["Accéléromètre"],
      gyroscope: countTest["Gyroscope"],
      userid: context.uuid,
    })
      .catch(e => {
        console.log("Error :\n", e);
      })
    navigation.popToTop()
  }

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.txt}>Résultats</Text>
      <View style={styles.resultsContainer}>
        <Text style={styles.txt}>
          Taux de réussite{"\n"}{" "}
          {Platform.OS === "ios"
            ? JSON.stringify(
              Math.round(
                (countTestHandler(countTest) / numberTestsApple) * 100
              )
            ) + "%"
            : JSON.stringify(
              Math.round(
                (countTestHandler(countTest) / numberTestsAndroid) * 100
              )
            ) + "%"}
        </Text>
        {Platform.OS === "ios" ? (
          <Text>
            {displayResultHandler(countTest, 0)}
            {"\n"}
            {displayResultHandler(countTest, 1)}
            {"\n"}
            {displayResultHandler(countTest, 2)}
            {"\n"}
            {displayResultHandler(countTest, 3)}
            {"\n"}
            {displayResultHandler(countTest, 4)}
            {"\n"}
            {displayResultHandler(countTest, 5)}
            {"\n"}
            {displayResultHandler(countTest, 6)}
            {"\n"}
            {displayResultHandler(countTest, 7)}
            {"\n"}
          </Text>
        ) : (
            <Text>
              {displayResultHandler(countTest, 0)}
              {"\n"}
              {displayResultHandler(countTest, 1)}
              {"\n"}
              {displayResultHandler(countTest, 2)}
              {"\n"}
              {displayResultHandler(countTest, 3)}
              {"\n"}
              {displayResultHandler(countTest, 4)}
              {"\n"}
              {displayResultHandler(countTest, 5)}
              {"\n"}
              {displayResultHandler(countTest, 6)}
              {"\n"}
            </Text>
          )}
      </View>
      <View style={{ flex: 1 }}>
        <MainButton
          onPress={() => sendResultAndGoBack()}
          title="Fin du test"
          style={{ height: 51, width: 250 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: { flex: 1, marginTop: 40, alignItems: "center" },
  txt: {
    color: color.secondary,
    fontFamily: "AdventPro",
    fontSize: 40,
    textAlign: "center",
    marginVertical: 50,
    marginHorizontal: 20,
  },
  resultsContainer: { flex: 3, alignItems: "center" },
});

export default recapDiagScreen;
