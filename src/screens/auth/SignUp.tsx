import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput } from "react-native";
import React, { memo, useState } from "react";
import { Colors } from "../../constants/Colors";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = memo(() => {
  const [phone, setPhone] = useState("80099088");
  const navigation = useNavigation();
  const onSubmit = async () => {
    navigation.navigate("OtpVerifyScreen", { phone: phone });
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.inputLabel}>Утасны дугаар</Text>
        <TextInput onChangeText={setPhone} style={styles.input} value={phone} />
      </ScrollView>
      <Button onPress={onSubmit} secondary={phone.length > 7 ? false : true} style={styles.button} title="Үргэлжлүүлэх" />
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
    fontFamily      : "Mon600",
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
  button: {
    bottom          : 20,
    marginHorizontal: 24,
  },
});

export default SignUpScreen;
