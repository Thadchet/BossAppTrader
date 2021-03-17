import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Colors } from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import MyBalancesScreen from "../screens/MyBalancesScreen";
import AddCoinsScreen from "../screens/AddCoinsScreen";
import CoinManagement from "../screens/CoinManagement";

const ByBalancesTab = createStackNavigator();

export default function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <ByBalancesTab.Navigator>
      <ByBalancesTab.Screen
        name="ByBalance"
        component={MyBalancesScreen}
        options={{
          headerTitle: "Balance",
          headerStyle: {
            backgroundColor: Colors.BACKGROUND_COLOR,
            shadowOpacity: 0, // remove shadow on iOS
          },
        }}
      />
      <ByBalancesTab.Screen
        name="AddCoins"
        component={AddCoinsScreen}
        options={{
          headerTitle: "AddCoin",
          headerStyle: {
            backgroundColor: Colors.BACKGROUND_COLOR,
            shadowOpacity: 0, // remove shadow on iOS
          },
        }}
      />
      <ByBalancesTab.Screen
        name="Coin"
        component={CoinManagement}
        options={{
          headerTitle: "Coin",
          headerStyle: {
            backgroundColor: Colors.BACKGROUND_COLOR,
            shadowOpacity: 0, // remove shadow on iOS
          },
        }}
      />
    </ByBalancesTab.Navigator>
  );
}
