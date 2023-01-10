import { KeyboardAvoidingView, ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import React, { useRef, useState } from "react";
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
const UserDetailScreen = () => {
  const [step, setStep] = useState([1]);
  const [firstName, setFirstName] = useState("");
  const [nameInput, setNameInput] = useState(false);
  const [birthInput, setBirthInput] = useState(false);
  const [heightInput, setHeightInput] = useState(false);
  const [gender, setGender] = useState(["Эрэгтэй", "Эмэгтэй", "Бусад"]);
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [selected, setSelected] = useState([]);
  const [selectDone, setSelectDone] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);
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
    setGender(oldValues => {
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

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        keyboardShouldPersistTaps="handled"
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}>
        {step.includes(1) && <StepOne step={step} stepOne={stepOne} />}
        {step.includes(2) && <StepTwo firstName={firstName} nameInput={nameInput} />}
        {step.includes(3) && <StepThree _scrollToEnd={_scrollToEnd} gender={gender} stepThree={stepThree} />}
        {step.includes(4) && <StepFour birthInput={birthInput} day={day} month={month} year={year} />}
        {step.includes(5) && <StepFive height={height} heightInput={heightInput} weight={weight} />}
        {step.includes(6) && <StepSix select={select} selectDone={selectDone} selected={selected} stepSeven={stepSeven} unselect={unselect} />}
        {step.includes(7) && <StepSeven firstName={firstName} />}
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
              }}
              style={styles.iconButton}>
              <IconButton />
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

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
