import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import ClocIcon from "../../../assets/svg/clock.svg";
import { Colors } from "../../constants/Colors"; 
const DrugHeaderContent = memo(() => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Миний эм</Text>
      {/* <TouchableOpacity style={styles.iconContainer}>
        <ClocIcon/>
      </TouchableOpacity> */}
    </View>
  );
});

DrugHeaderContent.displayName="DrugHeaderContent";

export default DrugHeaderContent;

const styles = StyleSheet.create({
  container: {
    flexDirection   : "row",
    justifyContent  : "space-between",
    marginHorizontal: 16,
    alignItems      : "center",
    marginTop       : 12
  },
  iconContainer: {
    padding: 12
  },
  title: {
    fontSize     : 15,
    fontFamily   : "Mon700",
    lineHeight   : 24,
    letterSpacing: 0.15,
    color        : Colors.newText
  }
});