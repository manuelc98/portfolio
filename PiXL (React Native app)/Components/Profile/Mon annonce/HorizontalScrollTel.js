import React, { useState } from "react";
import { ScrollView, View, Image, StyleSheet } from "react-native";
import Dot from "./Dot";

const HorizontalScrollTel = (props) => {
  let key = 0;

  function manageDots(k) {
    if (k == 0) {
      setKeys([1, 0.5, 0.5]);
    }
    if (k == 200) {
      setKeys([0.5, 1, 0.5]);
    }
    if (k == 400) {
      setKeys([0.5, 0.5, 1]);
    }
  }

  const [keys, setKeys] = useState([1, 0.5, 0.5]);
  return (
    <View style={[styles.globalContainer, props.styleFlex]}>
      <ScrollView
        style={styles.scrollContainer}
        snapToAlignment="center"
        horizontal={true}
        decelerationRate="fast"
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          // scroll animation ended
          key = event.nativeEvent.contentOffset.x;
          manageDots(key);
        }}
      >
        <Image style={styles.img} source={{ uri: props.img1 }} />
        <Image style={styles.img} source={{ uri: props.img2 }} />
        <Image style={styles.img} source={{ uri: props.img3 }} />
      </ScrollView>
      <View style={styles.dotContainer}>
        <Dot clef={keys[0]} />
        <Dot clef={keys[1]} />
        <Dot clef={keys[2]} />
      </View>
    </View>
  );
};

export default HorizontalScrollTel;

const styles = StyleSheet.create({
  img: {
    height: 200,
    width: 200,
  },
  scrollContainer: {
    marginHorizontal: 20,
    width: 200,
  },
  globalContainer: {
    alignItems: "center",
  },
  dotContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 10,
    marginHorizontal: 20,
  },
});
