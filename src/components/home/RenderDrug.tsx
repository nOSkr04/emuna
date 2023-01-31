import { StyleSheet,  View } from "react-native";
import React, { memo } from "react";
import { Colors } from "../../constants/Colors";
import Dot from "../../../assets/svg/dot.svg";
import CheckIcon from "../../../assets/svg/Check.svg";
import XIcon from "../../../assets/svg/X.svg";
import MedicalIcon from "../MedicalIcon";
import { IMedicine } from "../../interfaces/IMedicine";
import { Mon500, Mon700 } from "../StyledText";

const RenderDrug = memo(({  when,quantity, status, medicine, color, icon }: IMedicine) => {
  return (
    <View style={styles.container}>
      <View style={[styles.iconContainer, { backgroundColor: color }]}>
        <MedicalIcon height={28} icon={icon} width={28} />
      </View>
      <View style={styles.drugDetailContainer}>
        <Mon700 style={styles.drugName}>{medicine}</Mon700>
        <View style={styles.bottomContainer}>
          <Mon500 style={styles.when}>{when} </Mon500>
          {/* <Dot color={Colors.helperText} /> */}
          {/* <Mon500 style={styles.when}> {quantity}ш</Mon500> */}
        </View>
        {status === "drinked" && <View style={styles.infoContainer}>
          <View style={[styles.infoIcon, styles.checkedInfoIcon]}>
            <CheckIcon />
          </View>
          <Mon700 style={[styles.infoText, styles.checkedInfoText]}> Уусан</Mon700>
        </View>}
        {status === "skipped" && <View style={styles.infoContainer}>
          <View style={[styles.infoIcon, styles.skippedInfoBg]}>
            <XIcon />
          </View>
          <Mon700 style={[styles.infoText, styles.skippedInfoText]}> Алгассан</Mon700>
        </View>}
    
      </View>
    </View>
  );
});

RenderDrug.displayName = "RenderDrug";

const styles = StyleSheet.create({
  container: {
    flex         : 1,
    padding      : 16,
    alignItems   : "center",
    flexDirection: "row",
    flexWrap     : "wrap",
  },
  iconContainer: {
    height        : 48,
    width         : 48,
    borderRadius  : 100,
    alignItems    : "center",
    justifyContent: "center",
  },
  drugName: {
    fontSize  : 15,
    color     : Colors.text,
    lineHeight: 24
  },
  when: {
    fontSize     : 12,
    color        : Colors.text,
    opacity      : 0.64,
    lineHeight   : 16,
    letterSpacing: 0.25
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems   : "center",
  },
  drugDetailContainer: {
    marginLeft: 16,
  },
  infoContainer: {
    flexDirection: "row",
    marginTop    : 4,
    alignItems   : "center",
  },
  infoIcon: {
    width          : 20,
    height         : 20,
    borderRadius   : 26,
    alignItems     : "center",
    justifyContent : "center",
    backgroundColor: Colors.darkGrey,
  },
  infoText: {
    fontSize     : 12,
    color        : Colors.darkGrey,
    letterSpacing: 0.1,
    lineHeight   : 16
  },
  checkedInfoIcon: {
    backgroundColor: Colors.primary,
  },
  checkedInfoText: {
    color: Colors.primary
  },
  skippedInfoText: {
    color: Colors.darkGrey,
  },
  skippedInfoBg: {
    backgroundColor: Colors.darkGrey
  }
});

export default RenderDrug;
