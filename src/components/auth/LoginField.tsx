import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { Dispatch, SetStateAction, memo } from "react";
import { Colors } from "../../constants/Colors";

type Props = {
  password: string,
  phone:string,
  setPassword: Dispatch<SetStateAction<string>>
  setPhone: Dispatch<SetStateAction<string>>
}

const LoginField = memo(({ password, setPassword, phone, setPhone }: Props) => {
  return (
    <View>
      <Text style={styles.inputLabel}>Утасны дугаар</Text>
      <TextInput onChangeText={setPhone} style={styles.input} value={phone}   />
      <Text style={styles.inputLabel}>Нууц үг</Text>
      <TextInput onChangeText={setPassword} style={styles.input} value={password}    />
    </View>
  );
});

LoginField.displayName="LoginField";

const styles = StyleSheet.create({
  inputLabel: {
    fontSize        : 11,
    fontFamily      : "Mon600",
    color           : Colors.texts,
    opacity         : 0.72,
    marginHorizontal: 32,
    marginTop       : 32
  },
  input: {
    borderWidth     : 1,
    marginHorizontal: 24,
    height          : 48,
    borderColor     : Colors.primary,
    borderRadius    : 8,
    marginTop       : 8,
    padding         : 8
  }
});

export default LoginField;
