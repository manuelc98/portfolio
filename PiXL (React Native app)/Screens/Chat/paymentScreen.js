import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView, Modal, Image } from "react-native";
import MainButton from "../../Components/common/MainButton";
import Subtitle from "../../Components/common/Subtitle";
import color from "../../style/color";
import InputPayment from "../../Components/Chat/InputPayment";
import { useWindowDimensions } from "react-native";

const paymentScreen = (props) => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const [modalTransition, setModalTransition] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [CVV, setCVV] = useState("");
  const [genre, setGenre] = useState("");
  const [firstName, setFirstName] = useState("");
  const [name, setName] = useState("");

  return (
    <View style={{ flex: 1, backgroundColor: color.secondary }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          backgroundColor: color.secondary,
          paddingTop: windowHeight * 0.1,
          paddingBottom: windowHeight * 0.1,
        }}
      >
        <Modal //Pop up de fin du test
          animationType="slide"
          transparent={false}
          visible={modalTransition}
        >
          <View
            style={{
              ...styles.centeredView,
              marginLeft: 0.1 * windowWidth,
              marginRight: 0.1 * windowWidth,
            }}
          >
            <Text style={styles.congratsText}>
              Félicitations votre achat est confirmé !
            </Text>
            <Image
              style={{ width: 50, height: 50, borderRadius: 25 }}
              source={require("../../assets/common/okay_picto_gold.png")}
            />
            <Text style={{ ...styles.congratsText, fontSize: 20 }}>
              Vous allez recevoir un mail récapitulatif avec nos conseils pour
              la suite
            </Text>
            <Text style={{ ...styles.congratsText, fontSize: 20 }}>
              N'oubliez pas de confirmer la bonne réception de votre nouveau
              téléphone dans la messagerie
            </Text>
            <View style={{ flexDirection: "row" }}>
              <View style={{ padding: 5 }}>
                <Image
                  style={{ width: 20, height: 20, borderRadius: 10 }}
                  source={require("../../assets/planet_picto.png")}
                />
              </View>
              <Text
                style={{
                  ...styles.congratsText,
                  fontSize: 15,
                  color: "#00EC36",
                }}
              >
                Vous avez économisé 25Kg de CO2 et 40Kg de matières premières !
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ padding: 5 }}>
                <Image
                  style={{ width: 20, height: 20, borderRadius: 10 }}
                  source={require("../../assets/wallet_picto.png")}
                />
              </View>
              <Text
                style={{
                  ...styles.congratsText,
                  fontSize: 15,
                  color: "#FFCF3A",
                }}
              >
                Vous avez économisé 300€ sur un achat neuf !
              </Text>
            </View>
            <MainButton
              onPress={() => {
                props.navigation.popToTop(), setModalTransition(false);
              }}
              title={"Super !"}
              style={{ width: windowWidth * 0.8, height: 51, borderRadius: 10 }}
            />
          </View>
        </Modal>
        <View style={{ justifyContent: "center" }}>
          <Text style={styles.titleText}>Paiement sécurisé</Text>
        </View>
        <InputPayment
          placeholder="XXXX XXXX XXXX XXXX"
          autoCompleteType="cc-number"
          keyboardType="numeric"
          textContentType="creditCardNumber"
          inputHandler={(input) => setCardNumber(input)}
          width={0.8 * windowWidth}
          title="Numéro de carte"
          marginLeft={0.1 * windowWidth}
          marginRight={0.1 * windowWidth}
          color={color.main}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: 0.1 * windowWidth,
            marginRight: 0.1 * windowWidth,
          }}
        >
          <InputPayment
            placeholder="MM/YY"
            autoCompleteType="cc-exp"
            inputHandler={(input) => setExpirationDate(input)}
            width={136}
            title="Expire le"
            color={color.main}
          />
          <InputPayment
            placeholder="XXX"
            autoCompleteType="cc-csc"
            inputHandler={(input) => setCVV(input)}
            width={149}
            title="CVV"
            color={color.main}
          />
        </View>
        <View
          style={{
            marginLeft: 0.1 * windowWidth,
            marginRight: 0.1 * windowWidth,
            justifyContent: "center",
          }}
        >
          <InputPayment
            placeholder="MR/MME"
            inputHandler={(input) => setGenre(input)}
            width={0.8 * windowWidth}
            title="Nom du titulaire"
            color={color.main}
          />
        </View>
        <View
          style={{
            marginLeft: 0.1 * windowWidth,
            marginRight: 0.1 * windowWidth,
            justifyContent: "center",
          }}
        >
          <InputPayment
            placeholder="Prénom"
            inputHandler={(input) => setName(input)}
            width={0.8 * windowWidth}
            color={color.main}
          />
        </View>
        <View
          style={{
            marginLeft: 0.1 * windowWidth,
            marginRight: 0.1 * windowWidth,
            justifyContent: "center",
          }}
        >
          <InputPayment
            placeholder="Nom"
            inputHandler={(input) => setFirstName(input)}
            width={0.8 * windowWidth}
            color={color.main}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: 0.1 * windowWidth,
            marginRight: 0.1 * windowWidth,
            marginTop: 20,
          }}
        >
          <MainButton
            onPress={() => props.navigation.goBack()}
            style={{ width: 0.15 * windowHeight, height: 51, margin: 10 }}
            title="Retour"
          />
          <MainButton
            onPress={() => setModalTransition(true)}
            style={{ width: 0.2 * windowHeight, height: 51, margin: 10 }}
            title="Payer €"
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontFamily: "AdventPro",
    fontSize: 36,
    fontWeight: "normal",
    letterSpacing: 1.44,
    textTransform: "uppercase",
    paddingBottom: 20,
    color: color.main,
  },
  centeredView: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  congratsText: {
    fontFamily: "AdventPro",
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#071442",
    letterSpacing: 0.64,
  },
});

export default paymentScreen;
