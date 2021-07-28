import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  SafeAreaView,
  Image,
  Dimensions,
  Alert,
  TouchableHighlight,
  Modal,
} from "react-native";
import * as Device from "expo-device";
import Dots from "react-native-dots-pagination";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

import DropdownMenu from "../../../Components/Home/DropdownMenu.js";
import color from "../../../style/color.js";
import PrevNextButtons from "../../../Components/Diag/PrevNextButtons.js";
import { Ad } from "../../../Components/Ads";
import {
  Subtitle,
  YellowStrip,
  MainButton,
} from "../../../Components/common/index.js";

const SellConfirmationScreen = (props) => {
  const { screenCondition } = props.route.params;
  const { screenConditionText } = props.route.params;
  const { backCondition } = props.route.params;
  const { backConditionText } = props.route.params;
  const { sidesCondition } = props.route.params;
  const { sidesConditionText } = props.route.params;
  const { averageCondition } = props.route.params;
  const { invoice } = props.route.params;
  const { charger } = props.route.params;
  const { originalBox } = props.route.params;
  const { phoneShell } = props.route.params;
  const { earPhones } = props.route.params;
  const { price } = props.route.params;
  const { description } = props.route.params;
  const { images } = props.route.params;

  // boolean value to know if there is no accessories
  const noAccessories = !(
    invoice ||
    charger ||
    earPhones ||
    originalBox ||
    phoneShell
  );

  const etatPhysique = [
    {
      id: "screenCondition",
      available: screenConditionText,
      label: "État de l'écran : ",
    },
    {
      id: "backCondition",
      available: backConditionText,
      label: "État de l'arrière : ",
    },
    {
      id: "sidesCondition",
      available: sidesConditionText,
      label: "État des côtés : ",
    },
  ];

  const detailsVente = [
    {
      id: "invoice",
      available: invoice,
      label: "Facture d'achat",
      pictoUri: require("../../../assets/phoneAccessories/invoice.png"),
    },
    {
      id: "charger",
      available: charger,
      label: "Chargeur",
      pictoUri: require("../../../assets/phoneAccessories/charger.png"),
    },
    {
      id: "earPhones",
      available: earPhones,
      label: "Écouteurs",
      pictoUri: require("../../../assets/phoneAccessories/earPhones.png"),
    },

    {
      id: "phoneShell",
      available: phoneShell,
      label: "Coque de protection",
      pictoUri: require("../../../assets/phoneAccessories/phoneShell.png"),
    },
    {
      id: "originalBox",
      available: originalBox,
      label: "Boîtier d'origine",
      pictoUri: require("../../../assets/phoneAccessories/originalBox.png"),
    },
    {
      id: "noAccessories",
      available: noAccessories,
      label: "Pas d'accessoires",
      pictoUri: require("../../../assets/phoneAccessories/noAccessories.png"),
    },
  ];

  const [modalVisible, setModalVisible] = useState(false);

  const nextHandler = () => {
    Alert.alert(
      "Mise en vente",
      "Réussie",
      [
        {
          text: "Continuer",
          onPress: () => props.navigation.navigate("Mon Téléphone"),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView style={styles.screen}>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Subtitle
                style={{ marginBottom: 10 }}
                text="Diagnostic visuel du téléphone"
                color={color.secondary}
              />
              <FlatList
                data={etatPhysique}
                renderItem={({ item }) =>
                  item.available ? (
                    <Text style={styles.normalText}>
                      - {item.label} {item.available}
                    </Text>
                  ) : (
                    <View></View>
                  )
                }
              />
              <MainButton
                title="OK"
                onPress={() => setModalVisible(false)}
                style={{ width: "20%", marginTop: 20 }}
              />
            </View>
          </View>
        </Modal>
        <Ad
          imageArray={images}
          adTitle={Device.modelName}
          adSubtitle="64Go - Argent"
          firstPrice={price}
          onConditionPress={() => {
            setModalVisible(true);
          }}
          averageCondition={averageCondition}
          dotsEnabled={false}
          description={description}
          accessories={detailsVente}
        />

        <DropdownMenu title="Détails de vente">
          <Text style={styles.normalText}> En cours de construction</Text>
        </DropdownMenu>
        <DropdownMenu title="Caractéristiques techniques">
          <Text style={styles.normalText}>
            Base de données en cours de construction
          </Text>
        </DropdownMenu>
      </ScrollView>
      <View style={styles.bottomAction}>
        <PrevNextButtons
          containerStyle={{ flex: 1 }}
          onPrevious={() => props.navigation.goBack()}
          onNext={nextHandler}
          title="Valider l'annonce"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  normalText: { fontFamily: "InriaSans", fontSize: 15, color: color.secondary },
  screen: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 15,
  },
  descriptionContainer: {
    marginHorizontal: 20,
    paddingHorizontal: 13,
    paddingTop: 5,
    marginBottom: 15,
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: color.darkGrey,
    marginTop: 20,
    marginBottom: 15,
    marginHorizontal: 23,
  },
  bottomAction: {
    flexDirection: "row",
    marginHorizontal: 25,
    marginBottom: 25,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "90%",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
});

export default SellConfirmationScreen;

{
  /* <View style={styles.top}>
          <View style={styles.topLeft}>
            <View style={styles.photoContainer}>
              <FlatList
                data={images}
                horizontal={true}
                pagingEnabled={false}
                // getItemLayout={(data, index) => (
                //   {length: height / 4, offset: height * 2, 2}
                // )}
                renderItem={({ item }) => (
                  <Image
                    source={{ uri: item.uri }}
                    style={{
                      height: height / 3,
                      width: width / 2.7,
                      resizeMode: "cover",
                      margin: 5,
                    }}
                  />
                )}
              />
            </View>
            <Dots
              length={3}
              passiveDotWidth={7}
              passiveDotHeight={7}
              activeDotWidth={7}
              activeDotHeight={7}
              activeColor={color.secondary}
              active={0}
            />
          </View>
          <View style={styles.topRight}>
            <Text style={styles.adTitle}>{Device.modelName}</Text>
            <Text style={styles.adSubtitle}>64Go - Argent</Text>
            <Text style={styles.firstPrice}>{price} €</Text>
            <Text style={styles.normalText}>
              Ou à partir de <Text style={styles.secondPrice}>120€</Text> en
              revendant le votre
            </Text>
            <Text style={{ ...styles.normalText, fontSize: 18, marginTop: 14 }}>
              État
            </Text>
            <YellowStrip style={styles.yellowStrip}>
              <TouchableHighlight
                onPress={() => {
                  setModalVisible(true);
                }}
              >
                <Image
                  source={require("../../../assets/common/info-picto.png")}
                />
              </TouchableHighlight>
              <Text style={{ ...styles.normalText, fontSize: 15 }}>
                {averageConditionText()}
              </Text>
            </YellowStrip>
          </View>
        </View> */
}
