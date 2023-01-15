import { StyleSheet, View } from "react-native";
import React, { memo } from "react";
import { Colors } from "../constants/Colors";

const UnCheckedRadio =memo( () => {
  return (
    <View style={styles.radioContainer}>
      <View style={styles.radio} />
    </View>
  );
});

UnCheckedRadio.displayName="UnCheckedRadio";

export default UnCheckedRadio;

const styles = StyleSheet.create({
  radioContainer: {
    width         : 24,
    height        : 24,
    alignItems    : "center",
    justifyContent: "center",
  },
  radio: {
    width       : 16.5,
    height      : 16.5,
    borderWidth : 1,
    borderRadius: 100,
    borderColor : Colors.text,
  },

});