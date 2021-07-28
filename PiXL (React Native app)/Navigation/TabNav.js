import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet } from "react-native";
import HomeNav from "../Navigation/HomeNav";
import telNav from "./TelNav";
import ChatNav from "./ChatNav";
import ProfileNav from "./ProfileNav";
import { AppContext } from "../App";

const Tab = createBottomTabNavigator();

const TabNav = (props) => {
  // console.log("tabnav", props.jwt);
  const x = props.jwt;

  const profileNav = (props) => <ProfileNav jwt={x} {...props} />;
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let SRC;
            if (route.name === "Recherche") {
              SRC = focused
                ? require("../assets/tabPicto/search_nav.png")
                : require("../assets/tabPicto/search_nav_bis.png");
            } else if (route.name === "Messagerie") {
              SRC = focused
                ? require("../assets/blue_handshake.png")
                : require("../assets/grey_handshake.png");
            } else if (route.name === "Mon téléphone") {
              SRC = focused
                ? require("../assets/easy_filter_picto.png")
                : require("../assets/grey_smartphone.png");
            } else if (route.name === "Profil") {
              SRC = focused
                ? require("../assets/tabPicto/profil_nav.png")
                : require("../assets/tabPicto/profil_nav_bis.png");
            }
            return <Image source={SRC} style={styles.logoS} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#071442",
          inactiveTintColor: "#898989",
          style: { fontFamily: "sans-serif-condensed" },
        }}
      >
        <Tab.Screen name="Recherche" component={HomeNav} />
        <Tab.Screen name="Messagerie" component={ChatNav} />
        <Tab.Screen name="Mon téléphone" component={telNav} />
        <Tab.Screen name="Profil" component={profileNav} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

styles = StyleSheet.create({
  logoS: { height: 24, width: 24 },
});

export default TabNav;
