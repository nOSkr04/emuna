import { GestureResponderEvent, StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity,  ViewStyle } from "react-native";
import React, { memo } from "react";
import { Colors } from "../constants/Colors";
import Layout from "../constants/Layout";

type Props = {
  onPress: (event: GestureResponderEvent) => void;
  secondary?: boolean;
  danger?: boolean;
  block?: boolean;
  title: string;
  icon?: React.ReactElement;
  iconRight?: React.ReactElement;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  disabled?: boolean
};

const Button = memo(({ onPress, secondary, danger, title, block, icon, style, titleStyle,iconRight, disabled }: Props) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[secondary ? styles.secondaryButton : danger ? styles.dangerButton : block ? styles.blockButton : styles.buttonContainer, style]}>
      {icon && icon}
      <Text style={[block ? styles.blockTitle : secondary ? styles.secondaryTitle : styles.buttonTitle, titleStyle]}>{title}</Text>
      {iconRight && iconRight}
    </TouchableOpacity>
  );
});

Button.displayName = "Button";

const styles = StyleSheet.create({
  buttonContainer: {
    height         : 48,
    borderRadius   : 8,
    backgroundColor: Colors.primary,
    justifyContent : "center",
    alignItems     : "center",
  },
  secondaryButton: {
    height         : 48,
    borderRadius   : 8,
    backgroundColor: Colors.secondaryButton,
    justifyContent : "center",
    alignItems     : "center",
  },
  dangerButton: {
    height         : 48,
    borderRadius   : 8,
    backgroundColor: Colors.danger,
    justifyContent : "center",
    alignItems     : "center",
  },
  blockButton: {
    borderWidth   : 1,
    borderColor   : Colors.primary,
    flexDirection : "row",
    alignItems    : "center",
    height        : 48,
    borderRadius  : 8,
    width         : Layout.window.width * 0.8,
    justifyContent: "center",
    marginTop     : 16,
  },

  blockTitle: {
    fontSize  : 14,
    fontFamily: "Mon700",
    textAlign : "center",
    lineHeight: 20
  },
  buttonTitle: {
    fontFamily: "Mon700",
    fontSize  : 14,
    color     : Colors.white,
    lineHeight: 20
  },
  secondaryTitle: {
    fontFamily: "Mon700",
    fontSize  : 14,
    color     : Colors.darkGrey,
    lineHeight: 20
  },
});

export default Button;
