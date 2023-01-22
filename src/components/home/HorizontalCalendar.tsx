import { FlatList, Pressable, StyleSheet, View } from "react-native";
import React, { Dispatch, SetStateAction, memo, useEffect, useMemo, useRef, useState } from "react";
import { Colors } from "../../constants/Colors";
import { addDays, format, isToday, subDays } from "date-fns";
import { mn } from "date-fns/locale";
import { Mon400, Mon500, Mon700 } from "../StyledText";

interface Props {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

type PureComponentProps = {
  isActive: boolean;
  item: Date;
  setSelectedDate: (date: Date) => void;
  setIndex: Dispatch<SetStateAction<number>>;
  fIndex: number;
  dayString: string;
  dayNumber: string;
};

const MyPureComponent = memo(({ isActive, item, setSelectedDate, setIndex, fIndex, dayString, dayNumber }: PureComponentProps) => {
  const onPressDate = (item: Date, fIndex: number) => {
    setSelectedDate(item);
    setIndex(fIndex);
  };
  return (
    <Pressable onPress={() => onPressDate(item, fIndex)} style={styles.contentContainer}>
      <Mon500 style={styles.dayStyle}>{dayString.slice(0, 2)}</Mon500>
      <View style={isActive ? styles.activeBg : styles.unActiveBg}>
        <Mon400 style={isActive ? styles.activeDateStr : styles.unActiveDateStr}>{dayNumber}</Mon400>
      </View>
    </Pressable>
  );
});

MyPureComponent.displayName = "MyPureComponent";

const getDayString = (date: Date): string => {
  return format(date, "EEE", { locale: mn });
};

const isSameDay = (date1: Date, date2: Date): boolean => {
  return format(date1, "MM d") === format(date2, "MM d");
};

const isTodays = (date: Date): boolean => {
  return isToday(date);
};

const generateHorizontalCalendarDates = (days: number): Date[] => {
  const today = new Date();
  const firstDay = subDays(today, days);
  return new Array(days * 2).fill(undefined).map((entry, index) => {
    return addDays(firstDay, index);
  });
};

const HorizontalCalendar = memo(({ selectedDate, setSelectedDate }: Props) => {
  const ref = useRef<FlatList>(null);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    ref.current?.scrollToIndex({
      index      ,
      animated    : true,
      viewPosition: 0,
      viewOffset  : 10,
    });
  }, [index]);
  const dates: Date[] = useMemo(() => {
    return generateHorizontalCalendarDates(30);
  }, []);
  useEffect(() => {
    const middleIndex = Math.floor(dates.length / 2);
    setIndex(middleIndex);
  }, [dates]);
  const renderItem = ({ item, index: fIndex }: { item: Date; index: number }) => {
    const dayString = getDayString(item);
    const dayNumber = format(item, "d");
    const isActive = isSameDay(selectedDate, item);
    return (
      <MyPureComponent
        dayNumber={dayNumber}
        dayString={dayString}
        fIndex={fIndex}
        isActive={isActive}
        item={item}
        setIndex={setIndex}
        setSelectedDate={setSelectedDate}
      />
    );
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIndex(14);
  //   }, 5000);

  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <View style={styles.container}>
      <View style={styles.headerText}>
        <Mon700 style={styles.text}>{isTodays(selectedDate) ? "Өнөөдөр" : getDayString(selectedDate)}</Mon700>
        <Mon700 style={styles.text}>{format(selectedDate, ", MM-р сарын d")}</Mon700>
      </View>
      <FlatList
        contentContainerStyle={styles.flatlistContainer}
        data={dates}
        getItemLayout={(data,index) => ({
          length: 61,
          offset: 42 * index,
          index,
        })}
        horizontal
        initialScrollIndex={index}
        keyExtractor={(item) => item.toString()}
        ref={ref}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollContainer}
      />
    </View>
  );
});

HorizontalCalendar.displayName = "HorizontalCalendar";

const styles = StyleSheet.create({
  dayStyle: {
    color        : Colors.white,
    fontSize     : 12,
    lineHeight   : 16,
    letterSpacing: 0.25,
    marginBottom : 2,
    marginTop    : 8
  },
  container: {
    backgroundColor        : Colors.primary,
    paddingBottom          : 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius : 20,
  },
  headerText: {
    flexDirection   : "row",
    marginHorizontal: 14,
    paddingBottom   : 10,
  },
  text: {
    fontSize     : 16,
    color        : Colors.white,
    lineHeight   : 28,
    letterSpacing: 0.15
  },
  contentContainer: {
    alignItems: "center",
  },
  flatlistContainer: {
    paddingLeft: 10,
  },
  scrollContainer: {
    flexGrow: 0,
  },
  activeBg: {
    height         : 42,
    width          : 42,
    justifyContent : "center",
    alignItems     : "center",
    borderRadius   : 200,
    backgroundColor: Colors.white,
  },
  unActiveBg: {
    height        : 42,
    width         : 42,
    justifyContent: "center",
    alignItems    : "center",
    borderRadius  : 100,
  },
  activeDateStr: {
    color: Colors.black,
  },
  unActiveDateStr: {
    color: Colors.white,
  },
});

export default HorizontalCalendar;
