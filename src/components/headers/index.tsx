/* eslint-disable react/react-in-jsx-scope */
import { Colors } from "../../constants/Colors";
import BackArrow from "./BackArrow";
import BackButton from "./BackButton";
import SkipButton from "./SkipButton";
import HeaderLeft from "../home/HeaderLeft";
import HeaderRight from "../home/HeaderRight";
import { View } from "react-native";
export const homeScreenOption = {
  headerShadowVisible: false,
  headerTitle        : "",
  headerStyle        : { backgroundColor: Colors.primary, },
  headerLeft         : () => <HeaderLeft />,
  headerRight        : () => <HeaderRight />,
};
export const profileScreenOptions = {
  headerShadowVisible: false,
  headerTitle        : "Профайл",
};
export const loginScreenOptions = {
  headerShadowVisible: false,
  headerTitle        : "Нэвтрэх / Бүртгүүлэх",
  headerLeft         : () => <BackArrow/>
};
export const otpVerifyScreenOptions = {
  headerShadowVisible: false,
  headerTitle        : "",
  headerLeft         : () => <BackArrow/>
};
export const userDetailRegisterScreenOptions = {
  headerShadowVisible: false,
  headerTitle        : "",
  headerRight        : () => <SkipButton/>,
  headerLeft         : () => <View/>
};
export const addDrugScreenOptions = {
  headerShadowVisible: false,
  headerTitle        : "",
  headerLeft         : () => <BackArrow/>,
  headerStyle        : { backgroundColor: Colors.softBg, }
};
export const barCodeScannerScreenOptions = {
  headerShadowVisible: false,
  headerTitle        : "",
  headerLeft         : () => <BackButton/>,
  headerStyle        : { backgroundColor: Colors.softBg, }
};

export const addDrugAlertOptions = {
  headerShadowVisible: false,
  headerTitle        : "Эмийн сануулга үүсгэх",
  headerLeft         : () => <BackButton/>
};
