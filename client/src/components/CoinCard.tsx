import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { Text, View } from "./Themed";
import { MAPPINGLOGO } from "../constants/MappingLogo";
import TextLabel from "./TextLabel";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { formatBalance } from "../services/util";
import { Colors } from "../constants/Colors";
function CoinCard({
  navigation,
  coin,
  currentPrice,
}: {
  navigation: any;
  coin: any;
  currentPrice: any;
}) {
  const changeScreenToCoinManagement = () => {
    navigation.navigate("Coin", {
      coin: coin,
      currentPrice,
    });
  };

  const calculateProfit = () => {
    const profit: number = (currentPrice - coin.Price) * coin.Amount;
    return formatBalance(profit);
  };

  const calculatePercentProfit = () => {
    return (((currentPrice - coin.Price) / coin.Price) * 100).toFixed(2);
  };

  const isProfit = () => {
    return (currentPrice - coin.Price) * coin.Amount > 0;
  };
  return (
    <TouchableOpacity key={coin.ID} onPress={changeScreenToCoinManagement}>
      <View key={coin.ID} style={styles.container}>
        <View style={styles.balance}>
          <Image
            style={styles.tinyLogo}
            source={MAPPINGLOGO[coin.NameCoin.slice(4)].image}
          />
          <View>
            <Text style={styles.fullNameCoin}>{coin.NameCoin.slice(4)}</Text>
            <Text style={styles.shortNameCoin}>{`Buy : ${formatBalance(
              coin.Price
            )} THB`}</Text>
            <Text style={styles.shortNameCoin}>{`Current : ${formatBalance(
              currentPrice
            )} THB`}</Text>
          </View>
          <View style={styles.option}>
            <TextLabel
              style={[
                !isProfit()
                  ? styles.codeHighlightTextNegative
                  : styles.codeHighlightTextPositive,
                styles.codeHighlightContainer,
              ]}
            >
              {`${calculatePercentProfit()} %`}
            </TextLabel>
          </View>
        </View>
        <View style={styles.summary}>
          <View
            style={{
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            {isProfit() ? (
              <Ionicons name="ios-caret-up-outline" size={20} color="green" />
            ) : (
              <Ionicons name="ios-caret-down-outline" size={20} color="red" />
            )}

            <Text
              style={{
                marginLeft: 5,
              }}
            >{`Profit : ${calculateProfit()} THB`}</Text>
          </View>
          {/* <Text style={styles.amount}>{`Amount ${coin.Amount}`}</Text> */}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10.0,
    elevation: 20,
  },
  amount: {
    textAlign: "right",
    color: Colors.TEXT,
    alignSelf: "center",
  },
  balance: {
    margin: 18,
    alignItems: "center",
    flexDirection: "row",
  },
  summary: {
    marginHorizontal: 25,
    marginBottom: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    fontFamily: "prompt",
  },
  option: {
    marginHorizontal: 5,
    flex: 1,
    alignItems: "flex-end",
  },
  fullNameCoin: {
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "promptBold",
  },
  shortNameCoin: {
    fontSize: 12,
    fontFamily: "prompt",
  },
  tinyLogo: {
    width: 60,
    height: 60,
    marginLeft: 5,
    marginRight: 20,
  },
  codeHighlightTextPositive: {
    color: Colors.WHITE,
    backgroundColor: Colors.POSITIVE,
    fontSize: 13,
    fontWeight: "700",
  },
  codeHighlightTextNegative: {
    color: Colors.WHITE,
    backgroundColor: Colors.NEGATIVE,
    fontSize: 13,
    fontWeight: "700",
  },
  codeHighlightContainer: {
    borderRadius: 3,
    padding: 4,
    fontFamily: "prompt",
  },
});

export default CoinCard;
