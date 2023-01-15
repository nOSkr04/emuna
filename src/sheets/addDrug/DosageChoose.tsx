import { StyleSheet,  TextInput,  TouchableOpacity,  View } from "react-native";
import React, { memo, useState } from "react";
import { Colors } from "../../constants/Colors";
import { Mon500, Mon600, Mon700 } from "../../components/StyledText";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import CheckedBox from "../../components/CheckedBox";
import UnCheckedBox from "../../components/UnCheckedBox";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

const DosageChooseSheet = memo(() => {
  const [dose,setDose] = useState("мг");
  const navigation = useNavigation();
  const data = [
    { id: 1, name: "мг" },
    { id: 2, name: "мкг" },
    { id: 3, name: "гр" },
    { id: 4, name: "мл" },
    { id: 5, name: "%" },
  ];
  const onSumbit = () => {
    navigation.goBack();
  };
  return (
    <BottomSheetScrollView showsVerticalScrollIndicator={false} style={styles.root}  >
      <Mon700 style={styles.title}>Тун</Mon700>
      <View style={styles.container}>
        <Mon600 style={styles.placeHolderTitle}>Тун </Mon600>
        <TextInput placeholder="Эмийн хэмжээ оруулах" style={styles.textInput}   />
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

DosageChooseSheet.displayName = "DosageChooseSheet";

export default DosageChooseSheet;

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
    placeHolderTitle: {
      fontSize     : 11,
      lineHeight   : 16,
      letterSpacing: 0.15,
      opacity      : 0.72,
      color        : Colors.newText,
      marginTop    : 30,
      marginBottom : 8,
      marginLeft   : 16
    },
    textInput: {
      height      : 48,
      borderWidth : 1,
      borderColor : Colors.strokeDark,
      borderRadius: 8,
      paddingLeft : 16,
      marginBottom: 16
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