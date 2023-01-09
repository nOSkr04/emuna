import { KeyboardAvoidingView, ScrollView, StyleSheet, } from "react-native";
import React, { memo, useState } from "react";
import { Colors } from "../../constants/Colors";
import Button from "../../components/Button";
import { AuthApi } from "../../apis";
import { useDispatch } from "react-redux";
import { authLogin } from "../../store/authSlice";
import LoginField from "../../components/auth/LoginField";

const LoginScreen = memo(() => {
  const dispatch = useDispatch();
  const [username,setUsername] = useState("97014400");
  const [password,setPassword] = useState("goodtech123");
  const onSubmit = async () => {
   try{
    const data = await AuthApi.login(username, password);
    dispatch(authLogin(data));
   } catch(err) {
    console.log(err);
   }
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LoginField password={password} setPassword={setPassword} setUsername={setUsername} username={username}  />
      </ScrollView>
      <Button onPress={onSubmit} secondary={password.length > 3 ? false : true} style={styles.button} title="Үргэлжлүүлэх"   />
    </KeyboardAvoidingView>
  );
});

LoginScreen.displayName = "LoginScreen";

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    backgroundColor: Colors.white
  },
  button: {
    bottom          : 20,
    marginHorizontal: 24
  }
});

export default LoginScreen;
