import { Button,  Text,  View } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginField from "../../components/auth/LoginField";
import { authLogin, authLogout } from "../../store/authSlice";
import { AuthApi } from "../../apis";
import { IAuth } from "../../interfaces/IAuth";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("97014400");
  const [password, setPassword] = useState("goodtech123");
   const { user, accessToken } = useSelector((state: { auth: IAuth }) => state.auth);
  const onLogin = async () => {
    try {
      const data = await AuthApi.login(username, password);
      console.log(data);
      dispatch(authLogin(data));
    } catch (err) {
      console.log(err);
    }
  };
  const logout = async () => {
    dispatch(authLogout());
  };

  return (
    <View>
      <LoginField password={password} setPassword={setPassword} setUsername={setUsername} username={username} />
      <Text>{JSON.stringify(user)}</Text>
      <Text>{JSON.stringify(accessToken)}</Text>
      <Button onPress={onLogin} title="go" />
      <Button onPress={logout} title="goLogout" />
    </View>
  );
};

export default ProfileScreen;
