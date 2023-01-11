import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/Colors";
import Logo from "../../../assets/svg/logo.svg";
import Down from "../../../assets/svg/down.svg";
import { IAuth } from "../../interfaces/IAuth";
import { useSelector } from "react-redux";
const HeaderLeft = memo(() => {
  const { user } = useSelector((state: { auth: IAuth }) => state.auth);
  return (
    <View style={styles.container}>
      <Logo  color={Colors.white} height={32}  width={32} />
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{user.firstName ? user.firstName : user.phone}</Text>
        <Down height={5} width={10} />
      </View>
    </View>
  );
});

HeaderLeft.displayName="HeaderLeft";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems   : "center",
    marginLeft   : 24,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems   : "center",
  },
  name: {
    fontSize        : 16,
    fontFamily      : "bold",
    color           : Colors.white,
    marginHorizontal: 9
  }
});

export default HeaderLeft;
