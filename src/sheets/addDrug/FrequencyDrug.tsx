import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { memo, useState } from "react";
import { Mon500, Mon700 } from "../../components/StyledText";
import CheckedBox from "../../components/CheckedBox";
import UnCheckedBox from "../../components/UnCheckedBox";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import Button from "../../components/Button";
import { Colors } from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import DateChoose from "../../components/drug/DateChoose";
// import IntervalChoose from "../../components/drug/IntervalChoose";

const FrequencyDrugSheet = memo(() => {
  const navigation = useNavigation();
  const [value, setValue] = useState<string[]>(["Monday"]);
  const [type, setType] = useState(2);
  const data = [
    { id: 2, name: "Сонгогдсон өдрүүдэд" },
    { id: 3, name: "Өдөр бүр" },
  ];
  const days = [
    { id: 1, name: "Да", value: "Monday" },
    { id: 2, name: "Мя", value: "Tuesday" },
    { id: 3, name: "Лх", value: "Wednesday" },
    { id: 4, name: "Пү", value: "Thursday" },
    { id: 5, name: "Ба", value: "Friday" },
    { id: 6, name: "Бя", value: "Saturday" },
    { id: 7, name: "Ня", value: "Sunday" },
  ];

  const select = (value: string) => {
    setValue(selecting => {
      return [...selecting, value];
    });
  };
  const unselect = (chooseId: string) => {
    setValue(selecting => {
      return selecting.filter(entry => entry !== chooseId);
    });
  };
  const onSumbit = (value: string[]) => {
    navigation.navigate("AddDrugAlertScreen", { frequency: value, type: type === 2 ? "Сонгогдсон өдөр" : "Өдөр бүр" });
  };
  return (
    <BottomSheetScrollView contentContainerStyle={styles.root} showsVerticalScrollIndicator={false}>
      <Mon700 style={styles.title}>Давтамж</Mon700>
      <View style={styles.container}>
        {data.map(item => {
          return (
            <TouchableOpacity key={item.id} onPress={() => setType(item.id)}>
              <View style={styles.contentContainer}>
                <Mon500 style={styles.name}>{item.name}</Mon500>
                {type === item.id ? <CheckedBox /> : <UnCheckedBox />}
              </View>
              <View style={styles.border} />
            </TouchableOpacity>
          );
        })}
      </View>
      {/* {type === 1 && <IntervalChoose/>} */}
      {type === 2 && <DateChoose days={days} select={select} unselect={unselect} value={value} />}
      <Button onPress={() => onSumbit(value)} style={styles.button} title="Хадгалах" />
    </BottomSheetScrollView>
  );
});

FrequencyDrugSheet.displayName = "FrequencyDrugSheet";
export default FrequencyDrugSheet;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    marginHorizontal: 16,
  },
  title: {
    fontSize     : 16,
    lineHeight   : 28,
    letterSpacing: 0.15,
    textAlign    : "center",
    marginBottom : 10,
  },
  name: {
    color: Colors.newText,
  },
  contentContainer: {
    flexDirection  : "row",
    alignItems     : "center",
    paddingVertical: 16,
    justifyContent : "space-between",
  },
  border: {
    borderWidth : 1,
    borderColor : Colors.strokeDark,
    marginBottom: 8,
  },
  button: {
    position: "absolute",
    bottom  : 40,
    left    : 24,
    right   : 24,
  },
});
