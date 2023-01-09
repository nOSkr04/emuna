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
        <TouchableOpacity style={styles.userContainer}>
          <Text style={styles.userMessage}>{`${year}/${month}/${day}`}</Text>
        </TouchableOpacity>
            )}
    </>
  );
});

StepFour.displayName="StepFour";

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
    //   color            : Colors.newText,
      opacity          : 0.72,
      paddingVertical  : 8,
      paddingHorizontal: 16,
      color            : Colors.white,
    },
  });

export default StepFour;
