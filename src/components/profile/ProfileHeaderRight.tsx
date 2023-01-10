import React, { memo } from "react";
import HamburgerIcon from "../../../assets/svg/hamburger.svg";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


const ProfileHeaderRight = memo(() => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProfileMenuSheets")}  >
      <HamburgerIcon />
    </TouchableOpacity>
  );
});

ProfileHeaderRight.displayName = "ProfileHeaderRight";

export default ProfileHeaderRight;
