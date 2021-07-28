import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Button,
  Image,
} from "react-native";

import AdCard from "../../Components/Home/AdCard";
import getData from "../../models/GetData";
import getTelInfo from "../../models/GetTelInfo";

const resultScreen = (props) => {
  const [data, setData] = useState(props.route.params.data);
  const [userInput, setUserInput] = useState(props.route.params.userInput);

  const openAdHandler = async (id, title, item) =>
    props.navigation.navigate("Annonce", {
      adId: id,
      adTitle: title,
      details: item,
      diagnostic: await getTelInfo(item.tel_id),
    });

  const ChangeHandler = (value) => {
    setUserInput(value);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.screen}>
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

        <View style={styles.offersResult}>
          <FlatList
            data={data.data}
            keyExtractor={(item) => item.annonceid.toString()}
            renderItem={(itemData) => {
              return (
                <View>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={openAdHandler.bind(
                      this,
                      itemData.item.id,
                      itemData.item.title,
                      itemData.item
                    )}
                  >
                    <AdCard
                      phone={itemData.item.title}
                      price={itemData.item.price}
                      rating={itemData.item.rating}
                      imageUri={{ uri: itemData.item.image_url }}
                      sellerName={itemData.item.username}
                    />
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  offersResult: { marginTop: 10, flex: 1, alignItems: "center" },
  adContainer: {
    backgroundColor: "yellow",
    margin: 10,
  },
  TextinputA: {
    fontFamily: "InriaSans",
  },
  inputArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#071442",
    marginTop: 10,
  },
});

export default resultScreen;
