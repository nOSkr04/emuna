import React, { memo, useState } from "react";
import { FlatList, StyleSheet,  TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { format } from "date-fns";
import { mn } from "date-fns/locale";
import RenderDrug from "../../components/home/RenderDrug";
import RenderDrugHeader from "../../components/home/RenderDrugHeader";
import EmptyDrug from "../../components/home/EmptyDrug";
import Banner from "../../components/home/Banner";
import HorizontalCalendar from "../../components/home/HorizontalCalendar";
import DrugAlert from "../../components/home/DrugAlert";
import HomeLoader from "../../components/loader/HomeLoader";
import { useSWRToken } from "../../hooks/useSWRToken";
import { HistoryApi } from "../../apis";
import { IHistory } from "../../interfaces/IHistory";
import { Colors } from "../../constants/Colors";

const HomeScreen = memo(() => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const navigation = useNavigation();
  const strDate = format(selectedDate, "yyyy-MM-dd");
  const monDate = format(selectedDate, "eeee, M сарын d", { locale: mn });
  const { data, error } = useSWRToken<IHistory>(`/histories/day/${strDate}`, () => {
    return HistoryApi.historiesDay(strDate);
  });
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
      {data?.invited === undefined || data?.invited === 0 ? null  : <DrugAlert />}
      <HorizontalCalendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <FlatList
        ListEmptyComponent={!data ? <HomeLoader /> : <EmptyDrug />}
        ListFooterComponent={<Banner />}
        data={data?.histories}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {

          return (
            <TouchableOpacity
            onPress={() => navigation.navigate("HomeMedicalSheet", { data: item.medicine, monDate: monDate, time: item._id })}
            >
              <View style={styles.medicalContainer}>
                <RenderDrugHeader title={item._id} />
                <FlatList
                data={item.medicine}
                renderItem={({ item }) => {
                  return (
                    <RenderDrug
                      _id={item._id}
                      color={"red"}
                      icon={"3medical"}
                      medicine={item.medicine}
                      quantity={item.quantity}
                      status={item.status}
                      when={item.when}
                    />
                 
                  );
                }}
              />
              </View>
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
