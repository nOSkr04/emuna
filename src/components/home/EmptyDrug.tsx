import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { Colors } from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import PlusIcon from "../../../assets/svg/plus.svg";
import Button from "../Button";
const EmptyDrug = memo(() => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Энэ өдөр сануулга байхгүй байна.</Text>
      <Button
        icon={<PlusIcon height={13.5} style={styles.iconContainer} width={13.5} />}
        onPress={() => navigation.navigate("AddDrugScreen")}
        style={styles.button}
        title="Сануулга үүсгэх"
        titleStyle={styles.buttonTitle}
      />
    </View>
  );
});

export default EmptyDrug;

EmptyDrug.displayName = "EmptyDrug";

const styles = StyleSheet.create({
  container: {
    flex          : 1,
    alignItems    : "center",
    justifyContent: "center",
    marginVertical: 200
  },
  title: {
    fontSize        : 16,
    fontFamily      : "Mon400",
    textAlign       : "center",
    marginHorizontal: 80,
    color           : Colors.helperText,
    lineHeight      : 24,
    letterSpacing   : 0.5,
    marginBottom    : 44,
  },
  buttonTitle: {
    fontSize: 14,
  },
  button: {
    paddingHorizontal: 10,
    flexDirection    : "row",
  },
  iconContainer: {
    paddingLeft: 20,
  },
});
