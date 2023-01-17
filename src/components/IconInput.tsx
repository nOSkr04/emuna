import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { memo } from "react";
import { Colors } from "../constants/Colors";

type Props = {
value: string
onChangeText?: (text: string) => void
title:string;
icon: React.ReactElement;

}
const IconInput = memo(({ value,onChangeText,title,icon }: Props) => {
  return (
    <>
      <Text style={styles.inputLabel}>{title}</Text>
      <View style={styles.container}>
        {icon && 
          <View style={styles.icon}>
            {icon}
          </View>
    }
        <TextInput onChangeText={onChangeText} style={styles.input} value={value}  />
      </View>
    </>
  );
});

IconInput.displayName = "IconInput";

export default IconInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems   : "center",
  },
  icon: {
    position: "absolute",
    left    : 30,
    top     : 24
  },
  input: {
    borderWidth     : 1,
    marginHorizontal: 16,
    height          : 48,
    borderColor     : Colors.strokeDark,
    borderRadius    : 8,
    marginTop       : 8,
    // padding         : 8,
    fontSize        : 14,
    color           : Colors.newText,
    opacity         : 0.72,
    lineHeight      : 20,
    letterSpacing   : 0.25,
    fontFamily      : "Mon500",
    flex            : 1,
    paddingLeft     : 40
  },
  inputLabel: {
    fontSize        : 11,
    fontFamily      : "Mon600",
    color           : Colors.newText,
    opacity         : 0.72,
    marginHorizontal: 24,
    marginTop       : 16,
    lineHeight      : 16,
    letterSpacing   : 0.15  
  },
});
