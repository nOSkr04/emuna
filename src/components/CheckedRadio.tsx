import { StyleSheet,  View } from "react-native";
import React, { memo } from "react";
import { Colors } from "../constants/Colors";

const CheckedRadio =memo( () => {
  return (
    <View style={styles.radioContainer}>
      <View style={styles.selectedRadioCont}>
        <View style={styles.selectedRadio} />
      </View>
    </View>
  );
});

CheckedRadio.displayName ="CheckedRadio";
export default CheckedRadio;

const styles = StyleSheet.create({
  radioContainer: {
    width         : 24,
    height        : 24,
    alignItems    : "center",
    justifyContent: "center",
  },
  selectedRadioCont: {
    justifyContent: "center",
    alignItems    : "center",
    width         : 16.5,
    height        : 16.5,
    borderWidth   : 1,
    borderRadius  : 100,
    borderColor   : Colors.primary,
  },
  selectedRadio: {
    backgroundColor: Colors.primary,
    height         : 10,
    width          : 10,
    borderRadius   : 100,
  },
});