import { StyleSheet, View } from "react-native";
import React, { memo, useState } from "react";
import { Mon700 } from "../components/StyledText";
import RadioButton from "../components/RadioButton";
import { BottomSheetParamList } from "../navigation/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<BottomSheetParamList, "ProfileHealthDetailSheet">;

const ProfileHealthDetailSheet = memo((props: Props) => {
  const { type } = props.route.params;
  const [isType, setIsType] = useState(false);
  return (
    <View style={styles.container}>
      <Mon700 style={styles.title}>{type === 1 ? "Байнгын хэрэглэдэг эм" : type === 2 ? "Гэмтэл бэртэл" :  "Хагалгаа, мэс ажилбар"}</Mon700>
      <RadioButton isGoBack={true} selected={isType} setSelected={setIsType} />
    </View>
  );
});

ProfileHealthDetailSheet.displayName = "ProfileHealthDetailSheet";

export default ProfileHealthDetailSheet;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop       : 16,
  },
  title: {
    fontSize     : 15,
    lineHeight   : 24,
    letterSpacing: 0.25,
  },
});
