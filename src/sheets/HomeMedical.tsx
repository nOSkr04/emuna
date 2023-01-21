import { StyleSheet,  View } from "react-native";
import React, { memo } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { BottomSheetParamList } from "../navigation/types";
import RenderDrugDetails from "../components/home/RenderDrugDetails";
import { Colors } from "../constants/Colors";
import { Mon500, Mon700 } from "../components/StyledText";

type Props = NativeStackScreenProps<BottomSheetParamList, "HomeMedicalSheet">;

const HomeMedicalSheet = memo((props: Props) => {
  const { data, monDate, time } = props.route.params;
  console.log(data);
  return (
    <View style={styles.container}>
      <Mon700 style={styles.sectionTitle}>{time} </Mon700>
      <Mon500 style={styles.sectionDate}>{monDate} </Mon500>
      <BottomSheetFlatList
        data={data}
        keyExtractor={item => item?._id}
        renderItem={({ item }) => {
          return <RenderDrugDetails item={item}  />;
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
});

HomeMedicalSheet.displayName = "HomeMedicalSheet";

export default HomeMedicalSheet;

const styles = StyleSheet.create({
  container: {
    flex            : 1,
    marginHorizontal: 16,
  },
  sectionTitle: {
    fontSize     : 16,
    lineHeight   : 28,
    letterSpacing: 0.15,
    color        : Colors.text,
  },
  sectionDate: {
    fontSize     : 14,
    lineHeight   : 20,
    letterSpacing: 0.1,
    opacity      : 0.64,
    color        : Colors.text,
    marginTop    : 4,
    marginBottom : 30,
  },
});
