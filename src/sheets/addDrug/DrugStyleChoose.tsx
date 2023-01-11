import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo, useState } from "react";
import { Colors } from "../../constants/Colors";
import PillIcon1 from "../../../assets/svg/1.svg";
import PillIcon2 from "../../../assets/svg/2.svg";
import PillIcon3 from "../../../assets/svg/3.svg";
import PillIcon6 from "../../../assets/svg/6.svg";
import PillIcon8 from "../../../assets/svg/8.svg";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

const DrugStyleChooseSheet = memo(() => {
  const navigation = useNavigation();
  const [choosedPill, setChoosedPill] = useState("Шахмал");
  const [chooseBg, setChooseBg] = useState("#FCC314");
  const pills = [
    { id: 1, icon: PillIcon1, name: "Шахмал" },
    { id: 2, icon: PillIcon2, name: "Капсул" },
    { id: 3, icon: PillIcon3, name: "Түрхлэг" },
    { id: 4, icon: PillIcon6, name: "Цацлага" },
    { id: 5, icon: PillIcon8, name: "Цацлага" },
  ];
  const colors = [
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
    <View style={styles.container}>
      <Text style={styles.title}>Харагдац өөрчлөх</Text>
      <View style={[styles.pillContainer, { backgroundColor: chooseBg }]}>
        {choosedPill === "Шахмал" ? (
          <PillIcon1 color={Colors.white} />
        ) : choosedPill === "Капсул" ? (
          <PillIcon2 color={Colors.white} />
        ) : choosedPill === "Түрхлэг" ? (
          <PillIcon3 color={Colors.white} />
        ) : (
          <PillIcon6 color={Colors.white} />
        )}
      </View>
      <Text style={styles.title}>Ибупрофен</Text>
      <Text style={styles.description}>Эмийн хэлбэр</Text>
      <FlatList
        data={pills}
        horizontal
        keyExtractor={item => item.id.toLocaleString()}
        renderItem={({ item }) => {
          return (
            <View>
              <TouchableOpacity
                onPress={() => {
                  setChoosedPill(item.name);
                }}
                style={[styles.pills, choosedPill.includes(item.name) ? styles.primaryBg : styles.softPrimaryBg]}>
                {<item.icon color={choosedPill.includes(item.name) ? Colors.white : Colors.primary} height={40} width={40} />}
              </TouchableOpacity>
              <Text style={styles.pillText}>{item.name}</Text>
            </View>
          );
        }}
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalPills}
      />
      <Text style={styles.description}>Эмийн хэлбэр</Text>
      <BottomSheetFlatList
        data={colors}
        keyExtractor={item => item.id.toLocaleString()}
        numColumns={6}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => setChooseBg(item.color)}>
              <View style={chooseBg.includes(item.color) ? styles.choosedBgBorder : styles.unChoosedBgBorder}>
                <View style={[styles.chooseBg, { backgroundColor: item.color }]} />
              </View>
            </TouchableOpacity>
          );
        }}
        showsVerticalScrollIndicator={false}
        style={styles.chooseBgDatas}
      />
      <Button
        onPress={() => navigation.navigate("AddDrugAlertScreen", { pill: choosedPill, bgColor: chooseBg })}
        style={styles.button}
        title="Хадгалах"
      />
    </View>
  );
});

DrugStyleChooseSheet.displayName="DrugStyleChooseSheet";

export default DrugStyleChooseSheet;

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    backgroundColor: Colors.white,
  },
  title: {
    fontSize     : 16,
    fontFamily   : "Mon700",
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
    fontFamily      : "Mon500",
    lineHeight      : 16,
    letterSpacing   : 0.25,
    color           : Colors.newText,
    marginTop       : 24,
    marginHorizontal: 16,
  },
  pills: {
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
  horizontalPills: {
    marginLeft: 16,
    marginTop : 16,
    maxHeight : 100,
  },
  pillText: {
    fontSize     : 12,
    fontFamily   : "Mon500",
    lineHeight   : 16,
    letterSpacing: 0.25,
    marginTop    : 8,
  },
  chooseBg: {
    width       : 32,
    height      : 32,
    borderRadius: 100,
  },
  chooseBgDatas: {
    marginHorizontal: 16,
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
  button: {
    marginHorizontal: 24,
    marginTop       : 20,
    marginBottom    : 40,
  },
});
