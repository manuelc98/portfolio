import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
  Modal,
} from "react-native";

import AdviseMenu from "../../Components/Home/AdviseMenu";
import FavoriteAd from "../../Components/Home/FavoriteAd";
import getData from "../../models/GetData";
import MainButton from "../../Components/common/MainButton.js";
import ViewPager from "@react-native-community/viewpager";
import ImageCard from "../../Components/common/ImageCard";
import TouchableTag from "../../Components/Home/TouchableTag";
import color from "../../style/color";
import Subtitle from "../../Components/common/Subtitle";
import CustomSlider from "../../Components/Home/CustomSlider";
import CustomSliderFriendly from "../../Components/Home/CustomSliderFriendly";
import DropDownPicker from "react-native-dropdown-picker";

const homeScreen = (props) => {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  const [userInput, setUserInput] = useState("");
  const [brandFiltered, setBrandFiltered] = useState("");
  const [stateFiltered, setStateFiltered] = useState("");

  const ChangeHandler = (value) => {
    setUserInput(value);
  };
  const [modalFiltersVisible, setModalFiltersVisible] = useState(false);
  const [modalFriendlyVisible, setModalFriendlyVisible] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Modal //pop up des filtres basiques
        visible={modalFiltersVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.centeredView}>
          <View
            style={[styles.modalView, { height: height / 2, width: width }]}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ alignItems: "center", width: width }}
            >
              <View style={{ height: 50, width: width }}>
                <View
                  style={{
                    position: "absolute",
                    left: width * 0.2,
                    width: 0.9 * width,
                  }}
                >
                  <Subtitle
                    text="Affiner ma recherche"
                    style={{ fontSize: 24, fontFamily: "InriaSans-Bold" }}
                  />
                </View>
                <View style={{ position: "absolute", right: 10 }}>
                  <TouchableOpacity
                    onPress={() => setModalFiltersVisible(false)}
                  >
                    <Image
                      style={{
                        height: 25,
                        width: 25,
                        marginVertical: 10,
                        marginHorizontal: 10,
                        transform: [{ rotateZ: "270deg" }],
                      }}
                      source={require("../../assets/common/return_gold_picto.png")}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <CustomSlider
                title="Prix max"
                min={0}
                max={1000}
                stepValue={10}
                unit="€"
              />
              <CustomSlider
                title="Stockage min"
                min={0}
                max={256}
                stepValue={16}
                unit="Go"
              />
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                  ...(Platform.OS !== "android" && { zIndex: 10 }),
                }}
              >
                <Subtitle text="Marque" color={color.secondary} />
                <DropDownPicker
                  zIndex={5000}
                  items={[
                    { label: "Apple" },
                    { label: "Samsung" },
                    { label: "Huawei" },
                    { label: "Xiaomi" },
                    { label: "One Plus" },
                    { label: "Nokia" },
                  ]}
                  containerStyle={{ height: 40, width: 150 }}
                  style={styles.dropDownPicker}
                  dropDownStyle={{ backgroundColor: "#fafafa" }}
                  onChangeItem={(item) => setBrandFiltered(item.label)}
                  // onOpen={() => setIsVisibleA(true)}
                  // onClose={() => setIsVisibleA(false)}
                />
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                  ...(Platform.OS !== "android" && { zIndex: 5 }),
                }}
              >
                <Subtitle text="État " color={color.secondary} />
                <DropDownPicker
                  zIndex={4000}
                  items={[
                    { label: "PiXL Perfect" },
                    { label: "Très bon" },
                    { label: "Bon" },
                    { label: "Passable" },
                  ]}
                  containerStyle={{ height: 40, width: 150 }}
                  style={styles.dropDownPicker}
                  dropDownStyle={{ backgroundColor: "#fafafa" }}
                  onChangeItem={(item) => setStateFiltered(item.label)}
                  // onOpen={() => setIsVisibleA(true)}
                  // onClose={() => setIsVisibleA(false)}
                />
              </View>
              <MainButton
                title="Rechercher"
                onPress={() => setModalFiltersVisible(false)}
                style={{ width: 150, height: 50, borderRadius: 25, margin: 20 }}
              />
            </ScrollView>
          </View>
        </View>
      </Modal>
      <Modal //pop up des filtres basés sur les usages
        visible={modalFriendlyVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.centeredView}>
          <View
            style={[styles.modalView, { height: height / 2, width: width }]}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ alignItems: "center", width: width }}
            >
              <View style={{ height: 50, width: width }}>
                <View
                  style={{
                    position: "absolute",
                    left: width * 0.2,
                    width: 0.9 * width,
                  }}
                >
                  <Subtitle
                    text="Quels sont vos usages ?"
                    style={{ fontSize: 24, fontFamily: "InriaSans-Bold" }}
                  />
                </View>
                <View style={{ position: "absolute", right: 10 }}>
                  <TouchableOpacity
                    onPress={() => setModalFriendlyVisible(false)}
                  >
                    <Image
                      style={{
                        height: 25,
                        width: 25,
                        marginVertical: 10,
                        marginHorizontal: 10,
                        transform: [{ rotateZ: "270deg" }],
                      }}
                      source={require("../../assets/common/return_gold_picto.png")}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <CustomSlider
                title="Prix max"
                min={0}
                max={1000}
                stepValue={10}
                unit="€"
              />
              <CustomSliderFriendly
                title="Photo/Vidéo"
                min={0}
                max={9}
                img1={require("../../assets/slidersPicto/photo_noob.png")}
                subtitle1="Novice"
                img2={require("../../assets/slidersPicto/photo_pro.png")}
                subtitle2="Pro"
              />
              <CustomSliderFriendly
                title="Films/Séries"
                min={0}
                max={9}
                img1={require("../../assets/slidersPicto/movie_noob.png")}
                subtitle1="Rarement"
                img2={require("../../assets/slidersPicto/netflix_picto.png")}
                subtitle2="Addict"
              />
              <CustomSliderFriendly
                title="Jeux"
                min={0}
                max={9}
                img1={require("../../assets/slidersPicto/noob_gamer.png")}
                subtitle1="Casual"
                img2={require("../../assets/slidersPicto/pro_gamer.png")}
                subtitle2="Pro Gamer"
              />
              <CustomSliderFriendly
                title="Activités"
                min={0}
                max={9}
                img1={require("../../assets/slidersPicto/sleep.png")}
                subtitle1="Dormeur"
                img2={require("../../assets/slidersPicto/running.png")}
                subtitle2="Coureur"
              />
              <CustomSliderFriendly
                title="Fréquence d'utilisation"
                min={0}
                max={9}
                img1={require("../../assets/slidersPicto/battery_full.png")}
                subtitle1="Modérée"
                img2={require("../../assets/slidersPicto/battery_low.png")}
                subtitle2="Élevée"
              />
              <CustomSliderFriendly
                title="Usage"
                min={0}
                max={9}
                img1={require("../../assets/slidersPicto/basic_user.png")}
                subtitle1="Basique"
                img2={require("../../assets/slidersPicto/complex_user.png")}
                subtitle2="Pro"
              />

              <View style={{ padding: 20 }}>
                <MainButton
                  title="Rechercher"
                  onPress={() => setModalFriendlyVisible(false)}
                  style={{ width: 150, height: 50, borderRadius: 25 }}
                />
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: "white",
        }}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Text style={styles.titleWelcome}>Bienvenue !</Text>
        </View>

        <View style={styles.inputArea}>
          <TextInput
            underlineColorAndroid="transparent"
            placeholder="Recherchez un modèle"
            style={styles.TextinputA}
            placeholderTextColor="grey"
            onChangeText={ChangeHandler}
          />

          <TouchableOpacity
            onPress={async () => {
              props.navigation.navigate("Résultats", {
                userInput: userInput,
                data: await getData(userInput, 1),
              });
            }}
          >
            <Image
              source={require("../../assets/common/serch.png")}
              style={{ height: 25, width: 25 }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 0.05 * width,
            marginRight: 0.05 * width,
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={() => setModalFiltersVisible(true)}>
            <View style={{ flexDirection: "row" }}>
              <Image
                style={{ width: 30, height: 30 }}
                source={require("../../assets/filter_picto.png")}
              />

              <TouchableTag
                label="Affiner ma recherche"
                backgroundColor="#071442"
                color="white"
                borderRadius={20}
                width={130}
                onPress={() => setModalFiltersVisible(true)}
                fontSize={12}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalFriendlyVisible(true)}>
            <View style={{ flexDirection: "row" }}>
              <Image
                style={{ width: 30, height: 30 }}
                source={require("../../assets/easy_filter_picto.png")}
              />
              <TouchableTag
                label="Aidez moi à trouver"
                backgroundColor="#071442"
                color="white"
                borderRadius={20}
                width={130}
                onPress={() => setModalFriendlyVisible(true)}
                fontSize={12}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={styles.titleHome}>Mes annonces favorites</Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <ViewPager
            style={styles.ViewPager}
            initialPage={0}
            pageMargin={20}
            showPageIndicator={true}
          >
            <View style={{ alignItems: "center" }} key="1">
              <FavoriteAd
                username="Loki_CS"
                model="Samsung S20"
                specs="256Go - Black"
                price="640€"
                url={require("../../assets/home/S20.jpg")}
                tagLabel="Suréquipé"
              />
            </View>

            <View style={{ alignItems: "center" }} key="2">
              <FavoriteAd
                username="Bapt78"
                model="iPhone XS"
                specs="128Go - Silver"
                price="400€"
                url={require("../../assets/home/iPhoneXS.jpg")}
                tagLabel="Affaire"
              />
            </View>
          </ViewPager>
        </View>
        <View style={styles.cardView}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Guide")}
            style={styles.guideContainer}
          >
            <Text
              style={{
                color: "#e7bd4f",
                fontFamily: "HammersmithOne",
                fontSize: 40,
                textAlign: "center",
              }}
            >
              Mon petit
            </Text>
            <Text
              style={{
                color: "#e7bd4f",
                fontFamily: "HammersmithOne",
                fontSize: 50,
                textAlign: "center",
              }}
            >
              GUIDE
            </Text>
            <Text
              style={{
                color: "#e7bd4f",
                fontFamily: "HammersmithOne",
                fontSize: 40,
                textAlign: "center",
              }}
            >
              d'entretien
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingVertical: 20,
            borderRadius: 20,
            alignItems: "center",
          }}
        >
          <ViewPager
            style={{ width: 0.9 * width, height: 150, borderRadius: 20 }}
            initialPage={0}
            showPageIndicator={true}
            pageMargin={20}
          >
            <View key="1">
              <Image
                style={{ height: 140, width: 0.9 * width, borderRadius: 20 }}
                source={require("../../assets/facts/Fact3.png")}
              />
            </View>
            <View key="2">
              <Image
                style={{ height: 140, width: 0.9 * width, borderRadius: 20 }}
                source={require("../../assets/facts/Fact2.png")}
              />
            </View>
            <View key="3">
              <Image
                style={{ height: 140, width: 0.9 * width, borderRadius: 20 }}
                source={require("../../assets/facts/Fact1.png")}
              />
            </View>
          </ViewPager>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  favAds: {
    paddingHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  titleWelcome: {
    fontFamily: "AdventPro",
    fontSize: 36,
    fontWeight: "normal",
    letterSpacing: 0.04,
    textTransform: "uppercase",
    color: "#071442",
    paddingHorizontal: 15,
    marginBottom: 50,
    marginTop: 50,
  },
  titleHome: {
    fontFamily: "InriaSans-Bold",
    fontSize: 19,
    fontWeight: "normal",
    color: "#071442",
    paddingHorizontal: 10,
    marginBottom: 14,
    marginTop: 36,
  },
  inputArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    marginHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#071442",
    marginBottom: 20,
  },
  TextinputA: {
    fontFamily: "InriaSans",
  },
  ViewPager: {
    flex: 1,
    width: "90%",
    height: 180,
  },
  cardView: {
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    alignItems: "center",
  },
  factImage: {
    height: 200,
  },
  guideContainer: {
    alignItems: "center",
    width: "90%",
    height: 200,
    backgroundColor: "#071442",
    borderRadius: 20,
    justifyContent: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dropDownPicker: {
    borderColor: color.secondary,
    borderWidth: 1,
    backgroundColor: "#fafafa",
    height: 45,
  },
});

export default homeScreen;
