import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet,  TextInput, TouchableOpacity,  } from "react-native";
import React, { memo, useState } from "react";
import { Colors } from "../../constants/Colors";
import Button from "../../components/Button";
import { RootStackParamList } from "../../navigation/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { useHeaderHeight } from "@react-navigation/elements";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Mon400, Mon600 } from "../../components/StyledText";
type Props = NativeStackScreenProps<RootStackParamList, "SetPasswordScreen">;

const SetPasswordScreen = memo((props: Props) => {
  const navigation = useNavigation();
  const height = useHeaderHeight();
  const { phone } = props.route.params;
  const [isPrivacy, setIsPrivacy] = useState(false);
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const onSubmit = () => {
    if (password === password1) {
      navigation.navigate("UserDetailRegisterScreen", { phone: phone, password: password });
    }
  };
  return (
    <KeyboardAvoidingView style={styles.container} {...(Platform.OS === "ios" && { behavior: "padding" })} keyboardVerticalOffset={height}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Mon600 style={styles.inputLabel}>Нууц үг</Mon600>
        <TextInput onChangeText={setPassword} secureTextEntry style={styles.input} value={password} />
        <Mon600 style={styles.inputLabel}>Нууц үгээ давтана уу</Mon600>
        <TextInput onChangeText={setPassword1} secureTextEntry style={styles.input} value={password1} />
        <TouchableOpacity onPress={() => setIsPrivacy(!isPrivacy)} style={styles.privacyText}>
          {isPrivacy ? (
            <MaterialCommunityIcons color="black" name="checkbox-blank-circle" size={24} />
          ) : (
            <MaterialCommunityIcons color="black" name="checkbox-blank-circle-outline" size={24} />
          )}
          <Mon400 >Үйлчилгээний нөхцөл </Mon400>
          <TouchableOpacity onPress={() => navigation.navigate("PrivacyScreen")} style={styles.primaryButton}>
            <Mon400 style={styles.primaryText}>зөвшөөрөх </Mon400>
          </TouchableOpacity>
        </TouchableOpacity>
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
  privacyText: {
    marginHorizontal: 24,
    flexDirection   : "row",
    marginTop       : 16,
    flexWrap        : "wrap",
    alignItems      : "center"
  },
  primaryText: {
    color: Colors.primary
  },
  primaryButton: {
    padding: 5
  }
});

export default SetPasswordScreen;
