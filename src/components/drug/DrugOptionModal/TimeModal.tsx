import { Platform, StyleSheet,  TouchableOpacity,  View } from "react-native";
import React, { Dispatch, SetStateAction, memo } from "react";
import Modal from "react-native-modal";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Mon400, Mon500, Mon700 } from "../../StyledText";
import Button from "../../Button";
import { format } from "date-fns";
import ArrowLeft from "../../../../assets/svg/back.svg";
import ArrowRight from "../../../../assets/svg/CaretRight.svg";
import { Colors } from "../../../constants/Colors";
type Props = {
  isTimePickerVisible: boolean;
  setIsTimePickerVisible:Dispatch<SetStateAction<boolean>>;
  androidTime:boolean
  setAndroidTime:Dispatch<SetStateAction<boolean>>;
  setTimes: Dispatch<SetStateAction<Date>>;
  times:Date;
  setTimeArray:Dispatch<SetStateAction<string[]>>;
  setQuantity:Dispatch<SetStateAction<string[]>>;
  setCapsuleCount:Dispatch<SetStateAction<number>>;
  capsuleCount:number
}

const TimeModal = memo(({ isTimePickerVisible,setAndroidTime,androidTime,setTimes, times,setTimeArray,setQuantity,setIsTimePickerVisible,setCapsuleCount, capsuleCount } : Props) => {
  const timePickerToggleModal = () => {
    setIsTimePickerVisible(!isTimePickerVisible);
  };
  const changeTime = (event: any, selectedTime: any) => {
    setTimes(selectedTime);
    setAndroidTime(false);
  };
  const addTime = (date: Date, capsuleCount: number) => {
    const formatingTime = format(date, "HH:mm");
    setTimeArray(data => [...data, formatingTime]);
    setQuantity(data => [...data, `${capsuleCount}`]);
    setIsTimePickerVisible(false);
  };
  return (
    <Modal
    isVisible={isTimePickerVisible}
    onBackdropPress={timePickerToggleModal}
    onSwipeComplete={timePickerToggleModal}
    swipeDirection={["down", "up"]}>
      <View style={styles.modalContainer}>
        <Mon700 style={styles.headerTitle}>Цаг тохируулах</Mon700>
        {/* date */}
        {Platform.OS === "ios" && (
          <DateTimePicker
          display={"spinner"}
          is24Hour={true}
          locale="mn_MN"
          maximumDate={new Date(2023, 15, 20)}
          mode={"time"}
          onChange={changeTime}
          themeVariant="light"
          value={times}
        />
      )}

        {Platform.OS === "android" && (
          <Button onPress={() => setAndroidTime(!androidTime)} style={styles.button} title={`Эмийн цаг сонгох: ${format(times, "HH:mm")}`} />
      )}

        {androidTime && (
          <DateTimePicker
          display={"default"}
          is24Hour={true}
          locale="mn"
          maximumDate={new Date(2023, 15, 20)}
          mode={"time"}
          onChange={changeTime}
          value={times}
        />
      )}
        <Mon500 style={styles.modalTitle}>Хэмжээ</Mon500>
        <View style={styles.capsuleContainer}>
          <TouchableOpacity onPress={() => setCapsuleCount(capsuleCount - 1)} style={styles.iconButton}>
            <ArrowLeft />
          </TouchableOpacity>
          <Mon400 style={styles.capsuleText}>{capsuleCount} капсул</Mon400>
          <TouchableOpacity onPress={() => setCapsuleCount(capsuleCount + 1)} style={styles.iconButton}>
            <ArrowRight />
          </TouchableOpacity>
        </View>
        <Button onPress={() => addTime(times, capsuleCount)} style={styles.saveButton} title="Хадгалах" />
      </View>
    </Modal>
  );
});

TimeModal.displayName = "TimeModal";

export default TimeModal;

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
  modalTitle: {
    margin       : 16,
    fontSize     : 12,
    lineHeight   : 16,
    letterSpacing: 0.25,
    color        : Colors.newText,
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
    marginBottom    : 27,
  },
  capsuleText: {
    fontSize     : 16,
    lineHeight   : 24,
    letterSpacing: 0.5,
    color        : Colors.newText,
    opacity      : 0.72,
  },
  saveButton: {
    marginTop       : 8,
    marginBottom    : 40,
    marginHorizontal: 16,
  },
  iconButton: {
    padding: 30,
  },
});