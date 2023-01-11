import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TopTabParamList } from "../../../navigation/types";
import { Colors } from "../../../constants/Colors";
import WarningIcon from "../../../../assets/svg/WarningCircle.svg";
import SnowIcon from "../../../../assets/svg/Snowflake.svg";
type PropsPage = NativeStackScreenProps<TopTabParamList, "DrugDetail">;

const DrugDetail = memo((props: PropsPage) => {
  const { gradus, description, hemjee, isTrue } = props.route.params;
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {isTrue && (
        <View style={styles.warningContainer}>
          <View style={styles.warningHeaderContainer}>
            <Text style={styles.warningHeaderTitle}>Хориглох заалт</Text>
            <WarningIcon />
          </View>
          <Text style={styles.warningDescription}>
            Эмийн найрлагад орсон үйлчлэгч болон туслах бодист харшилтай, Жирэмсэн болон хөхүүл эх Хүүхдэд хэрэглэхийг хориглоно.
          </Text>
        </View>
      )}
      <View style={styles.border} />
      <Text style={styles.contentTitle}>Хадгалах нөхцөл</Text>
      <View style={styles.rowContent}>
        <SnowIcon />
        <Text style={styles.gradusText}>{gradus}</Text>
      </View>
      <View style={styles.border} />
      <Text style={styles.contentTitle}>Хэрэглэх заалт</Text>
      <Text style={styles.description} >{description}</Text>
      <View style={styles.border} />
      <Text style={styles.contentTitle}>Хэрэглэх арга, тун</Text>
      <Text style={styles.description} >{hemjee}</Text>
    </ScrollView>
  );
});

DrugDetail.displayName = "DrugDetail";

export default DrugDetail;

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    backgroundColor: Colors.white,
  },
  warningContainer: {
    margin      : 16,
    borderWidth : 1,
    borderColor : Colors.warning,
    borderRadius: 8,
  },
  warningHeaderContainer: {
    flexDirection   : "row",
    justifyContent  : "space-between",
    alignItems      : "center",
    marginTop       : 12,
    marginHorizontal: 16,
    marginBottom    : 4,
  },
  warningHeaderTitle: {
    fontFamily   : "Mon700",
    fontSize     : 15,
    lineHeight   : 24,
    letterSpacing: 0.15,
    color        : Colors.drugPermision,
  },
  warningDescription: {
    fontFamily      : "Mon500",
    fontSize        : 14,
    lineHeight      : 20,
    letterSpacing   : 0.25,
    color           : Colors.drugPermision,
    marginTop       : 4,
    marginBottom    : 12,
    marginHorizontal: 16,
  },
  border: {
    borderWidth : 1,
    borderColor : Colors.strokeDark,
    marginBottom: 20,
  },
  contentTitle: {
    fontFamily      : "Mon700",
    fontSize        : 15,
    lineHeight      : 24,
    letterSpacing   : 0.15,
    color           : Colors.newText,
    marginHorizontal: 16,
    marginBottom    : 16,
  },
  rowContent: {
    flexDirection   : "row",
    marginHorizontal: 16,
  },
  gradusText: {
    fontSize     : 14,
    fontFamily   : "Mon500",
    lineHeight   : 20,
    letterSpacing: 0.25,
    marginLeft   : 16,
    opacity      : 0.64,
    color        : Colors.text,
    marginBottom : 26,
  },

  description: {
    fontFamily      : "Mon500",
    fontSize        : 14,
    lineHeight      : 20,
    letterSpacing   : 0.1,
    color           : Colors.text,
    marginHorizontal: 16,
    marginBottom    : 16
  }
});
