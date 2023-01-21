import { StyleSheet,  TouchableOpacity, View } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { Mon500, Mon700 } from "../../../components/StyledText";
import CheckedBox from "../../../components/CheckedBox";
import UnCheckedBox from "../../../components/UnCheckedBox";
import { Colors } from "../../../constants/Colors";

type Props = {
  setWhen:Dispatch<SetStateAction<string>>;
  when:string
}

const DrinkConditionOption = ({ when, setWhen } : Props) => {
  const data = [
    { id: 1, name: "Хоолны дараа" },
    { id: 2, name: "Хоолны өмнө" },
    { id: 3, name: "Хамаагүй" },
  ];
  return (
    <BottomSheetScrollView showsVerticalScrollIndicator={false} style={styles.root}  >
      <Mon700 style={styles.title}>Уух нөхцөл</Mon700>
      <View style={styles.container}>
        {data.map((item) => {
        return(
          <TouchableOpacity key={item.id} onPress={() => setWhen(item.name)} >
            <View  style={styles.contentContainer}>
              <Mon500 style={styles.name}>{item.name}</Mon500>
              {when === item.name ? 
                <CheckedBox/>
              : 
                <UnCheckedBox/>
              }
            </View>
            <View style={styles.border} />
          </TouchableOpacity>
        );
      })}
      </View>
    </BottomSheetScrollView>
  );
};

export default DrinkConditionOption;

const styles = StyleSheet.create({
  root: {
        flex           : 1,
        backgroundColor: Colors.white
    },
    container: {
      marginHorizontal: 16
    },
    title: {
        fontSize     : 16,
        lineHeight   : 28,
        letterSpacing: 0.15,
        textAlign    : "center"
    },
    name: {
      color: Colors.newText
    },
    contentContainer: {
      flexDirection  : "row",
      alignItems     : "center",
      paddingVertical: 16,
      justifyContent : "space-between"
    },
    border: {
      borderWidth : 1,
      borderColor : Colors.strokeDark,
      marginBottom: 8
    },

});