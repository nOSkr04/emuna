import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import React, { memo, useEffect, useRef, useState } from "react";
import { Colors } from "../../constants/Colors";
import BirthDayField from "../../components/auth/BirthDayField";
import IconButton from "../../../assets/svg/sent.svg";
import StepOne from "../../components/auth/SignUpDetailSteps/StepOne";
import StepTwo from "../../components/auth/SignUpDetailSteps/StepTwo";
import StepThree from "../../components/auth/SignUpDetailSteps/StepThree";
import StepFour from "../../components/auth/SignUpDetailSteps/StepFour";
import StepFive from "../../components/auth/SignUpDetailSteps/StepFive";
import StepSix from "../../components/auth/SignUpDetailSteps/StepSix";
import StepSeven from "../../components/auth/SignUpDetailSteps/StepSeven";
import { AuthApi } from "../../apis";
import { authLogin } from "../../store/authSlice";
import { useDispatch } from "react-redux";
import { RootStackParamList } from "../../navigation/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import SkipButton from "../../components/headers/SkipButton";
import { useNotification } from "../../hooks/useNotification";
import { useHeaderHeight } from "@react-navigation/elements";
type Props = NativeStackScreenProps<RootStackParamList, "UserDetailRegisterScreen">;


const UserDetailScreen = memo((props : Props) => {
  const navigation = useNavigation();
  const keyboardHeight = useHeaderHeight();
  const { token, registerForPushNotificationsAsync } = useNotification();
  const [step, setStep] = useState([1]);
  const { phone,password } = props.route.params;
  const [firstName, setFirstName] = useState("");
  const [nameInput, setNameInput] = useState(false);
  const [birthInput, setBirthInput] = useState(false);
  const [heightInput, setHeightInput] = useState(false);
  const [genderArray, setGenderArray] = useState(["male", "female", "other"]);
  const [gender, setGender] = useState("other");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [selectDone, setSelectDone] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);
  const dispatch = useDispatch();
  const onSubmit = async () => {
    try {
      const data = await AuthApi.register(phone, password,token, firstName && firstName, height && height, weight && weight, gender && gender,  );
      registerForPushNotificationsAsync();
      dispatch(authLogin(data));
    } catch (err) {
      console.log(err);
    }
  };
  // let listViewRef;
  const select = (chooseId: string) => {
    setSelected(selecting => {
      return [...selecting, chooseId];
    });
  };
  const unselect = (chooseId: string) => {
    setSelected(selecting => {
      return selecting.filter(entry => entry !== chooseId);
    });
  };

  const stepOne = (id: number) => {
    setStep(selecting => {
      return [...selecting, id];
    });
    setNameInput(true);
  };
  const stepTwo = (id: number) => {
    setStep(selecting => {
      return [...selecting, id];
    });
    setNameInput(false);
    //  listViewRef.scrollToEnd({ animated: true });
  };
  const stepThree = (id: number, index: number) => {
    setStep(selecting => {
      return [...selecting, id];
    });
    setGenderArray(oldValues => {
      return oldValues.filter((_, i) => i === index);
    });
    setBirthInput(true);
    //  listViewRef.scrollToEnd({ animated: true });
  };
  const stepFive = (id: number) => {
    setStep(selecting => {
      return [...selecting, id];
    });
    setBirthInput(false);
    setHeightInput(true);
    //  listViewRef.scrollToEnd({ animated: true });
  };
  const stepSix = (id: number) => {
    setStep(selecting => {
      return [...selecting, id];
    });
    setHeightInput(false);
    //  listViewRef.scrollToEnd({ animated: true });
  };
  const stepSeven = (id: number) => {
    setStep(selecting => {
      return [...selecting, id];
    });
    //  listViewRef.scrollToEnd({ animated: true });
    setSelectDone(true);
  };
  const _scrollToEnd = () => {
    setTimeout(() => scrollViewRef.current?.scrollToEnd({ animated: true }), 200);
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <SkipButton onSubmit={onSubmit}  />,
      headerLeft : () => <View />,
      headerTitle: ""
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);
  return (
    <KeyboardAvoidingView style={styles.container} {...Platform.OS === "ios" && { behavior: "padding" }} keyboardVerticalOffset={keyboardHeight}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        keyboardShouldPersistTaps="handled"
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}>
        {step.includes(1) && <StepOne step={step} stepOne={stepOne} />}
        {step.includes(2) && <StepTwo firstName={firstName} nameInput={nameInput} />}
        {step.includes(3) && <StepThree _scrollToEnd={_scrollToEnd} gender={genderArray} setGender={setGender} stepThree={stepThree} />}
        {step.includes(4) && <StepFour birthInput={birthInput} day={day} month={month} year={year} />}
        {step.includes(5) && <StepFive height={height} heightInput={heightInput} weight={weight}  />}
        {step.includes(6) && <StepSix _scrollToEnd={_scrollToEnd} select={select} selectDone={selectDone} selected={selected} stepSeven={stepSeven}  unselect={unselect} />}
        {step.includes(7) && <StepSeven firstName={firstName} onSubmit={onSubmit} />}
        {nameInput && (
          <View style={styles.inputContainer}>
            <TextInput
              onChangeText={setFirstName}
              placeholder={"Нэр"}
              style={firstName.length === 0 ? styles.darkInput : styles.primaryInput}
              value={firstName}
            />
            {firstName.length !== 0 && (
              <TouchableOpacity
                onPress={() => {
                  stepTwo(3);
                }}
                style={styles.iconContainer}>
                <IconButton />
              </TouchableOpacity>
            )}
          </View>
        )}
        {birthInput && (
          <View style={styles.birthContainer}>
            <BirthDayField
              maxLength={4}
              setValue={setYear}
              style={year.length === 0 ? styles.darkGrey : styles.primary}
              textStyle={year.length === 0 ? styles.birthTitle : styles.activeBirthTitle}
              title="Он"
              value={year}
              width="30%"
            />
            <BirthDayField
              maxLength={2}
              setValue={setMonth}
              style={month.length === 0 ? styles.darkGrey : styles.primary}
              textStyle={month.length === 0 ? styles.birthTitle : styles.activeBirthTitle}
              title="Сар"
              value={month}
              width="25%"
            />
            <BirthDayField
              maxLength={2}
              setValue={setDay}
              style={day.length === 0 ? styles.darkGrey : styles.primary}
              textStyle={day.length === 0 ? styles.birthTitle : styles.activeBirthTitle}
              title="Өдөр"
              value={day}
              width="25%"
            />
            <TouchableOpacity
              onPress={() => {
                stepFive(5);
              }}
              style={styles.iconButton}>
              <IconButton />
            </TouchableOpacity>
          </View>
        )}
        {heightInput && (
          <View style={styles.birthContainer}>
            <BirthDayField
              maxLength={3}
              setValue={setHeight}
              style={height.length === 0 ? styles.darkGrey : styles.primary}
              textStyle={height.length === 0 ? styles.birthTitle : styles.activeBirthTitle}
              title="Өндөр"
              value={height}
              width="40%"
            />
            <BirthDayField
              maxLength={3}
              setValue={setWeight}
              style={weight.length === 0 ? styles.darkGrey : styles.primary}
              textStyle={weight.length === 0 ? styles.birthTitle : styles.activeBirthTitle}
              title="Жин"
              value={weight}
              width="40%"
            />
            <TouchableOpacity
              onPress={() => {
                stepSix(6);
                _scrollToEnd();
              }}
              style={styles.iconButton}>
              <IconButton />
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
});

UserDetailScreen.displayName = "UserDetailScreen";

export default UserDetailScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex           : 1,
  },
  contentContainer: { justifyContent: "flex-end", flexGrow: 1, marginBottom: 20 },
  inputContainer  : {
    marginHorizontal: 16,
    justifyContent  : "center",
    marginVertical  : 16,
  },
  primaryInput: {
    borderWidth : 1,
    height      : 48,
    borderRadius: 17,
    paddingLeft : 20,
    borderColor : Colors.primary,
  },
  darkInput: {
    borderWidth : 1,
    height      : 48,
    borderRadius: 17,
    paddingLeft : 20,
    borderColor : Colors.strokeDark,
  },
  birthContainer: {
    flexDirection : "row",
    width         : "90%",
    alignItems    : "center",
    margin        : 16,
    justifyContent: "space-between",
  },
  iconContainer: {
    position: "absolute",
    right   : 8,
    padding : 15,
  },
  darkGrey: {
    color      : Colors.darkGrey,
    borderColor: Colors.darkGrey,
  },
  primary: {
    color      : Colors.primary,
    borderColor: Colors.primary,
  },
  iconButton: {
    padding: 15,
  },
  birthTitle: {
    color: Colors.texts,
  },
  activeBirthTitle: {
    color: Colors.primary,
  },
});
