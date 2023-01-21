import { Platform, StyleSheet, View } from "react-native";
import React, { Dispatch, SetStateAction, memo } from "react";
import Modal from "react-native-modal";
import DateTimePicker from "@react-native-community/datetimepicker";
import { format } from "date-fns";
import { Mon700 } from "../../StyledText";
import { Colors } from "../../../constants/Colors";
import Button from "../../Button";

type Props = {
  isStartDatePickerVisible: boolean;
  setIsStartDatePickerVisible: Dispatch<SetStateAction<boolean>>;
  setStartDate: Dispatch<SetStateAction<Date>>;
  startDate: Date;
  setAndroidStartDate: Dispatch<SetStateAction<boolean>>;
  androidStartDate: boolean;
};

const FirstDateModal = memo(({
  isStartDatePickerVisible,
  setIsStartDatePickerVisible,
  setStartDate,
  setAndroidStartDate,
  androidStartDate,
  startDate,
}: Props) => {
  const startDatePickerToggleModal = () => {
    setIsStartDatePickerVisible(!isStartDatePickerVisible);
  };

  return (
    <Modal
      isVisible={isStartDatePickerVisible}
      onBackdropPress={startDatePickerToggleModal}
      onSwipeComplete={startDatePickerToggleModal}
      swipeDirection={["down", "up"]}>
      <View style={styles.modalContainer}>
        <Mon700 style={styles.headerTitle}>Эхлэх хугацаа</Mon700>
        {/* date */}
        {Platform.OS === "ios" && (
          <DateTimePicker
            display={"inline"}
            locale="mn_MN"
            mode={"date"}
            onChange={(event: any, date: any) => {
              setStartDate(date);
            }}
            testID="startDatePicker"
            themeVariant="light"
            value={startDate}
          />
        )}

        {Platform.OS === "android" && (
          <Button
            onPress={() => setAndroidStartDate(!androidStartDate)}
            style={styles.button}
            title={`Эмийн цаг сонгох: ${format(startDate, "yyyy.MM.dd")}`}
          />
        )}

        {androidStartDate && (
          <DateTimePicker
            display={"default"}
            mode={"date"}
            negativeButtonLabel="Буцах"
            onChange={(event: any, date: any) => {
              setStartDate(date);
              setAndroidStartDate(false);
            }}
            positiveButtonLabel="Болсон"
            testID="startDatePicker"
            value={startDate}
          />
        )}
        <Button onPress={startDatePickerToggleModal} style={styles.saveButton} title="Хадгалах" />
      </View>
    </Modal>
  );
});

FirstDateModal.displayName= "FirstDateModal";

export default FirstDateModal;

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
});
