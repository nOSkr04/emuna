import React, { memo } from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Layout from "../../constants/Layout";
import { Colors } from "../../constants/Colors";
import BackIcon from "../../../assets/svg/back.svg";
import SaveIcon from "../../../assets/svg/save.svg";
import RxIcon from "../../../assets/svg/rx.svg";
import DrugDetail from "./TopTabDetail/DrugDetail";
import DrugSummary from "./TopTabDetail/DrugSummary";
import Button from "../../components/Button";
const DrugDetailScreen = memo(() => {
  const insents = useSafeAreaInsets();
  const navigation = useNavigation();
  const Tab = createMaterialTopTabNavigator();
  const data = {
    id         : 1,
    name       : "Кавинтон",
    capsule    : "Капсул,5 мг",
    isTrue     : false,
    isTrueText : "Эмийн найрлагад орсон үйлчлэгч болон туслах бодист харшилтай, Жирэмсэн болон хөхүүл эх Хүүхдэд хэрэглэхийг хориглоно.",
    gradus     : "+15oC- +30oC",
    description: "Кавинтон ба Кавинтон Фонте шахмалыг тархины цусан хангамжийн өөрчлөлтийн үед хэрэглэдэг.",
    hemjee     : "Эмчилгээний хоногийн тун Кавинтон 1-2 шахмалаар өдөрт 3 удаа уух; харин Кавинтон Форте-г 1 шахмалаар өдөр 3 удаа ууж хэрэглэнэ. Хоол хамаарахгүй.",
    buyName    : "Нистатин",
    countryName: "Нистатин (Nystatin).",
    info       : "Ногоовтор туяа бүхий  цайвар шар өнгийн хальсан бүрхүүлтэй,  2 талдаа гүдгэр, дугариг хэлбэртэй шахмал.",
    nairlaga   : "Нэг  шахмалд: Идэвхитэй бодис - нистатин - 5000000",
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../../../assets/images/bg.jpg")} style={[styles.image, { marginTop: insents.top }]}>
        <View style={styles.headerIconContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIconContainer}>
            <BackIcon color={Colors.text} height={15} width={7.5} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.backIconContainer, styles.primaryColor]}>
            <SaveIcon color={Colors.white} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={styles.contentContainer}>
        <Text style={styles.drugName}>{data.name}</Text>
        <Text style={styles.drugDetail}>{data.capsule}</Text>
        <View style={styles.drugHelperContainer}>
          <RxIcon color={data.isTrue ? Colors.drugPermision : Colors.primary} />
          <Text style={[styles.drugPermission, data.isTrue ? styles.permissionTextColor : styles.primaryTextColor]}>
            {data.isTrue ? "Уг эмийг заавал жороор олгодог" : "Уг эмийг жоргүй олгодог"}
          </Text>
        </View>
      </View>
      <Tab.Navigator
      initialRouteName="DrugDetail"
        screenOptions={{
          
          tabBarActiveTintColor  : Colors.primary,
          tabBarInactiveTintColor: Colors.DarkText,
          tabBarLabelStyle       : styles.tabBarLabelStyle,
          tabBarIndicatorStyle   : styles.tabbarIndicator,
        }}>
        <Tab.Screen
        component={DrugDetail}
          initialParams={{
          isTrue     : data.isTrue,
          gradus     : data.gradus,
          description: data.description,
          hemjee     : data.hemjee
          }}
          name="DrugDetail"
          options={{
            title: "Дэлгэрэнгүй",
          }}
        />
        <Tab.Screen
          component={DrugSummary}
          initialParams={{
            buyName    : data.buyName,
            countryName: data.countryName,
            info       : data.info,
            nairlaga   : data.nairlaga
          }}
          name="DrugSummary"
          options={{
            title: "Хурангуй",
          }}
        />
      </Tab.Navigator>
      <Button onPress={() => navigation.navigate("AddDrugAlertScreen")} style={styles.button}  title="Үргэлжлүүлэх" />
    </View>
  );
});

DrugDetailScreen.displayName = "DrugDetailScreen";

export default DrugDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    backgroundColor: Colors.white,
  },
  image: {
    height: 256,
    width : Layout.window.width,
  },
  headerIconContainer: {
    flexDirection   : "row",
    justifyContent  : "space-between",
    marginHorizontal: 16,
    marginTop       : 8,
  },
  backIconContainer: {
    height         : 40,
    width          : 40,
    justifyContent : "center",
    alignItems     : "center",
    backgroundColor: Colors.white,
    borderRadius   : 20,
  },
  primaryColor: {
    backgroundColor: Colors.primary,
  },
  primaryTextColor: {
    color: Colors.primary,
  },
  permissionTextColor: {
    color: Colors.drugPermision,
  },
  drugName: {
    fontSize     : 24,
    fontFamily   : "Mon700",
    lineHeight   : 32,
    letterSpacing: 0.15,
    color        : Colors.text,
  },
  drugDetail: {
    fontSize     : 14,
    fontFamily   : "Mon500",
    lineHeight   : 20,
    letterSpacing: 0.25,
    opacity      : 0.64,
    color        : Colors.text,
  },
  drugHelperContainer: {
    flexDirection: "row",
    marginTop    : 16,
    alignItems   : "center",
  },
  drugPermission: {
    fontFamily   : "Mon500",
    fontSize     : 14,
    lineHeight   : 20,
    letterSpacing: 0.25,
    marginLeft   : 8,
  },
  contentContainer: {
    marginHorizontal: 16,
    marginTop       : 16,
  },
  tabBarLabelStyle: {
    fontSize     : 14,
    fontFamily   : "Mon700",
    lineHeight   : 20,
    textTransform: "none",
  },
  tabbarIndicator: {
    backgroundColor: Colors.primary,
  },
  button: {
    marginTop       : 8,
    marginHorizontal: 24,
    marginBottom    : 40
  }
});
