import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { Colors } from "../../constants/Colors";

const DosageChooseSheet = memo(() => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Тун</Text>
    </View>
  );
});

DosageChooseSheet.displayName = "DosageChooseSheet";

export default DosageChooseSheet;

const styles = StyleSheet.create({
    container: {
        flex           : 1,
        backgroundColor: Colors.white
    },
    title: {
        fontFamily   : "Mon700",
        fontSize     : 16,
        lineHeight   : 28,
        letterSpacing: 0.15,
        textAlign    : "center"
    }
});