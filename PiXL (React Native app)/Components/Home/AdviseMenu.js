import React, { Component } from "react";
import { Text, View, Image } from "react-native";

const AdviseMenu = (props) => {
  return (
    <View
      style={{
        height: 180,
        width: 180,
        marginLeft: 10,
        borderWidth: 0.5,
        borderColor: "black",
        backgroundColor: "white",
      }}
    >
      <View style={{ flex: 2 }}>
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
      <View style={{ flew: 1, paddingLeft: 10, paddingTop: 10 }}>
        <Text>{props.name}</Text>
      </View>
    </View>
  );
};

export default AdviseMenu;
