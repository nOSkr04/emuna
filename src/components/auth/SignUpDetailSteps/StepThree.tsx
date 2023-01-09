import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { memo } from "react";
import EmunaChats from "./EmunaChats";
import { Colors } from "../../../constants/Colors";

type Props = {
    gender:string[];
    stepThree:(id: number, index: number) => void
  }

const StepThree = memo(({  gender,stepThree } : Props) => {
  return (
    <>
      <EmunaChats chat1="Ойлголоо. Таны хүйс?" />
      {gender.map((e, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    stepThree(4, index);
                  }}
                  style={gender.length === 1 ?styles.unUserContainer : styles.userContainer }>
                  <Text style={gender.length ===1 ? styles.unUserMessage: styles.userMessage}>{e}</Text>
                  {/* <Text style={[styles.userMessage, { color: gender.length === 1 ? Colors.white : Colors.black }]}>{e}</Text> */}
                </TouchableOpacity>
              );
            })}
    </>
  );
});

StepThree.displayName="StepThree";

const styles = StyleSheet.create({
  unUserContainer: {
    marginRight    : 18,
    alignSelf      : "flex-end",
    borderWidth    : 1,
    borderColor    : Colors.strokeDark,
    justifyContent : "center",
    alignItems     : "center",
    borderRadius   : 16,
    marginTop      : 24,
    backgroundColor: Colors.strokeDark
  },
  userContainer: {
    marginRight   : 18,
    alignSelf     : "flex-end",
    borderWidth   : 1,
    borderColor   : Colors.primary,
    justifyContent: "center",
    alignItems    : "center",
    borderRadius  : 16,
    marginTop     : 24,
  },
  unUserMessage: {
    fontSize         : 14,
    fontFamily       : "Mon500",
    color            : Colors.darkGrey,
    opacity          : 0.72,
    paddingVertical  : 8,
    paddingHorizontal: 16
  },
  userMessage: {
    fontSize         : 14,
    fontFamily       : "Mon500",
    color            : Colors.newText,
    opacity          : 0.72,
    paddingVertical  : 8,
    paddingHorizontal: 16
  },
});

export default StepThree;
