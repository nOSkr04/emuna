import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo, useState } from "react";
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
import Modal from "react-native-modal";
const ProfileMenuSheets = memo(() => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const logout = async () => {
    dispatch(authLogout());
    navigation.goBack();
  };
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
        <BackIcon />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ProfileEditScreen")} style={styles.contentContainer}>
        <UserIcon />
        <Text style={styles.contentTItle}>Хувийн мэдээлэл</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.contentContainer}>
        <SaveIcon />
        <Text style={styles.contentTItle}>Хадгалсан эмүүд</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.contentContainer}>
        <SettingsIcon />
        <Text style={styles.contentTItle}>Тохиргоо</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.contentContainer}>
        <SheildIcon />
        <Text style={styles.contentTItle}>Тусламж</Text>
      </TouchableOpacity>
      <Button onPress={toggleModal} style={styles.myButton} title="Системээс гарах" titleStyle={styles.myButtonTitle} />
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Та системээс гарахдаа итгэлтэй байна уу?</Text>
          <View style={styles.buttonContainer}>
            <Button onPress={toggleModal} style={[styles.modalButton, styles.visibleButton]} title="Болих" titleStyle={styles.visibleTitle} />
            <Button danger={true} onPress={logout} style={styles.modalButton} title="Тийм" />
          </View>
        </View>
      </Modal>
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
    marginTop       : 10,
  },
  contentTItle: {
    fontSize     : 14,
    marginLeft   : 16,
    fontFamily   : "Mon500",
    lineHeight   : 20,
    letterSpacing: 0.25,
  },
  myButton: {
    marginHorizontal: 16,
    marginTop       : 20,
    backgroundColor : Colors.PrimarySoft,
  },
  myButtonTitle: {
    color: Colors.text,
  },
  modalContainer: {
    backgroundColor: Colors.white,
    borderRadius   : 24,
  },
  modalTitle: {
    fontSize        : 15,
    fontFamily      : "Mon700",
    lineHeight      : 24,
    letterSpacing   : 0.15,
    color           : Colors.newText,
    marginHorizontal: 24,
    marginVertical  : 32,
  },
  buttonContainer: {
    flexDirection   : "row",
    marginHorizontal: 24,
    marginBottom    : 32,
  },
  modalButton: {
    width: "50%",
  },
  visibleButton: {
    backgroundColor: Colors.white,
  },
  visibleTitle: {
    opacity: 0.72,
    color  : Colors.newText,
  },
});
