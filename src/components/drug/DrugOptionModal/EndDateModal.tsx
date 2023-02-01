import { Platform, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { Dispatch, SetStateAction, memo } from "react";
import Modal from "react-native-modal";
import DateTimePicker from "@react-native-community/datetimepicker";
import { addMonths, differenceInDays, format } from "date-fns";
import { Mon500, Mon700 } from "../../StyledText";
import { Colors } from "../../../constants/Colors";
import Button from "../../Button";
import UnCheckedBox from "../../UnCheckedBox";
import CheckedBox from "../../CheckedBox";

type Props = {
  isEndDatePickerVisible:boolean;
  setIsEndDatePickerVisible:Dispatch<SetStateAction<boolean>>
  setInfinity:Dispatch<SetStateAction<boolean>> 
  infinity:boolean
  startDate:Date
  setEndDate:Dispatch<SetStateAction<Date>> ;
   endDate:Date 
   setAndroidEndDate:Dispatch<SetStateAction<boolean>>; 
   androidEndDate:boolean
  }

const EndDateModal = memo(({ isEndDatePickerVisible,setIsEndDatePickerVisible,setInfinity, infinity,startDate ,setEndDate , endDate ,setAndroidEndDate, androidEndDate }: Props) => {
  const endDatePickerToggleModal = () => {
    if(infinity){
      setEndDate(addMonths(endDate, 3));
      setIsEndDatePickerVisible(!isEndDatePickerVisible);
    } else {
      setIsEndDatePickerVisible(!isEndDatePickerVisible);
    }
  };
  return (
    <Modal
    isVisible={isEndDatePickerVisible}
    onBackdropPress={endDatePickerToggleModal}
    onSwipeComplete={endDatePickerToggleModal}
    swipeDirection={["down", "up"]}>
      <View style={styles.modalContainer}>
        <Mon700 style={styles.headerTitle}>Дуусах хугацаа</Mon700>
        <TouchableOpacity onPress={() => setInfinity(!infinity)} style={styles.statusContainer}>
          <Mon500 style={styles.infityText}>Хязгааргүй уух</Mon500>
          <View>{!infinity ? <UnCheckedBox /> : <CheckedBox />}</View>
        </TouchableOpacity>
        {!infinity && (
          <>
            <TouchableOpacity style={styles.statusContainer}>
              <Mon500 style={styles.infityText}>Нийт</Mon500>
              <Mon500 style={styles.endDateStr}>{differenceInDays(endDate, startDate)} хоног</Mon500>
            </TouchableOpacity>
            {Platform.OS === "ios" && (
              <DateTimePicker
              display={"inline"}
              locale="mn_MN"
              minimumDate={startDate}
              mode={"date"}
              onChange={(event: any, date: any) => {
                setEndDate(date);
              }}
              testID="endDatePicker"
              themeVariant="light"
              value={endDate}
            />
          )}

            {Platform.OS === "android" && (
              <Button
              onPress={() => setAndroidEndDate(!androidEndDate)}
              style={styles.saveButton}
              title={`Эмийн цаг сонгох: ${format(endDate, "yyyy.MM.dd")}`}
            />
          )}

            {androidEndDate && (
              <DateTimePicker
              display={"default"}
              minimumDate={startDate}
              mode={"date"}
              negativeButtonLabel="Буцах"
              onChange={(event: any, date: any) => {
                setEndDate(date);
                setAndroidEndDate(false);
              }}
              positiveButtonLabel="Болсон"
              testID="endDatePicker"
              value={endDate}
            />
          )}
          </>
      )}
        <Button onPress={endDatePickerToggleModal} style={styles.saveButton} title="Хадгалах" />
      </View>
    </Modal>
  );
});

EndDateModal.displayName = "EndDateModal";

export default EndDateModal;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: Colors.white,
  },
  headerTitle: {
    fontSize     : 16,
    lineHeight   : 28,
    letterSpacing: 0.15,
    textAlign    : "center",
    marginBottom : 16,
    marginTop    : 30,
  },
  button: {
    marginHorizontal: 24,
    marginTop       : 50,
    marginBottom    : 40,
  },

  saveButton: {
    marginTop       : 8,
    marginBottom    : 40,
    marginHorizontal: 16,
  },
  statusContainer: {
    flexDirection   : "row",
    justifyContent  : "space-between",
    marginHorizontal: 8,
    alignItems      : "center",
    marginBottom    : 24,
  },
  infityText: {
    fontSize     : 14,
    lineHeight   : 20,
    letterSpacing: 0.25,
    color        : Colors.newText,
  },
  endDateStr: {
    lineHeight   : 16,
    fontSize     : 12,
    letterSpacing: 0.25,
    color        : Colors.texts,
  },
});