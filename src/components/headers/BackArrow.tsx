import { StyleSheet,  TouchableOpacity,  } from "react-native";
import React, { memo } from "react";
import LeftArrow from "../../../assets/svg/ArrowLeft.svg";
import { useNavigation } from "@react-navigation/native";

const BackArrow = memo(() => {
  const navigation = useNavigation();
return (
  <TouchableOpacity onPress={() => navigation.goBack()} style={styles.container}  >
    <LeftArrow/>
  </TouchableOpacity>
);
});

BackArrow.displayName = "BackArrow";

const styles = StyleSheet.create({
    container: {
        padding    : 8,
        marginRight: 10
    }
});

export default BackArrow;