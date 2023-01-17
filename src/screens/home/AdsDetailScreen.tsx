import { Animated, StyleSheet,  } from "react-native";
import React, { memo, useRef } from "react";
import { RootStackParamList } from "../../navigation/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Colors } from "../../constants/Colors";
import Layout from "../../constants/Layout";
import RenderHTML from "react-native-render-html";

type Props = NativeStackScreenProps<RootStackParamList, "AdsDetailScreen">;

const AdsDetailScreen = memo(({ route } : Props) => {
  const { id } = route.params;
  console.log(id);
  const scrollA = useRef(new Animated.Value(0)).current;
  const source = {
    html: `
    "<p>Подкастын салбар сүүлийн хэдэн жилийн турш хурдтай өсөж, энэ хэрээр уг салбарын хөрөнгө оруулалт ч нэмэгдсэн.  PodcastHosting.org мэдээлснээр 2021 оны 12-р сарын байдлаар дэлхий даяар 2 гаруй подкастын 48 сая дугаар цацагджээ. </p>\n<p>Хувийн санхүүгээ төлөвлөх, хөрөнгө оруулалт хийх, тэтгэврийн хуримтлалтай болох, чухал худалдан авалт хийх гэж буй хүмүүст зөвлөгөө өгч, санхүүгийн мэдлэг олгох топ 10 хувь хүний санхүүгийн подкастыг танилцуулж байна.</p>\n<h4>1.THE DEV RAMSEY SHOW</h4>\n<p>Давтамж: 7 хоног бүр</p>\n<p>Подкастын дундаж хугацаа: 40 минут </p>\n<p>Ерөнхий агуулга: Дев Рамси мөнгөний талаар төрөл бүрийн зөвлөгөө өгч хэрхэн хувийн санхүүгээ хөтлөх, мөнгөө ухаалгаар удирдах, баялаг бүтээх талаар хуваалцдаг.</p>\n"`,
  };
  return (
    <Animated.ScrollView onScroll={Animated.event(
      [{ nativeEvent: { contentOffset: { y: scrollA } } }],
      { useNativeDriver: true }
    )} scrollEventThrottle={16} showsVerticalScrollIndicator={false} style={styles.container}   >
      <Animated.Image
          // source={{
          //   uri: `${api}/upload/${data.photo}`,
          // }}
          style={[styles.image,{ transform: [
            {
              translateY: scrollA,
            },
          ], }]}
        />
      <RenderHTML contentWidth={Layout.window.width} source={source} />

    </Animated.ScrollView>
  );
});

AdsDetailScreen.displayName = "AdsDetailScreen";

export default AdsDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    backgroundColor: Colors.white
  },
  image: {
    
      width     : "100%",
      height    : 235,
      resizeMode: "contain",
      
    }
  
});