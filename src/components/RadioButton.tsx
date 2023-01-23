import { ActivityIndicator, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { Dispatch, SetStateAction, memo, useState } from "react";
import { Mon700 } from "./StyledText";
import { Colors } from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import CheckedRadio from "./CheckedRadio";
import UnCheckedRadio from "./UnCheckedRadio";
import { AuthApi } from "../apis";
import { authMe } from "../store/authSlice";
import { useDispatch } from "react-redux";

type Props = {
  selected: boolean | undefined | null;
  setSelected: Dispatch<SetStateAction<boolean | null | undefined>>;
  isGoBack?: boolean;
  type?: number;
};

const RadioButton = memo(({ selected, setSelected, isGoBack, type }: Props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const onPress = async (bool: boolean) => {
    setSelected(bool);
    if (isGoBack && type === 1) {
      setLoading(true);
      try {
        const values = {
          isRegularMedicine: bool,
        };
        await AuthApi.editRegularMedicine(values);
        const res = await AuthApi.me();
        dispatch(authMe(res));
      } catch (err) {
        console.log(err);
      } finally {
        navigation.goBack();
        setLoading(false);
      }
    }
    if (isGoBack && type === 2) {
      setLoading(true);
      try {
        const values = {
          isInjury: bool,
        };
        await AuthApi.editInjury(values);
        const res = await AuthApi.me();
        dispatch(authMe(res));
      } catch (err) {
        console.log(err);
      } finally {
        navigation.goBack();
        setLoading(false);
      }
    }
    if (isGoBack && type === 3) {
      setLoading(true);
      try {
        const values = {
          isSurgery: bool,
        };
        await AuthApi.editSurgery(values);
        const res = await AuthApi.me();
        dispatch(authMe(res));
      } catch (err) {
        console.log(err);
      } finally {
        navigation.goBack();
        setLoading(false);
      }
    }
  };
  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator color={Colors.primary} size={"large"} />
      </View>
    );
  }
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          onPress(true);
        }}
        style={[styles.container, selected && styles.selectedContainer]}>
        {selected ? <CheckedRadio /> : <UnCheckedRadio />}
        <Mon700 style={styles.text}>Байгаа</Mon700>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          onPress(false);
        }}
        style={[styles.container, !selected && styles.selectedContainer]}>
        {!selected ? <CheckedRadio /> : <UnCheckedRadio />}
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
  loader: {
    flex          : 1,
    alignItems    : "center",
    justifyContent: "center",
  },
});
