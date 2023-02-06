import { StyleSheet, View } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import Modal from "react-native-modal";
import { Colors } from "../../constants/Colors";
import { Mon400, Mon700 } from "../StyledText";
import CheckIcon from "../../../assets/svg/Check.svg";
import Button from "../Button";
import { useNavigation } from "@react-navigation/native";
type Props = {
  alertVisible: boolean;
  setAlertVisible: Dispatch<SetStateAction<boolean>>;
  name:string,
   size: string,
    shape: string
};

const AlertModal = ({ alertVisible, setAlertVisible, name, size, shape }: Props) => {
  const navigation = useNavigation();
  const timePickerToggleModal = () => {
    setAlertVisible(!alertVisible);
    navigation.navigate("AddDrugScreen");
  };
  return (
    <Modal isVisible={alertVisible} onBackdropPress={timePickerToggleModal} onSwipeComplete={timePickerToggleModal} swipeDirection={["down", "up"]}>
      <View style={styles.container}>
        <View style={styles.rootIcon}>
          <View style={styles.iconContainer}>
            <CheckIcon color={Colors.white} height={19.11} width={26.3} />
          </View>
        </View>
        <Mon700 style={styles.title}>Сануулга амжилттай хадгалагдлаа.</Mon700>
        <Mon400 style={styles.description}>{name}, {shape}, {size}</Mon400>
        <Button onPress={timePickerToggleModal} style={styles.button} title="Ойлголлоо"  />
      </View>
    </Modal>
  );
};

export default AlertModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius   : 24,
    alignItems     : "center",
    justifyContent : "center",
  },
  iconContainer: {
    width          : 48,
    height         : 48,
    borderRadius   : 100,
    backgroundColor: Colors.primary,
    alignItems     : "center",
    justifyContent : "center",
  },
  rootIcon: {
    width         : 60,
    height        : 60,
    alignItems    : "center",
    justifyContent: "center",
    borderWidth   : 1,
    borderRadius  : 100,
    borderColor   : Colors.softPrimary,
    marginTop     : 32
  },
  title: {
    fontSize        : 16,
    lineHeight      : 28,
    letterSpacing   : 0.15,
    textAlign       : "center",
    marginVertical  : 16,
    marginHorizontal: 24
  },
  description: {
    fontSize     : 14,
    lineHeight   : 20,
    letterSpacing: 0.25,
    textAlign    : "center"
  },
  button: {
    width       : "80%",
    marginTop   : 24,
    marginBottom: 32,
  }
});
