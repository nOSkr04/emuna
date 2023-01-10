/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/react-in-jsx-scope */
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { RootStackParamList } from "./types";
import BottomTabNavigator from "./BottomTabNavigator";
import AddDrugScreen from "../screens/drug/AddDrugScreen";
import { useDispatch, useSelector } from "react-redux";
import { IAuth } from "../interfaces/IAuth";
import { useSWRToken } from "../hooks/useSWRToken";
import { Auth } from "../models/Auth";
import { authMe } from "../store/authSlice";
import LoginScreen from "../screens/auth/Login";
import { AuthApi } from "../apis";
import SplashScreen from "../screens/SplashScreen";
import PublicLandingScreen from "../screens/auth/PublicLanding";
import {
  addDrugAlertOptions,
  addDrugScreenOptions,
  barCodeScannerScreenOptions,
  loginScreenOptions,
  otpVerifyScreenOptions,
  profileEditScreenOptions,
  userDetailRegisterScreenOptions,
} from "../components/headers";
import SignUpScreen from "../screens/auth/SignUp";
import OtpVerifyScreen from "../screens/auth/OtpVerify";
import UserDetailRegisterScreen from "../screens/auth/UserDetailRegister";
import SearchDrugScreen from "../screens/drug/SearchDrugScreen";
import SearchBarcodeScreen from "../screens/drug/SearchBarcodeScreen";
import DrugDetailScreen from "../screens/drug/DrugDetailScreen";
import AddDrugAlertScreen from "../screens/drug/AddDrugAlert";
import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import { useNotification } from "../hooks/useNotification";
import ProfileEditScreen from "../screens/profile/ProfileEditScreen";
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const dispatch = useDispatch();
  const { user } = useSelector((state: { auth: IAuth }) => state.auth);
  const { registerForPushNotificationsAsync, handleNotificationResponse,  } = useNotification();
  const { isInitialLoading } = useSWRToken<Auth>(
    "/auth/me",
    async () => {
      return await AuthApi.me();
    },
    {
      onSuccess: authData => {
        dispatch(authMe(authData));
      },
    },
  );
  useEffect(() => {
    registerForPushNotificationsAsync();
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldPlaySound: true,
        shouldShowAlert: true,
        shouldSetBadge : false,
      }),
    });
    const responseListener = Notifications.addNotificationResponseReceivedListener(handleNotificationResponse);
    return () => {
      if (responseListener) Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);
  if (isInitialLoading) {
    return <Stack.Screen component={SplashScreen} name="SplashScreen" />;
  }

  return (
    <Stack.Navigator>
      {user ? (
        <Stack.Group>
          <Stack.Screen component={BottomTabNavigator} name="Root" options={{ headerShown: false }} />
          <Stack.Screen component={AddDrugScreen} name="AddDrugScreen" options={addDrugScreenOptions} />
          <Stack.Screen component={SearchDrugScreen} name="SearchDrugScreen" options={{ headerShown: false }} />
          <Stack.Screen component={SearchBarcodeScreen} name="SearchBarcodeScreen" options={barCodeScannerScreenOptions} />
          <Stack.Screen component={DrugDetailScreen} name="DrugDetailScreen" options={{ headerShown: false }} />
          <Stack.Screen component={AddDrugAlertScreen} name="AddDrugAlertScreen" options={addDrugAlertOptions} />
          <Stack.Screen component={ProfileEditScreen} name="ProfileEditScreen" options={profileEditScreenOptions} />
        </Stack.Group>
      ) : (
        <Stack.Group
          screenOptions={{
            headerTitleStyle: styles.headerTitle,
          }}>
          <Stack.Screen component={PublicLandingScreen} name="PublicLandingScreen" options={{ headerShown: false }} />
          <Stack.Screen component={LoginScreen} name="LoginScreen" options={loginScreenOptions} />
          <Stack.Screen component={SignUpScreen} name="SignUpScreen" options={loginScreenOptions} />
          <Stack.Screen component={OtpVerifyScreen} name="OtpVerifyScreen" options={otpVerifyScreenOptions} />
          <Stack.Screen component={UserDetailRegisterScreen} name="UserDetailRegisterScreen" options={userDetailRegisterScreenOptions} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize  : 15,
    fontFamily: "Mon700",
  },
});

export default RootNavigator;
