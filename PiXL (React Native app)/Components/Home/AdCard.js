import React, { Component } from "react";
import { View, Image, Text, Dimensions } from "react-native";
import StarRating from "react-native-star-rating";
import color from "../../style/color";
import Tag from "../../Components/common/Tag";

let width = Dimensions.get("window").width;

const adCard = (props) => {
  return (
    <View
      style={{
        width: 0.9 * width,
        height: width / 2,
        borderWidth: 0.5,
        borderColor: color.secondary,
        marginBottom: 5,
        flexDirection: "row",
        margin: 10,
        backgroundColor: "white",
        borderRadius: 20,
      }}
    >
      <View style={{ flex: 1 }}>
        <Image
          source={props.imageUri}
          style={{
            flex: 1,
            width: null,
            height: null,
            resizeMode: "contain",
            borderRadius: 20,
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "flex-start",
          justifyContent: "space-evenly",
          paddingLeft: 10,
        }}
      >
        <Text
          style={{
            fontFamily: "InriaSans",
            fontSize: 16,
            fontWeight: "bold",
            color: "#B78400",
          }}
        >
          {props.sellerName}
        </Text>
        <Text
          style={{ fontFamily: "InriaSans", color: "#071442", fontSize: 18 }}
        >
          {props.phone}
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 16, color: "#071442" }}>
          {props.price}€
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Tag
            label="Facture"
            backgroundColor="#B6FF72"
            borderRadius={30}
            width={60}
            margin={5}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Tag
            label={"Intact"}
            backgroundColor="#B78400"
            borderRadius={30}
            width={60}
            color="#FFFFFF"
            margin={5}
          />
          <Tag
            label="Accessoires"
            backgroundColor="#071442"
            borderRadius={40}
            width={80}
            color="#FFFFFF"
            margin={5}
          />
        </View>
      </View>
    </View>
  );
};

export default adCard;
