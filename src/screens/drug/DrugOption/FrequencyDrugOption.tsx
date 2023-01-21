import { StyleSheet,  TouchableOpacity, View } from "react-native";
import React, { Dispatch, SetStateAction, useState } from "react";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { Mon500, Mon700 } from "../../../components/StyledText";
import CheckedBox from "../../../components/CheckedBox";
import UnCheckedBox from "../../../components/UnCheckedBox";
import DateChoose from "../../../components/drug/DateChoose";
import { Colors } from "../../../constants/Colors";

type Props = {
  days: string[];
  setDays: Dispatch<SetStateAction<string[]>>;
};

const FrequencyDrugOption = ({ days,  setDays, }: Props) => {
  
  const [type, setType] = useState(2);

  const data = [
    { id: 2, name: "Сонгогдсон өдрүүдэд" },
    { id: 3, name: "Өдөр бүр" },
  ];

  const daysData = [
    { id: 1, name: "Да", value: "Monday" },
    { id: 2, name: "Мя", value: "Tuesday" },
    { id: 3, name: "Лх", value: "Wednesday" },
    { id: 4, name: "Пү", value: "Thursday" },
    { id: 5, name: "Ба", value: "Friday" },
    { id: 6, name: "Бя", value: "Saturday" },
    { id: 7, name: "Ня", value: "Sunday" },
  ];

  const select = (value: string) => {
    setDays(selecting => {
      return [...selecting, value];
    });
  };

  const unselect = (value: string) => {
    setDays(selecting => {
      return selecting.filter(entry => entry !== value);
    });
  };

  const chooseFrequency = (id: number) => {
    if(id === 3){
      setDays(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]);
      setType(3);
    } 
    if (id === 2) {
      setDays(["Monday"]);
      setType(2);
    }
  };
  return (
    <BottomSheetScrollView contentContainerStyle={styles.root} showsVerticalScrollIndicator={false}>
      <Mon700 style={styles.title}>Давтамж</Mon700>
      <View style={styles.container}>
        {data.map(item => {
        return (
          <TouchableOpacity key={item.id} onPress={() => chooseFrequency(item.id)}>
            <View style={styles.contentContainer}>
              <Mon500 style={styles.name}>{item.name}</Mon500>
              {type === item.id ? <CheckedBox /> : <UnCheckedBox />}
            </View>
            <View style={styles.border} />
          </TouchableOpacity>
        );
      })}
      </View>
      {type === 2 && <DateChoose days={daysData} select={select} unselect={unselect} value={days} />}
    </BottomSheetScrollView>
  );
};

export default FrequencyDrugOption;

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
});