/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-hooks/exhaustive-deps */
import { StyleSheet,  View } from "react-native";
import React, { memo, useEffect } from "react";
import { Colors } from "../../constants/Colors";
import { useSelector } from "react-redux";
import { IAuth } from "../../interfaces/IAuth";
import { useNavigation } from "@react-navigation/native";
import ProfileHeaderLeft from "../../components/profile/ProfileHeaderLeft";
import ProfileHeaderRight from "../../components/profile/ProfileHeaderRight";
import EmptyDrug from "../../components/home/EmptyDrug";
import { FlashList } from "@shopify/flash-list";
import MyDrug from "../../components/profile/MyDrug";
import DrugHeaderContent from "../../components/profile/DrugHeaderContent";

const ProfileScreen = memo(() => {
  const navigation = useNavigation();
  const { user } = useSelector((state: { auth: IAuth }) => state.auth);
  const data = [
    { id: 1, bg: Colors.bluePill, name: "Impact Advanced Recovery", capsule: "Капсул (12мг)", when: "Өдөр бүр" },
    { id: 2, bg: Colors.brownPill, name: "Impact Advanced Recovery", capsule: "Капсул (12мг)", when: "Өдөр бүр" },
  ];
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <ProfileHeaderLeft
          firstName={user.firstName ? user.firstName : user.phone}
          profile={"https://images.pexels.com/photos/14792109/pexels-photo-14792109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
        />
      ),
      headerRight: () => <ProfileHeaderRight />,
    });
  }, []);
  return (
    <View style={styles.container}>
      <FlashList
        ListEmptyComponent={<EmptyDrug />}
        ListHeaderComponent={<DrugHeaderContent />}
        data={data}
        estimatedItemSize={72}
        keyExtractor={item => item.id.toLocaleString()}
        renderItem={({ item }) => <MyDrug bg={item.bg} capsule={item.capsule} name={item.name} when={item.when} />}
      />
    </View>
  );
});

ProfileScreen.displayName = "ProfileScreen";

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    backgroundColor: Colors.profileBg,
  },
});
