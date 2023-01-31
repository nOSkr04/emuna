import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import { Colors } from "../../constants/Colors";
import Layout from "../../constants/Layout";
import SearchIcon from "../../../assets/svg/search.svg";
import BarcodeIcon from "../../../assets/svg/barcode.svg";
import { useNavigation } from "@react-navigation/native";
import QRCode from "react-native-qrcode-svg";
import { useSelector } from "react-redux";
import { IAuth } from "../../interfaces/IAuth";
const AddDrugScreen = memo(() => {
  const navigaiton = useNavigation();
  const { user } = useSelector((state: { auth: IAuth }) => state.auth);
  const logo = require("../../../assets/images/logo.png");
  return (
    <View style={styles.container}>
      <View style={styles.mh24}>
        <Text style={styles.title}>Та ямар эм сануулах гэж байна?</Text>
        <View style={styles.iconButtonContainer}>
          <TouchableOpacity onPress={() => navigaiton.navigate("SearchDrugScreen")} style={styles.iconButton}>
            <SearchIcon color={Colors.primary} stroke={Colors.primary} style={styles.icon} />
            <Text style={styles.iconTitle}>Түлхүүр үгээр хайх</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigaiton.navigate("SearchBarcodeScreen")} style={styles.iconButton}>
            <BarcodeIcon style={styles.icon} />
            <Text style={styles.iconTitle}>Хайрцаг эсвэл баркодоор хайх</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.bottomTitle}>Эм зүйчээр сануулга үүсгүүлэх</Text>
          <Text style={styles.bottomDescription}>Доорх QR кодыг эм зүйчдээ уншуулж сануулга үүсгэх боломжтой.</Text>
          <View style={styles.barcode}>
            <QRCode logo={logo} logoBackgroundColor={Colors.white} size={144} value={user?._id}  />
          </View>
        </View>
      </View>
    </View>
  );
});

AddDrugScreen.displayName = "AddDrugScreen";

export default AddDrugScreen;

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    backgroundColor: Colors.softBg,
  },
  title: {
    fontSize     : 16,
    fontFamily   : "Mon700",
    lineHeight   : 28,
    letterSpacing: 0.15,
    color        : Colors.text,
    opacity      : 0.64,
    marginTop    : 40,
  },
  iconButtonContainer: {
    flexDirection : "row",
    justifyContent: "space-between",
    marginTop     : 35,
  },
  iconButton: {
    width          : Layout.window.width * 0.42,
    backgroundColor: Colors.white,
    borderRadius   : 8,
  },
  iconTitle: {
    fontSize        : 14,
    fontFamily      : "Mon700",
    color           : Colors.text,
    lineHeight      : 20,
    marginHorizontal: 12,
    marginVertical  : 8,
  },
  icon: {
    marginHorizontal: 12,
    marginTop       : 8,
  },
  mh24: {
    marginHorizontal: 24,
  },
  bottomContainer: {
    marginTop: 80,
  },
  bottomTitle: {
    fontSize  : 14,
    fontFamily: "Mon700",
    lineHeight: 20,
    textAlign : "center",
    color     : Colors.text,
  },
  bottomDescription: {
    fontSize     : 14,
    fontFamily   : "Mon500",
    lineHeight   : 20,
    letterSpacing: 0.25,
    textAlign    : "center",
    color        : Colors.text,
    marginTop    : 8,
    opacity      : 0.64,
  },
  barcode: {
    alignSelf: "center",
    marginTop: 48,
  },
});
