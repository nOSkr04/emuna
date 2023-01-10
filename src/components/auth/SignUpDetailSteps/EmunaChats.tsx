import { Dimensions, StyleSheet, Text,View } from "react-native";
import React, { memo } from "react";
import Logo from "../../../../assets/svg/logo.svg";
import { Colors } from "../../../constants/Colors";
const { width } = Dimensions.get("window");

type Props = {
  chat1: string,
  chat2? : string
}

const EmunaChats = memo(({ chat1, chat2 } : Props) => {
  return (
    <View>
      <View style={styles.emunaLogoContainer}>
        <Logo color={Colors.primary} height={24} width={24} />
      </View>
      <View style={styles.emunaContainer}>
        {chat1 && 
          <Text style={styles.emunaChats}>{chat1}</Text>
        }
        {chat2 && 
          <Text style={styles.emunaChats1}>
            {chat2}
          </Text>
        }
      </View>
    </View>
  );
});

EmunaChats.displayName = "EmunaChats";

const styles = StyleSheet.create({
    emunaLogoContainer: {
        width         : 48,
        height        : 48,
        borderRadius  : 100,
        borderWidth   : 1,
        borderColor   : Colors.strokeDark,
        justifyContent: "center",
        alignItems    : "center",
        marginLeft    : 16,
        marginBottom  : 16,
      },
      emunaContainer: {
        backgroundColor: Colors.chatBotBg,
        marginLeft     : 16,
        width          : width * 0.7,
        padding        : 16,
        borderRadius   : 16,
       
      },
      emunaChats: {
        fontSize     : 14,
        fontFamily   : "Mon500",
        opacity      : 0.72,
        color        : Colors.text,
        lineHeight   : 24,
        letterSpacing: 0.5
      },
      emunaChats1: {
        fontSize     : 14,
        fontFamily   : "Mon400",
        marginTop    : 16,
        opacity      : 0.72,
        color        : Colors.text,
        lineHeight   : 24,
        letterSpacing: 0.5
      },
});

export default EmunaChats;