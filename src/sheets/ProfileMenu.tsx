import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../constants/Colors";
import BackIcon from "../../assets/svg/xButotn.svg";
import UserIcon from "../../assets/svg/UserCircle.svg";
import SaveIcon from "../../assets/svg/BookmarkSimple.svg";
import SettingsIcon from "../../assets/svg/GearSix.svg";
import SheildIcon from "../../assets/svg/ShieldCheck.svg";
const ProfileMenuSheets = memo(() => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
        <BackIcon />
      </TouchableOpacity>
      <TouchableOpacity style={styles.contentContainer}>
        <UserIcon/>
        <Text>User</Text>
      </TouchableOpacity>
      <View style={styles.border} />
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
    flexDirection: "row",
    alignItems   : "center"
  },
  border: {
    borderWidth: 1,
  }
});
