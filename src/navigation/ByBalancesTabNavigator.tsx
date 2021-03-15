import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ByBalancesScreen from "../screens/ByBalancesScreen";
import AddCoinsScreen from "../screens/AddCoinsScreen";
import CoinManagement from "../screens/CoinManagement";

const ByBalancesTab = createStackNavigator();

export default function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <ByBalancesTab.Navigator>
      <ByBalancesTab.Screen
        name="ByBalance"
        component={ByBalancesScreen}
        options={{ headerTitle: "Balance" }}
      />
      <ByBalancesTab.Screen
        name="AddCoins"
        component={AddCoinsScreen}
        options={{ headerTitle: "AddCoin" }}
      />
      <ByBalancesTab.Screen
        name="Coin"
        component={CoinManagement}
        options={{ headerTitle: "Coin" }}
      />
    </ByBalancesTab.Navigator>
  );
}
