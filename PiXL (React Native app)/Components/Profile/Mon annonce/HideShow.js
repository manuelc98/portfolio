import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
} from "react-native";

export default function HideShow(props) {
  const [showState, setShowState] = useState(true);

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
                ? require("../../../assets/minus.png")
                : require("../../../assets/plus.png")
            }
          />
        </TouchableWithoutFeedback>
      </View>
      {showState ? (
        <Text numberOfLines={5} ellipsizeMode="tail">
          {props.caracteristiques}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    width: "90%",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 2,
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
