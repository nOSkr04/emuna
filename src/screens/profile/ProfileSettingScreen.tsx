import { StyleSheet,  Switch,TouchableOpacity,View } from "react-native";
import React, { memo, useState } from "react";
import { Colors } from "../../constants/Colors";
import BellIcon from "../../../assets/svg/Bell.svg";
import PhoneIcon from "../../../assets/svg/phone.svg";
import TrashIcon from "../../../assets/svg/UserCircle.svg";
import ArrowRight from "../../../assets/svg/CaretRight.svg";
import DangerArrowRight from "../../../assets/svg/DangerRight.svg";
import LogOutIcon from "../../../assets/svg/SignOut.svg";
import { Mon500 } from "../../components/StyledText";
import LogoutModal from "../../components/profile/LogoutModal";
const ProfileSettingScreen = memo(() => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [isModalVisible, setIsModalVisible] = useState(false);
 
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer1}>
        <View style={styles.titleContainer}>
          <BellIcon/>
          <Mon500 style={styles.title}>Мэдэгдэл авах</Mon500>
        </View>
        <Switch
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        thumbColor={isEnabled ? Colors.primary : "#f4f3f4"}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        value={isEnabled}
      />
      </View>
      <View style={styles.border} />
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <PhoneIcon height={17.22} width={25} />
          <Mon500 style={styles.title}>Дугаар солих</Mon500>
        </View>
        <ArrowRight/>
      </View>
      <View style={styles.border} />
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <TrashIcon  />
          <Mon500 style={styles.title}>Бүртгэл устгах</Mon500>
        </View>
        <ArrowRight/>
      </View>
      <View style={styles.border} />
      <TouchableOpacity onPress={toggleModal} style={styles.logoutContainer}>
        <View style={styles.titleContainer}>
          <LogOutIcon  />
          <Mon500 style={[styles.dangerColor,styles.title, ]}>Системээс гарах</Mon500>
        </View>
        <DangerArrowRight />
      </TouchableOpacity>
      <LogoutModal isModalVisible={isModalVisible} toggleModal={toggleModal}  />
    </View>
  );
});

ProfileSettingScreen.displayName ="ProfileSettingScreen";

export default ProfileSettingScreen;

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    backgroundColor: Colors.white
  },
  contentContainer: {
    flexDirection   : "row",
    justifyContent  : "space-between",
    alignItems      : "center",
    marginHorizontal: 16,
    marginTop       : 8,
    paddingVertical : 16,
  },
  contentContainer1: {
    flexDirection   : "row",
    justifyContent  : "space-between",
    alignItems      : "center",
    marginHorizontal: 16,
    marginTop       : 8,
    paddingVertical : 4,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems   : "center"
  },
  title: {
    fontSize     : 14,
    lineHeight   : 20,
    letterSpacing: 0.25,
    marginLeft   : 16
  },
  border: {
    borderWidth     : 1,
    borderColor     : Colors.strokeDark,
    marginHorizontal: 16
  },
  logoutContainer: {
    flexDirection : "row",
    justifyContent: "space-between",
    alignItems    : "center",
    position      : "absolute",
    bottom        : 40,
    left          : 16,
    right         : 16
  },
  dangerColor: {
    color: Colors.danger,
  }
});