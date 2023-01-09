import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { Dispatch, SetStateAction, memo } from "react";
import { Colors } from "../../constants/Colors";

type Props = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  style: { color: string };
  width: string;
  title: string;
  maxLength: number;
  textStyle: { color: string };
}

const BirthDayField = memo(({
  value,
  setValue,
  style,
  width,
  title,
  maxLength,
  textStyle,
}: Props) => {
  return (
    <View style={{ width: width }}>
      <Text style={[styles.birthTitle, textStyle]}>{title}</Text>
      <TextInput keyboardType={"number-pad"} maxLength={maxLength} onChangeText={setValue} style={[styles.birthInput, style]} value={value} />
    </View>
  );
});

BirthDayField.displayName="BirthDayField";

const styles = StyleSheet.create({
  birthTitle: {
    position         : "absolute",
    top              : -8,
    left             : 10,
    zIndex           : 9,
    backgroundColor  : Colors.white,
    borderRadius     : 10,
    paddingHorizontal: 5,
    fontSize         : 12,
    fontFamily       : "Mon500",
  },
  birthInput: {
    borderWidth : 1,
    height      : 56,
    borderRadius: 17,
    paddingLeft : 5,
    fontFamily  : "Mon600",
    borderColor : Colors.strokeDark,
  },
});

export default BirthDayField;
