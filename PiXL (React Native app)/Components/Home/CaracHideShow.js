import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";

let width = Dimensions.get("window").width;

export default function CaracHideShow(props) {
  const [showState, setShowState] = useState(false);

  const ShowHideComponent = () => {
    if (showState) {
      setShowState(false);
    } else {
      setShowState(true);
    }
  };

  return (
    <View style={styles.MainContainer}>
      <View style={styles.SecondContainer}>
        <Text style={showState ? styles.intitule : null}>{props.intitule}</Text>
        <TouchableWithoutFeedback onPress={ShowHideComponent}>
          <Image
            style={styles.plusButton}
            source={
              showState
                ? require("../../assets/common/minus.png")
                : require("../../assets/common/plus_picto.png")
            }
          />
        </TouchableWithoutFeedback>
      </View>
      {showState ? (
        <View>
          <Text>
            Modèle: {props.brand} {props.model}
          </Text>
          <Text numberOfLines={10} ellipsizeMode="tail">
            Capacité: {props.capacity}
          </Text>
          <Text>Couleur: {props.color}</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    width: width / 3,
    marginTop: 10,
    marginHorizontal: 10,
  },
  SecondContainer: {
    justifyContent: "center",
    alignItems: "center",

    flexDirection: "row",
    justifyContent: "space-between",
  },
  plusButton: {
    height: 20,
    width: 20,
  },
  intitule: {
    fontWeight: "bold",
  },
});
