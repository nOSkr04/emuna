import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { Dispatch, SetStateAction, memo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Modal from "react-native-modal";
import { format } from "date-fns";
import Button from "../Button";
import ButtonInput from "../ButtonInput";
import IconInput from "../IconInput";
import { Mon700 } from "../StyledText";
import { Colors } from "../../constants/Colors";
import PhoneIcon from "../../../assets/svg/phone.svg";
import RightIcon from "../../../assets/svg/CaretRight.svg";
import CalendarIcon from "../../../assets/svg/CalendarBlank.svg";
import GenderIcon from "../../../assets/svg/GenderMale.svg";
import BackIcon from "../../../assets/svg/xButotn.svg";
import { AuthApi } from "../../apis";
import { useDispatch } from "react-redux";
import { authMe } from "../../store/authSlice";

type Props = {
  firstName: string | undefined | null;
  setFirstName: Dispatch<SetStateAction<string | null | undefined>>;
  phone: number | null | undefined;
  gender: string | undefined | null;
  setGender: Dispatch<SetStateAction<"male" | "female" | "other" | null | undefined>>;
  birth: Date | null | undefined;
  setBirth: Dispatch<SetStateAction<Date | null | undefined>>;
  height: string | undefined | null;
  setHeight: Dispatch<SetStateAction<string | null | undefined>>;
  weight: string | undefined | null;
  setWeight: Dispatch<SetStateAction<string | null | undefined>>;
  userId: string | undefined;
};

const ProfileField = memo(
  ({ firstName, setFirstName, phone, gender, setGender, birth, setBirth, height, setHeight, weight, setWeight, userId }: Props) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showDatePicker = () => {
      setIsDatePickerVisible(true);
    };
    const hideDatePicker = () => {
      setIsDatePickerVisible(false);
    };
    const handleConfirm = (date: any) => {
      setBirth(date);
      hideDatePicker();
    };
    const toggleModal = () => {
      setIsModalVisible(!isModalVisible);
    };
    const selectGender = (gender: "male" | "female" | "other" | null | undefined) => {
      setGender(gender);
      setIsModalVisible(!isModalVisible);
    };
    const profileEdit = async (
      firstName: string | null | undefined,
      gender: string | null | undefined,
      birth: Date | null | undefined,
      height: string | null | undefined,
      weight: string | null | undefined,
    ) => {
      try {
        const values = {
          firstName: firstName,
          gender   : gender,
          birth    : birth,
          height   : height,
          weight   : weight,
        };
        await AuthApi.edit(userId, values);
        const res = await AuthApi.me();
        dispatch(authMe(res));
        navigation.goBack();
      } catch (err) {
        console.log(err);
      }
    };
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.inputLabel}>Нэр</Text>
        <TextInput onChangeText={setFirstName} style={styles.input} value={firstName ? firstName : ""} />
        <IconInput icon={<PhoneIcon height={16} width={16} />} title={"Утасны дугаар"} value={phone ? phone.toString() : ""} />
        <Text style={styles.inputLabel}>Хүйс</Text>
        <ButtonInput icon={<GenderIcon />} onPress={toggleModal} text={gender === "male" ? "Эрэгтэй": "Эмэгтэй"} />
        <Text style={styles.inputLabel}>Төрсөн огноо</Text>
        <ButtonInput icon={<CalendarIcon />} onPress={showDatePicker} text={birth ? format(new Date(birth), "dd/MM/yyyy") : "Төрсөн огноо"} />
        <View style={styles.rowInputContainer}>
          <View style={styles.rowInput}>
            <Text style={styles.rowTitle}>Өндөр</Text>
            <TextInput onChangeText={setHeight} style={styles.inputRow} value={height ? height.toString() : ""} />
          </View>
          <View style={styles.rowInput}>
            <Text style={styles.rowTitle}>Жин</Text>
            <TextInput onChangeText={setWeight} style={styles.inputRow} value={weight ? weight.toString() : ""} />
          </View>
        </View>
        <View style={styles.divider} />
        <Text style={styles.title}>Эрүүл мэндийн мэдээлэл</Text>
        <TouchableOpacity onPress={() => navigation.navigate("ProfileEditAllergiesScreen")} style={styles.chooseButtonContainer}>
          <View>
            <Text style={styles.chooseTitle}>Харшил</Text>
            <Text style={styles.chooseType}>Өндөг, Сүү, Алим</Text>
          </View>
          <RightIcon />
        </TouchableOpacity>
        <View style={styles.border} />
        <TouchableOpacity onPress={() => navigation.navigate("ProfileEditChronicScreen")} style={styles.chooseButtonContainer}>
          <View>
            <Text style={styles.chooseTitle}>Архаг хууч өвчин</Text>
            <Text style={styles.chooseType}>Чихойн шижин</Text>
          </View>
          <RightIcon />
        </TouchableOpacity>
        <View style={styles.border} />
        <TouchableOpacity onPress={() => navigation.navigate("ProfileHealthDetailSheet", { type: 1 })} style={styles.chooseButtonContainer}>
          <View>
            <Text style={styles.chooseTitle}>Байнгын хэрэглэдэг эм</Text>
            <Text style={styles.chooseType}>Байхгүй</Text>
          </View>
          <RightIcon />
        </TouchableOpacity>
        <View style={styles.border} />
        <TouchableOpacity onPress={() => navigation.navigate("ProfileHealthDetailSheet", { type: 2 })} style={styles.chooseButtonContainer}>
          <View>
            <Text style={styles.chooseTitle}>Гэмтэл бэртэл</Text>
            <Text style={styles.chooseType}>Байхгүй</Text>
          </View>
          <RightIcon />
        </TouchableOpacity>
        <View style={styles.border} />
        <TouchableOpacity onPress={() => navigation.navigate("ProfileHealthDetailSheet", { type: 3 })} style={styles.chooseButtonContainer}>
          <View>
            <Text style={styles.chooseTitle}>Хагалгаа, мэс ажилбар</Text>
            <Text style={styles.chooseType}>Байхгүй</Text>
          </View>
          <RightIcon />
        </TouchableOpacity>
        <View style={styles.border} />
        <Button onPress={() => profileEdit(firstName, gender, birth, height, weight)} style={styles.button} title={"Хадгалах"} />
        <DateTimePickerModal isVisible={isDatePickerVisible} mode="date" onCancel={hideDatePicker} onConfirm={handleConfirm} />
        <Modal isVisible={isModalVisible} onBackdropPress={toggleModal} onSwipeComplete={toggleModal} swipeDirection="down">
          <View style={styles.modalContainer}>
            <TouchableOpacity onPress={toggleModal} style={styles.modalButton}>
              <BackIcon />
            </TouchableOpacity>
            {["male", "female"].map((gen, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => selectGender(gen as "male" | "female")}
                  style={[styles.container, gen === gender && styles.selectedContainer]}>
                  {gen === gender ? (
                    <View style={styles.radioContainer}>
                      <View style={styles.selectedRadioCont}>
                        <View style={styles.selectedRadio} />
                      </View>
                    </View>
                  ) : (
                    <View style={styles.radioContainer}>
                      <View style={styles.radio} />
                    </View>
                  )}
                  <Mon700 style={styles.text}>{gen === "male" ? "Эрэгтэй" : "Эмэгтэй"}</Mon700>
                </TouchableOpacity>
              );
            })}
          </View>
        </Modal>
      </ScrollView>
    );
  },
);

