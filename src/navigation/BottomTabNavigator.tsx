/* eslint-disable react/no-unstable-nested-components */
import React from "react";
import { BottomTabBarButtonProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home/HomeScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import MyTabBar from "../components/MyTabBar";
import { homeScreenOption, profileScreenOptions } from "../components/headers";

const BottomTabNavigator = () => {
  const TabArr = [
    { route: "Home", label: "Нүүр", activeIcon: "home", inActiveIcon: "code", component: HomeScreen, header: homeScreenOption },
    { route: "Profile", label: "Профайл", activeIcon: "user", inActiveIcon: "bank", component: ProfileScreen, header: profileScreenOptions },
  ];
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            component={item.component}
            key={index}
            name={item.route}
            options={{
              ...item.header,
              tabBarShowLabel: false,
              tabBarButton   : (props: BottomTabBarButtonProps) => (
                <MyTabBar
                  accessibilityState={props.accessibilityState}
                  activeIcon={`${item.activeIcon}`}
                  label={item.label}
                  onPress={props.onPress}
                />
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
