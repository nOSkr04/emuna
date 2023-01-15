import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";

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
    padding: 16,
  },
  title: {
    fontSize  : 16,
    fontFamily: "Mon700",
  },
});

export default RenderDrugHeader;
