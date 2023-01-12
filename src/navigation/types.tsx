/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { IMedical } from "../interfaces/IMedical";

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  SplashScreen: undefined;
  AddDrugScreen: undefined;
  PublicLandingScreen: undefined;
  LoginScreen: undefined;
  SignUpScreen: undefined;
  OtpVerifyScreen: { phone: string };
  SetPasswordScreen: { phone: string };
  UserDetailRegisterScreen: undefined;
  SearchDrugScreen: undefined;
  SearchBarcodeScreen: undefined;
  DrugDetailScreen: undefined;
  AddDrugAlertScreen: { pill: string | undefined; bgColor: string | undefined };
  ProfileEditScreen: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  HomeScreen: undefined;
  ProfileScreen: undefined;
};

export type BottomSheetParamList = {
  RootNavigator: undefined;
  PharmacistRequestSheet: undefined;
  HomeMedicalSheet: { data: IMedical; selectedDate: Date };
  DeleteAlertSheet: undefined;
  DrugStyleChooseSheet: undefined;
  DosageChooseSheet: undefined;
  ProfileMenuSheets: undefined;
};
export type TopTabParamList = {
  DrugDetail: {
    isTrue: boolean;
    gradus: string;
    description: string;
    hemjee: string;
  };
  DrugSummary: {
    buyName: string;
    countryName: string;
    info: string;
    nairlaga: string;
  };
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
export type BottomSheetScreenProps<T extends keyof BottomSheetParamList> = NativeStackScreenProps<BottomSheetParamList, T>;
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
    interface RootParamList extends BottomSheetParamList {}
  }
}
