import React, { memo, useState } from "react";
import { FlatList, StyleSheet,  TouchableOpacity, View } from "react-native";
import { Colors } from "../../constants/Colors";
import RenderDrug from "../../components/home/RenderDrug";
import RenderDrugHeader from "../../components/home/RenderDrugHeader";
import EmptyDrug from "../../components/home/EmptyDrug";
import Banner from "../../components/home/Banner";
import HorizontalCalendar from "../../components/home/HorizontalCalendar";
import DrugAlert from "../../components/home/DrugAlert";
import { useNavigation } from "@react-navigation/native";
import { useSWRToken } from "../../hooks/useSWRToken";
import { HistoryApi } from "../../apis";
import { format } from "date-fns";
import HomeLoader from "../../components/loader/HomeLoader";

const HomeScreen = memo(() => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const navigation = useNavigation();
  const strDate = format(selectedDate, "yyyy-MM-dd");
  const { data, error } = useSWRToken(`/histories/day/${strDate}`, () => {
    return HistoryApi.historiesDay(strDate);
  });
  const imageData = [
    { id: "1", image: "https://images.pexels.com/photos/11987710/pexels-photo-11987710.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
    { id: "2", image: "https://images.pexels.com/photos/13945391/pexels-photo-13945391.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
    { id: "3", image: "https://images.pexels.com/photos/14792098/pexels-photo-14792098.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
  ];
  // const sortedTime = data?.histories.sort((a: any, b: any) => {
  //   const [aHour, aMin] = a._id.split(":");
  //   const [bHour, bMin] = b._id.split(":");
  //   if (aHour !== bHour) return aHour - bHour;
  //   return aMin - bMin;
  // });

  if(error){
    return null;
  }
  return (
    <View style={styles.container}>
      {/* <Text>{ite}</Text> */}
      {data?.invited === undefined || data?.invited === 0 ? null  : <DrugAlert />}
      <HorizontalCalendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <FlatList
        ListEmptyComponent={!data ? <HomeLoader /> : <EmptyDrug />}
        ListFooterComponent={<Banner imageData={imageData} />}
        data={data?.histories}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("HomeMedicalSheet", { data: item._id, selectedDate: selectedDate })}
              style={styles.medicalContainer}>
              <RenderDrugHeader title={item._id} />
              <FlatList
                data={item.medicine }
                renderItem={({ item }) => {
                  return (
                    <RenderDrug
                      bgColor={"red"}
                      icon={"3medical"}
                      much={item.quantity}
                      name={item.medicine}
                      status={item.status}
                      when={item.when}
                    />
                  );
                }}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
});

HomeScreen.displayName = "HomeScreen";

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    backgroundColor: Colors.homeBg,
  },
  medicalContainer: {
    marginHorizontal: 16,
    marginTop       : 16,
    borderRadius    : 16,
    backgroundColor : Colors.white,
  },
});
