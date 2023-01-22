import React, { memo } from "react";
import { StyleSheet,  View } from "react-native";
import { Colors } from "../../constants/Colors";
import Logo from "../../../assets/svg/logo.svg";
// import Down from "../../../assets/svg/down.svg";
import { IAuth } from "../../interfaces/IAuth";
import { useSelector } from "react-redux";
import { Mon700 } from "../StyledText";
const HeaderLeft = memo(() => {
  const { user } = useSelector((state: { auth: IAuth }) => state.auth);
  return (
    <View style={styles.container}>
      <Logo  color={Colors.white} height={32}  width={32} />
      <View style={styles.nameContainer}>
        <Mon700 style={styles.name}>{user?.firstName ? user.firstName : user?.phone}</Mon700>
        {/* <Down height={5} width={10} /> */}
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
    color           : Colors.white,
    marginHorizontal: 9
  }
});

export default HeaderLeft;
