/* eslint-disable react/react-in-jsx-scope */
import { Provider } from "react-redux";
import { persistor, store } from "./src/store";
import { PersistGate } from "redux-persist/integration/react";
import { SWRConfig } from "swr";
import { AppState, AppStateStatus } from "react-native";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import NavigationContainer from "./src/navigation/NavigationContainer";
import useCachedResources from "./src/hooks/useCachedResources";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { RootSiblingParent } from "react-native-root-siblings";


export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <SWRConfig
            value={{
              provider: () => new Map(),
              initFocus(callback) {
                let appState = AppState.currentState;

                const handleAppStateChange = (nextAppState: AppStateStatus) => {
                  if (appState.match(/inactive|background/) && nextAppState === "active") {
                    callback();
                  }
                  appState = nextAppState;
                };

                const subscription = AppState.addEventListener("change", handleAppStateChange);

                return () => {
                  subscription.remove();
                };
              },
              initReconnect(callback) {
                let isConnected = true;

                const handleNetStateChange = (nextNetState: NetInfoState) => {
                  if (!isConnected && nextNetState.isConnected) {
                    callback();
                  }

                  isConnected = !!nextNetState.isConnected;
                };

                const unsubscribe = NetInfo.addEventListener(handleNetStateChange);

                return () => {
                  unsubscribe();
                };
              },
            }}>
            <SafeAreaProvider>
              <GestureHandlerRootView style={styles.container}>
                <RootSiblingParent>
                  <BottomSheetModalProvider>
                    <NavigationContainer />
                  </BottomSheetModalProvider>
                </RootSiblingParent>
              </GestureHandlerRootView>
            </SafeAreaProvider>
          </SWRConfig>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 }
});