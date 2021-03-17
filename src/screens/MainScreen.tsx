import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, RefreshControl } from "react-native";
import { View } from "../components/Themed";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducers";
import { FlatListCrypto, ModalButtom } from "../components";
import {
  getTicker,
  getSymbols,
  getMyBalance,
  getMyCoin,
} from "../actions/crypto.actions";
import { values, findIndex, map } from "lodash";
import { Input, Button } from "react-native-elements";

const wait = (timeout: any) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function MainScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const [cryptoTickerArray, setCryptoTickerArray] = useState<any>([]);
  const [isMostVolumnEnable, setIsMostVolumnEnable] = useState<boolean>(false);
  const [isMostGainEnable, setIsMostGainEnable] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
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

    dispatch(getMyBalance());
    dispatch(getMyCoin());
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
      {cryptoTickerArray.length !== 0 && (
        <FlatListCrypto
          isMostVolumnEnable={isMostVolumnEnable}
          isMostGainEnable={isMostGainEnable}
          isModalVisible={isModalVisible}
          setModalVisible={setIsModalVisible}
          cryptoListTicker={cryptoTickerArray}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
      <ModalButtom
        isModalVisible={isModalVisible}
        setIsMostGainEnable={setIsMostGainEnable}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1F1F1",
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
