import { StyleSheet,  TouchableOpacity,  } from "react-native";
import React, { memo } from "react";
import BackIcon from "../../../assets/svg/back.svg";
import { useNavigation } from "@react-navigation/native";

const BackButton = memo(() => {
  const navigation = useNavigation();
return (
  <TouchableOpacity onPress={() => navigation.goBack()} style={styles.container}  >
    <BackIcon/>
  </TouchableOpacity>
);
});

BackButton.displayName = "BackButton";

const styles = StyleSheet.create({
    container: {
        padding    : 8,
        marginRight: 10
    }
});

export default BackButton;