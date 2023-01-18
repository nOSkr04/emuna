import { StyleSheet, Text, View } from "react-native";
import React, { memo, useState } from "react";
import { Colors } from "../../constants/Colors";
import ProfileField from "../../components/profile/ProfileEditField";
import { IAuth } from "../../interfaces/IAuth";
import { useSelector } from "react-redux";

const ProfileEditScreen = memo(() => {
  const { user } = useSelector((state: { auth: IAuth }) => state.auth);
  const [firstName, setFirstName] = useState(user?.firstName);
  const [gender, setGender] = useState(user?.gender);
  const [birth, setBirth] = useState(user?.birthDate);
  const [height, setHeight] = useState(user?.height);
  const [weight, setWeight] = useState(user?.weight);
  const width = "50%";
  return (
    <View style={styles.root}>
      <View style={styles.indicatorContainer}>
        <View style={styles.inactiveIndicator}>
          <View style={[styles.activeIndicator, { width: width }]} />
        </View>
        <Text style={styles.indicatorText}>50%</Text>
      </View>
      <ProfileField
      birth={birth}
        firstName={firstName}
        gender={gender}
        height={height}
        phone={user?.phone}
        setBirth={setBirth}
        setFirstName={setFirstName}
        setGender={setGender}
        setHeight={setHeight}
        setWeight={setWeight}
        weight={weight}
      />
    </View>
  );
});

ProfileEditScreen.displayName = "ProfileEditScreen";

export default ProfileEditScreen;

const styles = StyleSheet.create({
  root: {
    flex           : 1,
    backgroundColor: Colors.white,
  },
  indicatorContainer: {
    marginHorizontal: 24,
    marginVertical  : 25,
    flexDirection   : "row",
    alignItems      : "center",
    width           : "100%",
  },
  inactiveIndicator: {
    height         : 8,
    borderRadius   : 40,
    backgroundColor: Colors.PrimarySoft,
    width          : "74%",
  },
  activeIndicator: {
    backgroundColor: Colors.primary,
    height         : 8,
    borderRadius   : 40,
  },
  indicatorText: {
    fontSize     : 15,
    lineHeight   : 24,
    letterSpacing: 0.15,
    fontFamily   : "Mon700",
    color        : Colors.text,
    marginLeft   : 20,
  },
});
