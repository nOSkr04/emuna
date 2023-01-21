import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput } from "react-native";
import React, { memo, useState } from "react";
import { Colors } from "../../constants/Colors";
import Button from "../../components/Button";
import { RootStackParamList } from "../../navigation/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { useHeaderHeight } from "@react-navigation/elements";
type Props = NativeStackScreenProps<RootStackParamList, "SetPasswordScreen">;

const SetPasswordScreen = memo((props: Props) => {
  const navigation = useNavigation();
  const height = useHeaderHeight();
  const { phone } = props.route.params; 
  const [password, setPassword] = useState("1234");
  const [password1, setPassword1] = useState("1234");
  const onSubmit =  () => {
    if(password === password1){
      navigation.navigate("UserDetailRegisterScreen", { phone: phone, password: password });
    }
    
  };
  return (
    <KeyboardAvoidingView style={styles.container} {...Platform.OS === "ios" && { behavior: "padding" }} keyboardVerticalOffset={height}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.inputLabel}>Нууц үг</Text>
        <TextInput onChangeText={setPassword} style={styles.input} value={password} />
        <Text style={styles.inputLabel}>Нууц үгээ давтана уу</Text>
        <TextInput onChangeText={setPassword1} style={styles.input} value={password1} />
      </ScrollView>
      <Button
        onPress={onSubmit}
        secondary={password.length < 0 || password === password1 ? false : true}
        style={styles.button}
        title="Үргэлжлүүлэх"
      />
    </KeyboardAvoidingView>
  );
});

SetPasswordScreen.displayName = "SetPasswordScreen";

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

export default SetPasswordScreen;
