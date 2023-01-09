import { AccessibilityState, GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo, useEffect, useRef } from "react";
import * as Animatable from "react-native-animatable";
import { Colors } from "../constants/Colors";
import { AntDesign } from "@expo/vector-icons";

type MyTabBarProps = {
  activeIcon: string;
  label: string;
  onPress: (event: GestureResponderEvent) => void;
  accessibilityState: AccessibilityState;
};

const MyTabBar = memo(({ activeIcon, onPress, accessibilityState, label }: MyTabBarProps) => {
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const textViewRef = useRef(null);
  useEffect(() => {
    if (focused) {
      viewRef.current.animate({ 0: { scale: 0 }, 1: { scale: 1 } });
      textViewRef.current.animate({ 0: { scale: 0 }, 1: { scale: 1 } });
    } else {
      viewRef.current.animate({ 0: { scale: 1 }, 1: { scale: 0 } });
      textViewRef.current.animate({ 0: { scale: 1 }, 1: { scale: 0 } });
    }
  }, [focused]);
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress} style={[styles.container, focused ? styles.flex : styles.flex07]}>
      <View>
        <Animatable.View ref={viewRef} style={[StyleSheet.absoluteFillObject, styles.any]} />
        <View style={styles.btn}>
          <AntDesign color={focused ? Colors.primary : Colors.darkGrey} name={activeIcon} size={24} />
          <Animatable.View ref={textViewRef}>{focused && <Text style={styles.label}>{label}</Text>}</Animatable.View>
        </View>
      </View>
    </TouchableOpacity>
  );
});

MyTabBar.displayName="MyTabBar";

const styles = StyleSheet.create({
  container: {
    alignItems    : "center",
    justifyContent: "center",
  },
  flex07: {
    flex: 0.7,
  },
  flex: {
    flex: 1,
  },
  btn: {
    flexDirection: "row",
    alignItems   : "center",
    padding      : 8,
    borderRadius : 16,
    zIndex       : 2,
  },
  label: {
    color            : Colors.primary,
    paddingHorizontal: 8,
    fontFamily       : "semibold",
  },
  any: {
    backgroundColor: Colors.primarySoft,
    borderRadius   : 16,
  },
});

export default MyTabBar;
