import { StyleSheet, Text, View } from "react-native";
import React, { memo, useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import { BarCodeScanner } from "expo-barcode-scanner";
import Button from "../../components/Button";
import Layout from "../../constants/Layout";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
const SearchBarcodeScreen = memo(() => {
  const [hasPermission, setHasPermission] = useState<boolean | string | null>(null);
  const [scanned, setScanned] = useState(false);
  const [data, setData] = useState([]);
  // const [size,setSize] = useState("")

  const navigation = useNavigation();
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);
  const handleBarCodeScanned = async ({ data }: { data: string }) => {
    axios
      .get(`http://24.199.126.56/api/v1/drugs?barcode=${data}`)
      .then(res => {
        setData(res.data.data);
        setScanned(true);
      })
      .catch(err => {
        setScanned(false);
        console.log(err);
      });
  };
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
      {scanned ? (
        <>
          {data[0] && (
            <>
              <Text style={styles.scannedTitle}>{data[0].name}</Text>
              <Text style={styles.scannedTitle}>{data[0].size}</Text>
            </>
          )}
        </>
      ) : (
        <Text style={styles.title}>Та эмийнхээ баркодыг уншуулна уу?</Text>
      )}
   
      <Button
        disabled={data[0] ? false : true}
        onPress={() => navigation.navigate("DrugDetailScreen", { id: data[0].id })}
        secondary={data[0] ? false : true}
        style={styles.button}
        title="Үргэлжлүүлэх"
      />
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
    marginHorizontal: 24,
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
