import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MessagerieScreen from "../Screens/Chat/messagerieScreen";
import ChatScreen from "../Screens/Chat/chatScreen";
import paymentScreen from "../Screens/Chat/paymentScreen";
import { AppContext } from "../App";
import getAllConversations from "../models/GetAllConversations";

const Stack = createStackNavigator();

const ChatNav = ({ navigation, route }) => {
  if (route.state && route.state.index === 2) {
    navigation.setOptions({ tabBarVisible: false });
  } else {
    navigation.setOptions({ tabBarVisible: true });
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Messagerie"
        component={MessagerieScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Message" component={ChatScreen} />
      <Stack.Screen
        name="Paiement"
        component={paymentScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ChatNav;
