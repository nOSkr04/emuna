import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../constants/Colors";
import BackIcon from "../../assets/svg/xButotn.svg";
import UserIcon from "../../assets/svg/UserCircle.svg";
import SaveIcon from "../../assets/svg/BookmarkSimple.svg";
import SettingsIcon from "../../assets/svg/GearSix.svg";
import SheildIcon from "../../assets/svg/ShieldCheck.svg";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import { authLogout } from "../store/authSlice";
const ProfileMenuSheets = memo(() => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const logout = async () => {
    dispatch(authLogout());
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
        <BackIcon />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ProfileEditScreen")} style={styles.contentContainer}>
        <UserIcon/>
        <Text style={styles.contentTItle}>Хувийн мэдээлэл</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.contentContainer}>
        <SaveIcon/>
        <Text style={styles.contentTItle}>Хадгалсан эмүүд</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.contentContainer}>
        <SettingsIcon/>
        <Text style={styles.contentTItle}>Тохиргоо</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.contentContainer}>
        <SheildIcon/>
        <Text style={styles.contentTItle}>Тусламж</Text>
      </TouchableOpacity>
      <Button onPress={logout} style={styles.myButton} title="Системээс гарах" titleStyle={styles.myButtonTitle}  />
    </View>
  );
});

ProfileMenuSheets.displayName = "ProfileMenuSheets";

export default ProfileMenuSheets;

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    backgroundColor: Colors.white,
  },
  button: {
    position: "absolute",
    zIndex  : 2,
    right   : 10,
  },
  contentContainer: {
    flexDirection   : "row",
    alignItems      : "center",
    marginHorizontal: 16,
    paddingVertical : 10,
    marginTop       : 10
  },
  contentTItle: {
    fontSize     : 14,
    marginLeft   : 16,
    fontFamily   : "Mon500",
    lineHeight   : 20,
    letterSpacing: 0.25
  },
  myButton: {
    marginHorizontal: 16,
    marginTop       : 20,
    backgroundColor : Colors.PrimarySoft
  },
  myButtonTitle: {
    color: Colors.text
  }
});
