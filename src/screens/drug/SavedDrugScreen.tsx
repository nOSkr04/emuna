import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import { Colors } from "../../constants/Colors";
import { FlashList } from "@shopify/flash-list";
import { Mon500, Mon700 } from "../../components/StyledText";
import DotIcon from "../../../assets/svg/dot.svg";
import { useNavigation } from "@react-navigation/native";
const SavedDrugScreen = memo(() => {
  const navigation = useNavigation();
  const data = [
    { id: 1, name: "Ibuprofen", capsule: "capsule", size: "400 мг" },
    { id: 2, name: "Ibuprofen", capsule: "capsule", size: "400 мг" },
    { id: 3, name: "Ibuprofen", capsule: "capsule", size: "400 мг" },
    { id: 4, name: "Ibuprofen", capsule: "capsule", size: "400 мг" },
    { id: 5, name: "Ibuprofen", capsule: "capsule", size: "400 мг" },
    { id: 6, name: "Ibuprofen", capsule: "capsule", size: "400 мг" },
    { id: 7, name: "Ibuprofen", capsule: "capsule", size: "400 мг" },
    { id: 8, name: "Ibuprofen", capsule: "capsule", size: "400 мг" },
    { id: 9, name: "Ibuprofen", capsule: "capsule", size: "400 мг" },
    { id: 10, name: "Ibuprofen", capsule: "capsule", size: "400 мг" },
  ];
  const onPress = () => {
navigation.navigate("SavedDrugMenuSheets");
  };
  return (
    <View style={styles.root}>
      <FlashList
      data={data}
      estimatedItemSize={80}
      renderItem={({ item }) => {
        return (
          <>
            <TouchableOpacity onPress={onPress} style={styles.container}>
              <Mon700 style={styles.name}>{item.name}</Mon700>
              <View style={styles.descriptionContainer}>
                <Mon500 style={styles.description}>{item.capsule} </Mon500>
                <DotIcon color={Colors.text}   />
                <Mon500 style={styles.description}> {item.size}</Mon500>
              </View>
            </TouchableOpacity>
            <View style={styles.border} />
          </>
        );
      }}
      showsVerticalScrollIndicator={false}
    />
    </View>
  );
});

SavedDrugScreen.displayName ="SavedDrugScreen";

export default SavedDrugScreen;

const styles = StyleSheet.create({
  root: {
flex           : 1,
backgroundColor: Colors.white
  },
  container: {
marginHorizontal: 16,
marginTop       : 8,
paddingTop      : 8,
paddingBottom   : 16
  },
  name: {
    fontSize     : 15,
    lineHeight   : 24,
    letterSpacing: 0.15,
  },
  description: {
    fontSize     : 14,
    lineHeight   : 20,
    letterSpacing: 0.1,
    opacity      : 0.64,
    color        : Colors.text,
    marginTop    : 4
  },
  descriptionContainer: {
    flexDirection: "row",
    alignItems   : "center",
  },
  border: {
    borderWidth: 1,
    borderColor: Colors.strokeDark
  }
});
