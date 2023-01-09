import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TopTabParamList } from "../../../navigation/types";
import { Colors } from "../../../constants/Colors";

type PropsPage = NativeStackScreenProps<TopTabParamList, "DrugSummary">;

const DrugSummary = (props: PropsPage) => {
  const { buyName,countryName,info,nairlaga } = props.route.params;
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.question}>Худалдааны нэр: </Text>
        <Text style={styles.answer}>{buyName}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.question}>Олон улсын нэр: </Text>
        <Text style={styles.answer}>{countryName}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.question}>Ерөнхий шинж: </Text>
        <Text style={styles.answer}>{info}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.question}>Эмийн найрлага: </Text>
        <Text style={styles.answer}>{nairlaga}</Text>
      </View>
    </View>
  );
};

export default DrugSummary;

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    backgroundColor: Colors.white
  },
  contentContainer: {
    flexDirection   : "row", 
    marginHorizontal: 16,
    marginTop       : 16,
    flexWrap        : "wrap",
    alignItems      : "center"
  },
  question: {
    fontFamily   : "Mon700",
    fontSize     : 15,
    lineHeight   : 24,
    letterSpacing: 0.15,
    color        : Colors.text
  },
  answer: {
    fontSize     : 14,
    fontFamily   : "Mon500",
    lineHeight   : 20,
    letterSpacing: 0.1,
  }
});