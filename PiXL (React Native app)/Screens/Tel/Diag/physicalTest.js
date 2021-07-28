import React, { useState, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
  Image,
  FlatList,
  ScrollView,
  Modal,
  Text,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import ViewPager from "@react-native-community/viewpager";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import Dots from "react-native-dots-pagination";

import color from "../../../style/color";
import { InputBox, Subtitle, MainButton } from "../../../Components/common";
import { QuestionButton, PlusButton } from "../../../Components/PictoButtons";
import PrevNextButtons from "../../../Components/Diag/PrevNextButtons";
import CustomSliderFriendly from "../../../Components/Home/CustomSliderFriendly";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const frontImg = require("../../../assets/physicalTest/front.jpg");
const backImg = require("../../../assets/physicalTest/back.png");
const sidesImg = require("../../../assets/physicalTest/sides.jpg");

const PhysicalTest = (props) => {
  const [screenCondition, setScreenCondition] = useState(5);
  const [screenConditionText, setScreenConditionText] = useState("Intact");
  const [backCondition, setBackCondition] = useState(5);
  const [backConditionText, setBackConditionText] = useState("Intact");
  const [sidesCondition, setSidesCondition] = useState(5);
  const [sidesConditionText, setSidesConditionText] = useState("Intacts");
  const [otherInfo, setOtherInfo] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [images, setImages] = useState([]);
  const i = useRef(0);
  const [modalVisible, setModalVisible] = useState(false);

  const averageCondition =
    screenCondition * 0.4 + backCondition * 0.3 + sidesCondition * 0.3;

  const changeScreenValue = (value) => {
    setScreenCondition(value);
    if (value < 1) {
      setScreenConditionText("Cassé");
    } else if (value >= 1 && value < 2) {
      setScreenConditionText("Rayures importantes");
    } else if (value >= 2 && value < 3) {
      setScreenConditionText("Rayures légères");
    } else if (value >= 3 && value < 4) {
      setScreenConditionText("Marques d'usure");
    } else if (value >= 4) {
      setScreenConditionText("Intact");
    }
  };
  const changeBackValue = (value) => {
    setBackCondition(value);
    if (value < 1) {
      setBackConditionText("Cassé");
    } else if (value >= 1 && value < 2) {
      setBackConditionText("Rayures importantes");
    } else if (value >= 2 && value < 3) {
      setBackConditionText("Rayures légères");
    } else if (value >= 3 && value < 4) {
      setBackConditionText("Marques d'usure");
    } else if (value >= 4) {
      setBackConditionText("Intact");
    }
  };
  const changeSidesValue = (value) => {
    setSidesCondition(value);
    if (value < 1) {
      setSidesConditionText("Cassés");
    } else if (value >= 1 && value < 2) {
      setSidesConditionText("Rayures importantes");
    } else if (value >= 2 && value < 3) {
      setSidesConditionText("Rayures légères");
    } else if (value >= 3 && value < 4) {
      setSidesConditionText("Marques d'usure");
    } else if (value >= 4) {
      setSidesConditionText("Intact");
    }
  };

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

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      (i.current = i.current + 1),
        setImages((prevState) => [
          ...prevState,
          { id: i.current.toString(), uri: result.uri },
        ]);
    }
  };

  const nextHandler = () =>
    props.navigation.navigate("AdditionalInfo", {
      screenCondition: screenCondition,
      screenConditionText: screenConditionText,
      backCondition: backCondition,
      backConditionText: backConditionText,
      sidesCondition: sidesCondition,
      sidesConditionText: sidesConditionText,
      averageCondition: averageCondition,
    });

  const {
    screenContainer,
    viewPager,
    explainingImages,
    imagePickerContainer,
  } = styles;
  // console.log(averageCondition);

  return (
    <View style={screenContainer}>
      <Subtitle
        text="DIAGNOSTIC VISUEL"
        color={color.secondary}
        containerStyle={{ alignSelf: "center", marginBottom: 10 }}
      />
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Subtitle
              style={{ marginBottom: 10 }}
              text="Photos justificatives"
              color={color.secondary}
            />
            <Text>
              Pour nous permettre de vérifier l'état visuel que vous avez
              indiqué, et ainsi obtenir le badge "vérifié" sur votre annonce,
              vous pouvez prendre en photo votre smartphone sous différents
              angles avec le flash allumé. {"\n"}
              Les photos doivent être de bonne qualité pour que les éventuelles
              rayures soient visibles.
            </Text>
            <MainButton
              title="OK"
              onPress={() => setModalVisible(false)}
              style={{ width: "20%", marginTop: 20 }}
            />
          </View>
        </View>
      </Modal>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        <TouchableWithoutFeedback>
          <View style={{ justifyContent: "space-evenly" }}>
            <View
              style={{
                flex: 1,
                height: 420,
                justifyContent: "center",
              }}
            >
              <ViewPager
                style={viewPager}
                initialPage={0}
                showPageIndicator={false}
                onPageSelected={(event) => {
                  setCurrentPage(event.nativeEvent.position);
                }}
                pageMargin={10}
                // ref={viewPager}
              >
                <View key="Front">
                  <TouchableWithoutFeedback>
                    <View>
                      <Subtitle
                        text="État de l'écran"
                        color={color.secondary}
                        style={{ paddingLeft: 10 }}
                      />
                      <Image style={explainingImages} source={frontImg} />
                      <CustomSliderFriendly
                        title={screenConditionText}
                        min={0}
                        max={5}
                        img1={require("../../../assets/physicalTest/sadPhonePicto.png")}
                        // subtitle1="Cassé"
                        img2={require("../../../assets/physicalTest/happyPhonePicto.png")}
                        // subtitle2="Intact"
                        onValueChange={(value) => {
                          changeScreenValue(value);
                        }}
                        pictoStyle={{ height: 32 }}
                        sliderStyle={{ width: 0.5 * width }}
                        value={5}
                        stepValue={1}
                      />
                    </View>
                  </TouchableWithoutFeedback>
                </View>
                <View key="Back">
                  <TouchableWithoutFeedback>
                    <View>
                      <Subtitle
                        text="État de l'arrière"
                        color={color.secondary}
                        style={{ paddingLeft: 10 }}
                      />
                      <Image style={explainingImages} source={backImg} />
                      <CustomSliderFriendly
                        title={backConditionText}
                        min={0}
                        max={5}
                        img1={require("../../../assets/physicalTest/sadPhonePicto.png")}
                        // subtitle1="Cassé"
                        img2={require("../../../assets/physicalTest/happyPhonePicto.png")}
                        // subtitle2="Intact"
                        onValueChange={(value) => {
                          changeBackValue(value);
                        }}
                        pictoStyle={{ height: 32 }}
                        sliderStyle={{ width: 0.5 * width }}
                        value={5}
                        stepValue={1}
                      />
                    </View>
                  </TouchableWithoutFeedback>
                </View>
                <View key="Sides">
                  <TouchableWithoutFeedback>
                    <View>
                      <Subtitle
                        text="État des côtés"
                        color={color.secondary}
                        style={{ paddingLeft: 10 }}
                      />
                      <Image style={explainingImages} source={sidesImg} />

                      <CustomSliderFriendly
                        title={sidesConditionText}
                        min={0}
                        max={5}
                        img1={require("../../../assets/physicalTest/sadPhonePicto.png")}
                        // subtitle1="Cassés"
                        img2={require("../../../assets/physicalTest/happyPhonePicto.png")}
                        // subtitle2="Intacts"
                        onValueChange={(value) => {
                          changeSidesValue(value);
                        }}
                        pictoStyle={{ height: 32 }}
                        sliderStyle={{ width: 0.5 * width }}
                        value={5}
                        stepValue={1}
                      />
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              </ViewPager>
              <Dots
                length={3}
                active={currentPage}
                passiveDotWidth={7}
                passiveDotHeight={7}
                activeDotWidth={7}
                activeDotHeight={7}
                activeColor={color.secondary}
              />
            </View>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 15,
                }}
              >
                <Subtitle
                  text="Photos justificatives "
                  color={color.secondary}
                  style={{ paddingLeft: 10 }}
                />
                <QuestionButton
                  onPress={() => {
                    setModalVisible(true);
                  }}
                />
              </View>

              <View style={imagePickerContainer}>
                <PlusButton onPress={pickImage} />
                {images && (
                  <FlatList
                    data={images}
                    horizontal={true}
                    pagingEnabled
                    renderItem={({ item }) => (
                      <TouchableWithoutFeedback>
                        <Image
                          source={{ uri: item.uri }}
                          style={{ margin: 5, width: 200, height: 200 }}
                        />
                      </TouchableWithoutFeedback>
                    )}
                  />
                )}
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
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
    padding: 25,
    paddingTop: 50,
    width: "100%",
    backgroundColor: "white",
    justifyContent: "space-evenly",
  },
  viewPager: { marginTop: 25, flex: 1 },
  explainingImages: {
    height: 200,
    width: 0.9 * width,
    borderRadius: 20,
    resizeMode: "cover",
    marginVertical: 20,
  },
  imagePickerContainer: {
    flexDirection: "row",
    alignContent: "center",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderColor: color.secondary,
    borderWidth: 1,
    padding: 10,
  },
  dropDownPicker: {
    borderColor: color.secondary,
    borderWidth: 1,
    backgroundColor: "#fafafa",
    height: 35,
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
export default PhysicalTest;
{
  /* 
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                ...(Platform.OS !== "android" && { zIndex: 10 }),
              }}
            >
              <Subtitle text="État de l'écran" color={color.secondary} />
              <DropDownPicker
                zIndex={5000}
                items={[
                  { label: "Intact", value: "5" },
                  { label: "Bon état, quelques marques d'usure", value: "4" },
                  { label: "Moyen état, rayures légères", value: "3" },
                  { label: "Mauvais état, rayures importantes ", value: "2" },
                  { label: "Cassé", value: "1" },
                ]}
                defaultValue="5"
                containerStyle={{ height: 40 }}
                style={styles.dropDownPicker}
                dropDownStyle={{ backgroundColor: "#fafafa" }}
                onChangeItem={(item) => setScreenCondition(item.label)}
                // onOpen={() => setIsVisibleA(true)}
                // onClose={() => setIsVisibleA(false)}
              />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                ...(Platform.OS !== "android" && { zIndex: 5 }),
              }}
            >
              <Subtitle text="État de l'arrière" color={color.secondary} />
              <DropDownPicker
                zIndex={4000}
                items={[
                  { label: "Intact", value: "5" },
                  { label: "Bon état, quelques marques d'usure", value: "4" },
                  { label: "Moyen état, rayures légères", value: "3" },
                  { label: "Mauvais état, rayures importantes ", value: "2" },
                  { label: "Cassé", value: "1" },
                ]}
                defaultValue="5"
                containerStyle={{ height: 40 }}
                style={styles.dropDownPicker}
                dropDownStyle={{ backgroundColor: "#fafafa" }}
                onChangeItem={(item) => setBackCondition(item.label)}
                // isVisible={false}
                // onOpen={() => {
                //   setIsVisibleB(true);
                //   setIsVisibleA(false);
                // }}
                // onClose={() => setIsVisibleB(false)}
              />
            </View>

            <InputBox
              title="Autres informations"
              placeholder="Informations que vous jugez nécessaire de communiquer à propos de l’état physique de votre téléphone"
              onChangeText={(text) => setOtherInfo(text)}
              value={otherInfo}
              containerStyle={{ flex: 1 }}
            />*/
}
