import { StyleSheet,  TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import { Colors } from "../../constants/Colors";
import Dot from "../../../assets/svg/dot.svg";
import { useNavigation } from "@react-navigation/native";
import { Mon500, Mon700 } from "../StyledText";
type Props = {
  data: any
};

const SearchDrug = memo(({ data }: Props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("DrugDetailScreen", { data: data })} style={styles.container}>
      <Mon700 style={styles.drugName}>{data.name}</Mon700>
      <View style={styles.detailContainer}>
        <Mon500 style={styles.drugDetail}>{data.shape}</Mon500>
        <Dot color={Colors.black} style={styles.dot}  />
        <Mon500 style={styles.drugWeight}>{data.size}</Mon500>
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
    lineHeight   : 24,
    letterSpacing: 0.15,
    marginBottom : 4,
  },
  detailContainer: {
    flexDirection: "row",
    alignItems   : "center",
    marginBottom : 16
  },
  drugDetail: {
    fontSize     : 14,
    lineHeight   : 20,
    letterSpacing: 0.1,
  },
  drugWeight: {
    fontSize     : 14,
    lineHeight   : 20,
    letterSpacing: 0.1,
  },
  dot: {
    marginHorizontal: 4
  },
  border: {
    borderWidth: 1,
    opacity    : 0.54,
    borderColor: Colors.strokeDark
  }
});

export default SearchDrug;
