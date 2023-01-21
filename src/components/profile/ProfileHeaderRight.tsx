import React, { memo } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HamburgerIcon from "../../../assets/svg/hamburger.svg";


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
