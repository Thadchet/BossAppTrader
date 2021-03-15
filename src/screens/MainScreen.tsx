import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, RefreshControl } from "react-native";
import { View } from "../components/Themed";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducers";
import { FlatListCrypto, SwitchSort } from "../components";
import { getTicker, getSymbols, getMyBalance } from "../actions/crypto.actions";
import { values, findIndex, map } from "lodash";

const wait = (timeout: any) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function MainScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const [cryptoTickerArray, setCryptoTickerArray] = useState<any>([]);
  const [isMostVolumnEnable, setIsMostVolumnEnable] = useState<boolean>(true);
  const [isMostGainEnable, setIsMostGainEnable] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { cryptoListTicker, symbols } = useSelector(
    (state: RootState) => state.crypto
  );

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(getTicker());
    wait(1500).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    dispatch(getSymbols());
    dispatch(getTicker());
  }, []);

  useEffect(() => {
    setCryptoTickerArray(objToArray(cryptoListTicker, symbols));
  }, [cryptoListTicker]);

  const objToArray = (cryptoListTicker: [any], symbols: [any]) => {
    const temp = values(cryptoListTicker);
    const res = map(temp, function (value) {
      const foundIndex = findIndex(symbols, function (o: any) {
        return o.id == value.id;
      });
      if (foundIndex != -1) {
        value.nameCoin = symbols[foundIndex].symbol;
      } else {
        value.nameCoin = "Error!!";
      }
      return value;
    });

    return res;
  };
  return (
    <View style={styles.container}>
      <SwitchSort
        isMostVolumnEnable={isMostVolumnEnable}
        isMostGainEnable={isMostGainEnable}
        setIsMostVolumnEnable={setIsMostVolumnEnable}
        setIsMostGainEnable={setIsMostGainEnable}
      />
      <FlatListCrypto
        isMostVolumnEnable={isMostVolumnEnable}
        isMostGainEnable={isMostGainEnable}
        cryptoListTicker={cryptoTickerArray}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E6DEC6",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
