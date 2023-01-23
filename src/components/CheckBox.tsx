import { StyleSheet, TouchableOpacity, } from "react-native";
import React, { memo } from "react";
import { Mon700 } from "./StyledText";
import { Colors } from "../constants/Colors";
import CheckedBox from "./CheckedBox";
import UnCheckedBox from "./UnCheckedBox";
type Props = {
  data: {
    id: number;
    name: string;
  }[];
  selected: any[];
  select: (chooseId: string) => void;
  unselect: (chooseId: string) => void;
};

const CheckBox = memo(({ data, select, selected, unselect }: Props) => {
  return (
    <>
      {data?.map(item => {
        return (
          <TouchableOpacity
            key={item.id}
            onPress={() => {
              if (selected.includes(item.name)) {
                unselect(item.name);
              } else {
                select(item.name);
              }
            }}
            style={[styles.container, selected.includes(item.name) ? styles.activeContainer : styles.unActiveContainer]}>
            {selected.includes(item.name) ? (
              <CheckedBox/>
            ) : (
              <UnCheckedBox/>
            )}
            <Mon700 style={styles.text}>{item.name}</Mon700>
          </TouchableOpacity>
        );
      })}
    </>
  );
});

CheckBox.displayName = "CheckBox";

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems   : "center",
    padding      : 14,
    borderWidth  : 1,
    borderRadius : 8,
    marginTop    : 16,
  },
  activeContainer: {
    borderColor    : Colors.primary,
    backgroundColor: Colors.PrimarySoft,
  },
  unActiveContainer: {
    borderColor: Colors.strokeDark,
  },
  text: {
    fontSize  : 14,
    lineHeight: 20,
    marginLeft: 16,
  },


});
