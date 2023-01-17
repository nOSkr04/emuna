import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { Colors } from "../../constants/Colors";
import Dot from "../../../assets/svg/dot.svg";
import CheckIcon from "../../../assets/svg/Check.svg";
import MedicalIcon from "../MedicalIcon";
import { IMedicine } from "../../interfaces/IMedicine";




const RenderDrug = memo(({  when,quantity, status, medicine, color, icon }: IMedicine) => {
  return (
    <View style={styles.container}>
      <View style={[styles.iconContainer, { backgroundColor: color }]}>
        <MedicalIcon icon={icon} />
      </View>
      <View style={styles.drugDetailContainer}>
        <Text style={styles.drugName}>{medicine}</Text>
        <View style={styles.bottomContainer}>
          <Text style={styles.when}>{when} </Text>
          <Dot color={Colors.helperText} />
          <Text style={styles.when}> {quantity}ш</Text>
        </View>
        {status === "drinked" && <View style={styles.infoContainer}>
          <View style={[styles.infoIcon, styles.checkedInfoIcon]}>
            <CheckIcon />
          </View>
          <Text style={[styles.infoText, styles.checkedInfoText]}> Уусан</Text>
        </View>}
        {status === "skipped" && <View style={styles.infoContainer}>
          <View style={[styles.infoIcon, styles.checkedInfoIcon]}>
            <CheckIcon />
          </View>
          <Text style={[styles.infoText, styles.checkedInfoText]}> Уусан</Text>
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
    fontFamily: "Mon700",
    color     : Colors.text,
    lineHeight: 24
  },
  when: {
    fontSize     : 12,
    fontFamily   : "Mon500",
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
    fontFamily   : "Mon700",
    color        : Colors.darkGrey,
    letterSpacing: 0.1,
    lineHeight   : 16
  },
  checkedInfoIcon: {
    backgroundColor: Colors.primary,
  },
  checkedInfoText: {
    color: Colors.primary
  }
});

export default RenderDrug;
