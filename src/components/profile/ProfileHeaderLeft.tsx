import React, { memo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/Colors";
import Down from "../../../assets/svg/down.svg";

type Props = {
  profile?: string;
  firstName?: string;
};

const ProfileHeaderLeft = memo(({ profile, firstName }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: profile }} style={styles.avatar} />
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{firstName}</Text>
        <Down height={5} width={10} />
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
