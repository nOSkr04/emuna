import { StyleSheet,  View } from "react-native";
import React, { memo } from "react";
import { Colors } from "../constants/Colors";

const UnCheckedBox = memo(() => {
  return (
    <View style={styles.unActiveCheck} />
  );
});

UnCheckedBox.displayName = "UnCheckedBox";

export default UnCheckedBox;

const styles = StyleSheet.create({
  unActiveCheck: {
    opacity    : 0.64,
    borderColor: Colors.text,
    borderWidth: 0.5,
    width      : 19,
    height     : 19,
  },
});