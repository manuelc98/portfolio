import React from 'react';
import View from 'react-native';
import NetInfo from "@react-native-community/netinfo";

// Subscribe
const unsubscribe = NetInfo.addEventListener(state => {
  console.log("Connection type", state.type);
  console.log("Is connected?", state.isConnected);
});

// Unsubscribe
unsubscribe();

NetInfo.fetch().then(state => {
  console.log("Connection type", state.type);
  console.log("Is connected?", state.isConnected);
});

const diagTest = () => {
    return(
        <View>
            <Text>Test</Text>
        </View>
    )
}

export default diagTest;

