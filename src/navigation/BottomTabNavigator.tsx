import React from "react";
import { BottomTabBarButtonProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home/HomeScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import MyTabBar from "../components/MyTabBar";
import { homeScreenOption, profileScreenOptions } from "../components/headers";
import ActiveHouseIcon from "../../assets/svg/House.svg";
import InactiveHouseIcon from "../../assets/svg/house1.svg";
import ActiveProfileIcon from "../../assets/svg/activeUser.svg";
import InActiveProfileIcon from "../../assets/svg/inActiveUser.svg";
const BottomTabNavigator = () => {
  const TabArr = [
    {
      route       : "Home",
      label       : "Нүүр",
      activeIcon  : <ActiveHouseIcon />,
      inActiveIcon: <InactiveHouseIcon />,
      component   : HomeScreen,
      header      : homeScreenOption,
    },
    {
      route       : "Profile",
      label       : "Профайл",
      activeIcon  : <ActiveProfileIcon />,
      inActiveIcon: <InActiveProfileIcon />,
      component   : ProfileScreen,
      header      : profileScreenOptions,
    },
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
                  activeIcon={item.activeIcon}
                  inActiveIcon={item.inActiveIcon}
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
