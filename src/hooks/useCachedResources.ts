import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try { 
        SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          "Nunito800": require("../../assets/fonts/Nunito800.ttf"),
          "Mon700"   : require("../../assets/fonts/Montserrat-Bold.ttf"),
          "Mon600"   : require("../../assets/fonts/Montserrat-SemiBold.ttf"),
          "Mon500"   : require("../../assets/fonts/Montserrat-Medium.ttf"),
          "Mon400"   : require("../../assets/fonts/Montserrat-Regular.ttf"),
          "Nun400"   : require("../../assets/fonts/Nunito-Regular.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setIsLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