ProfileField.displayName = "ProfileField";

const styles = StyleSheet.create({
  inputLabel: {
    fontSize        : 11,
    fontFamily      : "Mon600",
    color           : Colors.newText,
    opacity         : 0.72,
    marginHorizontal: 24,
    marginTop       : 16,
    lineHeight      : 16,
    letterSpacing   : 0.15,
  },
  input: {
    borderWidth     : 1,
    marginHorizontal: 16,
    height          : 48,
    borderColor     : Colors.strokeDark,
    borderRadius    : 8,
    marginTop       : 8,
    padding         : 8,
    fontSize        : 14,
    color           : Colors.newText,
    opacity         : 0.72,
    lineHeight      : 20,
    letterSpacing   : 0.25,
    fontFamily      : "Mon500",
  },
  rowInputContainer: {
    flexDirection   : "row",
    justifyContent  : "space-between",
    marginHorizontal: 16,
  },
  rowInput: {
    width: "48%",
  },
  rowTitle: {
    fontSize     : 11,
    fontFamily   : "Mon600",
    color        : Colors.newText,
    opacity      : 0.72,
    marginTop    : 16,
    lineHeight   : 16,
    letterSpacing: 0.15,
    marginLeft   : 8,
  },
  inputRow: {
    borderWidth  : 1,
    height       : 48,
    borderColor  : Colors.strokeDark,
    borderRadius : 8,
    marginTop    : 8,
    fontSize     : 14,
    color        : Colors.newText,
    opacity      : 0.72,
    lineHeight   : 20,
    letterSpacing: 0.25,
    fontFamily   : "Mon500",
    paddingLeft  : 8,
  },
  divider: {
    height         : 4,
    backgroundColor: Colors.strokeDark,
    marginTop      : 16,
    marginBottom   : 29,
  },
  title: {
    fontFamily      : "Mon700",
    fontSize        : 15,
    lineHeight      : 24,
    letterSpacing   : 0.15,
    color           : Colors.newText,
    marginHorizontal: 16,
    marginBottom    : 28,
  },
  chooseButtonContainer: {
    flexDirection   : "row",
    justifyContent  : "space-between",
    alignItems      : "center",
    marginHorizontal: 16,
  },
  chooseTitle: {
    fontSize     : 14,
    fontFamily   : "Mon500",
    lineHeight   : 20,
    letterSpacing: 0.25,
    color        : Colors.newText,
    marginBottom : 4,
    paddingTop   : 12,
  },
  chooseType: {
    fontSize     : 12,
    fontFamily   : "Mon500",
    lineHeight   : 16,
    letterSpacing: 0.25,
    color        : Colors.texts,
    paddingBottom: 12,
  },
  border: {
    borderWidth     : 1,
    marginHorizontal: 16,
    borderColor     : Colors.strokeDark,
    opacity         : 0.4,
  },
  button: {
    marginHorizontal: 16,
    marginBottom    : 40,
    marginTop       : 80,
  },
  container: {
    height       : 48,
    flexDirection: "row",
    alignItems   : "center",
    borderWidth  : 1,
    borderColor  : Colors.strokeDark,
    borderRadius : 8,
    marginTop    : 16,
    padding      : 12,
  },
  selectedContainer: {
    borderColor    : Colors.primary,
    backgroundColor: Colors.PrimarySoft,
  },
  text: {
    fontSize  : 14,
    lineHeight: 20,
    marginLeft: 16,
  },
  radioContainer: {
    width         : 24,
    height        : 24,
    alignItems    : "center",
    justifyContent: "center",
  },
  radio: {
    width       : 16.5,
    height      : 16.5,
    borderWidth : 1,
    borderRadius: 100,
    borderColor : Colors.text,
  },
  selectedRadioCont: {
    justifyContent: "center",
    alignItems    : "center",
    width         : 16.5,
    height        : 16.5,
    borderWidth   : 1,
    borderRadius  : 100,
    borderColor   : Colors.primary,
  },
  selectedRadio: {
    backgroundColor: Colors.primary,
    height         : 10,
    width          : 10,
    borderRadius   : 100,
  },
  modalContainer: {
    backgroundColor  : Colors.white,
    paddingBottom    : 16,
    paddingHorizontal: 16,
    borderRadius     : 8,
    paddingTop       : 20,
  },
  modalButton: {
    padding : 10,
    position: "absolute",
    zIndex  : 10,
    right   : 0,
    top     : -10,
  },
});

export default ProfileField;
