import React, {useEffect, useState} from 'react';
import * as Battery from 'expo-battery';
import { StyleSheet, View, Image, Modal } from 'react-native';
import GreyButton from '../../../Components/common/GreyButton';
import MainButton from "../../../Components/common/MainButton";
import Subtitle from "../../../Components/common/Subtitle";

const batteryTest = ({route, navigation}) =>{
  const [batteryState, setBatteryState] = useState(null);
  const [_subscription, _set_subscription] = useState();
  const [testResult, setTestResult] = useState(false);
  const [modalTransition, setModalTransition] = useState(false);
  const countTest = route.params.countTest;

    useEffect(() => {
    if (_subscription) {
      _unsubscribe();
    } else {
      _subscribe();
    }
  }, []);

  const _subscribe = ()=>{
    _set_subscription( Battery.addBatteryStateListener(({ batteryState }) => {
      setBatteryState({ batteryState })
      console.log(batteryState)
      if(batteryState == 2){
        setTestResult(true), setModalTransition(true)
      }
    }))}

    const _unsubscribe = ()=>{
      _subscription && _subscription.remove()
      _set_subscription(null)
    }

return (
      <View style={styles.screenContainer}>
        <Modal //Pop up de transition
        animationType="slide"
        transparent={true}
        visible={modalTransition}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Subtitle style={{ marginBottom: 10 }} text={testResult ? "Test réussi" : "Mince..."} />
            <MainButton
              onPress={() => {
                navigation.navigate("Recap",
                  testResult ? {
                    countTest: {"Battery": 1},
                  }
                  : {countTest : {"Battery" : 0}
                }),
                  setModalTransition(false);
              }}
              title={"Continuer"}
              style={{ width: 150, height: 50, borderRadius: 10 }}
            />
          </View>
        </View>
      </Modal>
        <View>
        <Subtitle text="Mettez votre téléphone à charger" />
        <Subtitle text="Débranchez puis rebranchez le s'il est déjà en charge" />
        </View>
        <Image style={{height:144, width:144 }} source={require('../../../assets/charging_battery.png')} />
        <GreyButton onPress={()=>setModalTransition(true)} title="Ça ne marche pas" />
      </View>
    );

}

export default batteryTest;

const styles = StyleSheet.create({
    screenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal:30
  },centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  }, modalView: {
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
})