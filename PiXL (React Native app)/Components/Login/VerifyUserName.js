import React from "react";
import { Text, StyleSheet } from "react-native";

const VerifyUserName = (input) => {
  try {
    if (input === "") throw "Empty";
    if (input === "bobo38") throw "Taken";
  } catch (err) {
    return (
      (err === "Empty" && (
        <Text>Vous devez entrer un nom d'utilisateur</Text>
      )) ||
      (err === "Taken" && <Text>Nom d'utilisateur déjà pris</Text>)
    );
  }
};

export default VerifyUserName;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 70,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  errorMessage: {
    color: "red",
  },
  inputContainer: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: 200,
  },
});
