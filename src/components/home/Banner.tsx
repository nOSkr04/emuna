/* eslint-disable react/react-in-jsx-scope */
import { Dimensions, StyleSheet, View } from "react-native";
import { memo, useRef } from "react";
import Animated from "react-native-reanimated";
import { Colors } from "../../constants/Colors";
const { width } = Dimensions.get("screen");
const ITEM_WIDTH = width * 0.96;
const ITEM_HEIGHT = 200;
const TabTwoScreen = memo(({ imageData }: any) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View>
      <Animated.FlatList
        data={imageData}
        horizontal
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: true })}
        pagingEnabled
        renderItem={({ item, index }) => {
          const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [-width * 0.7, 0, width * 0.7],
          });
          return (
            <View style={styles.container}>
              <View style={styles.contentContainer}>
                <Animated.Image source={{ uri: item.ads }} style={[styles.ads, { transform: [{ translateX }] }]} />
              </View>
            </View>
          );
        }}
      />
    </View>
  );
});

TabTwoScreen.displayName = "TabTwoScreen";
const styles = StyleSheet.create({
  container: {
    width,
    justifyContent: "center",
    alignItems    : "center",
    marginTop     : 16,
    marginBottom  : 40,
  },
  contentContainer: {
    width       : ITEM_WIDTH,
    height      : ITEM_HEIGHT,
    overflow    : "hidden",
    alignItems  : "center",
    borderRadius: 18,
    borderColor : Colors.white,
  },
  ads: {
    width     : ITEM_WIDTH,
    height    : ITEM_HEIGHT,
    resizeMode: "cover",
  },
});

export default TabTwoScreen;
