import { StyleSheet, View } from "react-native";
import React, { memo, useState } from "react";
import { FlashList } from "@shopify/flash-list";
import SearchDrug from "../../components/drug/SearchDrug";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SearchField from "../../components/SearchField";
import { Colors } from "../../constants/Colors";
import { useSWRToken } from "../../hooks/useSWRToken";
import { DrugsApi } from "../../apis";
import DrugLoader from "../../components/loader/DrugLoader";
import EmptyResultDrug from "../../components/drug/EmptyResultDrug";
const SearchDrugScreen = memo(() => {
  const insents = useSafeAreaInsets();
  const [searchTerm, setSearchTerm] = useState("");
  const { data } = useSWRToken("/drugs?limit=10000", () => {
    return DrugsApi.getDrugs();
  },);
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (text: string) => {
    setSearchTerm(text);
    setFilteredData(data.filter((item: any) => item.name.toLowerCase().includes(text.toLowerCase())));
  };
  return (
    <View style={styles.container}>
      <View style={{ paddingTop: insents.top }}>
        <SearchField onChange={handleSearch} value={searchTerm} />
      </View>

      <FlashList
        ListEmptyComponent={
          !data ? (
            <DrugLoader />
          ) : (
            <EmptyResultDrug />
        )
        }
        data={filteredData ? filteredData : data}
        estimatedItemSize={66}
        renderItem={({ item }) => {
          return <SearchDrug data={item} />;
        }}
      />
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
