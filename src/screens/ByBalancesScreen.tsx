import React, {
  useState,
  useLayoutEffect,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { StyleSheet, ScrollView, RefreshControl } from "react-native";
import { View } from "../components/Themed";
import { MyBalance, CoinCard } from "../components";
import { Icon, Button } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducers";
import { getMyCoin, getMyBalance } from "../actions/crypto.actions";
import { cryptoService } from "../services";
const wait = (timeout: any) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function ByBalancesScrren({ navigation }: { navigation: any }) {
  const [myCryptoPrice, setMyCryptoPrice] = useState<Object>({});
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();
  const { myCoin, myBalance } = useSelector(
    (state: RootState) => state.crypto
  );
  const changeScreenToAddCoin = () => {
    navigation.navigate("AddCoins");
  };

  const fetchEachPrice = () => {
    let temp: any = {};
    myCoin.map((item: any) => {
      cryptoService
        .getTickerByNameDirect({ sym: item.NameCoin })
        .then((res) => {
          Object.assign(temp, res);
        });
    });
    setMyCryptoPrice(temp);
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(getMyCoin());
    dispatch(getMyBalance());
    fetchEachPrice();
    wait(1000).then(() => setRefreshing(false));
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          style={styles.iconHeaderRight}
          brand={false}
          name="add-circle-outline"
          type="ionicons"
          size={25}
          onPress={() => changeScreenToAddCoin()}
        />
      ),
    });
  }, [navigation]);

  useEffect(() => {
    dispatch(getMyBalance());
    dispatch(getMyCoin());
  }, []);

  useEffect(() => {
    console.log("useEffect Here");
    fetchEachPrice();
  }, [JSON.stringify(myCoin)]);

  useEffect(() => {
    console.log("use Effect of myCrypto");
  }, [myCryptoPrice]);

  const getKeyValue = <T extends object, U extends keyof T>(obj: T) => (
    key: U
  ) => obj[key];

  const calculateTotalProfit = useMemo(() => {
    const r = "last";
    if (Object.keys(myCryptoPrice).length === 0) {
      return 0;
    } else {
      const totalProfit = myCoin.reduce((sum: any, cur: any) => {
        const q = Object(getKeyValue(myCryptoPrice)(cur.NameCoin));
        const w = getKeyValue(q)(r);

        return sum + (w - cur.Price) * cur.Amount;
      }, 0);
      return totalProfit;
    }
  }, [myCryptoPrice, myCoin]);

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Button
          title="Debug"
          onPress={() => {
            console.log(myCryptoPrice);
            console.log(myCoin);
          }}
        />
        <MyBalance myBalance={myBalance} totalProfit={calculateTotalProfit} />
        {Object.keys(myCryptoPrice).length !== 0 &&
          myCoin.map((item: any) => (
            <CoinCard
              navigation={navigation}
              coin={item}
              currentPrice={getKeyValue(
                Object(getKeyValue(myCryptoPrice)(item.NameCoin))
              )("last")}
            />
          ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    backgroundColor: "#F1F1F1",
  },
  groupInput: {
    backgroundColor: "#F1F1F1",
    width: "80%",
    alignSelf: "center",
  },
  iconHeaderRight: {
    marginRight: 15,
  },
});
