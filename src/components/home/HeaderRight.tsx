import { StyleSheet, TouchableOpacity } from "react-native";
import React, { memo } from "react";
import Plus from "../../../assets/svg/plus.svg";
import { Colors } from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
const HeaderRight = memo(() => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("AddDrugScreen")} style={styles.buttonContainer}  >
      <Plus height={18} width={18} />
    </TouchableOpacity>
  );
});

HeaderRight.displayName="HeaderRight";

const styles = StyleSheet.create({
    buttonContainer: {
        borderWidth : 1,
        borderColor : Colors.white,
        borderRadius: 100,
        padding     : 15,
        marginRight : 16,
    }
});

export default HeaderRight;