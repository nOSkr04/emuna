import { ScrollView, StyleSheet, View } from "react-native";
import React, { memo,  useState } from "react";
import { Mon700 } from "../../components/StyledText";
import { Colors } from "../../constants/Colors";
import RadioButton from "../../components/RadioButton";
import CheckBox from "../../components/CheckBox";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { IAuth } from "../../interfaces/IAuth";
import { AllergyApi, AuthApi } from "../../apis";
import { authMe } from "../../store/authSlice";
import { useSWRToken } from "../../hooks/useSWRToken";

const ProfileEditAllergiesScreen = memo(() => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: { auth: IAuth }) => state.auth);
  const [isAllergie, setIsAllergie] = useState<boolean | undefined | null>(user?.isAllergy);
  const navigation = useNavigation();
  const [selected, setSelected] = useState<string[]>(user?.allergy);
  const { data,  } = useSWRToken("/allergies", () => {
    return AllergyApi.getAllergy();
  });
  const profileEdit = async (
   isAllergy: boolean,
   health: string[]
  ) => {
    try {
      const values = {
        isAllergy: isAllergy,
        allergy  : health
      };
      await AuthApi.editAllergy(values);
      const res = await AuthApi.me();
      dispatch(authMe(res));
      navigation.goBack();
    } catch (err) {
      console.log(err);
    }
  };
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
            <CheckBox data={data} select={select} selected={selected} unselect={unselect} />
          </View>
        </>
      )}
      <Button onPress={() => profileEdit(isAllergie, selected)} style={styles.button} title="Хадгалах" />
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
