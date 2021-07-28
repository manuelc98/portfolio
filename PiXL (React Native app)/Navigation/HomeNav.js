import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import homeScreen from "../Screens/Home/homeScreen.js";
import resultScreen from "../Screens/Home/resultScreen.js";
import adScreen from "../Screens/Home/adScreen.js";
import offerScreen from "../Screens/Home/offerScreen.js";
import argusScreenFinal from "../Screens/Home/argusScreenFinal.js";
import color from "../style/color.js";
import guideScreen from "../Screens/Home/guideScreen";
const Stack = createStackNavigator();

const HomeNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Recherche"
        component={homeScreen}
        options={{
          title: "PiXL",
          headerTintColor: color.main,
          headerTitleStyle: {
            fontSize: 36,
            fontFamily: "AdventPro",
            fontWeight: "500",
          },
        }}
      />
      <Stack.Screen
        name="Résultats"
        component={resultScreen}
        options={{
          title: "Résultats",
          headerBackTitle: "Retour",
        }}
      />
      <Stack.Screen
        name="Annonce"
        component={adScreen}
        // options={({ route }) => ({
        //   title: route.params.adTitle,
        //   headerBackTitle: "Retour",
        // })}
        options={{
          title: "Annonces",
          headerBackTitle: "Retour",
          headerTintColor: color.main,
          headerTitleStyle: {
            fontSize: 19,
            fontFamily: "InriaSans",
            fontWeight: "500",
          },
        }}
      />
      <Stack.Screen
        name="Offre"
        component={offerScreen}
        options={{ title: "Mon offre", headerBackTitle: "Retour" }}
      />
      <Stack.Screen
        name="Argus"
        component={argusScreenFinal}
        options={{ title: "Argus", headerBackTitle: "Retour" }}
      />
      <Stack.Screen
        name="Guide"
        component={guideScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeNav;
