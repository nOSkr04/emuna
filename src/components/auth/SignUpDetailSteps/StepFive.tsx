import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { memo } from "react";
import EmunaChats from "./EmunaChats";
import { Colors } from "../../../constants/Colors";

type Props = {
  heightInput: boolean;
  height:string;
  weight:string;
  }

const StepFive = memo(({ heightInput, height, weight, } : Props) => {
  return (
    <>
      <EmunaChats chat1="Таны биеийн өндөр, жин хэд вэ?" />
      {!heightInput && (
        <TouchableOpacity style={styles.unUserContainer}>
          <Text style={styles.unUserMessage}>{`${height} см/${weight} кг`}</Text>
        </TouchableOpacity>
            )}
    </>
  );
});

StepFive.displayName="StepFive";

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

export default StepFive;
