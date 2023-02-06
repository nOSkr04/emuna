/* eslint-disable react/react-in-jsx-scope */
import BackArrow from "./BackArrow";
import BackButton from "./BackButton";
// import SkipButton from "./SkipButton";
import HeaderLeft from "../home/HeaderLeft";
import HeaderRight from "../home/HeaderRight";
// import {  View } from "react-native";
import { styles } from "./styles";
export const homeScreenOption = {
  headerShadowVisible: false,
  headerTitle        : "",
  headerStyle        : styles.primaryBg,
  headerLeft         : () => <HeaderLeft />,
  headerRight        : () => <HeaderRight />,
};
export const profileScreenOptions = {
  headerShadowVisible: false,
  headerStyle        : styles.profileHeader,
  headerTitle        : "",
};
export const loginScreenOptions = {
  headerShadowVisible: false,
  headerTitle        : "Нэвтрэх / Бүртгүүлэх",
  headerLeft         : () => <BackArrow/>
};
export const setPasswordScreenOptions = {
  headerShadowVisible: false,
  headerTitle        : "Нууц үг",
  headerLeft         : () => <BackArrow/>
};
export const privacyScreenOptions = {
  headerShadowVisible: false,
  headerTitle        : "Үйлчилгээний нөхцөл",
  headerLeft         : () => <BackArrow/>
};
export const otpVerifyScreenOptions = {
  headerShadowVisible: false,
  headerTitle        : "",
  headerLeft         : () => <BackArrow/>
};
// export const userDetailRegisterScreenOptions = {
//   headerShadowVisible: false,
//   headerTitle        : "",
//   headerRight        : () => <SkipButton/>,
//   headerLeft         : () => <View/>
// };
export const addDrugScreenOptions = {
  headerShadowVisible: false,
  headerTitle        : "",
  headerLeft         : () => <BackArrow/>,
  headerStyle        : styles.softBg
};
export const barCodeScannerScreenOptions = {
  headerShadowVisible: false,
  headerTitle        : "",
  headerLeft         : () => <BackButton/>,
  headerStyle        : styles.softBg
};

export const addDrugAlertOptions = {
  headerShadowVisible: false,
  headerTitle        : "Эмийн сануулга үүсгэх",
  headerLeft         : () => <BackButton/>
};
export const profileEditScreenOptions = {
  headerShadowVisible: false,
  headerTitle        : "Хувийн мэдээлэл",
  headerLeft         : () => <BackButton/>
};
export const profileEditAllergiesScreenOptions = {
  headerShadowVisible: false,
  headerTitle        : "Харшил",
  headerLeft         : () => <BackButton/>
};
export const profileEditChronicScreenOptions = {
  headerShadowVisible: false,
  headerTitle        : "Архаг хууч өвчин",
  headerLeft         : () => <BackButton/>
};
export const savedDrugScreenOptions = {
  headerShadowVisible: false,
  headerTitle        : "Хадгалсан эмнүүд",
  headerLeft         : () => <BackButton/>
};
export const profileSettingsScreenOptions = {
  headerShadowVisible: false,
  headerTitle        : "Тохиргоо",
  headerLeft         : () => <BackButton/>
};
export const adsDetailScreenOptions = {
  headerShadowVisible: false,
  headerTitle        : "Мэдээлэл",
  headerLeft         : () => <BackButton/>
};
export const secretPrivacyScreenOptions = {
  headerShadowVisible: false,
  headerTitle        : "Нууцлалын бодлого",
  headerLeft         : () => <BackButton/>
};
