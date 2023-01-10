/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-hooks/exhaustive-deps */
import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Colors } from "../../constants/Colors";
import { useSelector } from "react-redux";
import { IAuth } from "../../interfaces/IAuth";
import { useNavigation } from "@react-navigation/native";
import ProfileHeaderLeft from "../../components/profile/ProfileHeaderLeft";
import ProfileHeaderRight from "../../components/profile/ProfileHeaderRight";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { user } = useSelector((state: { auth: IAuth }) => state.auth);
  useEffect(() => {
    navigation.setOptions({
      headerLeft : () => <ProfileHeaderLeft firstName={user.firstName} profile={"https://images.pexels.com/photos/14792109/pexels-photo-14792109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} />,
      headerRight: () => <ProfileHeaderRight  />
    });
  }, []);
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    backgroundColor: Colors.profileBg
  }
});
