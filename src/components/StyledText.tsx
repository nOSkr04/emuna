/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText,  StyleSheet } from "react-native";
import React, { memo } from "react";

export type TextProps =  DefaultText["props"];

export const Mon700 = memo((props: TextProps) => {
  const { style, ...otherProps } = props;
  return <DefaultText {...otherProps} style={[style, styles.mon700]} />;
}); 

export const Mon600 = memo((props: TextProps) => {
  const { style, ...otherProps } = props;
  return <DefaultText {...otherProps} style={[style, styles.mon600]} />;
});

export const Mon500 = memo((props: TextProps) => {
  const { style, ...otherProps } = props;
  return <DefaultText {...otherProps} style={[style, styles.mon500]} />;
}); 

export const Mon400 = memo((props: TextProps) => {
  const { style, ...otherProps } = props;
  return <DefaultText {...otherProps} style={[style, styles.mon400]} />;
}); 

Mon700.displayName ="Mon700";
Mon600.displayName ="Mon600";
Mon500.displayName ="Mon500";
Mon400.displayName ="Mon400";

export const NuniBold = memo((props: TextProps) => {
  const { style, ...otherProps } = props;
  return <DefaultText {...otherProps} style={[style, styles.nuniBold]} />;
});

NuniBold.displayName = "NuniBold";

export function NuniRegular(props: TextProps) {
  const { style, ...otherProps } = props;
  return <DefaultText {...otherProps} style={[style, styles.nuniRegular]} />;
}

const styles = StyleSheet.create({
  mon700: {
    fontFamily: "Mon700",
  },
  mon600: {
    fontFamily: "Mon600"
  },
  mon500: {
    fontFamily: "Mon500",
  },
  mon400: {
    fontFamily: "Mon400"
  },
  nuniBold: {
    fontFamily: "Montserrat"
  },
  nuniRegular: {
    fontFamily: "a"
  }
});
