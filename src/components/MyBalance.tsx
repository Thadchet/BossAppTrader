import React, { useMemo } from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "./Themed";
import { formatBalance } from "../services/util";
import { Ionicons, AntDesign, FontAwesome5 } from "@expo/vector-icons";
import TextLabel from "./TextLabel";

function MyBalance({
  myBalance,
  totalProfit,
}: {
  myBalance: number;
  totalProfit: any;
}) {
  const totalAmount = myBalance + totalProfit;
  const percentProfit = ((totalProfit / myBalance) * 100).toFixed(2);
  return (
    <View style={styles.container}>
      <View style={styles.balance}>
        <Text style={styles.textBalance}>{`${formatBalance(
          totalAmount
        )} THB`}</Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#F1F1F1",
          }}
        >
          {totalProfit > 0 ? (
            <Ionicons name="ios-caret-up-outline" size={20} color="green" />
          ) : (
            <Ionicons name="ios-caret-down-outline" size={20} color="red" />
          )}

          <Text style={styles.rawProfit}>{formatBalance(totalProfit)}</Text>
          <TextLabel
            style={[
              parseFloat(percentProfit) > 0
                ? styles.codeHighlightTextPositive
                : styles.codeHighlightTextNegative,
              styles.codeHighlightContainer,
            ]}
          >
            {`${percentProfit} %`}
          </TextLabel>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 10,
    backgroundColor: "#F1F1F1",

    // borderRadius: 15,
    // shadowColor: "#000",
    // shadowOpacity: 0.1,
    // shadowRadius: 10.0,
    // elevation: 20,
  },
  rawProfit: {
    margin: 5,
    marginRight: 15,
    fontWeight: "700",
    fontFamily: "prompt",
  },
  balance: {
    margin: 20,
    alignItems: "center",
    backgroundColor: "#F1F1F1",
  },
  textBalance: {
    fontWeight: "800",
    fontSize: 24,
    margin: 5,
    backgroundColor: "#F1F1F1",
    fontFamily: "promptBold",
  },
  item: {
    padding: 6,
    marginVertical: 3,
    marginHorizontal: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F1F1F1",
  },
  rightStatus: {
    alignItems: "flex-end",
  },
  codeHighlightTextPositive: {
    color: "#FFFFFF",
    backgroundColor: "#60ce80",
    fontSize: 13,
    fontWeight: "700",
  },
  codeHighlightTextNegative: {
    color: "#FFFFFF",
    backgroundColor: "#FF6162",
    fontSize: 13,
    fontWeight: "700",
  },
  codeHighlightContainer: {
    borderRadius: 3,
    padding: 2,
    fontFamily: "prompt",
  },
});

export default MyBalance;
