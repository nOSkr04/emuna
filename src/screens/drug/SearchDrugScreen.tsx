import {  StyleSheet, View } from "react-native";
import React, { memo } from "react";
import { FlashList } from "@shopify/flash-list";
import SearchDrug from "../../components/drug/SearchDrug";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SearchField from "../../components/SearchField";
import { Colors } from "../../constants/Colors";
// import EmptyResultDrug from "../../components/drug/EmptyResultDrug";
const SearchDrugScreen = memo(() => {
  const insents = useSafeAreaInsets();
  const data = [
    { id: 1, name: "Jargal" },
    { id: 2, name: "Jargal" },
    { id: 3, name: "Jargal" },
    { id: 4, name: "Jargal" },
    { id: 5, name: "Jargal" },
  ];
  return (
    <View style={styles.container}>
      <View style={{ paddingTop: insents.top }}>
        <SearchField />
      </View>
      <FlashList
      data={data}
      estimatedItemSize={66}
      renderItem={({ item }) => {
        return <SearchDrug name={item.name} />;
      }}
      />
      {/* <EmptyResultDrug/> */}
    </View>
  );
});

SearchDrugScreen.displayName = "SearchDrugScreen";

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    backgroundColor: Colors.transparent,
  },
  
});

export default SearchDrugScreen;
