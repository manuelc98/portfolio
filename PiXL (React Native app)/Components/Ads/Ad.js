import React from "react";
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

import color from "../../style/color";
import { YellowStrip, Subtitle } from "../../Components/common";

// List of props :
//           imageArray
//           adTitle
//           adSubtitle
//           firstPrice
//           onConditionPress
//           averageCondition
//           dotsEnabled
//           description
//          accessories
const Ad = (props) => {
  const averageCondition = props.averageCondition;
  const averageConditionText = () => {
    if (averageCondition < 1) {
      return <Text> Mauvais état</Text>;
    } else if (averageCondition >= 1 && averageCondition < 2) {
      return <Text> Usé</Text>;
    } else if (averageCondition >= 2 && averageCondition < 3) {
      return <Text> Moyen état</Text>;
    } else if (averageCondition >= 3 && averageCondition < 4) {
      return <Text> Bon état</Text>;
    } else if (averageCondition >= 4) {
      return <Text> Comme neuf</Text>;
    }
  };
  return (
    <View>
      <View style={styles.top}>
        <View style={styles.topLeft}>
          <View style={styles.photoContainer}>
            <FlatList
              data={props.imageArray}
              horizontal={true}
              pagingEnabled={false}
              // getItemLayout={(data, index) => (
              //   {length: height / 4, offset: height * 2, 2}
              // )}
              renderItem={({ item }) => (
                <Image
                  source={{ uri: item.image_url }}
                  style={{
                    height: height / 3,
                    width: width / 2.7,
                    resizeMode: "contain",
                    margin: 5,
                  }}
                />
              )}
            />
          </View>
          {props.dotsEnabled ? (
            <Dots
              length={3}
              passiveDotWidth={7}
              passiveDotHeight={7}
              activeDotWidth={7}
              activeDotHeight={7}
              activeColor={color.secondary}
              active={0}
            />
          ) : (
            <View></View>
          )}
        </View>
        <View style={styles.topRight}>
          <Text style={styles.adTitle}>{props.adTitle}</Text>
          <Text style={styles.adSubtitle}>{props.adSubtitle}</Text>
          <Text style={styles.firstPrice}>{props.firstPrice} €</Text>
          <Text style={styles.normalText}>
            Ou à partir de <Text style={styles.secondPrice}>120€</Text> en
            revendant le votre
          </Text>
          <Text style={{ ...styles.normalText, fontSize: 18, marginTop: 14 }}>
            État
          </Text>
          <YellowStrip style={styles.yellowStrip}>
            <TouchableHighlight onPress={props.onConditionPress}>
              <Image source={require("../../assets/common/info-picto.png")} />
            </TouchableHighlight>
            <Text style={{ ...styles.normalText, fontSize: 15 }}>
              {averageConditionText()}
            </Text>
          </YellowStrip>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.descriptionContainer}>
          <FlatList
            data={props.accessories}
            renderItem={({ item }) => {
              return item.available ? (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={item.pictoUri}
                    style={{
                      height: 22,
                      width: 22,
                      resizeMode: "contain",
                      margin: 6,
                    }}
                  />
                  <Text style={{ ...styles.normalText, fontSize: 18 }}>
                    {" "}
                    {item.label}
                  </Text>
                </View>
              ) : (
                <View></View>
              );
            }}
          />
        </View>
        <View style={styles.horizontalLine}></View>
        <View style={styles.descriptionContainer}>
          <Subtitle text="À propos" color={color.secondary} />
          <Text style={styles.normalText}> {props.description} </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  normalText: { fontFamily: "InriaSans", fontSize: 15, color: color.secondary },
  top: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 15,
    marginHorizontal: 20,
    flex: 1,
  },
  topLeft: {
    borderColor: color.secondary,
    borderWidth: 1,
    backgroundColor: "white",
  },
  photoContainer: {
    backgroundColor: "white",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    flex: 2,
    width: width / 2.7,
    height: height / 3,
  },
  topRight: { marginLeft: 18, flex: 3 },
  adTitle: {
    fontSize: 30,
    fontWeight: "700",
    fontFamily: "AdventPro",
    flex: 1,
    textTransform: "uppercase",
    color: color.secondary,
  },
  adSubtitle: {
    fontFamily: "AdventPro",
    fontSize: 24,
    color: color.secondary,
    marginBottom: 14,
    textTransform: "uppercase",
    letterSpacing: 1.44,
    fontWeight: "500",
  },
  firstPrice: {
    fontFamily: "AdventPro",
    fontSize: 36,
    color: color.darkYellow,
    marginLeft: 5,
  },
  secondPrice: {
    fontFamily: "AdventPro",
    fontSize: 22,
    color: color.darkYellow,
  },
  yellowStrip: {
    marginTop: 7,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  bottom: { marginTop: 17 },

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
});

export default Ad;
