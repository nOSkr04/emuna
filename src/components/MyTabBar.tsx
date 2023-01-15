import { AccessibilityState, GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { ReactElement, memo, useEffect, useRef } from "react";
import * as Animatable from "react-native-animatable";
import { Colors } from "../constants/Colors";

type MyTabBarProps = {
  activeIcon: ReactElement;
  inActiveIcon: ReactElement;
  label: string;
  onPress: (event: GestureResponderEvent) => void;
  accessibilityState: AccessibilityState;
};

const MyTabBar = memo(({ activeIcon, onPress, accessibilityState, label, inActiveIcon }: MyTabBarProps) => {
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const textViewRef = useRef<any | null>(null);
  useEffect(() => {
    if (focused) {
      viewRef?.current?.animate({ 0: { scale: 0 }, 1: { scale: 1 } });
      textViewRef?.current?.animate({ 0: { scale: 0 }, 1: { scale: 1 } });
    } else {
      viewRef.current?.animate({ 0: { scale: 1 }, 1: { scale: 0 } });
      textViewRef.current?.animate({ 0: { scale: 1 }, 1: { scale: 0 } });
    }
  }, [focused]);
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress} style={styles.container}>
      <View>
        <Animatable.View ref={viewRef} style={[StyleSheet.absoluteFillObject, styles.any]} />
        <View style={styles.btn}>
          {focused ? activeIcon : inActiveIcon}
          <Animatable.View ref={textViewRef}>{focused && <Text style={styles.label}>{label}</Text>}</Animatable.View>
        </View>
      </View>
    </TouchableOpacity>
  );
});

MyTabBar.displayName = "MyTabBar";

const styles = StyleSheet.create({
  container: {
    alignItems    : "center",
    justifyContent: "center",
    flex          : 1,
  },
  btn: {
    flexDirection  : "row",
    alignItems     : "center",
    padding        : 8,
    borderRadius   : 16,
    zIndex         : 2,
    paddingVertical: 10,
  },
  label: {
    color            : Colors.primary,
    paddingHorizontal: 8,
    fontFamily       : "Mon700",
    fontSize         : 14,
    lineHeight       : 20,
    textAlign        : "center",
  },
  any: {
    backgroundColor: Colors.profileBg,
    borderRadius   : 40,
  },
});

export default MyTabBar;
