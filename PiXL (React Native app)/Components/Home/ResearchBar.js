import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const ResearchBar = (props) => {
  
  const [userInput, setUserInput] = useState("")

  const ChangeHandler = (value) => {
      setUserInput(
        value
      );
  }

  return (
    <View style={styles.inputArea}>
      <TextInput
        underlineColorAndroid="transparent"
        placeholder="Qu'est-ce qui vous ferait plaisir ?"
        placeholderTextColor="grey"
        onChangeText={ChangeHandler}
        value={userInput}
      />
      <Button
        title="Rechercher"
        onPress={props.where}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    marginHorizontal: 20,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    elevation: 1,
    borderColor: "black",
    borderWidth: 0.5,
  },
});

export default ResearchBar;
