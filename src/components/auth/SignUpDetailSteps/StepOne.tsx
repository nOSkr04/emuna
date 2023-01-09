import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { memo } from "react";
import { Colors } from "../../../constants/Colors";
import EmunaChats from "./EmunaChats";


type Props = {
  step: number[];
  stepOne: (id: number) => void
}

const StepOne = memo(({ stepOne, step }:Props) => {
  return (
    <>
      <EmunaChats chat1="Сайн байна уу? Намайг Эмуна гэдэг." chat2="Та надад хэдий хэмжээний их зүйл хэлнэ, тэр чинээгээр би таныг эрсдэлээс хамгаалж чадна. Тиймээс таниас хэдэн асуулт асууж болох уу?"  />
      <TouchableOpacity
      onPress={() => {
        stepOne(2);
      }}
      style={step.includes(2) ?styles.unUserContainer:   styles.userContainer}>
        <Text style={step.includes(2) ? styles.unUserMessage : styles.userMessage}>Тэгье</Text>
      </TouchableOpacity>
    </>
  );
});

StepOne.displayName="StepOne";

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

export default StepOne;
