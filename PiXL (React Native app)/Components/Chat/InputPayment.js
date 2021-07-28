import React from "react";
import { View, TextInput, Text } from "react-native";

const InputPayment = (props) => {
  return (
    <View style={{ margin: 10 }}>
      <View
        style={{
          marginVertical: 15,
          marginLeft: props.marginLeft,
          marginRight: props.marginRight,
        }}
      >
        <Text
          style={{ fontSize: 24, fontFamily: "InriaSans", color: "#FFFFFF" }}
        >
          {props.title}
        </Text>
      </View>

      <TextInput
        placeholder={props.placeholder}
        autoCompleteType={props.autoCompleteType}
        keyboardType={props.keyboardType}
        onChangeText={props.inputHandler}
        placeholderTextColor={props.color}
        textContentType={props.textContentType}
        style={{
          borderBottomWidth: 1,
          borderBottomColor: props.color,
          color: props.color,
          fontSize: 20,
          width: props.width,
          marginRight: props.marginRight,
          marginLeft: props.marginLeft,
        }}
      />
    </View>
  );
};

export default InputPayment;
