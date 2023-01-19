import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useRef, useState } from "react";
import Animated from "react-native-reanimated";
import DrugDetail from "./TopTabDetail/DrugDetail";
import DrugSummary from "./TopTabDetail/DrugSummary";
import { Colors } from "../../constants/Colors";
import Button from "../../components/Button";
import { Mon700 } from "../../components/StyledText";
import { useNavigation } from "@react-navigation/native";
import BackIcon from "../../../assets/svg/back.svg";
import SaveIcon from "../../../assets/svg/save.svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const EditPlace = () => {
  const scrollA = useRef(new Animated.Value(0)).current;
  const insents = useSafeAreaInsets();
  const navigation = useNavigation();
  const [type, setType] = useState(1);
  return (
    <>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
          <BackIcon />
        </TouchableOpacity>
        <View style={styles.saveIcon}>
          <SaveIcon color={Colors.white} height={20} width={20} />
        </View>
      </View>
      <Animated.ScrollView
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollA } } }], { useNativeDriver: true })}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        style={[styles.root, { marginTop: insents.top }]}>
        <View>
          <Animated.Image
            source={require("../../../assets/images/bg.jpg")}
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
        </View>
        <View style={styles.container}>
          <View style={styles.topTabs}>
            <TouchableOpacity onPress={() => setType(1)} style={[styles.tabs, type === 1 && styles.active]}>
              <Mon700 style={[styles.tabsTitle, type === 1 && styles.primaryColor]}>Хураангуй</Mon700>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setType(2)} style={[styles.tabs, type === 2 && styles.active]}>
              <Mon700 style={[styles.tabsTitle, type === 2 && styles.primaryColor]}>Дэлгэрэнгүй</Mon700>
            </TouchableOpacity>
          </View>
        </View>
        {type === 1 ? <DrugDetail /> : <DrugSummary />}
      </Animated.ScrollView>
      <View style={styles.button}>
        <Button onPress={() => navigation.navigate("AddDrugAlertScreen")} title={"Үргэлжлүүлэх"} />
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
    height: 256,
    width : "100%",
  },
  container: {
    backgroundColor: Colors.white,
  },
  topTabs: {
    flexDirection : "row",
    justifyContent: "space-between",
  },
  tabs: {
    width         : "50%",
    justifyContent: "center",
    alignItems    : "center",
    height        : 42,
  },
  active: {
    borderBottomWidth: 2,
    borderColor      : Colors.primary,
  },
  tabsTitle: {
    fontSize  : 14,
    lineHeight: 20,
  },
  primaryColor: {
    color: Colors.primary,
  },
  button: {
    backgroundColor  : Colors.white,
    paddingBottom    : 20,
    paddingTop       : 20,
    paddingHorizontal: 20,
  },
  headerContainer: {
    position      : "absolute",
    top           : 50,
    zIndex        : 999,
    flexDirection : "row",
    justifyContent: "space-between",
    left          : 16,
    right         : 16,
  },
  backIcon: {
    width          : 40,
    height         : 40,
    backgroundColor: Colors.white,
    borderRadius   : 100,
    alignItems     : "center",
    justifyContent : "center",
  },
  saveIcon: {
    width          : 40,
    height         : 40,
    backgroundColor: Colors.primary,
    borderRadius   : 100,
    alignItems     : "center",
    justifyContent : "center",
  },
});
