import {  KeyboardAvoidingView, ScrollView, StyleSheet } from "react-native";
import React, { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { Colors } from "../../constants/Colors";
import Button from "../../components/Button";
import LoginField from "../../components/auth/LoginField";
import { AuthApi } from "../../apis";
import { authLogin } from "../../store/authSlice";

const LoginScreen = memo(() => {
  const dispatch = useDispatch();
  const [phone, setPhone] = useState("97014400");
  const [password, setPassword] = useState("1234");
  const onSubmit = async () => {
    try {
      const data = await AuthApi.login(phone, password);
      dispatch(authLogin(data));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
