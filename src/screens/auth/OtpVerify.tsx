import React, { memo, useState } from "react";
import { Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../constants/Colors";
import OtpField from "../../components/auth/OtpField";
import Retry from "../../../assets/svg/retry.svg";

type Props = NativeStackScreenProps<RootStackParamList, "OtpVerifyScreen">;

const OtpVerifyScreen = memo(({ route }: Props) => {
  const { phone } = route.params;
  const navigation = useNavigation();
  const [otpA, setOtpA] = useState("");
  const onSubmit = async (e: string[]) => {
    const otp = e.join("");
    setOtpA(otp);
    try {
      navigation.navigate("SetPasswordScreen", { phone: phone });
      console.log(otpA);
      Keyboard.dismiss();
    } catch (error) {
      Keyboard.dismiss();
    }
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        <Text style={styles.inputTitle}>Баталгаажуулах</Text>
        <View style={styles.rowTexts}>
          <Text style={styles.darkText}>Таны </Text>
          <Text style={styles.primaryText}>(+976 {phone}) </Text>
          <Text style={styles.darkText}>дугаарт ирсэн </Text>
          <Text style={styles.darkText}>тан код-г бичиж өгнө үү.</Text>
        </View>
        <OtpField onComplete={onSubmit} />
        <TouchableOpacity style={styles.retryButton}>
          <Retry />
          <Text style={styles.retryText}> Дахин код авах</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
});

OtpVerifyScreen.displayName = "OtpVerifyScreen";

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    backgroundColor: Colors.white,
  },
  inputTitle: {
    fontSize        : 24,
    fontFamily      : "Mon700",
    marginTop       : 48,
    marginVertical  : 24,
    marginHorizontal: 24,
  },
  rowTexts: {
    flexDirection   : "row",
    marginHorizontal: 24,
    flexWrap        : "wrap",
    marginBottom    : 50,
  },
  darkText: {
    fontSize  : 15,
    fontFamily: "Mon700",
    color     : Colors.texts,
    opacity   : 0.64,
  },
  primaryText: {
    fontSize  : 15,
    fontFamily: "Mon700",
    color     : Colors.primary,
  },
  retryText: {
    opacity   : 0.64,
    color     : Colors.texts,
    fontFamily: "Mon600",
  },
  retryButton: {
    flexDirection   : "row",
    marginHorizontal: 30,
    marginTop       : 16,
    alignItems      : "center",
  },
});

export default OtpVerifyScreen;
