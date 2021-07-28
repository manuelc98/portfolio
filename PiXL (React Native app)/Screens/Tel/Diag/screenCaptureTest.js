import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
/*export default class ScreenCaptureTest extends React.Component {
  componentDidMount() {
    ScreenCapture.addScreenshotListener(() => {
      alert('Thanks for screenshotting my beautiful app 😊');
    });
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Take a screenshot</Text>
      </View>
    );
  }
}*/

const ScreenCaptureTest =({route, navigation})=>{
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
    _set_subscription( addScreenshotListener(() => {
      console.log("screenshot taken")}))}

    const _unsubscribe = ()=>{
      _subscription && _subscription.remove()
      _set_subscription(null)
    }

return(
  <View>
    <Text>Test</Text>
  </View>
)
}

export default ScreenCaptureTest;