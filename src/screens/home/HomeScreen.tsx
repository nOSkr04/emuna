import React, { memo, useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { Colors } from "../../constants/Colors";
import RenderDrug from "../../components/home/RenderDrug";
import RenderDrugHeader from "../../components/home/RenderDrugHeader";
import EmptyDrug from "../../components/home/EmptyDrug";
import Banner from "../../components/home/Banner";
import HorizontalCalendar from "../../components/home/HorizontalCalendar";
import DrugAlert from "../../components/home/DrugAlert";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = memo(() => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const navigation = useNavigation();
  const data = [
    {
      id   : 1,
      title: "13:00",
      data : [
        {
          id     : 1,
          drug   : "Impact Advanced Recovery",
          when   : "Хоолны дараа",
          isSkip : true,
          much   : 2,
          isDone : false,
          bgColor: "#FCC314",
          icon   : "1medical",
        },
        {
          id     : 2,
          drug   : "Impact Advanced Recovery",
          when   : "Хоолны дараа",
          isSkip : false,
          much   : 2,
          isDone : true,
          bgColor: "#FD8000",
          icon   : "2medical",
        },
        {
          id     : 3,
          drug   : "Impact Advanced Recovery",
          when   : "Хоолны дараа",
          isSkip : false,
          much   : 2,
          isDone : false,
          bgColor: "#FF3800",
          icon   : "3medical",
        },
        {
          id     : 4,
          drug   : "Impact Advanced Recovery",
          when   : "Хоолны дараа",
          isSkip : false,
          much   : 2,
          isDone : false,
          bgColor: "#D60100",
          icon   : "4medical",
        },
        {
          id     : 10,
          drug   : "Impact Advanced Recovery",
          when   : "Хоолны дараа",
          isSkip : false,
          much   : 2,
          isDone : true,
          bgColor: "#BC0000",
          icon   : "5medical",
        },
      ],
    },
    {
      id   : 2,
      title: "22:00",
      data : [
        {
          id     : 5,
          drug   : "Impact Advanced Recovery",
          when   : "Хоолны дараа",
          isSkip : true,
          much   : 2,
          isDone : false,
          bgColor: "#571640",
          icon   : "6medical",
        },
        {
          id     : 6,
          drug   : "Impact Advanced Recovery",
          when   : "Хоолны дараа",
          isSkip : false,
          much   : 2,
          isDone : true,
          bgColor: "#21004F",
          icon   : "7medical",
        },
        {
          id     : 7,
          drug   : "Impact Advanced Recovery",
          when   : "Хоолны дараа",
          isSkip : false,
          much   : 2,
          isDone : false,
          bgColor: "#001588",
          icon   : "8medical",
        },
        {
          id     : 8,
          drug   : "Impact Advanced Recovery",
          when   : "Хоолны дараа",
          isSkip : false,
          much   : 2,
          isDone : false,
          bgColor: "#00416E",
          icon   : "1medical",
        },
        {
          id     : 9,
          drug   : "Impact Advanced Recovery",
          when   : "Хоолны дараа",
          isSkip : false,
          much   : 2,
          isDone : true,
          bgColor: "#007715",
          icon   : "2medical",
        },
      ],
    },
    {
      id   : 3,
      title: "00:00",
      data : [
        {
          id     : 105,
          drug   : "Impact Advanced Recovery",
          when   : "Хоолны дараа",
          isSkip : true,
          much   : 2,
          isDone : false,
          bgColor: "#3EB900",
          icon   : "4medical",
        },
      ],
    },
  ];
  const imageData = [
    { id: "1", image: "https://images.pexels.com/photos/11987710/pexels-photo-11987710.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
    { id: "2", image: "https://images.pexels.com/photos/13945391/pexels-photo-13945391.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
    { id: "3", image: "https://images.pexels.com/photos/14792098/pexels-photo-14792098.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
  ];

  return (
    <View style={styles.container}>
      <DrugAlert />
      <HorizontalCalendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <FlatList
        ListEmptyComponent={
          <>
            <EmptyDrug />
          </>
        }
        ListFooterComponent={<Banner imageData={imageData} />}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("HomeMedicalSheet", { data: item, selectedDate: selectedDate })}
              style={styles.medicalContainer}>
              <RenderDrugHeader title={item.title} />
              <FlatList
                data={item.data}
                renderItem={({ item }) => {
                  return (
                    <RenderDrug
                      bgColor={item.bgColor}
                      icon={item.icon}
                      isDone={item.isDone}
                      isSkip={item.isSkip}
                      much={item.much}
                      name={item.drug}
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
