import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { Colors } from "../../constants/Colors";
import Button from "../Button";
import Modal from "react-native-modal";
import { useDispatch } from "react-redux";
import { AuthApi } from "../../apis";
import { authLogout } from "../../store/authSlice";
import { useNavigation } from "@react-navigation/native";
type Props = {
  isModalVisible: boolean;
  toggleModal: () => void;
};

const LogoutModal = memo(({ isModalVisible, toggleModal }: Props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const logout = async () => {
    try {
      await AuthApi.logout();
      dispatch(authLogout());
      toggleModal();
      navigation.goBack();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Modal isVisible={isModalVisible}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Та системээс гарахдаа итгэлтэй байна уу?</Text>
        <View style={styles.buttonContainer}>
          <Button onPress={toggleModal} style={[styles.modalButton, styles.visibleButton]} title="Болих" titleStyle={styles.visibleTitle} />
          <Button danger={true} onPress={logout} style={styles.modalButton} title="Тийм" />
        </View>
      </View>
    </Modal>
  );
});

LogoutModal.displayName = "LogoutModal";

export default LogoutModal;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: Colors.white,
    borderRadius   : 24,
  },
  modalTitle: {
    fontSize        : 15,
    fontFamily      : "Mon700",
    lineHeight      : 24,
    letterSpacing   : 0.15,
    color           : Colors.newText,
    marginHorizontal: 24,
    marginVertical  : 32,
  },
  buttonContainer: {
    flexDirection   : "row",
    marginHorizontal: 24,
    marginBottom    : 32,
  },
  modalButton: {
    width: "50%",
  },
  visibleButton: {
    backgroundColor: Colors.white,
  },
  visibleTitle: {
    opacity: 0.72,
    color  : Colors.newText,
  },
});
