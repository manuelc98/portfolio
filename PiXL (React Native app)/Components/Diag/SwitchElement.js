import React, { useState } from "react";
import { View, StyleSheet, Switch } from "react-native";

import Subtitle from "../common/Subtitle.js";
import color from "../../style/color.js";

const SwitchElement = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
      }}
    >
      <Subtitle text={props.text} color={color.secondary} />
      <Switch
        trackColor={{ false: color.secondary, true: color.secondary }}
        thumbColor={isEnabled ? color.lightGrey : color.lightGrey}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        {...props}
      />
    </View>
  );
};

export default SwitchElement;
