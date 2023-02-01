import { ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, TextInput, View } from "react-native";
import React, { memo, useState } from "react";
import { Colors } from "../../constants/Colors";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { useHeaderHeight } from "@react-navigation/elements";
import { AuthApi } from "../../apis";
import { Mon600 } from "../../components/StyledText";
const SignUpScreen = memo(() => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const onSubmit = async (phone: string) => {
    setLoading(true);
    try {
      await AuthApi.otpVerify(phone);
      navigation.navigate("OtpVerifyScreen", { phone: phone });
    } catch (err: any) {
      setError(err.error.message);
    } finally {
      setLoading(false);
    }
  };
  const height = useHeaderHeight();
  return (
    <KeyboardAvoidingView style={styles.container} {...(Platform.OS === "ios" && { behavior: "padding" })} keyboardVerticalOffset={height}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator color={Colors.primary} size={"large"} />
        </View>
      ) : (
        <>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Mon600 style={styles.inputLabel}>Утасны дугаар</Mon600>
            <TextInput keyboardType="number-pad" onChangeText={setPhone} style={error ? styles.error : styles.input} value={phone} />
            {error && <Mon600 style={styles.errorMessage}>{error}</Mon600>}
          </ScrollView>
          <Button onPress={() => onSubmit(phone)} secondary={phone.length > 7 ? false : true} style={styles.button} title="Үргэлжлүүлэх" />
        </>
      )}
    </KeyboardAvoidingView>
  );
});

SignUpScreen.displayName = "SignUpScreen";

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    backgroundColor: Colors.white,
  },
  inputLabel: {
    fontSize        : 11,
    color           : Colors.texts,
    opacity         : 0.72,
    marginHorizontal: 32,
    marginTop       : 32,
  },
  input: {
    borderWidth     : 1,
    marginHorizontal: 24,
    height          : 48,
    borderColor     : Colors.primary,
    borderRadius    : 8,
    marginTop       : 8,
    padding         : 8,
  },
  error: {
    borderWidth     : 1,
    marginHorizontal: 24,
    height          : 48,
    borderColor     : Colors.redPill,
    borderRadius    : 8,
    marginTop       : 8,
    padding         : 8,
  },
  button: {
    bottom          : 20,
    marginHorizontal: 24,
  },
  errorMessage: {
    fontSize        : 11,
    lineHeight      : 16,
    letterSpacing   : 0.15,
    marginHorizontal: 30,
    color           : Colors.redPill,
    marginVertical  : 15,
  },
  loadingContainer: {
    flex           : 1,
    backgroundColor: Colors.white,
    alignItems     : "center",
    justifyContent : "center",
  },
});

export default SignUpScreen;
