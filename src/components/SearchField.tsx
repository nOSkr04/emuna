import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import Layout from "../constants/Layout";
import SearchIcon from "../../assets/svg/search.svg";
import { Colors } from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";
const SearchField = memo(() => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <SearchIcon color={Colors.black}  height={20} style={styles.icon} width={20} />
        <TextInput placeholder="Түлхүүр үгээр хайх" placeholderTextColor={Colors.secondaryButton} style={styles.input}  />
      </View>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backContainer} >
        <Text style={styles.title}>Болих</Text>
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
    paddingLeft    : 40
  },
  title: {
    fontFamily   : "Mon700",
    fontSize     : 12,
    textAlign    : "center",
    letterSpacing: 0.1,
    lineHeight   : 16,
    color        : Colors.white
  },
  backContainer: {
    width: Layout.window.width * 0.2,
  }
});

export default SearchField;
