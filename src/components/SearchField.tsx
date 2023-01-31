import { StyleSheet,  TextInput, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import Layout from "../constants/Layout";
import SearchIcon from "../../assets/svg/search.svg";
import { Colors } from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { Mon700 } from "./StyledText";

type Props = {
  value: string
  onChange:(text: string) => void
}

const SearchField = memo(({ value,onChange } : Props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <SearchIcon color={Colors.black}  height={20} style={styles.icon} width={20} />
        <TextInput onChangeText={onChange} placeholder="Түлхүүр үгээр хайх" placeholderTextColor={Colors.secondaryButton} style={styles.input} value={value}  />
      </View>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backContainer} >
        <Mon700 style={styles.title}>Болих</Mon700>
      </TouchableOpacity>
    </View>
  );
}); 

SearchField.displayName = "SearchField";

const styles = StyleSheet.create({
  container: {
    flexDirection   : "row",
    width           : Layout.window.width,
    alignItems      : "center",
    marginHorizontal: 16,
    marginTop       : 20,
    marginBottom    : 32
  },
  icon: {
  position: "absolute",
  left    : 10,
  zIndex  : 2
  },
  inputContainer: {
    flexDirection: "row",
    alignItems   : "center",
    width        : Layout.window.width * 0.75,
    height       : 44,
  },
  input: {
    height         : 44,
    width          : Layout.window.width * 0.75,
    backgroundColor: Colors.white,
    borderRadius   : 8,
    fontSize       : 16,
    fontFamily     : "Nun400",
    lineHeight     : 24,
    letterSpacing  : 0.5,    
    paddingLeft    : 40,
    borderWidth    : 1,
    borderColor    : Colors.greyBackground
  },
  title: {
    fontSize     : 12,
    textAlign    : "center",
    letterSpacing: 0.1,
    lineHeight   : 16,
  },
  backContainer: {
    width: Layout.window.width * 0.2,
  }
});

export default SearchField;
