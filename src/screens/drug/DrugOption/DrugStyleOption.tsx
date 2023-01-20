import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { Dispatch, SetStateAction, memo } from "react";
import MedicalIcon from "../../../components/MedicalIcon";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { Mon500, Mon700 } from "../../../components/StyledText";
import { Colors } from "../../../constants/Colors";
import Icon1 from "../../../../assets/svg/1.svg";
import Icon2 from "../../../../assets/svg/2.svg";
import Icon3 from "../../../../assets/svg/3.svg";
import Icon4 from "../../../../assets/svg/4.svg";
import Icon5 from "../../../../assets/svg/5.svg";
import Icon6 from "../../../../assets/svg/6.svg";
import Icon7 from "../../../../assets/svg/7.svg";
import Icon8 from "../../../../assets/svg/8.svg";
import Button from "../../../components/Button";
type Props = {
  icon?: string;
  color?: string;
  setIcon: Dispatch<SetStateAction<string>>;
  setColor: Dispatch<SetStateAction<string>>;
  close: () => void
};

const DrugStyleOption = memo(({ icon, color, setIcon, setColor,close }: Props) => {
  const iconDummy = [
    { id: 1, name: "shamal", value: "1medical", jsxIcon: Icon1 },
    { id: 2, name: "shamal", value: "2medical", jsxIcon: Icon2 },
    { id: 3, name: "shamal", value: "3medical" , jsxIcon: Icon3 },
    { id: 4, name: "shamal", value: "4medical" , jsxIcon: Icon4 },
    { id: 5, name: "shamal", value: "5medical" , jsxIcon: Icon5 },
    { id: 6, name: "shamal", value: "6medical" , jsxIcon: Icon6 },
    { id: 7, name: "shamal", value: "7medical" , jsxIcon: Icon7 },
    { id: 8, name: "shamal", value: "8medical" , jsxIcon: Icon8 },
  ];

  const colorDummy = [
    { id: 1, color: Colors.yellowPill },
    { id: 2, color: Colors.orangePill },
    { id: 3, color: Colors.softRedPill },
    { id: 4, color: Colors.redPill },
    { id: 5, color: Colors.hardRedPill },
    { id: 6, color: Colors.brownPill },
    { id: 7, color: Colors.purplePill },
    { id: 8, color: Colors.hardBluePill },
    { id: 9, color: Colors.bluePill },
    { id: 10, color: Colors.softBluePill },
    { id: 11, color: Colors.hardGreenPill },
    { id: 12, color: Colors.greenPill },
  ];
  return (
    <BottomSheetScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Mon700 style={styles.title}>Харагдац өөрчлөх</Mon700>
      <View style={[styles.pillContainer, { backgroundColor: color }]}>
        <MedicalIcon icon={icon} />
      </View>
      <Mon700 style={styles.title}>Ибупрофен</Mon700>
      <Mon500 style={styles.description}>Эмийн хэлбэр</Mon500>
      <BottomSheetScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.horizontalPills}>
        {iconDummy.map(item => {
          return (
            <View key={item.id}>
              <TouchableOpacity
                onPress={() => {
                  setIcon(item.value);
                }}
                style={[styles.iconContainer, icon?.includes(item.value) ? styles.primaryBg : styles.softPrimaryBg]}>
                {<item.jsxIcon color={icon?.includes(item.value)  ? Colors.white : Colors.primary} height={40} width={40} />}
              </TouchableOpacity>
              <Mon500 style={styles.iconText}>{item.name}</Mon500>
            </View>
          );
        })}
      </BottomSheetScrollView>
      <Mon500 style={styles.description}>Эмийн хэлбэр</Mon500>
      <View style={styles.colorsContainer}>
        {colorDummy.map(item => {
          return (
            <TouchableOpacity key={item.id} onPress={() => setColor(item.color)}>
              <View style={color?.includes(item.color) ? styles.choosedBgBorder : styles.unChoosedBgBorder}>
                <View style={[styles.chooseBg, { backgroundColor: item.color }]} />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      <Button
        onPress={close}
        style={styles.button}
        title="Хадгалах"
      />
    </BottomSheetScrollView>
  );
});

DrugStyleOption.displayName = "DrugStyleOption";

export default DrugStyleOption;

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    backgroundColor: Colors.white,
  },
  title: {
    fontSize     : 16,
    lineHeight   : 28,
    letterSpacing: 0.15,
    textAlign    : "center",
    marginTop    : 16,
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
  description: {
    fontSize        : 12,
    lineHeight      : 16,
    letterSpacing   : 0.25,
    color           : Colors.newText,
    marginTop       : 24,
    marginHorizontal: 16,
  },
  horizontalPills: {
    marginLeft: 16,
    marginTop : 16,
    maxHeight : 100,
  },
  iconContainer: {
    height        : 64,
    width         : 64,
    justifyContent: "center",
    alignItems    : "center",
    borderRadius  : 100,
    marginRight   : 29,
  },
  softPrimaryBg: {
    backgroundColor: Colors.PrimarySoft,
  },
  primaryBg: {
    backgroundColor: Colors.primary,
  },
  iconText: {
    fontSize     : 12,
    lineHeight   : 16,
    letterSpacing: 0.25,
    marginTop    : 8,
  },
  colorsContainer: {
    flexDirection : "row",
    flexWrap      : "wrap",
    alignItems    : "center",
    justifyContent: "center",
  },
  choosedBgBorder: {
    width         : 40,
    height        : 40,
    borderWidth   : 2,
    borderRadius  : 100,
    borderColor   : Colors.primary,
    alignItems    : "center",
    marginTop     : 16,
    justifyContent: "center",
    marginRight   : 20,
  },
  unChoosedBgBorder: {
    width         : 40,
    height        : 40,
    alignItems    : "center",
    marginTop     : 16,
    justifyContent: "center",
    marginRight   : 20,
  },
  chooseBg: {
    width       : 32,
    height      : 32,
    borderRadius: 100,
  },
  button: {
    marginHorizontal: 24,
    marginTop       : 20,
    marginBottom    : 40,
  },
});
