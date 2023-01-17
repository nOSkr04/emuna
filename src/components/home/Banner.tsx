import { Animated,  Dimensions,  StyleSheet,  TouchableOpacity,View } from "react-native";
import React, { memo, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../constants/Colors";


const { width,  } = Dimensions.get("screen");
const ITEM_WIDTH = width * 0.92;
const ITEM_HEIGHT = 198;
const viewConfigRef = { viewAreaCoveragePercentThreshold: 95 };

const Banner = memo(({ imageData }: any) => {
  const navigation = useNavigation();
  let flatListRef = useRef<any>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const onViewRef = useRef(({ changed }: { changed: any }) => {
    if (changed[0].isViewable) {
      setCurrentIndex(changed[0].index);
    }
  });
  const scrollToIndex = (index: number) => {
    flatListRef.current?.scrollToIndex({ index: index });
  };
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.contentContainer} >
      <Animated.FlatList
        data={imageData}
        horizontal
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
        onViewableItemsChanged={onViewRef.current}
        pagingEnabled
        ref={flatListRef}
        renderItem={({ item, index }) => {
          const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [-width * 0.7, 0, width * 0.7],
          });
          return (
            <View style={styles.container}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("AdsDetailScreen", { id: item._id });
                }}
                style={styles.imageContainer}>
                <Animated.Image source={{ uri: item.image }} style={[styles.image, { transform: [{ translateX }] }]} />
              </TouchableOpacity>
            </View>
          );
        }}
        showsHorizontalScrollIndicator={false}
        viewabilityConfig={viewConfigRef}
      />
      <View style={styles.dotContainer}>
        {imageData.map((image: any, index: number) => {
          return (
            <TouchableOpacity
              key={image.id}
              onPress={() => scrollToIndex(index)}
              style={[styles.dot, currentIndex === index ? styles.activeDotColor : styles.unActiveDotColor]}
            />
          );
        })}
      </View>
      {/* <Modal isVisible={isModalVisible} onBackdropPress={toggleModal} onSwipeComplete={toggleModal} swipeDirection="down">
        <View style={styles.modalContainer}>
          <Image source={{ uri: modalData?.image }} style={styles.modalImage} />
          <Text style={styles.modalText}>{modalData?.text}</Text>
          <Button onPress={toggleModal} title="Hide modal" />
        </View>
      </Modal> */}
    </View>
  );
});

Banner.displayName = "Banner";

export default Banner;

const styles = StyleSheet.create({
  container: {
    width,
    justifyContent: "center",
    alignItems    : "center",
  },
  contentContainer: {
    marginTop   : 16,
    marginBottom: 40
  },
  imageContainer: {
    width       : ITEM_WIDTH,
    height      : ITEM_HEIGHT,
    overflow    : "hidden",
    alignItems  : "center",
    borderRadius: 18,
    borderColor : Colors.white,
  },
  image: {
    width     : ITEM_WIDTH,
    height    : ITEM_HEIGHT,
    resizeMode: "cover",
  },
  dotContainer: {
    flexDirection: "row",
    position     : "absolute",
    bottom       : 8,
    alignSelf    : "center",
  },
  dot: {
    width           : 32,
    height          : 6,
    borderRadius    : 10,
    marginHorizontal: 4,
  },
  activeDotColor: {
    backgroundColor: Colors.white,
  },
  unActiveDotColor: {
    backgroundColor: Colors.transparent,
  },

});
