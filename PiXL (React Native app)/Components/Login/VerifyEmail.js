import React from "react";
import { Text, StyleSheet } from "react-native";

const VerifyEmail = (input) => {
  try {
    if (input === "") throw "vide";
    if (input === "bobo38") throw "Nom d'utilisateur déjà pris";
  } catch (err) {
    return (
      (err === "vide" && <Text>Vous devez entrer une adresse email</Text>) ||
      (err === "Nom d'utilisateur déjà pris" && (
        <Text>Nom d'utilisateur déjà pris</Text>
      ))
    );
  }
};

export default VerifyEmail;

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
