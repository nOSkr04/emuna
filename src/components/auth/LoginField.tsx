import { StyleSheet,  TextInput, View } from "react-native";
import React, { Dispatch, SetStateAction, memo } from "react";
import { Colors } from "../../constants/Colors";
import { Mon600 } from "../StyledText";

type Props = {
  password: string,
  phone:string,
  setPassword: Dispatch<SetStateAction<string>>
  setPhone: Dispatch<SetStateAction<string>>
}

const LoginField = memo(({ password, setPassword, phone, setPhone }: Props) => {
  return (
    <View>
      <Mon600 style={styles.inputLabel}>Утасны дугаар</Mon600>
      <TextInput keyboardType="number-pad" onChangeText={setPhone} style={styles.input} value={phone}   />
      <Mon600 style={styles.inputLabel}>Нууц үг</Mon600>
      <TextInput onChangeText={setPassword} secureTextEntry style={styles.input} value={password}   />
    </View>
  );
});

LoginField.displayName="LoginField";

const styles = StyleSheet.create({
  inputLabel: {
    fontSize        : 11,
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
    padding         : 8,
  }
});

export default LoginField;
