import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import { Colors } from "../../constants/Colors";
import PlusCircle from "../../../assets/svg/PlusCircle.svg";
import RightIcon from "../../../assets/svg/CaretRight.svg";
import { useNavigation } from "@react-navigation/native";
const DrugAlert = memo(() => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("PharmacistRequestSheet")} style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.headerLeft}>
            <PlusCircle/>
            <Text style={styles.headerTitle}>+10 Эмийн сануулга</Text>
          </View>
          <RightIcon/>
        </View>
        <Text style={styles.description}>
          Маго фармын эм зүйчээс танд шинэ эмийн сануулга ирлээ.
        </Text>
      </TouchableOpacity>
    </View>
  );
});

DrugAlert.displayName="DrugAlert";

export default DrugAlert;

const styles = StyleSheet.create({
    container: {
        backgroundColor  : Colors.primary,
       paddingTop       : 8,
       paddingHorizontal: 16,
       paddingBottom    : 16
    },
    contentContainer: {
        backgroundColor: Colors.white,
        borderRadius   : 16
    },
    headerContainer: {
        flexDirection   : "row",
        marginBottom    : 10,
        marginHorizontal: 16,
        marginTop       : 14,
        alignItems      : "center",
        justifyContent  : "space-between"
    },
    headerLeft: {
        flexDirection: "row",
        alignItems   : "center"
    },
    headerTitle: {
        fontSize  : 14,
        lineHeight: 20,
        fontFamily: "Mon700",
        color     : Colors.drugPermision,
        marginLeft: 8
    },
    description: {
        fontFamily   : "Mon500",
        fontSize     : 14,
        lineHeight   : 20,
        letterSpacing: 0.25,
        color        : Colors.drugPermision,
        marginLeft   : 16,
        width        : "70%",
        paddingBottom: 12
    }
});