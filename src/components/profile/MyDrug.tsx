import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { Colors } from "../../constants/Colors";
import CapsuleIcon from "../../../assets/svg/1.svg";
import DotIcon from "../../../assets/svg/dot.svg";
type Props = {
  bg: string;
  name: string;
  capsule: string;
  when: string;
};

const MyDrug = memo(({ bg, name, capsule, when }: Props) => {
  return (
    <View style={styles.root}>
      <View style={[styles.capsuleContainer, { backgroundColor: bg }]}>
        <CapsuleIcon color={Colors.white} />
      </View>
      <View>
        <Text style={styles.contentTitle}>{name}</Text>
        <View style={styles.detailContainer}>
          <Text style={styles.contentDescription}>{capsule}</Text>
          <DotIcon color={Colors.helperText} height={5} style={styles.dot} width={5} />
          <Text style={styles.contentDescription}>{when}</Text>
        </View>
      </View>
    </View>
  );
});

MyDrug.displayName = "MyDrug";

export default MyDrug;

const styles = StyleSheet.create({
  root: {
    backgroundColor : Colors.white,
    borderRadius    : 16,
    flexDirection   : "row",
    marginHorizontal: 16,
    marginTop       : 16,
    alignItems      : "center",
  },
  capsuleContainer: {
    width           : 48,
    height          : 48,
    borderRadius    : 100,
    alignItems      : "center",
    justifyContent  : "center",
    marginHorizontal: 16,
    marginVertical  : 12,
  },
  detailContainer: {
    flexDirection: "row",
    alignItems   : "center",
  },
  contentTitle: {
    fontFamily   : "Mon700",
    fontSize     : 15,
    lineHeight   : 24,
    letterSpacing: 0.15,
  },
  contentDescription: {
    fontFamily   : "Mon500",
    fontSize     : 12,
    lineHeight   : 16,
    letterSpacing: 0.25,
    color        : Colors.helperText,
  },
  dot: {
    marginHorizontal: 4
  }
});
