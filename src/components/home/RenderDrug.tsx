import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { Colors } from "../../constants/Colors";
import Icon1 from "../../../assets/svg/1.svg";
import Dot from "../../../assets/svg/dot.svg";
import Xicon from "../../../assets/svg/X.svg";
import CheckIcon from "../../../assets/svg/Check.svg";
type Props = {
  name: string;
  when: string;
  much: number;
  isSkip: boolean;
  isDone: boolean;
};

const RenderDrug = memo(({ name, when, much, isSkip, isDone }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon1 color={Colors.white} />
      </View>
      <View style={styles.drugDetailContainer}>
        <Text style={styles.drugName}>{name}</Text>
        <View style={styles.bottomContainer}>
          <Text style={styles.when}>{when} </Text>
          <Dot color={Colors.helperText} />
          <Text style={styles.when}> {much}ш</Text>
        </View>
        {isDone && (
          <View style={styles.infoContainer}>
            <View style={[styles.infoIcon, styles.checkedInfoIcon]}>
              <CheckIcon />
            </View>
            <Text style={[styles.infoText, styles.checkedInfoText]}> Уусан</Text>
          </View>
        )}
        {isSkip && (
          <View style={styles.infoContainer}>
            <View style={styles.infoIcon}>
              <Xicon />
            </View>
            <Text style={styles.infoText}> Алгассан</Text>
          </View>
        )}
      </View>
    </View>
  );
});

RenderDrug.displayName = "RenderDrug";

const styles = StyleSheet.create({
  container: {
    flex            : 1,
    backgroundColor : Colors.white,
    padding         : 16,
    alignItems      : "center",
    flexDirection   : "row",
    flexWrap        : "wrap",
    marginHorizontal: 16
  },
  iconContainer: {
    backgroundColor: Colors.primary,
    height         : 48,
    width          : 48,
    borderRadius   : 100,
    alignItems     : "center",
    justifyContent : "center",
  },
  drugName: {
    fontSize  : 15,
    fontFamily: "Mon700",
    color     : Colors.text,
    lineHeight: 24
  },
  when: {
    fontSize     : 12,
    fontFamily   : "Mon500",
    color        : Colors.text,
    opacity      : 0.64,
    lineHeight   : 16,
    letterSpacing: 0.25
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems   : "center",
  },
  drugDetailContainer: {
    marginLeft: 16,
  },
  infoContainer: {
    flexDirection: "row",
    marginTop    : 4,
    alignItems   : "center",
  },
  infoIcon: {
    width          : 20,
    height         : 20,
    borderRadius   : 26,
    alignItems     : "center",
    justifyContent : "center",
    backgroundColor: Colors.darkGrey,
  },
  infoText: {
    fontSize  : 12,
    fontFamily: "Mon700",
    color     : Colors.darkGrey
  },
  checkedInfoIcon: {
    backgroundColor: Colors.primary,
  },
  checkedInfoText: {
    color: Colors.primary
  }
});

export default RenderDrug;
