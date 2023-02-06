import { StyleSheet, TouchableOpacity, View,  } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";
import BackIcon from "../../../assets/svg/back.svg";
import { Colors } from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { useSWRToken } from "../../hooks/useSWRToken";
import { DrugsApi } from "../../apis";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";
import Button from "../../components/Button";

type Props = NativeStackScreenProps<RootStackParamList, "DrugDetailScreen">;


const DrugDetailScreen = ({ route }: Props) => {
  const navigation = useNavigation();
  const { id } = route.params;
  const { data } = useSWRToken(`/drugs/${id}`, () => {
    return DrugsApi.getDrugDetail(id);
  });
  const INJECTED_JAVASCRIPT = `
    const elements = document.getElementsByClassName('dxsplPane_SoftOrange');
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = "none";
    } 
  
    `;

  return (
    <>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
          <BackIcon />
        </TouchableOpacity> 
        {/* <View style={styles.saveIcon}>
          <SaveIcon color={Colors.white} height={20} width={20} />
        </View> */}
      </View>
      <WebView
      injectedJavaScript={INJECTED_JAVASCRIPT}
      javaScriptEnabled={true}
      source={{ uri: data?.link }}
      style={styles.container}  
      />
      <View style={styles.button}>
        <Button
          onPress={() => navigation.navigate("AddDrugAlertScreen", { name: data.name, shape: data.shape, size: data.size })}
          title={"Үргэлжлүүлэх"}
        />
      </View>
    </>
  );
};

export default DrugDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex     : 1,
    marginTop: 50
  },
  headerContainer: {
    position      : "absolute",
    top           : 50,
    zIndex        : 999,
    flexDirection : "row",
    justifyContent: "space-between",
    left          : 16,
    right         : 16,
  },
  backIcon: {
    width          : 40,
    height         : 40,
    backgroundColor: Colors.white,
    borderRadius   : 100,
    alignItems     : "center",
    justifyContent : "center",
  },
  button: {
    backgroundColor  : Colors.white,
    paddingBottom    : 20,
    paddingTop       : 20,
    paddingHorizontal: 20,
  },
});