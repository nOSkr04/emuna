import { StyleSheet, View } from "react-native";
import React from "react";
import { Mon500, Mon600 } from "../StyledText";
import { Colors } from "../../constants/Colors";

const IntervalChoose = () => {
  return (
    <View >
      <Mon600 style={styles.text}>Интервал оруулах</Mon600>
      <View style={styles.contentContainer}>
        <Mon500>Өдөр тутам</Mon500>
      </View>
    </View>
  );
};

export default IntervalChoose;

const styles = StyleSheet.create({
 text: {
  marginVertical  : 8,
  fontSize        : 11,
  lineHeight      : 16,
  letterSpacing   : 0.15,
  color           : Colors.newText,
  marginHorizontal: 16
 },
 contentContainer: {
  borderWidth : 1,
  borderColor : Colors.strokeDark,
  borderRadius: 16
 }
});