import {  KeyboardAvoidingView, Platform, ScrollView, StyleSheet } from "react-native";
import React, { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { Colors } from "../../constants/Colors";
import Button from "../../components/Button";
import LoginField from "../../components/auth/LoginField";
import { AuthApi } from "../../apis";
import { authLogin } from "../../store/authSlice";
import { useHeaderHeight } from "@react-navigation/elements";
import * as Notifications from "expo-notifications";
import Toast from "react-native-root-toast";

const LoginScreen = memo(() => {
  const dispatch = useDispatch();
  const [phone, setPhone] = useState("99110523");
  const [password, setPassword] = useState("Dadamn04");
  const onSubmit = async () => {
    const token = (await Notifications.getExpoPushTokenAsync()).data;
    try {
      const data = await AuthApi.login(phone, password ,token);
      dispatch(authLogin(data));
    } catch (err: any) {
      Toast.show(err.error.message, {
        duration       : Toast.durations.SHORT,
        position       : Toast.positions.TOP + 50,
        textColor      : "black",
        shadow         : true,
        animation      : true,
        hideOnPress    : true,
        delay          : 0,
        backgroundColor: "#FFB6C1",
      });
    }
  };
  const height = useHeaderHeight();
  return (
    <KeyboardAvoidingView style={styles.container} {...Platform.OS === "ios" && { behavior: "padding" }} keyboardVerticalOffset={height}>
      <ScrollView showsVerticalScrollIndicator={false} >
        <LoginField password={password} phone={phone} setPassword={setPassword} setPhone={setPhone} />
      </ScrollView>
      <Button onPress={onSubmit} secondary={password.length > 3 ? false : true} style={styles.button} title="Үргэлжлүүлэх" />
    </KeyboardAvoidingView>
  );
});

LoginScreen.displayName = "LoginScreen";

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    backgroundColor: Colors.white,
  },

  button: {
    bottom          : 20,
    marginHorizontal: 24,
  },
});

export default LoginScreen;
