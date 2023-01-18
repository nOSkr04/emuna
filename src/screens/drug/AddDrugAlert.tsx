import { Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Modal from "react-native-modal";
import DateTimePicker from "@react-native-community/datetimepicker";
import Button from "../../components/Button";
import MedicalIcon from "../../components/MedicalIcon";
import { Mon400, Mon500, Mon700 } from "../../components/StyledText";
import { RootStackParamList } from "../../navigation/types";
import PillIcon1 from "../../../assets/svg/1.svg";
import PillIcon2 from "../../../assets/svg/2.svg";
import PillIcon3 from "../../../assets/svg/3.svg";
import PillIcon6 from "../../../assets/svg/6.svg";
import PencilIcon from "../../../assets/svg/PencilSimple.svg";
import RightIcon from "../../../assets/svg/CaretRight.svg";
import MinusIcon from "../../../assets/svg/MinusCircle.svg";
import PlusIcon from "../../../assets/svg/PlusCirclePrimary.svg";
import ArrowLeft from "../../../assets/svg/back.svg";
import ArrowRight from "../../../assets/svg/CaretRight.svg";
import { Colors } from "../../constants/Colors";
import { differenceInDays, format } from "date-fns";
import Animated, { Layout, LightSpeedInRight } from "react-native-reanimated";

type Props = NativeStackScreenProps<RootStackParamList, "AddDrugAlertScreen">;

const AddDrugAlertScreen = memo((props: Props) => {
  const navigation = useNavigation();
  const [capsuleCount, setCapsuleCount] = useState(1);
  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);
  const [isStartDatePickerVisible, setIsStartDatePickerVisible] = useState(false);
  const [isEndDatePickerVisible, setIsEndDatePickerVisible] = useState(false);
  const [timeArray, setTimeArray] = useState<string[]>([]);
  const [times, setTimes] = useState(new Date());
  const [androidTime, setAndroidTime] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [androidStartDate, setAndroidStartDate] = useState(false);
  const [infinity, setInfinity] = useState(false);
  const [endDate, setEndDate] = useState(new Date());
  const [androidEndDate, setAndroidEndDate] = useState(false);

  const timePickerToggleModal = () => {
    setIsTimePickerVisible(!isTimePickerVisible);
  };

  const startDatePickerToggleModal = () => {
    setIsStartDatePickerVisible(!isStartDatePickerVisible);
  };

  const endDatePickerToggleModal = () => {
    setIsEndDatePickerVisible(!isEndDatePickerVisible);
  };

  const addTime = (date: Date) => {
    const formatingTime = format(date, "HH:mm");
    setTimeArray(data => [...data, formatingTime]);
    setIsTimePickerVisible(false);
  };

  const removeTime = (index: number) => {
    setTimeArray(timeArray.filter((_, i) => i !== index));
  };

  const changeTime = (event: any, selectedTime: any) => {
    setTimes(selectedTime);
    setAndroidTime(false);
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("DrugStyleChooseSheet")}>
          <View style={[styles.pillContainer, { backgroundColor: props.route.params ? props.route.params.bgColor : Colors.yellowPill }]}>
            <MedicalIcon />
            {props.route.params ? (
              props.route.params.pill === "Шахмал" ? (
                <PillIcon1 color={Colors.white} height={52} width={52} />
              ) : props.route.params.pill === "Капсул" ? (
                <PillIcon2 color={Colors.white} height={52} width={52} />
              ) : props.route.params.pill === "Түрхлэг" ? (
                <PillIcon3 color={Colors.white} height={52} width={52} />
              ) : (
                <PillIcon6 color={Colors.white} height={52} width={52} />
              )
            ) : (
              <PillIcon1 color={Colors.white} height={52} width={52} />
            )}
          </View>
          <View style={styles.editContainer}>
            <PencilIcon />
            <Text style={styles.editTitle}>Харагдац өөрчлөх</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.drugName}>Ибупрофен</Text>
        <Text style={styles.drugDescription}>Капсул, 400mg</Text>
        <TouchableOpacity onPress={() => navigation.navigate("DosageChooseSheet")} style={styles.choosedContainer}>
          <Text style={styles.chooseTitle}>Тун</Text>
          <View style={styles.choosedContent}>
            <Text style={styles.chooseDescription}>400мг</Text>
            <RightIcon />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("FrequencyDrugSheet")} style={styles.choosedContainer}>
          <Text style={styles.chooseTitle}>Давтамж</Text>
          <View style={styles.choosedContent}>
            <Text style={styles.chooseDescription}>Өдөр бүр</Text>
            <RightIcon />
          </View>
        </TouchableOpacity>
        <Text style={[styles.chooseTitle, styles.margins]}>Уух цагууд</Text>
        {timeArray &&
          timeArray.map((time, index) => {
            return (
              <Animated.View entering={LightSpeedInRight} key={index} layout={Layout.springify()} style={styles.choosedTimeContainer}>
                <TouchableOpacity onPress={() => removeTime(index)} style={styles.choosedContent}>
                  <MinusIcon />
                  <Text style={styles.chooseTime}>{time}</Text>
                </TouchableOpacity>
                <Text style={styles.chooseCapsule}>1 капсул</Text>
              </Animated.View>
            );
          })}
        <View style={styles.border} />
        <TouchableOpacity onPress={() => setIsTimePickerVisible(!isTimePickerVisible)} style={styles.choosedTimeContainer}>
          <View style={styles.choosedContent}>
            <PlusIcon />
            <Text style={styles.addTimeTitle}>Цаг нэмэх </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.choosedContainer}>
          <Text style={styles.chooseTitle}>Уух нөхцөл</Text>
          <View style={styles.choosedContent}>
            <Text style={styles.chooseDescription}>Хоолны дараа</Text>
            <RightIcon />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={startDatePickerToggleModal} style={styles.choosedContainer}>
          <Text style={styles.chooseTitle}>Эхлэх хугацаа</Text>
          <View style={styles.choosedContent}>
            <Text style={styles.chooseDescription}>{format(startDate, "yyyy.MM.dd")}</Text>
            <RightIcon />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={endDatePickerToggleModal} style={styles.choosedContainer}>
          <Text style={styles.chooseTitle}>Дуусах хугацаа</Text>
          <View style={styles.choosedContent}>
            <Text style={styles.chooseDescription}>{infinity ? "Хязгааргүй" : format(endDate, "yyyy.MM.dd")} </Text>
            <RightIcon />
          </View>
        </TouchableOpacity>
        <Button onPress={() => console.log("object")} style={styles.button} title="Хадгалах" />
      </ScrollView>
      {/* time modal */}
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
              locale="mn"
              maximumDate={new Date(2023, 15, 20)}
              mode={"time"}
              onChange={changeTime}
              value={times}
            />
          )}

          {Platform.OS === "android" && <Button onPress={() => setAndroidTime(!androidTime)} title={`Эмийн цаг сонгох: ${format(times, "HH:mm")}`} />}

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
          <Button onPress={() => addTime(times)} style={styles.saveButton} title="Хадгалах" />
        </View>
      </Modal>
      {/* firstDate modal */}
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
              mode={"date"}
              onChange={(event: any, date: any) => {
                setStartDate(date);
              }}
              testID="startDatePicker"
              value={startDate}
            />
          )}

          {Platform.OS === "android" && (
            <Button onPress={() => setAndroidStartDate(!androidStartDate)} title={`Эмийн цаг сонгох: ${format(startDate, "yyyy.MM.dd")}`} />
          )}

          {androidStartDate && (
            <DateTimePicker
              display={"calendar"}
              mode={"date"}
              onChange={(event: any, date: any) => {
                setStartDate(date);
                setAndroidStartDate(false);
              }}
              testID="startDatePicker"
              value={startDate}
            />
          )}
          <Button onPress={startDatePickerToggleModal} style={styles.saveButton} title="Хадгалах" />
        </View>
      </Modal>
      {/* endDate modal */}
      <Modal
        isVisible={isEndDatePickerVisible}
        onBackdropPress={endDatePickerToggleModal}
        onSwipeComplete={endDatePickerToggleModal}
        swipeDirection={["down", "up"]}>
        <View style={styles.modalContainer}>
          <Mon700 style={styles.headerTitle}>Дуусах хугацаа</Mon700>
          <TouchableOpacity style={styles.statusContainer}>
            <Text>{differenceInDays(endDate,startDate)}</Text>
            <TouchableOpacity onPress={() => setInfinity(!infinity)}>
              <Text>1</Text>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity style={styles.statusContainer}>
            <Text>1</Text>
            <Text>1</Text>
          </TouchableOpacity>

          {!infinity && (
            <>
              {Platform.OS === "ios" && (
                <DateTimePicker
                  display={"inline"}
                  mode={"date"}
                  onChange={(event: any, date: any) => {
                    setEndDate(date);
                  }}
                  testID="endDatePicker"
                  value={endDate}
                />
              )}

              {Platform.OS === "android" && (
                <Button onPress={() => setAndroidEndDate(!androidEndDate)} title={`Эмийн цаг сонгох: ${format(endDate, "yyyy.MM.dd")}`} />
              )}

              {androidEndDate && (
                <DateTimePicker
                  display={"calendar"}
                  minimumDate={startDate}
                  mode={"date"}
                  onChange={(event: any, date: any) => {
                    setEndDate(date);
                    setAndroidEndDate(false);
                  }}
                  testID="endDatePicker"
                  value={endDate}
                />
              )}
            </>
          )}
          <Button onPress={endDatePickerToggleModal} style={styles.saveButton} title="Хадгалах" />
        </View>
      </Modal>
    </>
  );
});

