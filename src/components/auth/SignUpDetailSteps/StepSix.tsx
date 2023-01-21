import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo, useMemo } from "react";
import EmunaChats from "./EmunaChats";
import { Colors } from "../../../constants/Colors";

type Props = {
  stepSeven: (id: number) => void;
  selectDone: boolean;
  selected: any[];
  select: (chooseId: string) => void;
  unselect: (chooseId: string) => void;
  _scrollToEnd:any
};

const StepSix = memo(({ stepSeven, selectDone, selected, select, unselect,_scrollToEnd }: Props) => {
  const info = useMemo(() => {
    return [
      { id: 1, name: "Харшилтай эсэх" },
      { id: 2, name: "Архаг хууч өвчин" },
      { id: 3, name: "Тамхи татдаг" },
      { id: 4, name: "Ямар нэг эмчилгээн дор байгаа эсэх" },
      { id: 5, name: "Цус багадалттай эсэх" },
      { id: 6, name: "Даралтын өөрчилттэй эсэх" },
      { id: 7, name: "Аль нь ч биш" },
    ];
  }, []);

  return (
    <>
      <EmunaChats chat1="Сүүлийн хэдхэн чухал асуулт үлдлээ. Та доорх хариултуудаас өөрт тохирохыг сонгоно уу?" />
      {!selectDone ? (
        <>
          {info.map(e => {
            return (
              <TouchableOpacity
                key={e.id}
                onPress={() => {
                  if (selected.includes(e.name)) {
                    unselect(e.name);
                  } else {
                    select(e.name);
                  }
                }}
                style={selected.includes(e.name) ? styles.activeUserContainer : styles.userContainer}>
                <Text style={selected.includes(e.name) ? styles.activeUserMessage : styles.userMessage}>{e.name} </Text>
              </TouchableOpacity>
            );
          })}
          <TouchableOpacity
            disabled={selected.length > 0 ? false : true}
            onPress={() => {
              stepSeven(7);
              _scrollToEnd();
            }}>
            <Text style={styles.sendButton}>Илгээх </Text>
          </TouchableOpacity>
        </>
      ) : (
        selected.map((e, index) => {
          return (
            <View key={index} style={styles.unUserContainer}>
              <Text style={styles.unUserMessage}>{e} </Text>
            </View>
          );
        })
      )}
    </>
  );
});

StepSix.displayName = "StepSix";

const styles = StyleSheet.create({
  userContainer: {
    marginRight   : 18,
    alignSelf     : "flex-end",
    borderWidth   : 1,
    borderColor   : Colors.primary,
    justifyContent: "center",
    alignItems    : "center",
    borderRadius  : 16,
    marginTop     : 8,
  },
  activeUserContainer: {
    marginRight    : 18,
    alignSelf      : "flex-end",
    borderWidth    : 1,
    borderColor    : Colors.primary,
    justifyContent : "center",
    alignItems     : "center",
    borderRadius   : 16,
    marginTop      : 8,
    backgroundColor: Colors.primary,
  },
  userMessage: {
    fontSize         : 14,
    fontFamily       : "Mon500",
    color            : Colors.newText,
    opacity          : 0.72,
    paddingVertical  : 8,
    paddingHorizontal: 16,
  },
  activeUserMessage: {
    fontSize         : 14,
    fontFamily       : "Mon500",
    color            : Colors.white,
    paddingVertical  : 8,
    paddingHorizontal: 16,
  },
  sendButton: {
    color         : Colors.primary,
    fontFamily    : "Mon500",
    marginVertical: 16,
    textAlign     : "right",
    marginRight   : 16,
    fontSize      : 14,
  },
  unUserContainer: {
    marginRight    : 18,
    alignSelf      : "flex-end",
    borderWidth    : 1,
    borderColor    : Colors.chatBotBg,
    justifyContent : "center",
    alignItems     : "center",
    borderRadius   : 16,
    marginTop      : 12,
    backgroundColor: Colors.chatBotBg,
    
  },
  unUserMessage: {
    fontSize         : 14,
    fontFamily       : "Mon500",
    color            : Colors.darkGrey,
    paddingVertical  : 8,
    paddingHorizontal: 16
  },
});

export default StepSix;
