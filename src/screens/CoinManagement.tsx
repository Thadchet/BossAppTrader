import React, { useLayoutEffect } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ScrollView,
} from "react-native";
import { Button } from "react-native-elements";
import { View } from "../components/Themed";
import { AntDesign } from "@expo/vector-icons";
import { CoinCardManagement, CoinCardEdit } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { deleteCoin } from "../actions/crypto.actions";

export default function CoinManagement({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <AntDesign
          style={styles.iconHeaderRight}
          name="delete"
          size={24}
          color="black"
          onPress={() => {
            Alert.alert("Delete", "Are you sure to delete this coin ?", [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
              },
              {
                text: "OK",
                onPress: () =>
                  dispatch(deleteCoin({ id: route.params.coin.ID })),
              },
            ]);
          }}
        />
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <ScrollView>
        <Button
          title="Add Coin"
          onPress={() => {
            console.log(route.params);
          }}
        />
        <CoinCardManagement
          currentPrice={route.params.currentPrice}
          nameCoin={route.params.coin.NameCoin}
        />
        <CoinCardEdit
          ID={route.params.coin.ID}
          buyPrice={route.params.coin.Price}
          buyAmount={route.params.coin.Amount}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#E6DEC6",
  },

  iconHeaderRight: {
    marginRight: 15,
  },
});