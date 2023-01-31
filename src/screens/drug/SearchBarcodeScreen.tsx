import { StyleSheet, Text, View } from "react-native";
import React, { memo, useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import { BarCodeScanner } from "expo-barcode-scanner";
import Button from "../../components/Button";
import Layout from "../../constants/Layout";
import { useNavigation } from "@react-navigation/native";
import datas from "../../../assets/datay23h.json";
const SearchBarcodeScreen = memo( () => {
  const [hasPermission, setHasPermission] = useState<boolean | string | null>(null);
  const [scanned, setScanned] = useState(false);
  const [barcode, setBarcode] = useState("");
  const [size,setSize] = useState<string|null>("");
  // const [size,setSize] = useState("")
  const [filteredData, setFilteredData] = useState(datas);
 
  const navigation = useNavigation();
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);
  const handleBarCodeScanned = async({  data }: {data:string}) => {
      setFilteredData(
        datas.filter((item) => item.barcode?.toLowerCase().includes(data.toLowerCase()))
      );
          setScanned(true);
          setBarcode(filteredData[0].name);
          setSize(filteredData[0].size);
  };
console.log(filteredData.length);
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <View style={styles.barcodeContainer}>
        <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} style={styles.barcode} />
      </View>
      {scanned ? <><Text style={styles.scannedTitle}>{barcode}</Text><Text style={styles.scannedTitle}>{size && size}</Text></> : <Text style={styles.title}>Та эмийнхээ баркодыг уншуулна уу?</Text>}
      <Button disabled={scanned ? false: true} onPress={() => navigation.navigate("DrugDetailScreen", { data: filteredData[0] })} secondary={scanned ? false : true} style={styles.button} title="Үргэлжлүүлэх"  />
    </View>
  );
});

SearchBarcodeScreen.displayName = "SearchBarcodeScreen";

export default SearchBarcodeScreen;

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    backgroundColor: Colors.softBg,
  },
  barcodeContainer: {
    marginHorizontal: 16,
    height          : Layout.window.height * 0.75,
  },
  barcode: {
    width : "100%",
    height: "100%",
  },
  title: {
    fontSize     : 15,
    fontFamily   : "Mon700",
    lineHeight   : 24,
    letterSpacing: 0.15,
    color        : Colors.black,
    textAlign    : "center",
    marginTop    : 12,
  },
  button: {
    marginTop       : 12,
    marginHorizontal: 24
  },
  scannedTitle: {
    fontSize     : 17,
    fontFamily   : "Mon400",
    lineHeight   : 24,
    letterSpacing: 0.15,
    textAlign    : "center",
    color        : Colors.primary,
  },
});
