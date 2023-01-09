import { StyleSheet, Text, View } from "react-native";
import React,{ useState } from "react";
import PlusCircleIcon from "../../assets/svg/PlusCircle.svg";
import { Colors } from "../constants/Colors";
import Button from "../components/Button";
import Modal from "react-native-modal";
import WarningIcon from "../../assets/svg/checked-checkbox.svg";
const PharmacistRequestSheet = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
  const onCancel = () => {
    setIsModalVisible(!isModalVisible);
  };
  const onAdd = () => {
    console.log("object");
  };
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <View>
      <View style={styles.headerContainer}>
        <PlusCircleIcon />
        <Text style={styles.headerTitle}>+10 Эмийн сануулга</Text>
      </View>
      <Text style={styles.description}>Маго фармын эм зүйчээс танд шинэ эмийн сануулга ирлээ.</Text>
      <View style={styles.buttonContainer}>
        <Button danger={true} onPress={onCancel} style={styles.dangerButton} title={"Татгалзах"} titleStyle={styles.dangerTitle} />
        <Button onPress={onAdd} style={styles.button} title={"Нэмэх"} />
      </View>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <WarningIcon style={styles.icon}/>
          <Text style={styles.modalTitle}>Та эмийн сануулга нэмэхээс татгалзахдаа итгэлтэй байна уу?</Text>
          <Text style={styles.modalDescription}>Хэрвээ та татгалзвал сануулга устахыг анхаарна уу!</Text>
          <View style={styles.buttonContainer}>
            <Button danger={true} onPress={toggleModal} style={styles.dangerButton} title={"Болих"} titleStyle={styles.textColor} />
            <Button danger={true} onPress={toggleModal} style={styles.button} title={"Тийм"} />
          </View>
          <View style={styles.mv8} />
        </View>
      </Modal>
    </View>
  );
};

export default PharmacistRequestSheet;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection   : "row",
    marginHorizontal: 24,
    marginTop       : 30,
    alignItems      : "center",
  },
  headerTitle: {
    marginLeft: 8,
    fontSize  : 14,
    fontFamily: "Mon700",
    lineHeight: 20,
    color     : Colors.drugPermision,
  },
  description: {
    fontFamily   : "Mon500",
    fontSize     : 14,
    lineHeight   : 20,
    letterSpacing: 0.25,
    color        : Colors.newText,
    marginLeft   : 16,
    width        : "70%",
    marginTop    : 22,
    marginBottom : 55
  },
  dangerButton: {
    backgroundColor: Colors.white,
    width          : "40%",
    marginRight    : 10,
  },
  dangerTitle: {
    color: Colors.danger,
  },
  buttonContainer: {
    flexDirection : "row",
    justifyContent: "center",
  },
  button: {
    width     : "40%",
    marginLeft: 10,
  },
  modalContainer: {
    backgroundColor: Colors.white,
    borderRadius   : 24
  },
  icon: {
    marginTop: 32,
    alignSelf: "center"
  },
  modalTitle: {
    fontSize     : 15,
    lineHeight   : 24,
    letterSpacing: 0.15,
    textAlign    : "center",
    fontFamily   : "Mon700",
    color        : Colors.newText,
    margin       : 16
  },
  modalDescription: {
    fontSize     : 14,
    fontFamily   : "Mon500",
    lineHeight   : 20,
    letterSpacing: 0.25,
    textAlign    : "center",
    opacity      : 0.72,
    color        : Colors.newText,
    marginBottom : 16
  },
  mv8: {
    marginVertical: 8
  },
  textColor: {
    color: Colors.text
  }
});
