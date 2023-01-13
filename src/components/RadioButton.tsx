import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { Dispatch, SetStateAction, memo } from "react";
import { Mon700 } from "./StyledText";
import { Colors } from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";

type Props = {
  selected: boolean;
  setSelected: Dispatch<SetStateAction<boolean>>;
  isGoBack?: boolean;
};

const RadioButton = memo(({ selected, setSelected, isGoBack }: Props) => {
  const navigation = useNavigation();
  const onPress = (bool: boolean) => {
    setSelected(bool);
    if (isGoBack) {
      navigation.goBack();
    }
  };
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          onPress(true);
        }}
        style={[styles.container, selected && styles.selectedContainer]}>
        {selected ? (
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
        <Mon700 style={styles.text}>Байгаа</Mon700>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          onPress(false);
        }}
        style={[styles.container, !selected && styles.selectedContainer]}>
        {!selected ? (
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
        <Mon700 style={styles.text}>Байхгүй</Mon700>
      </TouchableOpacity>
    </View>
  );
});

RadioButton.displayName = "RadioButton";

export default RadioButton;

const styles = StyleSheet.create({
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
});
