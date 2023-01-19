import { StyleSheet,  Text,  TouchableOpacity,  View } from "react-native";
import React, { useRef, useState } from "react";
import Animated from "react-native-reanimated";
import { Colors } from "../constants/Colors";
import Test1 from "./Test1";
import Test2 from "./Test2";
import { Button } from "@goodtechsoft/xs-core-native";

const EditPlace = () => {
  const scrollA = useRef(new Animated.Value(0)).current;
  const [type,setType] = useState(1);
  return (
    <>
      <Animated.ScrollView
    onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollA } } }], { useNativeDriver: true })}
    scrollEventThrottle={16}
    showsVerticalScrollIndicator={false}
    style={styles.root}>
        <Animated.Image
      source={require("../assets/123.jpeg")}
      style={[
        styles.image,
        {
          transform: [
            {
              translateY: scrollA,
            },
          ],
        },
      ]}
    />
        <View style={styles.container}>
          <View style={styles.topTabs}>
            <TouchableOpacity onPress={() => setType(1)} style={[styles.tabs, type === 1 && styles.active]}>
              <Text>1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setType(2)} style={[styles.tabs, type === 2 && styles.active]}>
              <Text>2</Text>
            </TouchableOpacity>
          </View>
        </View>
        {type === 1 ? <Test1/> : <Test2/>}
      </Animated.ScrollView>
      <View style={{  backgroundColor: Colors.white, paddingBottom: 20, paddingTop: 20, paddingHorizontal: 20 }}>
        <Button  size="large" title={"amazon2"} type="primary" />
      </View>
    </>
  );
};

export default EditPlace;

const styles = StyleSheet.create({
  root: {
    flex           : 1,
    backgroundColor: Colors.white,
  },
  image: {
    height: 200,
    width : "100%"
  },
  container: {
    backgroundColor: Colors.white
  },
  topTabs: {
    flexDirection : "row",
    justifyContent: "space-between"
  },
  tabs: {
    width         : "50%",
    justifyContent: "center",
    alignItems    : "center",
    height        : 42,
  },
  active: {
    borderBottomWidth: 1.5
  }
  
});