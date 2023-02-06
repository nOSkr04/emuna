import {  StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo, useCallback, useMemo, useRef, useState } from "react";
// import { NativeStackScreenProps } from "@react-navigation/native-stack";
// import { RootStackParamList } from "../../navigation/types";
import Animated, { Layout, LightSpeedInRight, LightSpeedOutRight } from "react-native-reanimated";
import BottomSheetModal, { BottomSheetBackdrop, BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import { format } from "date-fns";
import DrugStyleOption from "./DrugOption/DrugStyleOption";
import DosageChooseOption from "./DrugOption/DosageChooseOption";
import DrinkConditionOption from "./DrugOption/DrinkConditionOption";
import FrequencyDrugOption from "./DrugOption/FrequencyDrugOption";
import Button from "../../components/Button";
import MedicalIcon from "../../components/MedicalIcon";
import TimeModal from "../../components/drug/DrugOptionModal/TimeModal";
import FirstDateModal from "../../components/drug/DrugOptionModal/FirstDateModal";
import EndDateModal from "../../components/drug/DrugOptionModal/EndDateModal";
import PencilIcon from "../../../assets/svg/PencilSimple.svg";
import RightIcon from "../../../assets/svg/CaretRight.svg";
import MinusIcon from "../../../assets/svg/MinusCircle.svg";
import PlusIcon from "../../../assets/svg/PlusCirclePrimary.svg";
import { ScheduleApi } from "../../apis";
import { Colors } from "../../constants/Colors";
import AlertModal from "../../components/drug/AlertModal";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "AddDrugAlertScreen">;

const AddDrugAlertScreen = memo(({ route }: Props) => {
  const { name, size, shape } = route.params;
  const styleSheetRef = useRef<BottomSheetModal>(null);
  const drinkSheetRef = useRef<BottomSheetModal>(null);
  const dosageSheetRef = useRef<BottomSheetModal>(null);
  const frequencySheetRef = useRef<BottomSheetModal>(null);
  const [drugStyleVisible, setDrugStyleVisible] = useState(-1);
  const [drinkConditionVisible, setDrinkConditionVisible] = useState(-1);
  const [dosageChooseVisible, setDosageChooseVisible] = useState(-1);
  const [frequencyDrugVisible, setFrequencyDrugVisible] = useState(-1);
  const [alertVisible, setAlertVisible] = useState(false);
  // dose
  const [dose, setDose] = useState("мг");
  const [doseInput, setDoseInput] = useState("");

  const snapPoint = useMemo(() => ["80%"], []);
  const snapFreqPoint = useMemo(() => ["50%"], []);

  // // 3.medicineName
  // const medicineName = "Ибупрофен";
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

  const removeTime = (index: number) => {
    setTimeArray(timeArray.filter((_, i) => i !== index));
    setQuantity(quantity.filter((_, i) => i !== index));
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

  const onSubmit = async (
    name: string,
    medicine: string,
    icon: string,
    color: string,
    timeArray: string[],
    days: string[],
    quantity: string[],
    when: string,
    endDate: Date,
    startDate: Date,
  ) => {
    try {
      await ScheduleApi.postSchedule(name, medicine ,icon,color, timeArray, days, quantity, when, endDate, startDate);
      setAlertVisible(true);
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
        <Text style={styles.drugName}>{name}</Text>
        <Text style={styles.drugDescription}>{shape}, {size}</Text>
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
        <TouchableOpacity onPress={() =>  setIsStartDatePickerVisible(!isStartDatePickerVisible)} style={styles.choosedContainer}>
          <Text style={styles.chooseTitle}>Эхлэх хугацаа</Text>
          <View style={styles.choosedContent}>
            <Text style={styles.chooseDescription}>{format(startDate, "yyyy.MM.dd")}</Text>
            <RightIcon />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>  setIsEndDatePickerVisible(!isEndDatePickerVisible)} style={styles.choosedContainer}>
          <Text style={styles.chooseTitle}>Дуусах хугацаа</Text>
          <View style={styles.choosedContent}>
            <Text style={styles.chooseDescription}>{infinity ? "Хязгааргүй" : format(endDate, "yyyy.MM.dd")} </Text>
            <RightIcon />
          </View>
        </TouchableOpacity>
        <Button
          onPress={() => onSubmit(name, medicine, icon, color, timeArray, days, quantity, when, endDate, startDate)}
          style={styles.button}
          title="Хадгалах"
        />
      </Animated.ScrollView>
      <>
        <TimeModal
          androidTime={androidTime}
          capsuleCount={capsuleCount}
          isTimePickerVisible={isTimePickerVisible}
          setAndroidTime={setAndroidTime}
          setCapsuleCount={setCapsuleCount}
          setIsTimePickerVisible={setIsTimePickerVisible}
          setQuantity={setQuantity}
          setTimeArray={setTimeArray}
          setTimes={setTimes}
          times={times}
        />
        <FirstDateModal
          androidStartDate={androidStartDate}
          isStartDatePickerVisible={isStartDatePickerVisible}
          setAndroidStartDate={setAndroidStartDate}
          setIsStartDatePickerVisible={setIsStartDatePickerVisible}
          setStartDate={setStartDate}
          startDate={startDate}
        />
        <EndDateModal
          androidEndDate={androidEndDate}
          endDate={endDate}
          infinity={infinity}
          isEndDatePickerVisible={isEndDatePickerVisible}
          setAndroidEndDate={setAndroidEndDate}
          setEndDate={setEndDate}
          setInfinity={setInfinity}
          setIsEndDatePickerVisible={setIsEndDatePickerVisible}
          startDate={startDate}
        />
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
          <DrugStyleOption color={color} icon={icon} name={name} setColor={setColor} setIcon={setIcon}  />
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
      <AlertModal alertVisible={alertVisible} name={name}  setAlertVisible={setAlertVisible} shape={shape} size={size}  />
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

  header: {
    marginTop: 80,
  },


});