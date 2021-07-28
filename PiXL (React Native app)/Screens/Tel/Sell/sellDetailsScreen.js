import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import {
  InputBox,
  Subtitle,
  PriceInput,
  Title,
} from "../../../Components/common";
import { QuestionButton, PlusButton } from "../../../Components/PictoButtons";

import Constants from "expo-constants";
import PrevNextButtons from "../../../Components/Diag/PrevNextButtons.js";
import color from "../../../style/color";

const SellDetailsScreen = (props) => {
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

  const nextHandler = () => {
    if (imgLength > 0 && description && price) {
      props.navigation.navigate("SellConfirmation", {
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
        price: price,
        description: description,
        images: images,
      });
      return;
    }
    {
      Alert.alert(
        "Vous devez remplir les champs suivants pour continuer : ",
        alertMsg()
      );
    }
  };

  //STATE
  const [price, setPrice] = useState("400");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const i = useRef(0);

  //REQUEST ACCESS TO GALERY
  useEffect(() => {
    (async () => {
      if (Constants.platform.ios) {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== "granted") {
          alert("Désolé, nous avons besoin d'accéder à votre galerie photo");
        }
      }
    })();
  }, []);

  const minusHandler = () => {
    setPrice((prevState) => {
      let price = parseInt(prevState);
      let newPrice = price - 10;
      return price <= 10 ? "0" : newPrice.toString();
    });
  };
  const plusHandler = () => {
    setPrice((prevState) => {
      let price = parseInt(prevState);
      let newPrice = price + 10;
      return newPrice.toString();
    });
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      // allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      (i.current = i.current + 1),
        setImages((prevState) => [
          ...prevState,
          { id: i.current.toString(), image_url: result.uri },
        ]);
    }
  };

  const imgLength = images.length;
  const alertMsg = () => {
    return (
      (price ? "" : "Prix ") +
      "\n" +
      (description ? "" : "À propos ") +
      "\n" +
      (imgLength > 0 ? "" : "Photos du téléphone")
    );
  };
  // console.log("images", images, "i=", i.current.toString());

  const {
    screenContainer,
    priceTextContainer,
    priceSubtitleContainer,
    imageContainer,
  } = styles;
  return (
    <View style={screenContainer}>
      <Subtitle
        text="MISE EN VENTE"
        color={color.secondary}
        containerStyle={{ alignSelf: "center", marginBottom: 10 }}
      />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "flex-start",
        }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            backgroundColor: color.lightYellow,
            paddingHorizontal: 20,
            paddingVertical: 15,
          }}
        >
          <Text style={{ fontFamily: "InriaSans", fontSize: 16 }}>
            Les acheteurs peuvent vous proposer des offres de prix qui diffèrent
            du prix demandé
          </Text>
        </View>
        <View style={priceTextContainer}>
          <Subtitle
            text="Votre prix"
            color={color.secondary}
            containerStyle={priceSubtitleContainer}
          />
          <Text
            style={{
              fontFamily: "InriaSans",
              color: color.secondary,
              fontSize: 14,
              alignSelf: "center",
            }}
          >
            Notre prix conseillé: 400€
          </Text>
        </View>

        <PriceInput
          containerStyle={{ flex: 1 }}
          minusHandler={minusHandler}
          onChangeText={(value) => {
            setPrice(value);
          }}
          value={price}
          plusHandler={plusHandler}
        />
        <InputBox
          containerStyle={{ flex: 2, marginVertical: 30 }}
          title="À propos"
          placeholder="Pourquoi voulez-vous vous séparer de votre téléphone ? Pendant combien de temps l'avez-vous utilisé ?"
          onChangeText={(text) => setDescription(text)}
          value={description}
        />

        <Subtitle color={color.secondary} text="Photos du téléphone" />
        <View style={imageContainer}>
          <PlusButton onPress={pickImage} />
          {images && (
            <FlatList
              data={images}
              horizontal={true}
              renderItem={({ item }) => (
                <Image
                  source={{ uri: item.image_url }}
                  style={{ margin: 5, width: 200, height: 300 }}
                />
              )}
            />
          )}
        </View>
      </ScrollView>
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
    backgroundColor: "white",
    paddingTop: 60,
    paddingBottom: 25,
    paddingHorizontal: 25,
    width: "100%",
    justifyContent: "space-between",
  },
  priceTextContainer: { marginVertical: 20 },
  priceSubtitleContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 2,
    flexDirection: "row",
    alignContent: "center",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderColor: color.secondary,
    borderWidth: 1,
    padding: 10,
  },
});

export default SellDetailsScreen;
