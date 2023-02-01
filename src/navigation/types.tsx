/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { IMedicine } from "../interfaces/IMedicine";
export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  SplashScreen: undefined;
  AddDrugScreen: undefined;
  PublicLandingScreen: undefined;
  LoginScreen: undefined;
  SignUpScreen: undefined;
  OtpVerifyScreen: { phone: string };
  SetPasswordScreen: { phone: string };
  UserDetailRegisterScreen: { phone: string; password: string };
  SearchDrugScreen: undefined;
  SearchBarcodeScreen: undefined;
  DrugDetailScreen: {id:string};
  AddDrugAlertScreen: {name:string, size:string, shape:string}
  ProfileEditScreen: undefined;
  ProfileEditAllergiesScreen: undefined;
  ProfileEditChronicScreen: undefined;
  SavedDrugScreen: undefined;
  ProfileSettingScreen: undefined;
  AdsDetailScreen: { id: string };
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  HomeScreen: undefined;
  ProfileScreen: undefined;
};

export type BottomSheetParamList = {
  RootNavigator: undefined;
  PharmacistRequestSheet: undefined;
  HomeMedicalSheet: { data: IMedicine[]; monDate: string; time: string; strDate:string };
  DeleteAlertSheet: { id: string };
  DrugStyleChooseSheet: undefined;
  DosageChooseSheet: undefined;
  ProfileMenuSheets: undefined;
  ProfileHealthDetailSheet: { type: number, dataType:boolean | null | undefined };
  SavedDrugMenuSheets: undefined;
  FrequencyDrugSheet: undefined;
  DrinkConditions: undefined;
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
