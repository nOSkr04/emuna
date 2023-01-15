import { StyleSheet,  View } from "react-native";
import React, { memo } from "react";
import CheckIcon from "../../assets/svg/Check.svg";
import { Colors } from "../constants/Colors";
const CheckedBox = memo(() => {
  return (
    <View style={styles.activeCheck}>
      <CheckIcon />
    </View>
  );
});

CheckedBox.displayName = "CheckedBox";

export default CheckedBox;

const styles = StyleSheet.create({
  activeCheck: {
    backgroundColor: Colors.primary,
    width          : 20,
    height         : 20,
    alignItems     : "center",
    justifyContent : "center",
  },
});