import { Platform, StyleSheet, TouchableOpacity, View, } from "react-native";
import React, { memo, useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
// import { useNavigation } from "@react-navigation/native";
import Button from "../../components/Button";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { format } from "date-fns";
import { Mon400, Mon500, Mon700 } from "../../components/StyledText";
import { Colors } from "../../constants/Colors";
import ArrowLeft from "../../../assets/svg/back.svg";
import ArrowRight from "../../../assets/svg/CaretRight.svg";
const AddTimeSheet = memo(() => {
  // const navigation = useNavigation();
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);
  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showTimepicker = () => {
    if (Platform.OS === "android") {
      setShow(true);
    }
  };
  return (
    <BottomSheetScrollView showsVerticalScrollIndicator={false} >
      <Mon700 style={styles.headerTitle}>Цаг тохируулах</Mon700>
      <Button   onPress={showTimepicker} secondary={true} style={styles.button} title={`Цаг өөрчлөх-${format(date, "HH:mm")}`} />
      {show && (
        <DateTimePicker
          is24Hour={true}
          mode={"time"}
          onChange={onChange}
          testID="dateTimePicker"
          value={date}
        />
      )}
      <Mon500 style={styles.title}>Хэмжээ</Mon500>
      <View style={styles.capsuleContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <ArrowLeft/>
        </TouchableOpacity>
        <Mon400 style={styles.capsuleText}>1 капсул</Mon400>
        <TouchableOpacity style={styles.iconButton} >
          <ArrowRight/>
        </TouchableOpacity>
      </View>
      <Button onPress={() => console.log("object")} style={styles.saveButton} title="Хадгалах"    />
    </BottomSheetScrollView>
  );
});

AddTimeSheet.displayName = "AddTimeSheet";

export default AddTimeSheet;

const styles = StyleSheet.create({
  headerTitle: {
    fontSize     : 16,
    lineHeight   : 28,
    letterSpacing: 0.15,
    textAlign    : "center",
    marginBottom : 16
},
  button: {
    marginHorizontal: 16
  },
  title: {
    margin       : 16,
    fontSize     : 12,
    lineHeight   : 16,
    letterSpacing: 0.25,
    color        : Colors.newText
  },
  capsuleContainer: {
    flexDirection   : "row",
    height          : 48,
    borderWidth     : 2,
    borderColor     : Colors.strokeDark,
    alignItems      : "center",
    justifyContent  : "space-between",
    marginHorizontal: 16,
    marginTop       : 8,
    borderRadius    : 16,
    marginBottom    : 27
  },
iconButton: {
  padding: 30
},
capsuleText: {
  fontSize     : 16,
  lineHeight   : 24,
  letterSpacing: 0.5,
  color        : Colors.newText,
  opacity      : 0.72
},
saveButton: {
  marginTop       : 8,
  marginBottom    : 40,
  marginHorizontal: 16
}
});
