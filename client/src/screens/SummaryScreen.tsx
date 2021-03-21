import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { MyBalance, SummaryPieChart } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducers";

export default function SummaryScreen() {
  const dispatch = useDispatch();
  const { myCoin, myBalance } = useSelector((state: RootState) => state.crypto);
  const [coinRatio, setCoinRatio] = useState<any>([]);
  const culculateRatio = () => {
    let temp: any = [];
    myCoin.map((key: any, index: number) => {
      temp.push({
        nameCoin: key.NameCoin,
        ratio: parseFloat(
          (((key.Price * key.Amount) / myBalance) * 100).toFixed(2)
        ),
      });
    });
    setCoinRatio(temp);
  };
  useEffect(() => {
    culculateRatio();
  }, []);
  return (
    <View style={styles.container}>
      <SummaryPieChart coinRatio={coinRatio} />
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
