import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import { Colors } from "../../constants/Colors";
import PillIcon1 from "../../../assets/svg/1.svg";
import PillIcon2 from "../../../assets/svg/2.svg";
import PillIcon3 from "../../../assets/svg/3.svg";
import PillIcon6 from "../../../assets/svg/6.svg";
// import PillIcon8 from "../../../assets/svg/8.svg";
import PencilIcon from "../../../assets/svg/PencilSimple.svg";
import RightIcon from "../../../assets/svg/CaretRight.svg";
import MinusIcon from "../../../assets/svg/MinusCircle.svg";
import PlusIcon from "../../../assets/svg/PlusCirclePrimary.svg";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";
type Props = NativeStackScreenProps<RootStackParamList, "AddDrugAlertScreen">;
const AddDrugAlertScreen = memo((props: Props) => {
  const navigation = useNavigation();
  // { id: 1, icon: PillIcon1, name: "Шахмал" },
  // { id: 2, icon: PillIcon2, name: "Капсул" },
  // { id: 3, icon: PillIcon3, name: "Түрхлэг" },
  // { id: 4, icon: PillIcon6, name: "Цацлага" },
  // { id: 5, icon: PillIcon8, name: "Цацлага" },
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("DrugStyleChooseSheet")}>
        <View style={[styles.pillContainer, { backgroundColor: props.route.params ? props.route.params.bgColor : Colors.yellowPill }]}>
          {props.route.params ? (
            props.route.params.pill === "Шахмал" ? (
              <PillIcon1 color={Colors.white} height={52} width={52} />
            ) : props.route.params.pill === "Капсул" ? (
              <PillIcon2 color={Colors.white} height={52} width={52} />
            ) :  props.route.params.pill === "Түрхлэг" ? (
              <PillIcon3 color={Colors.white} height={52} width={52} />
            ) :  <PillIcon6 color={Colors.white} height={52} width={52} />
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
      <TouchableOpacity style={styles.choosedContainer}>
        <Text style={styles.chooseTitle}>Давтамж</Text>
        <View style={styles.choosedContent}>
          <Text style={styles.chooseDescription}>Өдөр бүр</Text>
          <RightIcon />
        </View>
      </TouchableOpacity>
      <Text style={[styles.chooseTitle, styles.margins]}>Уух цагууд</Text>
      <TouchableOpacity style={styles.choosedTimeContainer}>
        <View style={styles.choosedContent}>
          <MinusIcon />
          <Text style={styles.chooseTime}>08:00</Text>
        </View>
        <Text style={styles.chooseCapsule}>1 капсул</Text>
      </TouchableOpacity>
      <View style={styles.border} />
      <TouchableOpacity style={styles.choosedTimeContainer}>
        <View style={styles.choosedContent}>
          <MinusIcon />
          <Text style={styles.chooseTime}>16:00</Text>
        </View>
        <Text style={styles.chooseCapsule}>1 капсул</Text>
      </TouchableOpacity>
      <View style={styles.border} />
      <TouchableOpacity style={styles.choosedTimeContainer}>
        <View style={styles.choosedContent}>
          <PlusIcon />
          <Text style={styles.addTimeTitle}>Цаг нэмэх</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.choosedContainer}>
        <Text style={styles.chooseTitle}>Уух нөхцөл</Text>
        <View style={styles.choosedContent}>
          <Text style={styles.chooseDescription}>Хоолны дараа</Text>
          <RightIcon />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.choosedContainer}>
        <Text style={styles.chooseTitle}>Эхлэх хугацаа</Text>
        <View style={styles.choosedContent}>
          <Text style={styles.chooseDescription}>2022.11.10</Text>
          <RightIcon />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.choosedContainer}>
        <Text style={styles.chooseTitle}>Дуусах хугацаа</Text>
        <View style={styles.choosedContent}>
          <Text style={styles.chooseDescription}>Хязгааргүй</Text>
          <RightIcon />
        </View>
      </TouchableOpacity>
      <Button onPress={() => console.log("object")} style={styles.button} title="Хадгалах" />
    </ScrollView>
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
});
