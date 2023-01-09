import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import { Colors } from "../../constants/Colors";
import Dot from "../../../assets/svg/dot.svg";
import { useNavigation } from "@react-navigation/native";
type Props = {
  name: string;
};

const SearchDrug = memo(({ name, }: Props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("DrugDetailScreen")} style={styles.container}>
      <Text style={styles.drugName}>{name}</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.drugDetail}>Капсул</Text>
        <Dot color={Colors.white} style={styles.dot} />
        <Text style={styles.drugWeight}>400 мг</Text>
      </View>
      <View style={styles.border} />
    </TouchableOpacity>
  );
});

SearchDrug.displayName = "SearchDrug";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop       : 16
  },
  drugName: {
    fontSize     : 15,
    fontFamily   : "Mon700",
    lineHeight   : 24,
    letterSpacing: 0.15,
    marginBottom : 4,
    color        : Colors.white
  },
  detailContainer: {
    flexDirection: "row",
    alignItems   : "center",
    marginBottom : 16
  },
  drugDetail: {
    fontSize     : 14,
    fontFamily   : "Mon500",
    lineHeight   : 20,
    letterSpacing: 0.1,
    color        : Colors.white
  },
  drugWeight: {
    fontSize     : 14,
    fontFamily   : "Mon500",
    lineHeight   : 20,
    letterSpacing: 0.1,
    color        : Colors.white
  },
  dot: {
    marginHorizontal: 4
  },
  border: {
    borderWidth: 1,
    opacity    : 0.24,
    borderColor: Colors.unActive
  }
});

export default SearchDrug;
