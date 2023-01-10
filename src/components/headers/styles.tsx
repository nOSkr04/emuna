import { StyleSheet, } from "react-native";
import { Colors } from "../../constants/Colors";



export const styles = StyleSheet.create({
  primaryBg: {
    backgroundColor: Colors.primary
  },
  softBg: {
    backgroundColor: Colors.softBg
  },
  profileHeader: {
    backgroundColor        : Colors.primary,
    borderBottomLeftRadius : 16,
    borderBottomRightRadius: 16,
    height                 : 100
  }
});