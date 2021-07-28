import React, { Component } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import DropDownItem from "react-native-drop-down-item";
import color from "../../style/color.js";
import { Subtitle } from "../common/index.js";

const IC_ARR_DOWN = require("../../assets/common/ic_arr_down.png");
const IC_ARR_UP = require("../../assets/common/ic_arr_up.png");

const DropdownMenu = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      <ScrollView style={{ alignSelf: "stretch" }}>
        <DropDownItem
          style={styles.dropDownItem}
          contentVisible={false}
          invisibleImage={IC_ARR_DOWN}
          visibleImage={IC_ARR_UP}
          header={
            <View style={styles.header}>
              <Subtitle text={props.title} color={color.secondary} />
            </View>
          }
        >
          <View>{props.children}</View>
        </DropDownItem>
        <View style={{ height: 9 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 0,
    backgroundColor: "white",
    borderColor: color.secondary,
    borderWidth: 1,
    marginHorizontal: 20,
    marginBottom: 15,
  },
  header: {
    width: "100%",
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
  },
  txt: {
    fontFamily: "InriaSans",
    fontSize: 15,
    color: color.secondary,
    marginTop: 5,
  },
});

export default DropdownMenu;
