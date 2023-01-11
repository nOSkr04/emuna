/* eslint-disable react/hook-use-state */
/* eslint-disable react-hooks/rules-of-hooks */
import { Image,  StyleSheet,    View, useWindowDimensions } from "react-native";
import React, {  useState } from "react";
import Animated, { interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from "react-native-reanimated";

const Banner = ({ imageData }: any) => {
  const { width } = useWindowDimensions();
  const [newData] = useState([{ key: "spacer-left" }, ...imageData, { key: "spacer-right" }]);
  const SIZE = width * 0.8;
  const SPACER = (width - SIZE) / 2;
  const x = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      x.value = event.contentOffset.x;
    },
  });
  return (
    <>
      <Animated.ScrollView
      bounces={false}
      decelerationRate="fast"
      horizontal
      onScroll={onScroll}
      scrollEventThrottle={16}
      showsHorizontalScrollIndicator={false}
      snapToInterval={SIZE}>
        {newData.map((item, index) => {
        const style = useAnimatedStyle(() => {
          const scale = interpolate(
            x.value,
            [(index-2) * SIZE, (index - 1) * SIZE, index * SIZE],
            [0.88, 1, 0.88]
            );
            return{
              transform: [{
                scale
              }]
            };
          });
          if (!item.ads) {
            return <View key={index} style={{ width: SPACER }} />;
          }
          return (
            <View key={index} style={{ width: SIZE }}>
              <Animated.View style={[styles.imageContainer, style]}>
                <Image source={{ uri: item.ads }} style={styles.image} />
              </Animated.View>
            </View>
        );
      })}
      </Animated.ScrollView>
      {/* {imageData.map((e,index) => {
        return(
          <Text style={styles.activeDot}>{index}</Text>
          // <View key={index}  style={styles.activeDot} />
          );
        })} */}
    </>
  );
};

export default Banner;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 34,
    overflow    : "hidden",
    marginTop   : 16,
    marginBottom: 40
  },
  image: {
    width      : "100%",
    height     : 192,
    aspectRatio: 2/1,
  },
  // activeDot: {
  //   width          : 100,
  //   height         : 20,
  //   backgroundColor: Colors.redPill,
  //   zIndex         : 10,
  //   position       : "absolute",
  //   bottom         : 10,
  //   alignSelf      : "center"
  // }
});
