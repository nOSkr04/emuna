import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { Dispatch, SetStateAction, memo } from "react";
import { Colors } from "../../constants/Colors";
import IconInput from "../IconInput";
import PhoneIcon from "../../../assets/svg/phone.svg";
import EmailIcon from "../../../assets/svg/email.svg";
import RightIcon from "../../../assets/svg/CaretRight.svg";
import Button from "../Button";
type Props = {
  firstName: string;
  setFirstName: Dispatch<SetStateAction<string>>;
  phone: string;
  setPhone: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  gender: string;
  setGender: Dispatch<SetStateAction<string>>;
  birth: string;
  setBirth: Dispatch<SetStateAction<string>>;
  height: string;
  setHeight: Dispatch<SetStateAction<string>>;
  weight: string;
  setWeight: Dispatch<SetStateAction<string>>;
};

const ProfileField = memo(
  ({
    firstName,
    setFirstName,
    phone,
    setPhone,
    email,
    setEmail,
    gender,
    setGender,
    birth,
    setBirth,
    height,
    setHeight,
    weight,
    setWeight,
  }: Props) => {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.inputLabel}>Нэр</Text>
        <TextInput onChangeText={setFirstName} style={styles.input} value={firstName} />
        <IconInput icon={<PhoneIcon height={16} width={16} />} onChangeText={setPhone} title={"Утасны дугаар"} value={phone} />
        <IconInput icon={<EmailIcon height={18} width={18} />} onChangeText={setEmail} title={"И-мэйл хаяг"} value={email} />
        <View style={styles.rowInputContainer}>
          <View style={styles.rowInput}>
            <Text style={styles.rowTitle}>Өндөр</Text>
            <TextInput onChangeText={setHeight} style={styles.inputRow} value={height} />
          </View>
          <View style={styles.rowInput}>
            <Text style={styles.rowTitle}>Жин</Text>
            <TextInput onChangeText={setWeight} style={styles.inputRow} value={weight} />
          </View>
        </View>
        <View style={styles.divider} />
        <Text style={styles.title}>Эрүүл мэндийн мэдээлэл</Text>
        <TouchableOpacity style={styles.chooseButtonContainer}>
          <View>
            <Text style={styles.chooseTitle}>Харшил</Text>
            <Text style={styles.chooseType}>Өндөг, Сүү, Алим</Text>
          </View>
          <RightIcon />
        </TouchableOpacity>
        <View style={styles.border} />
        <TouchableOpacity style={styles.chooseButtonContainer}>
          <View>
            <Text style={styles.chooseTitle}>Архаг хууч өвчин</Text>
            <Text style={styles.chooseType}>Чихойн шижин</Text>
          </View>
          <RightIcon />
        </TouchableOpacity>
        <View style={styles.border} />
        <TouchableOpacity style={styles.chooseButtonContainer}>
          <View>
            <Text style={styles.chooseTitle}>Байнгын хэрэглэдэг эм</Text>
            <Text style={styles.chooseType}>Байхгүй</Text>
          </View>
          <RightIcon />
        </TouchableOpacity>
        <View style={styles.border} />
        <TouchableOpacity style={styles.chooseButtonContainer}>
          <View>
            <Text style={styles.chooseTitle}>Гэмтэл бэртэл</Text>
            <Text style={styles.chooseType}>Байхгүй</Text>
          </View>
          <RightIcon />
        </TouchableOpacity>
        <View style={styles.border} />
        <TouchableOpacity style={styles.chooseButtonContainer}>
          <View>
            <Text style={styles.chooseTitle}>Хагалгаа, мэс ажилбар</Text>
            <Text style={styles.chooseType}>Байхгүй</Text>
          </View>
          <RightIcon />
        </TouchableOpacity>
        <View style={styles.border} />
        <Button onPress={() => console.log("object")} style={styles.button} title={"Хадгалах"}  />
      </ScrollView>
    );
  },
);

ProfileField.displayName = "ProfileField";

const styles = StyleSheet.create({
  inputLabel: {
    fontSize        : 11,
    fontFamily      : "Mon600",
    color           : Colors.newText,
    opacity         : 0.72,
    marginHorizontal: 24,
    marginTop       : 16,
    lineHeight      : 16,
    letterSpacing   : 0.15,
  },
  input: {
    borderWidth     : 1,
    marginHorizontal: 16,
    height          : 48,
    borderColor     : Colors.strokeDark,
    borderRadius    : 8,
    marginTop       : 8,
    padding         : 8,
    fontSize        : 14,
    color           : Colors.newText,
    opacity         : 0.72,
    lineHeight      : 20,
    letterSpacing   : 0.25,
    fontFamily      : "Mon500",
  },
  rowInputContainer: {
    flexDirection   : "row",
    justifyContent  : "space-between",
    marginHorizontal: 16,
  },
  rowInput: {
    width: "48%",
  },
  rowTitle: {
    fontSize     : 11,
    fontFamily   : "Mon600",
    color        : Colors.newText,
    opacity      : 0.72,
    marginTop    : 16,
    lineHeight   : 16,
    letterSpacing: 0.15,
    marginLeft   : 8,
  },
  inputRow: {
    borderWidth  : 1,
    height       : 48,
    borderColor  : Colors.strokeDark,
    borderRadius : 8,
    marginTop    : 8,
    fontSize     : 14,
    color        : Colors.newText,
    opacity      : 0.72,
    lineHeight   : 20,
    letterSpacing: 0.25,
    fontFamily   : "Mon500",
    paddingLeft  : 8,
  },
  divider: {
    height         : 4,
    backgroundColor: Colors.strokeDark,
    marginTop      : 16,
    marginBottom   : 29,
  },
  title: {
    fontFamily      : "Mon700",
    fontSize        : 15,
    lineHeight      : 24,
    letterSpacing   : 0.15,
    color           : Colors.newText,
    marginHorizontal: 16,
    marginBottom    : 28
  },
  chooseButtonContainer: {
    flexDirection   : "row",
    justifyContent  : "space-between",
    alignItems      : "center",
    marginHorizontal: 16,
  },
  chooseTitle: {
    fontSize     : 14,
    fontFamily   : "Mon500",
    lineHeight   : 20,
    letterSpacing: 0.25,
    color        : Colors.newText,
    marginBottom : 4,
    paddingTop   : 12
  },
  chooseType: {
    fontSize     : 12,
    fontFamily   : "Mon500",
    lineHeight   : 16,
    letterSpacing: 0.25,
    color        : Colors.texts,
    paddingBottom: 12
  },
  border: {
    borderWidth     : 1,
    marginHorizontal: 16,
    borderColor     : Colors.strokeDark,
    opacity         : 0.4
  },
  button: {
    marginHorizontal: 16,
    marginBottom    : 40,
    marginTop       : 80
  }
});

export default ProfileField;
