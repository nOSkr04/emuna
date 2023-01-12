import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { BottomSheetParamList } from "../navigation/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Colors } from "../constants/Colors";
import { format } from "date-fns";
import { mn } from "date-fns/locale";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import RenderDrugDetails from "../components/home/RenderDrugDetails";

type Props = NativeStackScreenProps<BottomSheetParamList, "HomeMedicalSheet">;

const HomeMedicalSheet = memo((props: Props) => {
  const { data, selectedDate } = props.route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{data.title} </Text>
      <Text style={styles.sectionDate}>{format(selectedDate, "eeee, M сарын d", { locale: mn })} </Text>
      <BottomSheetFlatList
        data={data.data}
        keyExtractor={item => item.id.toLocaleString()}
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
    fontFamily   : "Mon700",
    lineHeight   : 28,
    letterSpacing: 0.15,
    color        : Colors.text,
  },
  sectionDate: {
    fontSize     : 14,
    fontFamily   : "Mon500",
    lineHeight   : 20,
    letterSpacing: 0.1,
    opacity      : 0.64,
    color        : Colors.text,
    marginTop    : 4,
    marginBottom : 30,
  },
});
