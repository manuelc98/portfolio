import React from "react";
import NetInfo from "@react-native-community/netinfo";
import {
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import Title from "../../Components/common/Title";
import Subtitle from "../../Components/common/Subtitle";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const transactionScreen = (props) => {
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
          <Title text="Mes transactions" />
        </View>
        <View style={{ alignItems: "center" }}>
          <Subtitle text="Retrouvez vos achats/ventes sur cette page" />
        </View>
      </ScrollView>
    </View>
  );
};

export default transactionScreen;
