import React from "react";
import { View, Image, Text, Dimensions, StyleSheet } from "react-native";
import Tag from "../../Components/common/Tag";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const FavoriteAd = (props) => {
  return (
    <View
      style={{
        borderWidth: 0.5,
        borderColor: "#071442",
        width: 0.9 * width,
        height: height / 6,
        borderRadius: 10,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Image style={styles.favImg} source={props.url} />

        <View style={styles.adInfos}>
          <Text style={styles.username}>{props.username}</Text>
          <Text style={styles.model}>{props.model}</Text>
          <Text style={styles.specs}>{props.specs}</Text>
          <View style={styles.lastLineContainer}>
            <Tag
              backgroundColor="#071442"
              color="white"
              label={props.tagLabel}
              borderRadius={20}
              width={60}
              height={30}
            />
            <View>
              <Text style={styles.price}>{props.price}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  favImg: {
    width: height / 6,
    height: height / 6,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  adInfos: { paddingLeft: 10, justifyContent: "space-evenly" },
  username: {
    fontFamily: "InriaSans",
    fontSize: 14,
    color: "#B78400",
  },
  model: {
    fontFamily: "InriaSans",
    fontSize: 19,
    color: "#071442",
  },
  specs: {
    fontSize: 18,
    color: "#071442",
    fontWeight: "300",
  },
  lastLineContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontFamily: "InriaSans",
    fontSize: 19,
    color: "#B78400",
  },
});

export default FavoriteAd;

{
  /*<View
      style={{
        width: width / 2 - 30,
        height: width / 2,
        borderWidth: 0.5,
        BorderColor: "black",
        marginBottom: 5,
        backgroundColor: "white",
        borderRadius: 5,
      }}
    >
      <View style={{ flex: 1 }}>
        <Image
          source={props.imageUri}
          style={{
            flex: 1,
            width: null,
            height: null,
            resizeMode: "cover",
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
        <Text style={{ fontSize: 10 }}>{props.phone}</Text>
        <Text style={{ fontSize: 12, fontWeight: "bold" }}>
          {props.sellerName}
        </Text>
        <Text style={{ fontSize: 10 }}>{props.price}</Text>
        <StarRating
          disabled={true}
          maxStars={5}
          rating={props.rating}
          starSize={10}
        />
      </View>
    </View>*/
}
