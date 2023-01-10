import { Dimensions, ImageBackground, StyleSheet,  View } from "react-native";
import React, { memo } from "react";
import { Colors } from "../../constants/Colors";

const { width } = Dimensions.get("window");
const Banner = memo(({ ads }: { ads: string }) => {
  return (
    <ImageBackground imageStyle={styles.image} source={{ uri: ads }} style={styles.container}>
      <View style={styles.indicatorContainer}>
        <View style={styles.activeIndicator} />
        <View style={styles.unActiveIndicator} />
        <View style={styles.unActiveIndicator} />
      </View>
    </ImageBackground>
  );
});

Banner.displayName = "Banner";

export default Banner;

const styles = StyleSheet.create({
  container: {
    height        : 192,
    width         : width * 0.92,
    marginTop     : 16,
    marginBottom  : 40,
    alignItems    : "center",
    justifyContent: "flex-end",
  },
  image: {
    height      : 192,
    width       : width * 0.92,
    borderRadius: 16,
  },
  indicatorContainer: {
    flexDirection: "row",
    marginBottom : 8,
  },
  activeIndicator: {
    backgroundColor: Colors.white,
    borderRadius   : 8,
    height         : 6,
    width          : 32,
    marginLeft     : 4,
  },
  unActiveIndicator: {
    backgroundColor: Colors.unActive,
    borderRadius   : 8,
    height         : 6,
    width          : 32,
    marginLeft     : 4,
    opacity        : 0.7
  },
});
