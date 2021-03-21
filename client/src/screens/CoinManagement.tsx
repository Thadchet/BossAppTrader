import React, { useLayoutEffect, useEffect } from "react";
import { StyleSheet, Alert, ScrollView } from "react-native";
import { View } from "../components/Themed";
import { AntDesign } from "@expo/vector-icons";
import { CoinCardManagement, CoinCardEdit } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { deleteCoin } from "../actions/crypto.actions";
import { updateIsScreenChange } from "../actions/spinner.action";
import { Colors } from "../constants/Colors";
import { RootState } from "../reducers";
import Spinner from "react-native-loading-spinner-overlay";

export default function CoinManagement({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const dispatch = useDispatch();
  const { isChangeScreen, isShowSpinner } = useSelector(
    (state: RootState) => state.spinner
  );

  useEffect(() => {
    console.log(`isChangeScreen ${isChangeScreen}`);
    if (isChangeScreen) {
      navigation.navigate("MyBalance");
      dispatch(updateIsScreenChange(false));
    }
  }, [isChangeScreen]);

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
                onPress: () => {
                  dispatch(deleteCoin({ id: route.params.coin.ID }));
                },
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
        <Spinner
          visible={isShowSpinner}
          textContent={"Loading..."}
          textStyle={styles.spinnerTextStyle}
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
    justifyContent: "center",
    backgroundColor: Colors.BACKGROUND_COLOR,
  },

  iconHeaderRight: {
    marginRight: 15,
  },
  spinnerTextStyle: {
    color: "#FFF",
  },
});
