import { ScrollView, StyleSheet, View } from "react-native";
import React, { memo,  useState } from "react";
import { Mon700 } from "../../components/StyledText";
import { Colors } from "../../constants/Colors";
import RadioButton from "../../components/RadioButton";
import CheckBox from "../../components/CheckBox";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { useSWRToken } from "../../hooks/useSWRToken";
import { AuthApi, ChronicDeasesApi } from "../../apis";
import { authMe } from "../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { IAuth } from "../../interfaces/IAuth";

const ProfileEditChronicScreen = memo(() => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { user } = useSelector((state: { auth: IAuth }) => state.auth);

  const [isDeases, setIsDeases] = useState<boolean | null | undefined>(user?.isChronicDesease);
  const [selected, setSelected] = useState<string[]>(user?.chronicDisease);
  const { data,  } = useSWRToken("/allergies", () => {
    return ChronicDeasesApi.getChronicDeases();
  });
  const profileEdit = async (
    isDeases: boolean,
    health: string[]
   ) => {
     try {
       const values = {
        isChronicDesease: isDeases,
         chronicDisease  : health
       };
       await AuthApi.editChronicDesease(values);
       const res = await AuthApi.me();
       dispatch(authMe(res));
       navigation.goBack();
     } catch (err) {
       console.log(err);
     }
   };
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
  return (
    <ScrollView style={styles.root}>
      <View style={styles.container}>
        <Mon700 style={styles.title}>Та архаг хууч өвчинтэй юу</Mon700>
        <RadioButton selected={isDeases} setSelected={setIsDeases} />
      </View>
      {isDeases && (
        <>
          <View style={styles.divider} />
          <View style={styles.checkBoxContainer}>
            <Mon700 style={styles.title}>Та архаг хууч өвчинтэй вэ?</Mon700>
            <CheckBox data={data} select={select} selected={selected} unselect={unselect} />
          </View>
        </>
      )}
      <Button onPress={() => profileEdit(isDeases, selected)} style={styles.button} title="Хадгалах" />
    </ScrollView>
  );
});

ProfileEditChronicScreen.displayName = "ProfileEditChronicScreen";

export default ProfileEditChronicScreen;

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
