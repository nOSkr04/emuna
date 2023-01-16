import React from "react";
import ContentLoader, { Circle, Rect } from "react-content-loader/native";
import { StyleSheet, View } from "react-native";
import { Colors } from "../../constants/Colors";

const HomeLoader = () => {
  return (
    <View style={styles.container}>
      <ContentLoader backgroundColor={Colors.strokeDark} foregroundColor={Colors.primary} height={600} speed={4} viewBox="0 0 350 600" width={350}>
        <Rect height="570" rx="3" ry="3" width="8" x="4" y="8" />
        <Rect height="7" rx="3" ry="3" width="331" x="5" y="573" />
        <Rect height="570" rx="3" ry="3" width="8" x="329" y="9" />
        <Rect height="7" rx="3" ry="3" width="102" x="102" y="69" />
        <Rect height="6" rx="3" ry="3" width="178" x="92" y="47" />
        <Circle cx="48" cy="63" r="18" />
        <Rect height="6" rx="3" ry="3" width="178" x="95" y="95" />
        <Rect height="7" rx="3" ry="3" width="102" x="105" y="169" />
        <Rect height="6" rx="3" ry="3" width="178" x="95" y="147" />
        <Circle cx="51" cy="163" r="18" />
        <Rect height="6" rx="3" ry="3" width="178" x="98" y="195" />
        <Rect height="7" rx="3" ry="3" width="102" x="107" y="265" />
        <Rect height="6" rx="3" ry="3" width="178" x="97" y="243" />
        <Circle cx="53" cy="259" r="18" />
        <Rect height="6" rx="3" ry="3" width="178" x="100" y="291" />
        <Rect height="7" rx="3" ry="3" width="102" x="108" y="365" />
        <Rect height="6" rx="3" ry="3" width="178" x="98" y="343" />
        <Circle cx="54" cy="359" r="18" />
        <Rect height="6" rx="3" ry="3" width="178" x="101" y="391" />
        <Rect height="7" rx="3" ry="3" width="102" x="110" y="458" />
        <Rect height="6" rx="3" ry="3" width="178" x="100" y="436" />
        <Circle cx="56" cy="452" r="18" />
        <Rect height="6" rx="3" ry="3" width="178" x="103" y="484" />
        <Rect height="7" rx="3" ry="3" width="102" x="114" y="507" />
        <Rect height="6" rx="3" ry="3" width="178" x="103" y="534" />
        <Rect height="7" rx="3" ry="3" width="331" x="5" y="8" />
      </ContentLoader>
    </View>
  );
};

export default HomeLoader;

const styles = StyleSheet.create({
  container: {
    flex      : 1,
    alignItems: "center"
  }
});
