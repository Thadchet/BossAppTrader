import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Colors } from "../constants/Colors";
import MainScreen from "../screens/MainScreen";

const MainTab = createStackNavigator();

export default function MainTabNavigator() {

  return (
    <MainTab.Navigator>
      <MainTab.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          headerTitle: "Main",
          headerStyle: {
            backgroundColor: Colors.BACKGROUND_COLOR,
            shadowOpacity: 0, // remove shadow on iOS
          },
        }}
      />
    </MainTab.Navigator>
  );
}
