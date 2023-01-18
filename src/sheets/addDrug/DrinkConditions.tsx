import { StyleSheet,  TouchableOpacity,  View } from "react-native";
import React, { memo, useState } from "react";
import { Colors } from "../../constants/Colors";
import { Mon500,  Mon700 } from "../../components/StyledText";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import CheckedBox from "../../components/CheckedBox";
import UnCheckedBox from "../../components/UnCheckedBox";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

const DrinkConditions = memo(() => {
  const [dose,setDose] = useState("Хоолны дараа");
  const navigation = useNavigation();
  const data = [
    { id: 1, name: "Хоолны дараа" },
    { id: 2, name: "Хоолны өмнө" },
    { id: 3, name: "Хамаагүй" },
  ];
  const onSumbit = () => {
    navigation.goBack();
  };
  return (
    <BottomSheetScrollView showsVerticalScrollIndicator={false} style={styles.root}  >
      <Mon700 style={styles.title}>Уух нөхцөл</Mon700>
      <View style={styles.container}>
        {data.map((item) => {
          return(
            <TouchableOpacity key={item.id} onPress={() => setDose(item.name)} >
              <View  style={styles.contentContainer}>
                <Mon500 style={styles.name}>{item.name}</Mon500>
                {dose === item.name ? 
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
      <Button onPress={onSumbit}style={styles.button} title="Хадгалах"  />
    </BottomSheetScrollView>
  );
});

DrinkConditions.displayName = "DrinkConditions";

export default DrinkConditions;

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
    button: {
      marginHorizontal: 24,
      marginTop       : 34,
      marginBottom    : 40
    }
});