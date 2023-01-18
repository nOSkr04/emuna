import { ScrollView, StyleSheet, View } from "react-native";
import React, { memo, useMemo, useState } from "react";
import { Mon700 } from "../../components/StyledText";
import { Colors } from "../../constants/Colors";
import RadioButton from "../../components/RadioButton";
import CheckBox from "../../components/CheckBox";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

const ProfileEditAllergiesScreen = memo(() => {
  const [isAllergie, setIsAllergie] = useState(false);
  const navigation = useNavigation();
  const [selected, setSelected] = useState([]);
  const info = useMemo(() => {
    return [
      { id: 1, name: "Сүү" },
      { id: 2, name: "Талх" },
      { id: 3, name: "Инсулин" },
      { id: 4, name: "Бонго" },
      { id: 5, name: "Диадис" },
      { id: 6, name: "Фэдөк" },
      { id: 7, name: "Угралц" },
      { id: 8, name: "Угралц" },
      { id: 9, name: "Угралц" },
      { id: 10, name: "Угралц" },
    ];
  }, []);
  const select = (chooseId: string) => {
    setSelected((selecting) => {
      return [...selecting, chooseId];
    });
  };
  const unselect = (chooseId: string) => {
    setSelected(selecting => {
      return selecting.filter(entry => entry !== chooseId);
    });
  };
  return (
    <ScrollView style={styles.root}>
      <View style={styles.container}>
        <Mon700 style={styles.title}>Та харшилтай юу</Mon700>
        <RadioButton selected={isAllergie} setSelected={setIsAllergie} />
      </View>
      {isAllergie && (
        <>
          <View style={styles.divider} />
          <View style={styles.checkBoxContainer}>
            <Mon700 style={styles.title}>Та ямар харшилтай вэ?</Mon700>
            <CheckBox data={info} select={select} selected={selected} unselect={unselect} />
          </View>
          <Button onPress={() => navigation.goBack()} style={styles.button} title="Хадгалах" />
        </>
      )}
    </ScrollView>
  );
});

ProfileEditAllergiesScreen.displayName = "ProfileEditAllergiesScreen";

export default ProfileEditAllergiesScreen;

const styles = StyleSheet.create({
  root: {
    flex           : 1,
    backgroundColor: Colors.white,
  },
  container: {
    marginHorizontal: 16,
    marginTop       : 16,
  },
  title: {
    fontSize     : 15,
    lineHeight   : 24,
    letterSpacing: 0.25,
  },
  divider: {
    height         : 4,
    backgroundColor: Colors.strokeDark,
    marginVertical : 32,
  },
  checkBoxContainer: {
    marginHorizontal: 16,
  },
  button: {
    marginHorizontal: 16,
    marginBottom    : 40,
    marginTop       : 40,
  },
});
