import { StyleSheet,  View } from "react-native";
import React, { memo } from "react";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

const SavedDrugMenuSheets = memo(() => {
  const navigation = useNavigation();
  const onDelete = () => {
navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Button block={true}  onPress={onDelete}  style={styles.button}title="Дэлгэрэнгүй үзэх" />
      <Button danger={true} onPress={onDelete} style={styles.button} title="Устгах" />
    </View>
  );
});

SavedDrugMenuSheets.displayName ="SavedDrugMenuSheets";
export default SavedDrugMenuSheets;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    alignItems      : "center",
  },
  button: {
    width       : "100%"
    ,marginBottom: 16
  }
});