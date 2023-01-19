import { GestureResponderEvent, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { ReactElement, memo } from "react";
import { Colors } from "../constants/Colors";

import { Mon500 } from "./StyledText";

type Props = {
  onPress: (event: GestureResponderEvent) => void;
  text: string;
  icon?: ReactElement;
};

const ButtonInput = memo(({ onPress, text, icon }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {icon && <View style={styles.icon}>{icon}</View>}
      <Mon500 style={styles.text}>{text}</Mon500>
    </TouchableOpacity>
  );
});

ButtonInput.displayName = "ButtonInput";

export default ButtonInput;

const styles = StyleSheet.create({
  container: {
    height          : 48,
    borderRadius    : 8,
    borderWidth     : 1,
    borderColor     : Colors.strokeDark,
    marginTop       : 4,
    marginHorizontal: 16,
    flexDirection   : "row",
    alignItems      : "center",
  },
  icon: {
    marginHorizontal: 8,
  },
  text: {
    fontSize     : 14,
    lineHeight   : 20,
    letterSpacing: 0.25,
    opacity      : 0.72,
  },
});
