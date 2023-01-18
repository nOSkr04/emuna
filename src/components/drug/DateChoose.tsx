import { StyleSheet, TouchableOpacity } from "react-native";
import React, { memo } from "react";
import { Mon400, Mon600 } from "../StyledText";
import { Colors } from "../../constants/Colors";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";

type Props = {
  days: {
    id: number;
    name: string;
    value:string
  }[];
  value: string[];
  select: (value: string) => void;
  unselect: (value: string) => void;
};

const DateChoose = memo(({ days, value, select,unselect } : Props) => {

  return (
    <BottomSheetScrollView showsVerticalScrollIndicator={false}>
      <Mon600 style={styles.text}>Өдөр сонгох</Mon600>
      <BottomSheetScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.buttonRoot}>
        {days.map(item => {
          return (
            <TouchableOpacity
              key={item.id}
             onPress={() => {
              if (value.includes(item.name)) {
                unselect(item.value);
              } else {
                select(item.value);
              }
             }}
              style={[styles.buttonContainer, value.includes(item.value) && styles.primaryBg]}>
              <Mon400 style={value.includes(item.value) ? styles.whiteColor : styles.blackColor }>{item.name}</Mon400>
            </TouchableOpacity>
          );
        })}
      </BottomSheetScrollView>
    </BottomSheetScrollView>
  );
});

DateChoose.displayName = "DateChoose";

export default DateChoose;

const styles = StyleSheet.create({
  text: {
    marginVertical  : 8,
    fontSize        : 11,
    lineHeight      : 16,
    letterSpacing   : 0.15,
    color           : Colors.newText,
    marginHorizontal: 16,
  },
  buttonRoot: {
    marginHorizontal: 16,
  },
  buttonContainer: {
    alignItems     : "center",
    justifyContent : "center",
    width          : 40,
    height         : 40,
    borderRadius   : 100,
    backgroundColor: Colors.greyBg,
    marginRight    : 10.5,
  },
  primaryBg: {
    backgroundColor: Colors.primary,
  },
  whiteColor: {
    color: Colors.white
  },
  blackColor: {
    color: Colors.black
  },
});
