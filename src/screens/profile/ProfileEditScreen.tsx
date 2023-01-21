import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from "react-native";
import React, { memo, useState } from "react";
import { Colors } from "../../constants/Colors";
import ProfileField from "../../components/profile/ProfileEditField";
import { IAuth } from "../../interfaces/IAuth";
import { useDispatch, useSelector } from "react-redux";
import { useHeaderHeight } from "@react-navigation/elements";
import { AuthApi } from "../../apis";
import { authMe } from "../../store/authSlice";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/Button";

const ProfileEditScreen = memo(() => {
  const keyboardHeight = useHeaderHeight();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { user } = useSelector((state: { auth: IAuth }) => state.auth);
  const [firstName, setFirstName] = useState(user?.firstName);
  const [gender, setGender] = useState(user?.gender);
  const [birth, setBirth] = useState(user?.birthDate);
  const [height, setHeight] = useState(user?.height);
  const [weight, setWeight] = useState(user?.weight);
  const width = "50%";
  const profileEdit = async (
    firstName: string | null | undefined,
    gender: string | null | undefined,
    birth: Date | null | undefined,
    height: string | null | undefined,
    weight: string | null | undefined,
  ) => {
    try {
      const values = {
        firstName: firstName,
        gender   : gender,
        birth    : birth,
        height   : height,
        weight   : weight,
      };
      await AuthApi.edit(values);
      const res = await AuthApi.me();
      dispatch(authMe(res));
      navigation.goBack();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <KeyboardAvoidingView style={styles.root} {...Platform.OS === "ios" && { behavior: "padding" }} keyboardVerticalOffset={keyboardHeight}>
      <View style={styles.indicatorContainer}>
        <View style={styles.inactiveIndicator}>
          <View style={[styles.activeIndicator, { width: width }]} />
        </View>
        <Text style={styles.indicatorText}>50%</Text>
      </View>
      <ProfileField
      birth={birth}
        firstName={firstName}
        gender={gender}
        height={height}
        phone={user?.phone}
        setBirth={setBirth}
        setFirstName={setFirstName}
        setGender={setGender}
        setHeight={setHeight}
        setWeight={setWeight}
        weight={weight}
      />
      <Button onPress={() => profileEdit(firstName, gender, birth, height, weight)} style={styles.button} title={"Хадгалах"} />
    </KeyboardAvoidingView>
  );
});

ProfileEditScreen.displayName = "ProfileEditScreen";

export default ProfileEditScreen;

const styles = StyleSheet.create({
  root: {
    flex           : 1,
    backgroundColor: Colors.white,
  },
  indicatorContainer: {
    marginHorizontal: 24,
    marginVertical  : 25,
    flexDirection   : "row",
    alignItems      : "center",
    width           : "100%",
  },
  inactiveIndicator: {
    height         : 8,
    borderRadius   : 40,
    backgroundColor: Colors.PrimarySoft,
    width          : "74%",
  },
  activeIndicator: {
    backgroundColor: Colors.primary,
    height         : 8,
    borderRadius   : 40,
  },
  indicatorText: {
    fontSize     : 15,
    lineHeight   : 24,
    letterSpacing: 0.15,
    fontFamily   : "Mon700",
    color        : Colors.text,
    marginLeft   : 20,
  },
  button: {
    marginHorizontal: 16,
    marginBottom    : 20,
    marginTop       : 20,
  },
});
