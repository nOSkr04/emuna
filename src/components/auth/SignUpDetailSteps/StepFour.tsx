import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { memo } from "react";
import EmunaChats from "./EmunaChats";
import { Colors } from "../../../constants/Colors";

type Props = {
  birthInput: boolean;
  year:string;
  month:string;
  day:string;
  }

const StepFour = memo(({ birthInput, year, month, day } : Props) => {
  return (
    <>
      <EmunaChats chat1="Та надад төрсөн он, сар аа хэлж өгөөч?" />
      {!birthInput && (
        <TouchableOpacity style={styles.unUserContainer}>
          <Text style={styles.unUserMessage}>{`${year}.${month}.${day}`}</Text>
        </TouchableOpacity>
            )}
    </>
  );
});

StepFour.displayName="StepFour";

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
    backgroundColor: Colors.chatBotBg,
    
  },
  unUserMessage: {
    fontSize         : 14,
    fontFamily       : "Mon500",
    color            : Colors.darkGrey,
    paddingVertical  : 8,
    paddingHorizontal: 16
  },
  });

export default StepFour;
