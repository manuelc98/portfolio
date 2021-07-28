import React, { useState } from "react";
import { View, StyleSheet, Text, Alert } from "react-native";

import PrevNextButtons from "../../../Components/Diag/PrevNextButtons";
import SwitchElement from "../../../Components/Diag/SwitchElement";
import { Subtitle } from "../../../Components/common";

const AdditionalInfoScreen = (props) => {
  const { screenCondition } = props.route.params;
  const { screenConditionText } = props.route.params;
  const { backCondition } = props.route.params;
  const { backConditionText } = props.route.params;
  const { sidesCondition } = props.route.params;
  const { sidesConditionText } = props.route.params;
  const { averageCondition } = props.route.params;

  const [invoice, setInvoice] = useState(false);
  const [charger, setCharger] = useState(false);
  const [earPhones, setEarPhones] = useState(false);
  const [originalBox, setOriginalBox] = useState(false);
  const [phoneShell, setPhoneShell] = useState(false);

  const moveProps = () => {
    props.navigation.navigate("SellDetails", {
      screenCondition: screenCondition,
      screenConditionText: screenConditionText,
      backCondition: backCondition,
      backConditionText: backConditionText,
      sidesCondition: sidesCondition,
      sidesConditionText: sidesConditionText,
      averageCondition: averageCondition,
      invoice: invoice,
      charger: charger,
      originalBox: originalBox,
      phoneShell: phoneShell,
      earPhones: earPhones,
    });
  };

  const nextHandler = () => {
    if (invoice || charger || earPhones || originalBox || phoneShell) {
      moveProps();
      return;
    }
    {
      Alert.alert(
        "Vous n'avez entré aucun accessoire",
        "Voulez-vous continuer ?",
        [
          { text: "Non", style: "cancel" },
          { text: "Oui", onPress: moveProps },
        ]
      );
    }
  };

  return (
    <View style={styles.screenContainer}>
      <Subtitle
        text="INFOS SUPPLÉMENTAIRES"
        color={color.secondary}
        containerStyle={{ alignSelf: "center", marginBottom: 10 }}
      />
      <View
        style={{
          backgroundColor: color.lightYellow,
          paddingHorizontal: 20,
          paddingVertical: 15,
        }}
      >
        <Text style={{ fontFamily: "InriaSans", fontSize: 16 }}>
          Chaque option cochée augmente vos chances de vente ainsi que la valeur
          de votre mobile
        </Text>
      </View>
      <View>
        <SwitchElement
          text="Facture d'achat"
          onChange={() => {
            setInvoice((prevState) => !prevState);
          }}
        />
        <SwitchElement
          text="Chargeur "
          onChange={() => {
            setCharger((prevState) => !prevState);
          }}
        />
        <SwitchElement
          text="Écouteurs"
          onChange={() => {
            setEarPhones((prevState) => !prevState);
          }}
        />
        <SwitchElement
          text="Coque de protection"
          onChange={() => {
            setPhoneShell((prevState) => !prevState);
          }}
        />
        <SwitchElement
          text="Boîte d'origine"
          onChange={() => {
            setOriginalBox((prevState) => !prevState);
          }}
        />
      </View>
      <PrevNextButtons
        onPrevious={() => props.navigation.goBack()}
        onNext={nextHandler}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 25,
    paddingTop: 50,
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
});

export default AdditionalInfoScreen;
