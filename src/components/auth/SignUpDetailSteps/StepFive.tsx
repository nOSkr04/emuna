import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { memo } from "react";
import EmunaChats from "./EmunaChats";
import { Colors } from "../../../constants/Colors";

type Props = {
  heightInput: boolean;
  height:string;
  weight:string;
  }

const StepFive = memo(({ heightInput, height, weight } : Props) => {
  return (
    <>
      <EmunaChats chat1="Таны биеийн өндөр, жин хэд вэ?" />
      {!heightInput && (
        <TouchableOpacity style={styles.userContainer}>
          <Text style={styles.userMessage}>{`${height}/${weight}`}</Text>
        </TouchableOpacity>
            )}
    </>
  );
});

StepFive.displayName="StepFive";

const styles = StyleSheet.create({
    userContainer: {
      marginRight    : 18,
      alignSelf      : "flex-end",
      borderWidth    : 1,
      borderColor    : Colors.primary,
      justifyContent : "center",
      alignItems     : "center",
      borderRadius   : 16,
      marginTop      : 24,
      backgroundColor: Colors.primary
    },
    userMessage: {
      fontSize         : 14,
      fontFamily       : "Mon500",
      opacity          : 0.72,
      paddingVertical  : 8,
      paddingHorizontal: 16,
      color            : Colors.white,
    },
  });

export default StepFive;
