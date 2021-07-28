import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProfileScreen from "../Screens/Profile/profileScreen";
import infosPersoScreen from "../Screens/Profile/infosPersoScreen";
import infosPratiquesScreen from "../Screens/Profile/infosPratiquesScreen";
import monAnnonceScreen from "../Screens/Profile/monAnnonceScreen";
import transactionScreen from "../Screens/Profile/transactionScreen";
import buyerGuide from "../Screens/Profile/buyerGuide";
import sellerGuide from "../Screens/Profile/sellerGuide";

const Stack = createStackNavigator();

const ProfileNav = (props) => {
  // console.log("profile nav", props.jwt);
  const y = props.jwt;

  // J'ai créé la fonction profileScreen au lieu de la mettre inline parce que j'avais une erreur
  // Ce qu'on avait pas fait la dernière fois c'est d'hériter les props {...props}, ce qui fait que Navigation n'était pas reconnu dans profileScren.js
  const profileScreen = (props) => {
    return <ProfileScreen jwt={y} {...props} />;
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Mon Profil"
        component={profileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Mes infos perso"
        component={infosPersoScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Infos pratiques"
        component={infosPratiquesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Mon annonce"
        component={monAnnonceScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Mes transactions"
        component={transactionScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Guide achat"
        component={buyerGuide}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Guide vente"
        component={sellerGuide}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ProfileNav;
