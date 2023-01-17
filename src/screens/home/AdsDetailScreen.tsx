import { Animated, StyleSheet, View } from "react-native";
import React, { memo, useRef } from "react";
import { RootStackParamList } from "../../navigation/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Colors } from "../../constants/Colors";
import Layout from "../../constants/Layout";
import RenderHTML from "react-native-render-html";
import { AdsApi } from "../../apis";
import { useSWRToken } from "../../hooks/useSWRToken";
import { IAds } from "../../interfaces/IAds";

type Props = NativeStackScreenProps<RootStackParamList, "AdsDetailScreen">;

const AdsDetailScreen = memo(({ route }: Props) => {
  const { id } = route.params;
  const { data } = useSWRToken<IAds>(`/ads/${id}`, () => {
    return AdsApi.getAdDetail(id);
  });
  const scrollA = useRef(new Animated.Value(0)).current;
  const source = {
    html: `${data?.name}`,
  };
  if(!data){
    return null;
  }
  return (
    <Animated.ScrollView
      onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollA } } }], { useNativeDriver: true })}
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
      style={styles.root}>
      <Animated.Image
        source={{ uri: data?.photo }}
        style={[
          styles.image,
          {
            transform: [
              {
                translateY: scrollA,
              },
            ],
          },
        ]}
      />
      <View style={styles.container}>
        <RenderHTML baseStyle={styles.mh16} contentWidth={Layout.window.width} enableExperimentalMarginCollapsing={true} source={source} />
      </View>
    </Animated.ScrollView>
  );
});

AdsDetailScreen.displayName = "AdsDetailScreen";

export default AdsDetailScreen;

const styles = StyleSheet.create({
  root: {
    flex           : 1,
    backgroundColor: Colors.white,
  },
  container: {
    flex           : 1,
    backgroundColor: Colors.white,
  },
  image: {
    width : "100%",
    height: 235,
  },
  mh16: {
    marginHorizontal: 16,
  },
});
