import React, { useState } from "react";
import { View, StyleSheet, Dimensions, Alert, Modal, Text } from "react-native";
import color from "../../../style/color";
import MainButton from "../../../Components/common/MainButton";
import Subtitle from "../../../Components/common/Subtitle";
import GreyButton from "../../../Components/common/GreyButton";


const W = Dimensions.get("window").width;
const H = Dimensions.get("window").height;

const tactileScreenTest = (props) => {
  const [modalInVisible, setModalInVisible] = useState(true);
  const [modalOutVisible, setModalOutVisible] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [testFailed, setTestFailed] = useState(false);

  const col = [color.main, color.secondary];
  const w = W / 7;
  const h = H / 15;

  const [touched1, setTouched1] = useState(false);
  const [touched2, setTouched2] = useState(false);
  const [touched3, setTouched3] = useState(false);
  const [touched4, setTouched4] = useState(false);
  const [touched5, setTouched5] = useState(false);
  const [touched6, setTouched6] = useState(false);
  const [touched7, setTouched7] = useState(false);
  const [touched8, setTouched8] = useState(false);
  const [touched9, setTouched9] = useState(false);
  const [touched10, setTouched10] = useState(false);
  const [touched11, setTouched11] = useState(false);
  const [touched12, setTouched12] = useState(false);
  const [touched13, setTouched13] = useState(false);
  const [touched14, setTouched14] = useState(false);
  const [touched15, setTouched15] = useState(false);
  const [touched16, setTouched16] = useState(false);
  const [touched17, setTouched17] = useState(false);
  const [touched18, setTouched18] = useState(false);
  const [touched19, setTouched19] = useState(false);
  const [touched20, setTouched20] = useState(false);
  const [touched21, setTouched21] = useState(false);
  const [touched22, setTouched22] = useState(false);
  const [touched23, setTouched23] = useState(false);
  const [touched24, setTouched24] = useState(false);
  const [touched25, setTouched25] = useState(false);
  const [touched26, setTouched26] = useState(false);
  const [touched27, setTouched27] = useState(false);
  const [touched28, setTouched28] = useState(false);
  const [touched29, setTouched29] = useState(false);
  const [touched30, setTouched30] = useState(false);
  const [touched31, setTouched31] = useState(false);
  const [touched32, setTouched32] = useState(false);
  const [touched33, setTouched33] = useState(false);
  const [touched34, setTouched34] = useState(false);
  const [touched35, setTouched35] = useState(false);
  const [touched36, setTouched36] = useState(false);
  const [touched37, setTouched37] = useState(false);
  const [touched38, setTouched38] = useState(false);
  const [touched39, setTouched39] = useState(false);
  const [touched40, setTouched40] = useState(false);
  const [touched41, setTouched41] = useState(false);
  const [touched42, setTouched42] = useState(false);
  const [touched43, setTouched43] = useState(false);
  const [touched44, setTouched44] = useState(false);
  const [touched45, setTouched45] = useState(false);
  const [touched46, setTouched46] = useState(false);
  const [touched47, setTouched47] = useState(false);
  const [touched48, setTouched48] = useState(false);
  const [touched49, setTouched49] = useState(false);
  const [touched50, setTouched50] = useState(false);
  const [touched51, setTouched51] = useState(false);
  const [touched52, setTouched52] = useState(false);
  const [touched53, setTouched53] = useState(false);
  const [touched54, setTouched54] = useState(false);
  const [touched55, setTouched55] = useState(false);
  const [touched56, setTouched56] = useState(false);
  const [touched57, setTouched57] = useState(false);
  const [touched58, setTouched58] = useState(false);
  const [touched59, setTouched59] = useState(false);
  const [touched60, setTouched60] = useState(false);
  const [touched61, setTouched61] = useState(false);
  const [touched62, setTouched62] = useState(false);
  const [touched63, setTouched63] = useState(false);
  const [touched64, setTouched64] = useState(false);
  const [touched65, setTouched65] = useState(false);
  const [touched66, setTouched66] = useState(false);
  const [touched67, setTouched67] = useState(false);
  const [touched68, setTouched68] = useState(false);
  const [touched69, setTouched69] = useState(false);
  const [touched70, setTouched70] = useState(false);
  const [touched71, setTouched71] = useState(false);
  const [touched72, setTouched72] = useState(false);
  const [touched73, setTouched73] = useState(false);
  const [touched74, setTouched74] = useState(false);
  const [touched75, setTouched75] = useState(false);
  const [touched76, setTouched76] = useState(false);
  const [touched77, setTouched77] = useState(false);
  const [touched78, setTouched78] = useState(false);
  const [touched79, setTouched79] = useState(false);
  const [touched80, setTouched80] = useState(false);
  const [touched81, setTouched81] = useState(false);
  const [touched82, setTouched82] = useState(false);
  const [touched83, setTouched83] = useState(false);
  const [touched84, setTouched84] = useState(false);
  const [touched85, setTouched85] = useState(false);
  const [touched86, setTouched86] = useState(false);
  const [touched87, setTouched87] = useState(false);
  const [touched88, setTouched88] = useState(false);
  const [touched89, setTouched89] = useState(false);
  const [touched90, setTouched90] = useState(false);
  const [touched91, setTouched91] = useState(false);
  const [touched92, setTouched92] = useState(false);
  const [touched93, setTouched93] = useState(false);
  const [touched94, setTouched94] = useState(false);
  const [touched95, setTouched95] = useState(false);
  const [touched96, setTouched96] = useState(false);
  const [touched97, setTouched97] = useState(false);
  const [touched98, setTouched98] = useState(false);
  const [touched99, setTouched99] = useState(false);
  const [touched100, setTouched100] = useState(false);
  const [touched101, setTouched101] = useState(false);
  const [touched102, setTouched102] = useState(false);
  const [touched103, setTouched103] = useState(false);
  const [touched104, setTouched104] = useState(false);
  const [touched105, setTouched105] = useState(false);

  const allTouched =
    touched1 &
    touched2 &
    touched3 &
    touched4 &
    touched5 &
    touched6 &
    touched7 &
    touched8 &
    touched9 &
    touched10 &
    touched11 &
    touched12 &
    touched13 &
    touched14 &
    touched15 &
    touched16 &
    touched17 &
    touched18 &
    touched19 &
    touched20 &
    touched21 &
    touched22 &
    touched23 &
    touched24 &
    touched25 &
    touched26 &
    touched27 &
    touched28 &
    touched29 &
    touched30 &
    touched31 &
    touched33 &
    touched34 &
    touched35 &
    touched36 &
    touched37 &
    touched38 &
    touched39 &
    touched40 &
    touched41 &
    touched42 &
    touched43 &
    touched44 &
    touched45 &
    touched46 &
    touched47 &
    touched48 &
    touched49 &
    touched50 &
    touched51 &
    touched52 &
    touched53 &
    touched54 &
    touched55 &
    touched56 &
    touched57 &
    touched58 &
    touched59 &
    touched60 &
    touched61 &
    touched62 &
    touched63 &
    touched64 &
    touched65 &
    touched66 &
    touched67 &
    touched68 &
    touched69 &
    touched70 &
    touched71 &
    touched72 &
    touched73 &
    touched74 &
    touched75 &
    touched76 &
    touched77 &
    touched78 &
    touched79 &
    touched80 &
    touched81 &
    touched82 &
    touched83 &
    touched84 &
    touched85 &
    touched86 &
    touched87 &
    touched88 &
    touched89 &
    touched90 &
    touched91 &
    touched92 &
    touched93 &
    touched94 &
    touched95 &
    touched96 &
    touched97 &
    touched98 &
    touched99 &
    touched100 &
    touched101 &
    touched102 &
    touched103 &
    touched104 &
    touched105;


  if (!testFailed) {
    setTimeout(() => {
      setShowButton(true)
    }, 10000)
  }
  return (
    <View
      style={styles.screenContainer}
      onStartShouldSetResponder={(event) => true}
      onResponderMove={(event) => {
        let X = event.nativeEvent.pageX;
        let Y = event.nativeEvent.pageY;
        if ((X < 1 * w) & (X > 0) & (Y > 0) & (Y < 1 * h)) {
          setTouched1(true);
        } else if ((X < 2 * w) & (X > 1 * w) & (Y > 0) & (Y < 1 * h)) {
          setTouched2(true);
        } else if ((X < 3 * w) & (X > 2 * w) & (Y > 0) & (Y < 1 * h)) {
          setTouched3(true);
        } else if ((X < 4 * w) & (X > 3 * w) & (Y > 0) & (Y < 1 * h)) {
          setTouched4(true);
        } else if ((X < 5 * w) & (X > 4 * w) & (Y > 0) & (Y < 1 * h)) {
          setTouched5(true);
        } else if ((X < 6 * w) & (X > 5 * w) & (Y > 0) & (Y < 1 * h)) {
          setTouched6(true);
        } else if ((X < 7 * w) & (X > 6 * w) & (Y > 0) & (Y < 1 * h)) {
          setTouched7(true);
        } else if ((X < 1* w) & (X > 0 * w) & (Y > 1 * h) & (Y < 2 * h)) {
          setTouched8(true);
        } else if ((X < 2 * w) & (X > 1 * w) & (Y > 1 * h) & (Y < 2 * h)) {
          setTouched9(true);
        } else if ((X < 3 * w) & (X > 2 * w) & (Y > 1 * h) & (Y < 2 * h)) {
          setTouched10(true);
        } else if ((X < 4 * w) & (X > 3 * w) & (Y > 1 * h) & (Y < 2 * h)) {
          setTouched11(true);
        } else if ((X < 5 * w) & (X > 4 * w) & (Y > 1 * h) & (Y < 2 * h)) {
          setTouched12(true);
        } else if ((X < 6 * w) & (X > 5 * w) & (Y > 1 * h) & (Y < 2 * h)) {
          setTouched13(true);
        } else if ((X < 7 * w) & (X > 6 * w) & (Y > 1 * h) & (Y < 2 * h)) {
          setTouched14(true);
        } else if ((X < 1 * w) & (X > 0 * w) & (Y > 2 * h) & (Y < 3 * h)) {
          setTouched15(true);
        } else if ((X < 2 * w) & (X > 1 * w) & (Y > 2 * h) & (Y < 3 * h)) {
          setTouched16(true);
        } else if ((X < 3 * w) & (X > 2 * w) & (Y > 2 * h) & (Y < 3 * h)) {
          setTouched17(true);
        } else if ((X < 4 * w) & (X > 3 * w) & (Y > 2 * h) & (Y < 3 * h)) {
          setTouched18(true);
        } else if ((X < 5 * w) & (X > 4 * w) & (Y > 2 * h) & (Y < 3 * h)) {
          setTouched19(true);
        } else if ((X < 6 * w) & (X > 5 * w) & (Y > 2 * h) & (Y < 3 * h)) {
          setTouched20(true);
        } else if ((X < 7 * w) & (X > 6 * w) & (Y > 2 * h) & (Y < 3 * h)) {
          setTouched21(true);
        } else if ((X < 1 * w) & (X > 0 * w) & (Y > 3 * h) & (Y < 4 * h)) {
          setTouched22(true);
        } else if ((X < 2 * w) & (X > 1 * w) & (Y > 3 * h) & (Y < 4 * h)) {
          setTouched23(true);
        } else if ((X < 3 * w) & (X > 2 * w) & (Y > 3 * h) & (Y < 4 * h)) {
          setTouched24(true);
        } else if ((X < 4 * w) & (X > 3 * w) & (Y > 3 * h) & (Y < 4 * h)) {
          setTouched25(true);
        } else if ((X < 5 * w) & (X > 4 * w) & (Y > 3 * h) & (Y < 4 * h)) {
          setTouched26(true);
        } else if ((X < 6 * w) & (X > 5 * w) & (Y > 3 * h) & (Y < 4 * h)) {
          setTouched27(true);
        } else if ((X < 7 * w) & (X > 6 * w) & (Y > 3 * h) & (Y < 4 * h)) {
          setTouched28(true);
        } else if ((X < 1 * w) & (X > 0) & (Y > 4 * h) & (Y < 5 * h)) {
          setTouched29(true);
        } else if ((X < 2 * w) & (X > 1 * w) & (Y > 4 * h) & (Y < 5 * h)) {
          setTouched30(true);
        } else if ((X < 3 * w) & (X > 2 * w) & (Y > 4 * h) & (Y < 5 * h)) {
          setTouched31(true);
        } else if ((X < 4 * w) & (X > 3 * w) & (Y > 4 * h) & (Y < 5 * h)) {
          setTouched32(true);
        } else if ((X < 5 * w) & (X > 4 * w) & (Y > 4 * h) & (Y < 5 * h)) {
          setTouched33(true);
        } else if ((X < 6 * w) & (X > 5 * w) & (Y > 4 * h) & (Y < 5 * h)) {
          setTouched34(true);
        } else if ((X < 7 * w) & (X > 6 * w) & (Y > 4 * h) & (Y < 5 * h)) {
          setTouched35(true);
        } else if ((X < 1 * w) & (X > 0) & (Y > 5 * h) & (Y < 6 * h)) {
          setTouched36(true);
        } else if ((X < 2 * w) & (X > 1 * w) & (Y > 5 * h) & (Y < 6 * h)) {
          setTouched37(true);
        } else if ((X < 3 * w) & (X > 2 * w) & (Y > 5 * h) & (Y < 6 * h)) {
          setTouched38(true);
        } else if ((X < 4 * w) & (X > 3 * w) & (Y > 5 * h) & (Y < 6 * h)) {
          setTouched39(true);
        } else if ((X < 5 * w) & (X > 4 * w) & (Y > 5 * h) & (Y < 6 * h)) {
          setTouched40(true);
        } else if ((X < 6 * w) & (X > 5 * w) & (Y > 5 * h) & (Y < 6 * h)) {
          setTouched41(true);
        } else if ((X < 7 * w) & (X > 6 * w) & (Y > 5 * h) & (Y < 6 * h)) {
          setTouched42(true);
        } else if ((X < 1 * w) & (X > 0) & (Y > 6 * h) & (Y < 7 * h)) {
          setTouched43(true);
        } else if ((X < 2 * w) & (X > 1 * w) & (Y > 6 * h) & (Y < 7 * h)) {
          setTouched44(true);
        } else if ((X < 3 * w) & (X > 2 * w) & (Y > 6 * h) & (Y < 7 * h)) {
          setTouched45(true);
        } else if ((X < 4 * w) & (X > 3 * w) & (Y > 6 * h) & (Y < 7 * h)) {
          setTouched46(true);
        } else if ((X < 5 * w) & (X > 4 * w) & (Y > 6 * h) & (Y < 7 * h)) {
          setTouched47(true);
        } else if ((X < 6 * w) & (X > 5 * w) & (Y > 6 * h) & (Y < 7 * h)) {
          setTouched48(true);
        } else if ((X < 7 * w) & (X > 6 * w) & (Y > 6 * h) & (Y < 7 * h)) {
          setTouched49(true);
        } else if ((X < 1 * w) & (X > 0) & (Y > 7 * h) & (Y < 8 * h)) {
          setTouched50(true);
        } else if ((X < 2 * w) & (X > 1 * w) & (Y > 7 * h) & (Y < 8 * h)) {
          setTouched51(true);
        } else if ((X < 3 * w) & (X > 2 * w) & (Y > 7 * h) & (Y < 8 * h)) {
          setTouched52(true);
        } else if ((X < 4 * w) & (X > 3 * w) & (Y > 7 * h) & (Y < 8 * h)) {
          setTouched53(true);
        } else if ((X < 5 * w) & (X > 4 * w) & (Y > 7 * h) & (Y < 8 * h)) {
          setTouched54(true);
        } else if ((X < 6 * w) & (X > 5 * w) & (Y > 7 * h) & (Y < 8 * h)) {
          setTouched55(true);
        } else if ((X < 7 * w) & (X > 6 * w) & (Y > 7 * h) & (Y < 8 * h)) {
          setTouched56(true);
        } else if ((X < 1 * w) & (X > 0) & (Y > 8 * h) & (Y < 9 * h)) {
          setTouched57(true);
        } else if ((X < 2 * w) & (X > 1 * w) & (Y > 8 * h) & (Y < 9 * h)) {
          setTouched58(true);
        } else if ((X < 3 * w) & (X > 2 * w) & (Y > 8 * h) & (Y < 9 * h)) {
          setTouched59(true);
        } else if ((X < 4 * w) & (X > 3 * w) & (Y > 8 * h) & (Y < 9 * h)) {
          setTouched60(true);
        } else if ((X < 5 * w) & (X > 4 * w) & (Y > 8 * h) & (Y < 9 * h)) {
          setTouched61(true);
        } else if ((X < 6 * w) & (X > 5 * w) & (Y > 8 * h) & (Y < 9 * h)) {
          setTouched62(true);
        } else if ((X < 7 * w) & (X > 6 * w) & (Y > 8 * h) & (Y < 9 * h)) {
          setTouched63(true);
        } else if ((X < 1 * w) & (X > 0) & (Y > 9 * h) & (Y < 10 * h)) {
          setTouched64(true);
        } else if ((X < 2 * w) & (X > 1 * w) & (Y > 9 * h) & (Y < 10 * h)) {
          setTouched65(true);
        } else if ((X < 3 * w) & (X > 2 * w) & (Y > 9 * h) & (Y < 10 * h)) {
          setTouched66(true);
        } else if ((X < 4 * w) & (X > 3 * w) & (Y > 9 * h) & (Y < 10 * h)) {
          setTouched67(true);
        } else if ((X < 5 * w) & (X > 4 * w) & (Y > 9 * h) & (Y < 10 * h)) {
          setTouched68(true);
        } else if ((X < 6 * w) & (X > 5 * w) & (Y > 9 * h) & (Y < 10 * h)) {
          setTouched69(true);
        } else if ((X < 7 * w) & (X > 6 * w) & (Y > 9 * h) & (Y < 10 * h)) {
          setTouched70(true);
        } else if ((X < 1 * w) & (X > 0) & (Y > 10 * h) & (Y < 11 * h)) {
          setTouched71(true);
        } else if ((X < 2 * w) & (X > 1 * w) & (Y > 10 * h) & (Y < 11 * h)) {
          setTouched72(true);
        } else if ((X < 3 * w) & (X > 2 * w) & (Y > 10 * h) & (Y < 11 * h)) {
          setTouched73(true);
        } else if ((X < 4 * w) & (X > 3 * w) & (Y > 10 * h) & (Y < 11 * h)) {
          setTouched74(true);
        } else if ((X < 5 * w) & (X > 4 * w) & (Y > 10 * h) & (Y < 11 * h)) {
          setTouched75(true);
        } else if ((X < 6 * w) & (X > 5 * w) & (Y > 10 * h) & (Y < 11 * h)) {
          setTouched76(true);
        } else if ((X < 7 * w) & (X > 6 * w) & (Y > 10 * h) & (Y < 11 * h)) {
          setTouched77(true);
        } else if ((X < 1 * w) & (X > 0) & (Y > 11 * h) & (Y < 12 * h)) {
          setTouched78(true);
        } else if ((X < 2 * w) & (X > 1 * w) & (Y > 11 * h) & (Y < 12 * h)) {
          setTouched79(true);
        } else if ((X < 3 * w) & (X > 2 * w) & (Y > 11 * h) & (Y < 12 * h)) {
          setTouched80(true);
        } else if ((X < 4 * w) & (X > 3 * w) & (Y > 11 * h) & (Y < 12 * h)) {
          setTouched81(true);
        } else if ((X < 5 * w) & (X > 4 * w) & (Y > 11 * h) & (Y < 12 * h)) {
          setTouched82(true);
        } else if ((X < 6 * w) & (X > 5 * w) & (Y > 11 * h) & (Y < 12 * h)) {
          setTouched83(true);
        } else if ((X < 7 * w) & (X > 6 * w) & (Y > 11 * h) & (Y < 12 * h)) {
          setTouched84(true);
        } else if ((X < 1 * w) & (X > 0) & (Y > 12 * h) & (Y < 13 * h)) {
          setTouched85(true);
        } else if ((X < 2 * w) & (X > 1 * w) & (Y > 12 * h) & (Y < 13 * h)) {
          setTouched86(true);
        } else if ((X < 3 * w) & (X > 2 * w) & (Y > 12 * h) & (Y < 13 * h)) {
          setTouched87(true);
        } else if ((X < 4 * w) & (X > 3 * w) & (Y > 12 * h) & (Y < 13 * h)) {
          setTouched88(true);
        } else if ((X < 5 * w) & (X > 4 * w) & (Y > 12 * h) & (Y < 13 * h)) {
          setTouched89(true);
        } else if ((X < 6 * w) & (X > 5 * w) & (Y > 12 * h) & (Y < 13 * h)) {
          setTouched90(true);
        } else if ((X < 7 * w) & (X > 6 * w) & (Y > 12 * h) & (Y < 13 * h)) {
          setTouched91(true);
        } else if ((X < 1 * w) & (X > 0) & (Y > 13 * h) & (Y < 14 * h)) {
          setTouched92(true);
        } else if ((X < 2 * w) & (X > 1 * w) & (Y > 13 * h) & (Y < 14 * h)) {
          setTouched93(true);
        } else if ((X < 3 * w) & (X > 2 * w) & (Y > 13 * h) & (Y < 14 * h)) {
          setTouched94(true);
        } else if ((X < 4 * w) & (X > 3 * w) & (Y > 13 * h) & (Y < 14 * h)) {
          setTouched95(true);
        } else if ((X < 5 * w) & (X > 4 * w) & (Y > 13 * h) & (Y < 14 * h)) {
          setTouched96(true);
        } else if ((X < 6 * w) & (X > 5 * w) & (Y > 13 * h) & (Y < 14 * h)) {
          setTouched97(true);
        } else if ((X < 7 * w) & (X > 6 * w) & (Y > 13 * h) & (Y < 14 * h)) {
          setTouched98(true);
        } else if ((X < 1 * w) & (X > 0) & (Y > 14 * h) & (Y < 15 * h)) {
          setTouched99(true);
        } else if ((X < 2 * w) & (X > 1 * w) & (Y > 14 * h) & (Y < 15 * h)) {
          setTouched100(true);
        } else if ((X < 3 * w) & (X > 2 * w) & (Y > 14 * h) & (Y < 15 * h)) {
          setTouched101(true);
        } else if ((X < 4 * w) & (X > 3 * w) & (Y > 14 * h) & (Y < 15 * h)) {
          setTouched102(true);
        } else if ((X < 5 * w) & (X > 4 * w) & (Y > 14 * h) & (Y < 15 * h)) {
          setTouched103(true);
        } else if ((X < 6 * w) & (X > 5 * w) & (Y > 14 * h) & (Y < 15 * h)) {
          setTouched104(true);
        } else if ((X < 7 * w) & (X > 6 * w) & (Y > 14 * h) & (Y < 15 * h)) {
          setTouched105(true);
        }
      }}
      onResponderRelease={() => {
        if (allTouched) {
          setModalOutVisible(true);
          {
            /*Alert.alert(
            "Test du tactile",
            "Réussi",
            [
              {
                text: "Continuer",
                onPress: () =>
                  props.navigation.navigate("multitouch", {
                    countTest: [["Tactile", 1]],
                  }),
              },
            ],
            { cancelable: false }
          );
          */
          }
        }
      }}
    >
      <Modal //Pop up d'entrée
        animationType="slide"
        transparent={true}
        visible={modalInVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Subtitle
              style={{ marginBottom: 10 }}
              text="Glissez le doigt sur tout l'écran"
            />
            <MainButton
              onPress={() => setModalInVisible(false)}
              title="Start"
              style={{ width: 100, height: 50, borderRadius: 10 }}
            />
          </View>
        </View>
      </Modal>

      <Modal //Pop up de fin du test
        animationType="fade"
        transparent={true}
        visible={modalOutVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Subtitle
              style={{ marginBottom: 10 }}
              text={allTouched ? "Test réussi" : "Mince... "}
            />
            <MainButton
              onPress={() => {
                props.navigation.navigate(
                  "multitouch",
                  allTouched
                    ? {
                      countTest: { "Tactile": 1 },
                    }
                    : {
                      countTest: { "Tactile": 0 },
                    }
                ),
                  setModalOutVisible(false);
              }}
              title={"Continuer"}
              style={{ width: 100, height: 50, borderRadius: 10 }}
            />
          </View>
        </View>
      </Modal>
      <View style={{ flexDirection: "row" }}>
        <View
          style={[{ backgroundColor: touched1 ? col[1] : col[0] }, styles.view]}
        />
        <View
          style={[{ backgroundColor: touched2 ? col[1] : col[0] }, styles.view]}
        />
        <View
          style={[{ backgroundColor: touched3 ? col[1] : col[0] }, styles.view]}
        />
        <View
          style={[{ backgroundColor: touched4 ? col[1] : col[0] }, styles.view]}
        />
         <View
          style={[{ backgroundColor: touched5 ? col[1] : col[0] }, styles.view]}
        />
        <View
          style={[{ backgroundColor: touched6 ? col[1] : col[0] }, styles.view]}
        />
        <View
          style={[{ backgroundColor: touched7 ? col[1] : col[0] }, styles.view]}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={[{ backgroundColor: touched8 ? col[1] : col[0] }, styles.view]}
        />
        <View
          style={[{ backgroundColor: touched9 ? col[1] : col[0] }, styles.view]}
        />
        <View
          style={[
            { backgroundColor: touched10 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched11 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched12 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched13 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched14 ? col[1] : col[0] },
            styles.view,
          ]}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={[
            { backgroundColor: touched15 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched16 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched17 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched18 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched19 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched20 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched21 ? col[1] : col[0] },
            styles.view,
          ]}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={[
            { backgroundColor: touched22 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched23 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched24 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched25 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched26 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched27 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched28 ? col[1] : col[0] },
            styles.view,
          ]}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={[
            { backgroundColor: touched29 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched30 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched31 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched32 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched33 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched34 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched35 ? col[1] : col[0] },
            styles.view,
          ]}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={[
            { backgroundColor: touched36 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched37 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched38 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched39 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched40 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched41 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched42 ? col[1] : col[0] },
            styles.view,
          ]}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={[
            { backgroundColor: touched43 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched44 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched45 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched46 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched47 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched48 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched49 ? col[1] : col[0] },
            styles.view,
          ]}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={[
            { backgroundColor: touched50 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched51 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched52 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched53 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched54 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched55 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched56 ? col[1] : col[0] },
            styles.view,
          ]}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={[
            { backgroundColor: touched57 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched58 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched59 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched60 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched61 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched62 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched63 ? col[1] : col[0] },
            styles.view,
          ]}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={[
            { backgroundColor: touched64 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched65 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched66 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched67 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched68 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched69 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched70 ? col[1] : col[0] },
            styles.view,
          ]}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={[
            { backgroundColor: touched71 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched72 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched73 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched74 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched75 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched76 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched77 ? col[1] : col[0] },
            styles.view,
          ]}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={[
            { backgroundColor: touched78 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched79 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched80 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched81 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched82 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched83 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched84 ? col[1] : col[0] },
            styles.view,
          ]}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={[
            { backgroundColor: touched85 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched86 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched87 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched88 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched89 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched90 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched91 ? col[1] : col[0] },
            styles.view,
          ]}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={[
            { backgroundColor: touched92 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched93 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched94 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched95 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched96 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched97 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched98 ? col[1] : col[0] },
            styles.view,
          ]}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={[
            { backgroundColor: touched99 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched100 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched101 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched102 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched103 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched104 ? col[1] : col[0] },
            styles.view,
          ]}
        />
        <View
          style={[
            { backgroundColor: touched105 ? col[1] : col[0] },
            styles.view,
          ]}
        />
      <View>

        <View style={{ flexDirection: "row" }}>
          <View
            style={[{ backgroundColor: touched1 ? col[1] : col[0] }, styles.view]}
          />
          <View
            style={[{ backgroundColor: touched2 ? col[1] : col[0] }, styles.view]}
          />
          <View
            style={[{ backgroundColor: touched3 ? col[1] : col[0] }, styles.view]}
          />
          <View
            style={[{ backgroundColor: touched4 ? col[1] : col[0] }, styles.view]}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <View
            style={[{ backgroundColor: touched5 ? col[1] : col[0] }, styles.view]}
          />
          <View
            style={[{ backgroundColor: touched6 ? col[1] : col[0] }, styles.view]}
          />
          <View
            style={[{ backgroundColor: touched7 ? col[1] : col[0] }, styles.view]}
          />
          <View
            style={[{ backgroundColor: touched8 ? col[1] : col[0] }, styles.view]}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <View
            style={[{ backgroundColor: touched9 ? col[1] : col[0] }, styles.view]}
          />
          <View
            style={[
              { backgroundColor: touched10 ? col[1] : col[0] },
              styles.view,
            ]}
          />
          <View
            style={[
              { backgroundColor: touched11 ? col[1] : col[0] },
              styles.view,
            ]}
          />
          <View
            style={[
              { backgroundColor: touched12 ? col[1] : col[0] },
              styles.view,
            ]}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <View
            style={[
              { backgroundColor: touched13 ? col[1] : col[0] },
              styles.view,
            ]}
          />
          <View
            style={[
              { backgroundColor: touched14 ? col[1] : col[0] },
              styles.view,
            ]}
          />
          <View
            style={[
              { backgroundColor: touched15 ? col[1] : col[0] },
              styles.view,
            ]}
          />
          <View
            style={[
              { backgroundColor: touched16 ? col[1] : col[0] },
              styles.view,
            ]}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <View
            style={[
              { backgroundColor: touched17 ? col[1] : col[0] },
              styles.view,
            ]}
          />
          <View
            style={[
              { backgroundColor: touched18 ? col[1] : col[0] },
              styles.view,
            ]}
          />
          <View
            style={[
              { backgroundColor: touched19 ? col[1] : col[0] },
              styles.view,
            ]}
          />
          <View
            style={[
              { backgroundColor: touched20 ? col[1] : col[0] },
              styles.view,
            ]}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <View
            style={[
              { backgroundColor: touched21 ? col[1] : col[0] },
              styles.view,
            ]}
          />
          <View
            style={[
              { backgroundColor: touched22 ? col[1] : col[0] },
              styles.view,
            ]}
          />
          <View
            style={[
              { backgroundColor: touched23 ? col[1] : col[0] },
              styles.view,
            ]}
          />
          <View
            style={[
              { backgroundColor: touched24 ? col[1] : col[0] },
              styles.view,
            ]}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <View
            style={[
              { backgroundColor: touched25 ? col[1] : col[0] },
              styles.view,
            ]}
          />
          <View
            style={[
              { backgroundColor: touched26 ? col[1] : col[0] },
              styles.view,
            ]}
          />
          <View
            style={[
              { backgroundColor: touched27 ? col[1] : col[0] },
              styles.view,
            ]}
          />
          <View
            style={[
              { backgroundColor: touched28 ? col[1] : col[0] },
              styles.view,
            ]}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <View
            style={[
              { backgroundColor: touched29 ? col[1] : col[0] },
              styles.view,
            ]}
          />
          <View
            style={[
              { backgroundColor: touched30 ? col[1] : col[0] },
              styles.view,
            ]}
          />
          <View
            style={[
              { backgroundColor: touched31 ? col[1] : col[0] },
              styles.view,
            ]}
          />
          <View
            style={[
              { backgroundColor: touched32 ? col[1] : col[0] },
              styles.view,
            ]}
          />
        </View>
        </View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={showButton}
          presentationStyle="overFullScreen"
        >
          <View style={{ flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "flex-end" }}>
            <GreyButton
              title="Ça ne marche pas"
              onPress={() => {
                setTestFailed(true)
                setModalOutVisible(true)
                setShowButton(false)
                clearTimeout()
              }}
              style={{ margin: 20, width: 200 }}
            />
            <MainButton title="Continuer" style={{ margin: 10, width: 200 }} />
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default tactileScreenTest;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  view: {
    height: H / 15,
    width: W / 7,
    borderColor: color.secondary,
    borderWidth: 1,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 350,
    height: 175,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
});
