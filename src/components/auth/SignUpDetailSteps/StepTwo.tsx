import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { memo } from "react";
import EmunaChats from "./EmunaChats";
import { Colors } from "../../../constants/Colors";

type Props = {
    nameInput: boolean;
    firstName:string
  }

const StepTwo = memo(({ nameInput, firstName } : Props) => {
  return (
    <>
      <EmunaChats chat1="Гайхалтай. Таны нэр хэн бэ?" />
      {!nameInput && (
        <TouchableOpacity style={styles.unUserContainer}>
          <Text style={styles.unUserMessage}>{firstName}</Text>
        </TouchableOpacity>
            )}
    </>
  );
});

StepTwo.displayName="StepTwo";

const styles = StyleSheet.create({
  unUserContainer: {
    marginRight    : 18,
    alignSelf      : "flex-end",
    borderWidth    : 1,
    borderColor    : Colors.chatBotBg,
    justifyContent : "center",
    alignItems     : "center",
    borderRadius   : 16,
    marginTop      : 24,
    backgroundColor: Colors.strokeDark
  },
  unUserMessage: {
    fontSize         : 14,
    fontFamily       : "Mon500",
    color            : Colors.darkGrey,
    paddingVertical  : 8,
    paddingHorizontal: 16
  },
  });

export default StepTwo;
