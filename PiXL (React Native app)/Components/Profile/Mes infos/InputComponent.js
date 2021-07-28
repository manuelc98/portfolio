import React from "react";
import { View, TextInput, Text } from "react-native";

const InputPayment = (props) => {
  return (
    <View style={{ margin: 10 }}>
      <TextInput
        placeholder={props.placeholder}
        autoCompleteType={props.autoCompleteType}
        keyboardType={props.keyboardType}
        onChangeText={props.inputHandler}
        placeholderTextColor="#898989"
        textContentType={props.textContentType}
        value={props.value}
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
