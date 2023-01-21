import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo, useCallback, useMemo, useRef, useState } from "react";
// import { useNavigation } from "@react-navigation/native";
// import { NativeStackScreenProps } from "@react-navigation/native-stack";
// import { RootStackParamList } from "../../navigation/types";
import Modal from "react-native-modal";
import DateTimePicker from "@react-native-community/datetimepicker";
import Animated, { Layout, LightSpeedInRight, LightSpeedOutRight } from "react-native-reanimated";
import BottomSheetModal, { BottomSheetBackdrop, BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import { differenceInDays, format } from "date-fns";
import DrugStyleOption from "./DrugOption/DrugStyleOption";
import DosageChooseOption from "./DrugOption/DosageChooseOption";
import DrinkConditionOption from "./DrugOption/DrinkConditionOption";
import FrequencyDrugOption from "./DrugOption/FrequencyDrugOption";
import Button from "../../components/Button";
import MedicalIcon from "../../components/MedicalIcon";
import { Mon400, Mon500, Mon700 } from "../../components/StyledText";
import UnCheckedBox from "../../components/UnCheckedBox";
import CheckedBox from "../../components/CheckedBox";
import PencilIcon from "../../../assets/svg/PencilSimple.svg";
import RightIcon from "../../../assets/svg/CaretRight.svg";
import MinusIcon from "../../../assets/svg/MinusCircle.svg";
import PlusIcon from "../../../assets/svg/PlusCirclePrimary.svg";
import ArrowLeft from "../../../assets/svg/back.svg";
import ArrowRight from "../../../assets/svg/CaretRight.svg";
import { Colors } from "../../constants/Colors";
import { ScheduleApi } from "../../apis";

// type Props = NativeStackScreenProps<RootStackParamList, "AddDrugAlertScreen">;

const AddDrugAlertScreen = memo(() => {
  const styleSheetRef = useRef<BottomSheetModal>(null);
  const drinkSheetRef = useRef<BottomSheetModal>(null);
  const dosageSheetRef = useRef<BottomSheetModal>(null);
  const frequencySheetRef = useRef<BottomSheetModal>(null);
  const [drugStyleVisible, setDrugStyleVisible] = useState(-1);
  const [drinkConditionVisible, setDrinkConditionVisible] = useState(-1);
  const [dosageChooseVisible, setDosageChooseVisible] = useState(-1);
  const [frequencyDrugVisible, setFrequencyDrugVisible] = useState(-1);
  // dose
  const [dose, setDose] = useState("мг");
  const [doseInput, setDoseInput] = useState("");

  const snapPoint = useMemo(() => ["80%"], []);
  const snapFreqPoint = useMemo(() => ["50%"], []);

  // 3.medicineName
  const medicineName = "Ибупрофен";
  // 5.medicine
  const medicine = "63c2a0d00092c0e645e5f8a4";
  // 6.icon
  const [icon, setIcon] = useState("1medical");
  // 7.color
  const [color, setColor] = useState("#FCC314");
  // 8.time
  const [timeArray, setTimeArray] = useState<string[]>([]);
  // 9.day - array
  const [days, setDays] = useState<string[]>([]);
  // 10.quanity
  const [quantity, setQuantity] = useState<string[]>([]);
  // 11.when
  const [when, setWhen] = useState("");
  // 12.endDate
  const [endDate, setEndDate] = useState(new Date());
  // 13.startDate
  const [startDate, setStartDate] = useState(new Date());
  //
  // const navigation = useNavigation();
  const [capsuleCount, setCapsuleCount] = useState(1);
  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);
  const [isStartDatePickerVisible, setIsStartDatePickerVisible] = useState(false);
  const [isEndDatePickerVisible, setIsEndDatePickerVisible] = useState(false);
  const [times, setTimes] = useState(new Date());
  const [androidTime, setAndroidTime] = useState(false);

  const [androidStartDate, setAndroidStartDate] = useState(false);
  const [infinity, setInfinity] = useState(false);

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

  const addTime = (date: Date, capsuleCount: number) => {
    const formatingTime = format(date, "HH:mm");
    setTimeArray(data => [...data, formatingTime]);
    setQuantity(data => [...data, `${capsuleCount}`]);
    setIsTimePickerVisible(false);
  };

  const removeTime = (index: number) => {
    setTimeArray(timeArray.filter((_, i) => i !== index));
    setQuantity(quantity.filter((_, i) => i !== index));
  };

  const changeTime = (event: any, selectedTime: any) => {
    setTimes(selectedTime);
    setAndroidTime(false);
  };

  const renderBackdrop = React.useCallback(
    (props: BottomSheetBackdropProps) => <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} pressBehavior={"close"} />,
    [],
  );

  const handleStyleSheet = useCallback((index: number) => {
    setDrugStyleVisible(index);
  }, []);

  const handleDrinkSheet = useCallback((index: number) => {
    setDrinkConditionVisible(index);
  }, []);

  const handleDosageSheet = useCallback((index: number) => {
    setDosageChooseVisible(index);
  }, []);

  const handleFrequencySheet = useCallback((index: number) => {
    setFrequencyDrugVisible(index);
  }, []);
  
  const onSubmit = async (  medicineName: string, medicine: string, icon: string, color:string, timeArray: string[], days: string[], quantity: string[], when:string, endDate:Date, startDate:Date) => {
    try {
      const data = await ScheduleApi.postSchedule(medicineName, medicine ,icon,color, timeArray, days, quantity, when, endDate, startDate);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Animated.ScrollView layout={Layout.springify()} showsVerticalScrollIndicator={false} style={styles.container}>
        <TouchableOpacity onPress={() => setDrugStyleVisible(0)} style={styles.header}>
          <View style={[styles.pillContainer, { backgroundColor: color }]}>
            <MedicalIcon height={52} icon={icon} width={52} />
          </View>
          <View style={styles.editContainer}>
            <PencilIcon />
            <Text style={styles.editTitle}>Харагдац өөрчлөх</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.drugName}>{medicineName}</Text>
        <Text style={styles.drugDescription}>Капсул, 400mg</Text>
        <TouchableOpacity onPress={() => setDosageChooseVisible(0)} style={styles.choosedContainer}>
          <Text style={styles.chooseTitle}>Тун</Text>
          <View style={styles.choosedContent}>
            <Text style={styles.chooseDescription}>{!doseInput || !dose ? "Сонгох" : `${doseInput} ${dose}`}</Text>
            <RightIcon />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFrequencyDrugVisible(0)} style={styles.choosedContainer}>
          <Text style={styles.chooseTitle}>Давтамж</Text>
          <View style={styles.choosedContent}>
            <Text style={styles.chooseDescription}>{days.length === 0 ? "Сонгох" : days.length === 7 ? "Өдөр бүр" : "Сонгогдсон өдрүүдэд"}</Text>
            <RightIcon />
          </View>
        </TouchableOpacity>
        <Text style={[styles.chooseTitle, styles.margins]}>Уух цагууд</Text>
        {timeArray &&
          timeArray.map((time, index) => {
            return (
              <Animated.View entering={LightSpeedInRight} exiting={LightSpeedOutRight} key={index} style={styles.choosedTimeContainer}>
                <TouchableOpacity onPress={() => removeTime(index)} style={styles.choosedContent}>
                  <MinusIcon />
                  <Text style={styles.chooseTime}>{time}</Text>
                </TouchableOpacity>
                <Text style={styles.chooseCapsule}>
                  {index === 0
                    ? quantity[0]
                    : index === 1
                    ? quantity[1]
                    : index === 2
                    ? quantity[2]
                    : index === 3
                    ? quantity[3]
                    : index === 4
                    ? quantity[4]
                    : 1}{" "}
                  капсул
                </Text>
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
        <TouchableOpacity onPress={() => setDrinkConditionVisible(0)} style={styles.choosedContainer}>
          <Text style={styles.chooseTitle}>Уух нөхцөл</Text>
          <View style={styles.choosedContent}>
            <Text style={styles.chooseDescription}>{when ? when : "Сонгох"}</Text>
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
        <Button
          onPress={() => onSubmit(medicineName, medicine, icon, color, timeArray, days, quantity, when, endDate, startDate)}
          style={styles.button}
          title="Хадгалах"
        />
      </Animated.ScrollView>
      <>
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
        {/* endDate modal */}
        <Modal
          isVisible={isEndDatePickerVisible}
          onBackdropPress={endDatePickerToggleModal}
          onSwipeComplete={endDatePickerToggleModal}
          swipeDirection={["down", "up"]}>
          <View style={styles.modalContainer}>
            <Mon700 style={styles.headerTitle}>Дуусах хугацаа</Mon700>
            <TouchableOpacity onPress={() => setInfinity(!infinity)} style={styles.statusContainer}>
              <Mon500 style={styles.infityText}>Хязгааргүй уух</Mon500>
              <View>{infinity ? <UnCheckedBox /> : <CheckedBox />}</View>
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
      </>
      <>
        <BottomSheetModal
          backdropComponent={renderBackdrop}
          enablePanDownToClose={true}
          index={drugStyleVisible}
          onChange={handleStyleSheet}
          onClose={() => setDrugStyleVisible(-1)}
          ref={styleSheetRef}
          snapPoints={snapPoint}>
          <DrugStyleOption color={color} icon={icon} setColor={setColor} setIcon={setIcon} />
          <Button
            onPress={() => {
              styleSheetRef.current?.snapToPosition(0);
              setDrugStyleVisible(-1);
            }}
            style={styles.button}
            title="Хадгалах"
          />
        </BottomSheetModal>
        <BottomSheetModal
          backdropComponent={renderBackdrop}
          enablePanDownToClose={true}
          index={dosageChooseVisible}
          onChange={handleDosageSheet}
          onClose={() => setDosageChooseVisible(-1)}
          ref={dosageSheetRef}
          snapPoints={snapPoint}>
          {/* <MapMenu setTabs={setTabs} setVisible={setVisible} tabs={tabs} /> */}
          <DosageChooseOption dose={dose} doseInput={doseInput} setDose={setDose} setDoseInput={setDoseInput} />
          <Button
            onPress={() => {
              dosageSheetRef.current?.snapToPosition(0);
              setDosageChooseVisible(-1);
            }}
            style={styles.button}
            title="Хадгалах"
          />
        </BottomSheetModal>
        <BottomSheetModal
          backdropComponent={renderBackdrop}
          bottomInset={0}
          enablePanDownToClose={true}
          index={frequencyDrugVisible}
          onChange={handleFrequencySheet}
          onClose={() => setFrequencyDrugVisible(-1)}
          ref={frequencySheetRef}
          snapPoints={snapFreqPoint}>
          <FrequencyDrugOption days={days} setDays={setDays} />
          <Button
            onPress={() => {
              frequencySheetRef.current?.snapToPosition(0);
              setFrequencyDrugVisible(-1);
            }}
            style={styles.button}
            title="Хадгалах"
          />
        </BottomSheetModal>
        <BottomSheetModal
          backdropComponent={renderBackdrop}
          bottomInset={0}
          enablePanDownToClose={true}
          index={drinkConditionVisible}
          onChange={handleDrinkSheet}
          onClose={() => setDrinkConditionVisible(-1)}
          ref={drinkSheetRef}
          snapPoints={snapFreqPoint}>
          <DrinkConditionOption setWhen={setWhen} when={when} />
          <Button
            onPress={() => {
              drinkSheetRef.current?.snapToPosition(0);
              setDrinkConditionVisible(-1);
            }}
            style={styles.button}
            title="Хадгалах"
          />
        </BottomSheetModal>
      </>
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
    marginTop    : 30,
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
    flexDirection   : "row",
    justifyContent  : "space-between",
    marginHorizontal: 8,
    alignItems      : "center",
    marginBottom    : 24,
  },
  header: {
    marginTop: 100,
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
