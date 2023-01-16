import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { memo } from "react";
import { Colors } from "../../constants/Colors";

type Props = {
  onSubmit: () => Promise<void>
}

const SkipButton = memo(({ onSubmit } : Props) => {
  return (
    <TouchableOpacity onPress={onSubmit} style={styles.container}>
      <Text style={styles.title}>Алгасах</Text>
    </TouchableOpacity>
  );
});

SkipButton.displayName="SkipButton";

const styles = StyleSheet.create({
    container: {
        paddingVertical  : 8,
        paddingHorizontal: 10
    },
    title: {
        fontSize  : 14,
        fontFamily: "Mon700",
        color     : Colors.texts,
        opacity   : 0.64
    }
});

export default SkipButton;