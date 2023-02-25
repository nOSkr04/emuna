import { StyleSheet,  } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

const WebViewScreen = (link: any) => {
  const INJECTED_JAVASCRIPT = `
    const elements = document.getElementsByClassName('dxsplPane_SoftOrange');
    const elements1 = document.getElementsByClassName('dxisControl_SoftOrange'); 
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = "none";
    } 
    `;

  return (
    <WebView
      injectedJavaScript={INJECTED_JAVASCRIPT}
      // javaScriptEnabled={false}
     source={{ uri: link }}
     style={styles.container}

    />
  );
};

export default WebViewScreen;

const styles = StyleSheet.create({
  container: {
    flex     : 1,
    marginTop: 50
  }
});