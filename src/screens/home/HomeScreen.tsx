import React, { memo, useState } from "react";
import { SectionList, StyleSheet, View,  } from "react-native";
import { Colors } from "../../constants/Colors";
import RenderDrug from "../../components/home/RenderDrug";
import RenderDrugHeader from "../../components/home/RenderDrugHeader";
import EmptyDrug from "../../components/home/EmptyDrug";
import Banner from "../../components/home/Banner";
import HorizontalCalendar from "../../components/home/HorizontalCalendar";
import DrugAlert from "../../components/home/DrugAlert";
const HomeScreen = memo(() => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const data = [
    {
      id   : 1,
      title: "13:00",
      data : [
        {
          id    : 1,
          drug  : "Impact Advanced Recovery",
          when  : "Хоолны дараа",
          isSkip: true,
          much  : 2,
          isDone: false,
        },
        {
          id    : 2,
          drug  : "Impact Advanced Recovery",
          when  : "Хоолны дараа",
          isSkip: false,
          much  : 2,
          isDone: true,
        },
        {
          id    : 3,
          drug  : "Impact Advanced Recovery",
          when  : "Хоолны дараа",
          isSkip: false,
          much  : 2,
          isDone: false,
        },
        {
          id    : 4,
          drug  : "Impact Advanced Recovery",
          when  : "Хоолны дараа",
          isSkip: false,
          much  : 2,
          isDone: false,
        },
        {
          id    : 4,
          drug  : "Impact Advanced Recovery",
          when  : "Хоолны дараа",
          isSkip: false,
          much  : 2,
          isDone: true,
        },
      ],
    },
    {
      id   : 2,
      title: "22:00",
      data : [
        {
          id    : 5,
          drug  : "Impact Advanced Recovery",
          when  : "Хоолны дараа",
          isSkip: true,
          much  : 2,
          isDone: false,
        },
        {
          id    : 6,
          drug  : "Impact Advanced Recovery",
          when  : "Хоолны дараа",
          isSkip: false,
          much  : 2,
          isDone: true,
        },
        {
          id    : 7,
          drug  : "Impact Advanced Recovery",
          when  : "Хоолны дараа",
          isSkip: false,
          much  : 2,
          isDone: false,
        },
        {
          id    : 8,
          drug  : "Impact Advanced Recovery",
          when  : "Хоолны дараа",
          isSkip: false,
          much  : 2,
          isDone: false,
        },
        {
          id    : 9,
          drug  : "Impact Advanced Recovery",
          when  : "Хоолны дараа",
          isSkip: false,
          much  : 2,
          isDone: true,
        },
      ],
    },
  ];
  // const data = [];
  const imageData = [
    { id: "1", image: "https://images.pexels.com/photos/11987710/pexels-photo-11987710.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
    { id: "2", image: "https://images.pexels.com/photos/13945391/pexels-photo-13945391.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
    { id: "3", image: "https://images.pexels.com/photos/14792098/pexels-photo-14792098.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
  ];
  return (
    <View style={styles.container}>
      <DrugAlert />
      <HorizontalCalendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      {data.length > 0 ? (
        <SectionList
          ListFooterComponent={<Banner imageData={imageData} />}
          keyExtractor={item => item.id.toLocaleString()}
          renderItem={({ item }) => <RenderDrug isDone={item.isDone} isSkip={item.isSkip} much={item.much} name={item.drug} when={item.when} />}
          renderSectionHeader={({ section }) => <RenderDrugHeader title={section.title} />}
          sections={data}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <EmptyDrug />
      )}
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
 
});
