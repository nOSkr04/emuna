/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-hooks/exhaustive-deps */
import { StyleSheet,  View } from "react-native";
import React, { useEffect } from "react";
import { Colors } from "../../constants/Colors";
import { useSelector } from "react-redux";
import { IAuth } from "../../interfaces/IAuth";
import { useNavigation } from "@react-navigation/native";
import ProfileHeaderLeft from "../../components/profile/ProfileHeaderLeft";
import ProfileHeaderRight from "../../components/profile/ProfileHeaderRight";
import EmptyDrug from "../../components/home/EmptyDrug";
import { FlashList } from "@shopify/flash-list";
import MyDrug from "../../components/profile/MyDrug";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { user } = useSelector((state: { auth: IAuth }) => state.auth);
  const data = [
    { id: 1, bg: Colors.bluePill, name: "Emem", capsule: "12mg capsule", when: "Өдөр бүр" },
    { id: 2, bg: Colors.brownPill, name: "Emem1", capsule: "30mg capsule", when: "Өдөр бүр" },
  ];
  useEffect(() => {
    navigation.setOptions({
      headerLeft : () => <ProfileHeaderLeft firstName={user.firstName} profile={"https://images.pexels.com/photos/14792109/pexels-photo-14792109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} />,
      headerRight: () => <ProfileHeaderRight  />
    });
  }, []);
  return (
    <View style={styles.container}>
      <FlashList data={data} keyExtractor={(item) => item.id.toLocaleString()}  renderItem={({ item }) => <MyDrug bg={item.bg} capsule={item.capsule} name={item.name} when={item.when}  />} />
      <EmptyDrug/>
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
