import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AccueilDiag from "../Screens/Tel/Diag/AccueilDiag";
import telScreen from "../Screens/Tel/telScreen";
import BrightnessTest from "../Screens/Tel/Diag/brightnessTest";
import PixelsTest from "../Screens/Tel/Diag/pixelsTest";

import multitouchScreenTest from "../Screens/Tel/Diag/multitouchScreenTest";
import tactileScreenTest from "../Screens/Tel/Diag/tactileScreenTest";
import forceTouchScreenTest from "../Screens/Tel/Diag/forceTouchScreenTest";
import hapticScreenTest from "../Screens/Tel/Diag/hapticScreenTest";
import recapDiagScreen from "../Screens/Tel/Diag/recapDiagScreen";
import PhysicalTest from "../Screens/Tel/Diag/physicalTest";
import AdditionalInfoScreen from "../Screens/Tel/Sell/additionalInfoScreen";
import SellConfirmationScreen from "../Screens/Tel/Sell/sellConfirmationScreen";
import AccelerometerTest2 from "../Screens/Tel/Diag/accelerometerTestScreen2";
import GyroscopeTest2 from "../Screens/Tel/Diag/gyroscopeTestScreen2";
import batteryTest from "../Screens/Tel/Diag/batteryTest";
import diagTest from "../Screens/Tel/Diag/diagTest";

import SellDetailsScreen from "../Screens/Tel/Sell/sellDetailsScreen";
import recycleScreen from "../Screens/Tel/recycleScreen";

const Stack = createStackNavigator();

const TelNav = ({ navigation, route }) => {
  if (route.state && route.state.index >= 1 && route.state.index <= 12) {
    navigation.setOptions({ tabBarVisible: false });
  } else {
    navigation.setOptions({ tabBarVisible: true });
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Mon Téléphone"
        component={telScreen}
        options={{
          title: "PiXL",
          headerTintColor: color.main,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Accueil Diagnostic"
        component={AccueilDiag}
        options={{ title: "Diagnostic", headerShown: false }}
      />
      <Stack.Screen
        name="BrightnessTest"
        component={BrightnessTest}
        options={{ title: "Test Luminosité", headerShown: false }}
      />
      <Stack.Screen
        name="PixelsTest"
        component={PixelsTest}
        options={{ title: "Test Pixels", headerShown: false }}
      />

      <Stack.Screen
        name="AccelerometerTest2"
        component={AccelerometerTest2}
        options={{ title: "AccelerometerTest", headerShown: false }}
      />
      <Stack.Screen
        name="GyroscopeTest2"
        component={GyroscopeTest2}
        options={{ title: "GyroscopeTest", headerShown: false }}
      />
      <Stack.Screen
        name="tactile"
        component={tactileScreenTest}
        options={{
          title: "PiXL",
          headerTintColor: color.main,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="multitouch"
        component={multitouchScreenTest}
        options={{
          title: "PiXL",
          headerTintColor: color.main,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="3DTouch"
        component={forceTouchScreenTest}
        options={{
          title: "PiXL",
          headerTintColor: color.main,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="haptic"
        component={hapticScreenTest}
        options={{
          title: "PiXL",
          headerTintColor: color.main,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="battery"
        component={batteryTest}
        options={{
          title: "PiXL",
          headerTintColor: color.main,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="diagtest"
        component={diagTest}
        options={{
          title: "PiXL",
          headerTintColor: color.main,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Recap"
        component={recapDiagScreen}
        options={{
          title: "PiXL",
          headerTintColor: color.main,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PhysicalTest"
        component={PhysicalTest}
        options={{ title: "Vendre mon téléphone", headerShown: false }}
      />
      <Stack.Screen
        name="AdditionalInfo"
        component={AdditionalInfoScreen}
        options={{ title: "Vendre mon téléphone", headerShown: false }}
      />
      <Stack.Screen
        name="SellDetails"
        component={SellDetailsScreen}
        options={{ title: "Vendre mon téléphone", headerShown: false }}
      />
      <Stack.Screen
        name="SellConfirmation"
        component={SellConfirmationScreen}
        options={{ title: "Vendre mon téléphone", headerShown: false }}
      />
      <Stack.Screen
        name="Recycle"
        component={recycleScreen}
        options={{ title: "Valoriser mes téléphones", headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default TelNav;
