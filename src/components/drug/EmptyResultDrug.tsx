import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import SearchIcon from "../../../assets/svg/search.svg";
import { Colors } from "../../constants/Colors";
import Button from "../Button";
import PlusIcon from "../../../assets/svg/plus.svg";
const EmptyResultDrug = memo(() => {
  return (
    <View style={styles.container}>
      <SearchIcon color={Colors.white} height={70} width={70} />
      <Text style={styles.title}>Таны хайсан эмийн илэрц олдсонгүй.</Text>
      <Text style={styles.description}>Бүртгэлгүй эмийг гараар оруулах боломжтой.</Text>
      <Button iconRight={<PlusIcon height={15} style={styles.icon} width={15} />} onPress={() => console.log("first")} style={styles.button} title="Гараар оруулах"   />
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
    color        : Colors.white,
    fontFamily   : "Mon700",
    marginTop    : 16
  },
  description: {
    fontSize     : 14,
    fontFamily   : "Mon500",
    lineHeight   : 20,
    letterSpacing: 0.25,
    textAlign    : "center",
    color        : Colors.unActive,
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