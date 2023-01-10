import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { memo } from "react";
import { Colors } from "../../../constants/Colors";
import EmunaChats from "./EmunaChats";

const StepSeven = memo(({ firstName } : {firstName: string}) => {
  return (
    <>
      <EmunaChats chat1={`Баярлалаа, ${firstName}. Би таниас хангалттай мэдээлэл цуглууллаа. Одоо би зөвхөн танд зориулсан зөвлөгөөг хүргэж чадхаар боллоо.`} />
      <TouchableOpacity
      style={styles.userContainer}>
        <Text style={styles.userMessage}>Үргэлжлүүлэх</Text>
      </TouchableOpacity>
    </>
  );
});

StepSeven.displayName ="StepSeven";

const styles = StyleSheet.create({
 
  userContainer: {
    marginRight    : 18,
    alignSelf      : "flex-end",
    justifyContent : "center",
    alignItems     : "center",
    borderRadius   : 16,
    marginTop      : 24,
    backgroundColor: Colors.primary
  },
 
  userMessage: {
    fontSize         : 14,
    fontFamily       : "Mon500",
    color            : Colors.white,
    paddingVertical  : 8,
    paddingHorizontal: 16
  },
});

export default StepSeven;