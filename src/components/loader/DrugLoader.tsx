import React, { memo } from "react";
import ContentLoader, {  Rect } from "react-content-loader/native";
import { StyleSheet, View } from "react-native";
import { Colors } from "../../constants/Colors";

const DrugLoader = memo(() => {
  return (
    <View style={styles.container}>
      <ContentLoader backgroundColor={Colors.strokeDark} foregroundColor={Colors.primary} height={600} speed={4} viewBox="0 0 350 600" width={350}>
        <Rect height="9" rx="5" ry="5" width="220" x="20" y="39" />
        <Rect height="15" rx="5" ry="5" width="300" x="20" y="15" />
      </ContentLoader>
    </View>
  );
});

DrugLoader.displayName = "DrugLoader";

export default DrugLoader;

const styles = StyleSheet.create({
  container: {
    flex      : 1,
    alignItems: "center"
  }
});
