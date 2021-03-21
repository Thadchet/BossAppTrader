import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import useColorScheme from "../hooks/useColorScheme";
import SummaryScreen from "../screens/SummaryScreen";

const SummaryTab = createStackNavigator();

export default function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <SummaryTab.Navigator>
      <SummaryTab.Screen
        name="Summary"
        component={SummaryScreen}
        options={{
          headerTitle: "Dashboard",
          headerStyle: {
            backgroundColor: "#F1F1F1",
            shadowOpacity: 0, // remove shadow on iOS
          },
        }}
      />
    </SummaryTab.Navigator>
  );
}
