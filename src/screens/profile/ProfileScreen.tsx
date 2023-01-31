 
/* eslint-disable react-hooks/exhaustive-deps */
import { FlatList, StyleSheet,  View } from "react-native";
import React, { memo, useEffect } from "react";
import { Colors } from "../../constants/Colors";
import { useSelector } from "react-redux";
import { IAuth } from "../../interfaces/IAuth";
import { ISchedule } from "../../interfaces/ISchedule";
import { useNavigation } from "@react-navigation/native";
import ProfileHeaderLeft from "../../components/profile/ProfileHeaderLeft";
import ProfileHeaderRight from "../../components/profile/ProfileHeaderRight";
import EmptyDrug from "../../components/home/EmptyDrug";
import MyDrug from "../../components/profile/MyDrug";
import DrugHeaderContent from "../../components/profile/DrugHeaderContent";
import { ScheduleApi } from "../../apis";
import { useSWRToken } from "../../hooks/useSWRToken";

const ProfileScreen = memo(() => {
  const navigation = useNavigation();
  const { user } = useSelector((state: { auth: IAuth }) => state.auth);
  const { data,  } = useSWRToken<ISchedule>("/schedules/user", () => {
    return ScheduleApi.getSchedule();
  });
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <ProfileHeaderLeft
          firstName={user?.firstName ? user.firstName : user?.phone}
        />
      ),
      headerRight: () => <ProfileHeaderRight />,
    });
  }, []);
  return (
    <View style={styles.container}>
     
      <FlatList
        ListEmptyComponent={<EmptyDrug />}
        ListHeaderComponent={<DrugHeaderContent />}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <MyDrug item={item} />}
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
