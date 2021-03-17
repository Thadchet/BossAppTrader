import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import MainTabNavigator from "./MainTabNavigator";
import ByBalancesTabNavigator from "./MyBalancesTabNavigator";
import SummaryTabNavigator from "./SummaryTabNavigator";
import { Fontisto, Ionicons, Entypo } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Price"
        component={MainTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Fontisto name="money-symbol" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="MyBalance"
        component={ByBalancesTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="wallet-outline" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Summary"
        component={SummaryTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="bar-graph" size={24} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}
