import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import MainScreen from "../screens/MainScreen";

const MainTab = createStackNavigator();

export default function MainTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <MainTab.Navigator>
            <MainTab.Screen
                name="MainScreen"
                component={MainScreen}
                options={{ headerTitle: "Main" }}
            />
        </MainTab.Navigator>
    );
}
