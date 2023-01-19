import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import WarningIcon from "../../assets/svg/checked-checkbox.svg";
import Button from "../components/Button";
import { Colors } from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";
// import { BottomSheetParamList } from "../navigation/types";
// import { NativeStackScreenProps } from "@react-navigation/native-stack";

// type Props = NativeStackScreenProps<BottomSheetParamList, "DeleteAlertSheet">;

const DeleteAlertSheet = memo((
  // { route }: Props
  ) => {
  // const { id } = route.params;
  const navigation = useNavigation();
  const onDelete = () => {
    navigation.goBack();
  };
  return (
    <View>
      <WarningIcon style={styles.icon} />
      <Text style={styles.title}>Та уг эмийн ирээдүйн бүх сануулгыг устгахдаа итгэлтэй байна уу?</Text>
      <View style={styles.buttonContainer}>
        <Button onPress={() => navigation.goBack()} style={[styles.button,styles.bgWhite]} title="Болих" titleStyle={styles.buttonTitle} />
        <Button danger={true} onPress={onDelete}  style={styles.button} title="Устгах"/>
      </View>
    </View>
  );
});

DeleteAlertSheet.displayName = "DeleteAlertSheet";

export default DeleteAlertSheet;

const styles = StyleSheet.create({
  icon: {
    alignSelf: "center",
  },
  title: {
    fontFamily      : "Mon700",
    fontSize        : 15,
    lineHeight      : 24,
    letterSpacing   : 0.15,
    textAlign       : "center",
    marginHorizontal: 32,
    marginTop       : 16,
    marginBottom    : 50
  },
  buttonContainer: {
    flexDirection : "row",
    justifyContent: "center"
  },
  button: {
    width           : "40%",
    marginHorizontal: 8
  },
  buttonTitle: {
    color: Colors.text
  },
  bgWhite: {
    backgroundColor: Colors.white
  }
});
