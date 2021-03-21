import React, { useMemo, useEffect, useCallback } from "react";
import { StyleSheet, Animated, Easing } from "react-native";
import { Text, View } from "./Themed";
import { formatBalance } from "../services/util";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import TextLabel from "./TextLabel";
import { Colors } from "../constants/Colors";
import { debounce } from "lodash";

const wait = (timeout: any) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

function MyBalance({
  myBalance,
  totalProfit,
  refreshToggle,
  setRefreshToggle,
}: {
  myBalance: number;
  totalProfit: any;
  refreshToggle: any;
  setRefreshToggle: any;
}) {
  const totalAmount = myBalance + totalProfit;
  const percentProfit = ((totalProfit / myBalance) * 100).toFixed(2);
  const spinValue = new Animated.Value(refreshToggle ? 0 : 1);

  useEffect(() => {
    console.log("useEffect in spin");
    // debounce(setUpAni, 10000);
    setUpAni();
    wait(10000).then(() => {});
    
  }, [spinValue]);

  // Next, interpolate beginning and end values (in this case 0 and 1)
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const setUpAni = useCallback(() => {
    Animated.timing(spinValue, {
      toValue: 0.5,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
  }, [spinValue]);

  return (
    <View style={styles.container}>
      <View style={styles.balance}>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: Colors.BACKGROUND_COLOR,
          }}
        >
          <Text style={styles.textBalance}>
            {`${formatBalance(totalAmount)} THB`}
          </Text>
          <Animated.View // Special animatable View
            style={{ transform: [{ rotate: spin }], alignSelf: "center" }}
          >
            <SimpleLineIcons
              style={{
                padding: 10,
              }}
              name="refresh"
              size={24}
              color="black"
              onPress={() => {
                console.log("------------>  Spin  <-----------");
                setRefreshToggle(!refreshToggle);
              }}
            />
          </Animated.View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: Colors.BACKGROUND_COLOR,
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
    backgroundColor: Colors.BACKGROUND_COLOR,

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
    backgroundColor: Colors.BACKGROUND_COLOR,
  },
  textBalance: {
    fontWeight: "800",
    fontSize: 24,
    margin: 5,
    backgroundColor: Colors.BACKGROUND_COLOR,
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
    backgroundColor: Colors.BACKGROUND_COLOR,
  },
  rightStatus: {
    alignItems: "flex-end",
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
    padding: 2,
    fontFamily: "prompt",
  },
});

export default MyBalance;
