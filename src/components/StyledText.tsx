/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText,  StyleSheet } from "react-native";
import React, { memo } from "react";
import { Colors } from "../constants/Colors";

export type TextProps =  DefaultText["props"];

export const Mon700 = memo((props: TextProps) => {
  const { style, ...otherProps } = props;
  return <DefaultText {...otherProps} style={[style, styles.mon700]} />;
}); 

export const Mon500 = memo((props: TextProps) => {
  const { style, ...otherProps } = props;
  return <DefaultText {...otherProps} style={[style, styles.mon500]} />;
}); 

Mon700.displayName ="Mon700";
Mon500.displayName ="Mon500";
export const NuniBold = memo((props: TextProps) => {
  const { style, ...otherProps } = props;
  return <DefaultText {...otherProps} style={[style, styles.nuniBold]} />;
});

NuniBold.displayName = "NuniBold";

export function NuniRegular(props: TextProps) {
  const { style, ...otherProps } = props;
  return <DefaultText {...otherProps} style={[style, styles.nuniRegular]} />;
}



export function MonBold(props: TextProps) {
  const { style, ...otherProps } = props;
  return <DefaultText {...otherProps} style={[style, styles.monBold]} />;
}







export function MonThin(props: TextProps) {
  const { style, ...otherProps } = props;
  return <DefaultText {...otherProps} style={[style, styles.monThin]} />;
}

const styles = StyleSheet.create({
  mon700: {
    fontFamily: "Mon700",
    color     : Colors.text,
  },
  monBold: {
    fontFamily: "Montserrat-extrabold"
  },
  mon500: {
    fontFamily: "Mon500",
  },
  monThin: {
    fontFamily: "Montserrat-extrabold"
  },
  nuniBold: {
    fontFamily: "Montserrat"
  },
  nuniRegular: {
    fontFamily: "a"
  }
});
