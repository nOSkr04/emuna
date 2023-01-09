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
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

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
              <BottomSheetModalProvider>
                <NavigationContainer />
              </BottomSheetModalProvider>
            </SafeAreaProvider>
          </SWRConfig>
        </PersistGate>
      </Provider>
    );
  }
}
