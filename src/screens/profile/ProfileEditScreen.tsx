import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Colors } from "../../constants/Colors";
import ProfileField from "../../components/profile/ProfileEditField";

const ProfileEditScreen = () => {
  const [firstName, setFirstName] = useState("Tselmen");
  const [phone, setPhone] = useState("80019088");
  const [email, setEmail] = useState("tselmen.ihelp@gmail.com");
  const [gender, setGender] = useState("");
  const [birth, setBirth] = useState("");
  const [height, setHeight] = useState("175");
  const [weight, setWeight] = useState("72");
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
        email={email}
        firstName={firstName}
        gender={gender}
        height={height}
        phone={phone}
        setBirth={setBirth}
        setEmail={setEmail}
        setFirstName={setFirstName}
        setGender={setGender}
        setHeight={setHeight}
        setPhone={setPhone}
        setWeight={setWeight}
        weight={weight}
      />
    </View>
  );
};

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