AddDrugAlertScreen.displayName = "AddDrugAlertScreen";

export default AddDrugAlertScreen;

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    backgroundColor: Colors.white,
  },
  pillContainer: {
    height        : 88,
    width         : 88,
    borderRadius  : 176,
    alignItems    : "center",
    justifyContent: "center",
    marginTop     : 16,
    alignSelf     : "center",
  },
  editContainer: {
    flexDirection: "row",
    alignItems   : "center",
    alignSelf    : "center",
    marginTop    : 16,
  },
  editTitle: {
    fontSize     : 12,
    color        : Colors.primary,
    fontFamily   : "Mon700",
    lineHeight   : 16,
    letterSpacing: 0.1,
    marginLeft   : 8,
  },
  drugName: {
    fontSize  : 24,
    lineHeight: 32,
    fontFamily: "Mon700",
    marginTop : 12,
    textAlign : "center",
  },
  drugDescription: {
    fontSize     : 14,
    fontFamily   : "Mon500",
    lineHeight   : 20,
    letterSpacing: 0.1,
    opacity      : 0.64,
    color        : Colors.text,
    textAlign    : "center",
  },
  choosedContainer: {
    flexDirection   : "row",
    alignItems      : "center",
    justifyContent  : "space-between",
    marginHorizontal: 24,
    marginTop       : 36,
  },
  choosedContent: {
    flexDirection: "row",
    alignItems   : "center",
  },
  chooseTitle: {
    fontFamily: "Mon700",
    fontSize  : 14,
    lineHeight: 20,
    color     : Colors.text,
  },
  chooseDescription: {
    fontSize     : 14,
    fontFamily   : "Mon500",
    lineHeight   : 20,
    letterSpacing: 0.25,
    color        : Colors.text,
    opacity      : 0.64,
    marginRight  : 12,
  },
  margins: {
    marginHorizontal: 24,
    marginTop       : 36,
    marginBottom    : 10,
  },
  choosedTimeContainer: {
    flexDirection   : "row",
    alignItems      : "center",
    justifyContent  : "space-between",
    marginHorizontal: 24,
    marginTop       : 20,
  },
  chooseTime: {
    backgroundColor  : Colors.timeBg,
    marginLeft       : 10,
    borderRadius     : 8,
    fontFamily       : "Mon500",
    fontSize         : 14,
    lineHeight       : 20,
    letterSpacing    : 0.25,
    opacity          : 0.64,
    color            : Colors.text,
    paddingVertical  : 6,
    paddingHorizontal: 12,
  },
  chooseCapsule: {
    fontSize     : 14,
    fontFamily   : "Mon500",
    lineHeight   : 20,
    letterSpacing: 0.1,
    color        : Colors.primary,
  },
  border: {
    borderWidth     : 1,
    borderColor     : Colors.strokeDark,
    marginHorizontal: 24,
    marginTop       : 12,
  },
  addTimeTitle: {
    fontSize     : 14,
    fontFamily   : "Mon500",
    lineHeight   : 20,
    letterSpacing: 0.25,
    color        : Colors.primary,
    marginLeft   : 18,
  },
  button: {
    marginHorizontal: 24,
    marginTop       : 50,
    marginBottom    : 40,
  },
  modalContainer: {
    backgroundColor: Colors.white,
  },
  headerTitle: {
    fontSize     : 16,
    lineHeight   : 28,
    letterSpacing: 0.15,
    textAlign    : "center",
    marginBottom : 16,
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
  iconButton: {
    padding: 30,
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
  statusContainer: {
    flexDirection : "row",
    justifyContent: "space-between",
  },
});
