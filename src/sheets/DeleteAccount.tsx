import { StyleSheet, View } from "react-native";
import React, { memo } from "react";
import WarningIcon from "../../assets/svg/checked-checkbox.svg";
import Button from "../components/Button";
import { Colors } from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import {  Mon700 } from "../components/StyledText";
import {  useDispatch, useSelector } from "react-redux";
import { IAuth } from "../interfaces/IAuth";
import { AuthApi } from "../apis";
import { authLogout } from "../store/authSlice";
import Toast from "react-native-root-toast";


const DeleteAccountSheet = memo(() => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { user } = useSelector((state: { auth: IAuth }) => state.auth);
  const onDelete = async (id: string) => {
    try {
      await AuthApi.deleteAccount(id);
      dispatch(authLogout());
    } catch (err: any) {
      Toast.show(err.error.message, {
        duration       : Toast.durations.SHORT,
        position       : Toast.positions.TOP + 50,
        textColor      : Colors.white,
        shadow         : true,
        animation      : true,
        hideOnPress    : true,
        delay          : 0,
        backgroundColor: Colors.primary,
      });
    }finally{
      navigation.goBack();
    }
  };
  return (
    <View>
      <WarningIcon style={styles.icon} />
      <Mon700 style={styles.title}>Та өөрийн бүртгэлийг устгахдаа итгэлтэй байна уу?</Mon700>
      <View style={styles.buttonContainer}>
        <Button onPress={() => navigation.goBack()} style={[styles.button,styles.bgWhite]} title="Болих" titleStyle={styles.buttonTitle} />
        <Button danger={true} onPress={() => onDelete(user?._id)}  style={styles.button} title="Устгах"/>
      </View>
    </View>
  );
});

DeleteAccountSheet.displayName = "DeleteAccountSheet";

export default DeleteAccountSheet;

const styles = StyleSheet.create({
  icon: {
    alignSelf: "center",
  },
  title: {
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
