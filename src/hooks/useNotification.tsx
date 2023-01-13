import {  Linking, Platform } from "react-native";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
export const useNotification = () => {
  const registerForPushNotificationsAsync = async () => {
    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        // Alert.alert("Мэдэгдэл хүлээн авах эрхийг нээнэ үү");
        return;
      }
      const token = (await Notifications.getExpoPushTokenAsync()).data;
    } 

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name            : "default",
        importance      : Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor      : "#FF231F7C",
      });
    }
  };
  const handleNotification = (notification: Notifications.Notification) => {
  };
  const handleNotificationResponse = (response: Notifications.NotificationResponse) => {
    const data: { url?: string } = response.notification.request.content.data;
    if (data?.url) Linking.openURL(data.url);
  };

  return { registerForPushNotificationsAsync, handleNotificationResponse,handleNotification };
};
