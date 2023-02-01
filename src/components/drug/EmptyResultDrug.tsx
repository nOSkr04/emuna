import { StyleSheet,  View } from "react-native";
import React, { memo } from "react";
import SearchIcon from "../../../assets/svg/search.svg";
import { Colors } from "../../constants/Colors";
import Button from "../Button";
import PlusIcon from "../../../assets/svg/plus.svg";
import { Mon500, Mon700 } from "../StyledText";
const EmptyResultDrug = memo(() => {
  return (
    <View style={styles.container}>
      <SearchIcon color={Colors.white} height={70} width={70} />
      <Mon700 style={styles.title}>Таны хайсан эмийн илэрц олдсонгүй.</Mon700>
      {/* <Mon500 style={styles.description}>Бүртгэлгүй эмийг гараар оруулах боломжтой.</Mon500> */}
      {/* <Button iconRight={<PlusIcon height={15} style={styles.icon} width={15} />} onPress={() => console.log("first")} style={styles.button} title="Гараар оруулах"   /> */}
    </View>
  );
});

EmptyResultDrug.displayName = "EmptyResultDrug";

export default EmptyResultDrug;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems    : "center",
    flex          : 0.7
  },
  title: {
    fontSize     : 16,
    lineHeight   : 28,
    letterSpacing: 0.15,
    textAlign    : "center",
    marginTop    : 16
  },
  description: {
    fontSize     : 14,
    lineHeight   : 20,
    letterSpacing: 0.25,
    textAlign    : "center",
    marginTop    : 4,
    marginBottom : 38
  },
  button: {
    flexDirection : "row",
    alignItems    : "center",
    justifyContent: "center",
    paddingLeft   : 20
  },
  icon: {
    marginLeft : 12,
    marginRight: 20
  }
});