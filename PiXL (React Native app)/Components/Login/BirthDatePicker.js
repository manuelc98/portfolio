import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
//import DateTimePicker from "@react-native-community/datetimepicker";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import UserTextInput from "./UserTextInput";
import { TouchableOpacity } from "react-native-gesture-handler";

const BirthDatePicker = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [shownDate, setshownDate] = useState("");

  onConfirmDate = (enteredDate) => {
    setDate(enteredDate);
    setShow(false);
  };

  if (date.getDate() < 10) {
    var day = "0" + date.getDate();
  } else {
    var day = date.getDate().toString();
  }
  if (date.getMonth() + 1 < 10) {
    var month = "0" + (date.getMonth() + 1);
  } else {
    var month = (date.getMonth() + 1).toString();
  }

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => setShow(true)}>
          <UserTextInput
            title="Date de naissance"
            placeholder="JJ-MM-YYY"
            value={shownDate}
            editable={false}
          />
        </TouchableOpacity>

        <DateTimePickerModal
          headerTextIOS="Entrez votre date de naissance"
          cancelTextIOS="Retour"
          confirmTextIOS="Valider"
          isVisible={show}
          onConfirm={onConfirmDate}
          onCancel={() => setShow(false)}
          mode="date"
          date={date}
          maximumDate={new Date()}
          onHide={() =>
            setshownDate(day + "-" + month + "-" + date.getFullYear())
          }
        />
      </View>
      {/*{show && (
        <DateTimePicker
          onChange={onDateChange}
          value={date}
          mode="date"
          style={{ width: 500 }}
          maximumDate={new Date()}
        />
      )}*/}
    </View>
  );
};

export default BirthDatePicker;
const styles = StyleSheet.create({
  text: {
    fontSize: 21,
    fontWeight: "bold",
  },
});
