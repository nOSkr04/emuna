import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

const DosageChooseSheet = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Тун</Text>
    </View>
  );
};

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