import {  StyleSheet, View } from "react-native";
import React, { memo, useState } from "react";
import { FlashList } from "@shopify/flash-list";
import SearchDrug from "../../components/drug/SearchDrug";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SearchField from "../../components/SearchField";
import { Colors } from "../../constants/Colors";
import data from "../../../assets/datay23h.json";
// import EmptyResultDrug from "../../components/drug/EmptyResultDrug";
const SearchDrugScreen = memo(() => {
  const insents = useSafeAreaInsets();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (text: string) => {
    setSearchTerm(text);
    setFilteredData(
      data.filter((item) => item.name.toLowerCase().includes(text.toLowerCase()))
    );
  };
  return (
    <View style={styles.container}>
      <View style={{ paddingTop: insents.top }}>
        <SearchField onChange={handleSearch} value={searchTerm} />
      </View>
      <FlashList
      data={filteredData}
      estimatedItemSize={66}
      renderItem={({ item }) => {
        return <SearchDrug data={item} />;
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
    backgroundColor: Colors.white,
  },
  
});

export default SearchDrugScreen;
