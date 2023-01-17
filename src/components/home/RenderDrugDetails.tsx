import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";
import { IMedicine } from "../../interfaces/IMedicine";
import Button from "../Button";
import MedicalIcon from "../MedicalIcon";
import VerticalDots from "../../../assets/svg/verticalDots.svg";
import DotIcon from "../../../assets/svg/dot.svg";
import Xicon from "../../../assets/svg/X.svg";
import CheckIcon from "../../../assets/svg/Check.svg";
import PencilIcon from "../../../assets/svg/pencil.svg";
import TrashIcon from "../../../assets/svg/Trash.svg";
import { Colors } from "../../constants/Colors";
const RenderDrugDetails = memo(({ item }: {item: IMedicine}) => {
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  const onDelete = (id: string) => {
    setIsModalVisible(!isModalVisible);
    navigation.navigate("DeleteAlertSheet", { id: id });
  };
  return (
    <View style={styles.root}>
      <View style={styles.contentRoot}>
        <View style={styles.container}>
          <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
            <MedicalIcon icon={item.icon} />
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.itemName}>{item.medicine}</Text>
            <View style={styles.textContainer}>
              <Text style={styles.itemWhen}>{item.when}</Text>
              <DotIcon color={Colors.text} style={styles.dot} />
              <Text style={styles.itemWhen}>{item.quantity}</Text>
            </View>
            {item.status === "drinked" && (
              <View style={styles.infoContainer}>
                <View style={[styles.infoIcon, styles.checkedInfoIcon]}>
                  <CheckIcon />
                </View>
                <Text style={[styles.infoText, styles.checkedInfoText]}> Уусан</Text>
              </View>
            )}
            {item.status === "skipped" ? (
              <View style={styles.infoContainer}>
                <View style={styles.infoIcon}>
                  <Xicon />
                </View>
                <Text style={styles.infoText}> Алгассан</Text>
              </View>
            ): null}
          </View>
        </View>
        <TouchableOpacity onPress={toggleModal} style={styles.buttonContainer}>
          <VerticalDots />
        </TouchableOpacity>
      </View>
      <View style={styles.rowButtonContainer}>
        <Button
          onPress={() => console.log("object")}
          style={item.status === "skipped" ? styles.activeRowButton : styles.inActiveRowButton}
          title={item.status === "skipped" ? "Алгссан (13:20)" : "Алгссан"}
          titleStyle={item.status === "skipped" ? styles.activeRowButtonTitle : styles.inActiveRowButtonTitle}
        />
        <Button
          onPress={() => console.log("object")}
          style={item.status === "drinked" ? styles.activeRowButton : styles.inActiveRowButton}
          title={item.status === "drinked" ? "Уусан (13:20)" : "Уусан"}
          titleStyle={item.status === "drinked" ? styles.activeRowButtonTitle : styles.inActiveRowButtonTitle}
        />
      </View>
      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal} onSwipeComplete={toggleModal} swipeDirection="down">
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.modalButton}>
            <PencilIcon />
            <Text style={styles.modalText}>Сануулга засах</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onDelete(item._id)} style={styles.modalButton1}>
            <TrashIcon />
            <Text style={styles.modalText1}>Сануулга устгах</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
});

RenderDrugDetails.displayName = "RenderDrugDetails";

export default RenderDrugDetails;

const styles = StyleSheet.create({
  root: {
    marginBottom: 12,
  },
  contentRoot: {
    flexDirection : "row",
    alignItems    : "center",
    justifyContent: "space-between",
  },
  container: {
    flexDirection : "row",
    alignItems    : "center",
    marginVertical: 16,
  },
  iconContainer: {
    width         : 48,
    height        : 48,
    borderRadius  : 100,
    alignItems    : "center",
    justifyContent: "center",
  },
  textContainer: {
    flexDirection: "row",
    alignItems   : "center",
    marginTop    : 2,
  },
  itemName: {
    fontSize     : 15,
    fontFamily   : "Mon700",
    lineHeight   : 24,
    letterSpacing: 0.15,
  },
  itemWhen: {
    fontSize     : 12,
    fontFamily   : "Mon500",
    lineHeight   : 16,
    letterSpacing: 0.25,
    color        : Colors.text,
    opacity      : 0.64,
  },
  dot: {
    marginHorizontal: 4,
  },
  contentContainer: {
    marginLeft: 16,
  },
  buttonContainer: {
    padding: 8,
  },
  rowButtonContainer: {
    flexDirection : "row",
    justifyContent: "space-between",
  },
  inActiveRowButton: {
    width          : "48%",
    height         : 40,
    backgroundColor: Colors.PrimarySoft,
  },
  activeRowButton: {
    width          : "48%",
    height         : 40,
    backgroundColor: Colors.primary,
  },
  inActiveRowButtonTitle: {
    color   : Colors.text,
    fontSize: 12,
  },
  activeRowButtonTitle: {
    color   : Colors.white,
    fontSize: 12,
  },
  infoContainer: {
    flexDirection: "row",
    marginTop    : 4,
    alignItems   : "center",
  },
  infoIcon: {
    width          : 20,
    height         : 20,
    borderRadius   : 26,
    alignItems     : "center",
    justifyContent : "center",
    backgroundColor: Colors.darkGrey,
  },
  infoText: {
    fontSize     : 12,
    fontFamily   : "Mon700",
    color        : Colors.darkGrey,
    letterSpacing: 0.1,
    lineHeight   : 16,
  },
  checkedInfoIcon: {
    backgroundColor: Colors.primary,
  },
  checkedInfoText: {
    color: Colors.primary,
  },
  modalContainer: {
    backgroundColor : Colors.white,
    marginHorizontal: 60,
    padding         : 12,
    borderRadius    : 16,
  },
  modalButton: {
    backgroundColor  : Colors.PrimarySoft,
    alignItems       : "center",
    flexDirection    : "row",
    height           : 40,
    borderRadius     : 8,
    paddingHorizontal: 16,
  },
  modalButton1: {
    backgroundColor  : Colors.danger,
    alignItems       : "center",
    flexDirection    : "row",
    height           : 40,
    borderRadius     : 8,
    marginTop        : 16,
    paddingHorizontal: 16,
  },
  modalText: {
    fontSize     : 12,
    fontFamily   : "Mon700",
    color        : Colors.text,
    letterSpacing: 0.1,
    lineHeight   : 16,
    marginLeft   : 12,
  },
  modalText1: {
    fontSize     : 12,
    fontFamily   : "Mon700",
    color        : Colors.white,
    letterSpacing: 0.1,
    lineHeight   : 16,
    marginLeft   : 12,
  },
});
