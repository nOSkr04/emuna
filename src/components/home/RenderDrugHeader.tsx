import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { Colors } from "../../constants/Colors";

const RenderDrugHeader = memo(({ title }: { title: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
});

RenderDrugHeader.displayName = "RenderDrugHeader";

const styles = StyleSheet.create({
  container: {
    backgroundColor     : Colors.white,
    marginTop           : 20,
    borderTopLeftRadius : 20,
    borderTopRightRadius: 20,
    padding             : 16,
  },
  title: {
    fontSize  : 16,
    fontFamily: "Mon700",
  },
});

export default RenderDrugHeader;
