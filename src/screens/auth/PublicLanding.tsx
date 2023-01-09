import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../constants/Colors";
import Logo from "../../../assets/svg/logo.svg";
import Phone from "../../../assets/svg/phone.svg";
import Button from "../../components/Button";
const PublicLandingScreen = memo(() => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo color={Colors.primary} height={50} width={50} />
        <Text style={styles.logoTitle}>emuna</Text>
      </View>
      {/* <Text style={styles.midText}>
      Нэвтрэх / Бүртгүүлэх
    </Text> */}
      <View>
        <Button
          block
          icon={
            <View style={styles.iconContainer}>
              <Phone />
            </View>
          }
          onPress={() => navigation.navigate("LoginScreen")}
          title="Утасны дугаараар"
        />
        <Button
          block
          icon={
            <View style={styles.iconContainer}>
              <Phone />
            </View>
          }
          onPress={() => navigation.navigate("SignUpScreen")}
          title="Бүртгүүлэх"
        />
      </View>
    </View>
  );
});

PublicLandingScreen.displayName = "PublicLandingScreen";

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    backgroundColor: Colors.white,
    justifyContent : "space-evenly",
    alignItems     : "center",
  },
  logoTitle: {
    fontFamily   : "Nunito800",
    fontSize     : 48,
    color        : Colors.primary,
    lineHeight   : 69,
    letterSpacing: 0.0015
  },
  logoContainer: {
    alignItems: "center",
  },
  iconContainer: {
    position: "absolute",
    left    : 20,
  },
});

export default PublicLandingScreen;
