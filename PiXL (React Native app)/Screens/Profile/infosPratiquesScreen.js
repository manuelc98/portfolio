import React from "react";
import { View, TouchableOpacity, Image, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Title from "../../Components/common/Title";
import Subtitle from "../../Components/common/Subtitle";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const infosPratiquesScreen = (props) => {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: "#FFFFFF",
          paddingLeft: "2.5%",
          paddingRight: "2.5%",
          paddingTop: 0.05 * height,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            style={{ width: 25, height: 25, paddingRight: 0.1 * width }}
            onPress={() => props.navigation.goBack()}
          >
            <Image
              style={{ width: 25, height: 25 }}
              source={require("../../assets/common/return_blue_picto.png")}
            />
          </TouchableOpacity>
          <Title text="Informations pratiques" />
        </View>
        <Subtitle text="Page en cours de construction" />
      </ScrollView>
    </View>
  );
};

export default infosPratiquesScreen;
