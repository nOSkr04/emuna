import React, { memo } from "react";
import {  StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/Colors";
import EmunaLogo from "../../../assets/svg/logo.svg";
// import Down from "../../../assets/svg/down.svg";

type Props = {
  firstName?: string | number | null;
};

const ProfileHeaderLeft = memo(({  firstName }: Props) => {
  return (
    <View style={styles.container}>
      <EmunaLogo color={Colors.white} />
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{firstName}</Text>
        {/* <Down height={5} width={10} /> */}
      </View>
    </View>
  );
});

ProfileHeaderLeft.displayName = "ProfileHeaderLeft";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems   : "center",
    marginLeft   : 24,
  },
  avatar: {
    width       : 36,
    height      : 36,
    borderRadius: 100,
    borderWidth : 2,
    borderColor : Colors.white,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems   : "center",
    marginLeft   : 12
  },
  name: {
    fontSize     : 16,
    color        : Colors.white,
    marginRight  : 9   ,
    fontFamily   : "Mon700",
    lineHeight   : 28,
    letterSpacing: 0.15
  },
});

export default ProfileHeaderLeft;
