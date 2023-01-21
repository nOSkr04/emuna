import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { Dispatch, memo } from "react";
import EmunaChats from "./EmunaChats";
import { Colors } from "../../../constants/Colors";

type Props = {
    gender:string[];
    stepThree:(id: number, index: number) => void
    _scrollToEnd:any;
    setGender: Dispatch<React.SetStateAction<string>>
  }

const StepThree = memo(({  gender,stepThree,_scrollToEnd,setGender  } : Props) => {
  return (
    <>
      <EmunaChats chat1="Ойлголоо. Таны хүйс?" />
      {gender.map((e, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    stepThree(4, index);
                    _scrollToEnd();
                    setGender(e);
                  }}
                  style={gender.length === 1 ?styles.unUserContainer : styles.userContainer }>
                  <Text style={gender.length ===1 ? styles.unUserMessage: styles.userMessage}>{e === "male" ? "Эрэгтэй" : e === "female" ? "Эмэгтэй" : "Бусад"}</Text>
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
  userContainer: {
    marginRight    : 18,
    alignSelf      : "flex-end",
    borderWidth    : 1,
    borderColor    : Colors.primary,
    justifyContent : "center",
    alignItems     : "center",
    borderRadius   : 16,
    marginTop      : 24,
    backgroundColor: Colors.chatBotBg
  },
  userMessage: {
    fontSize         : 14,
    fontFamily       : "Mon500",
    color            : Colors.newText,
    opacity          : 0.72,
    paddingVertical  : 8,
    paddingHorizontal: 16,
    letterSpacing    : 0.25,
    lineHeight       : 20
  },
});

export default StepThree;
