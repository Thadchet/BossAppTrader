import React from "react";
import { StyleSheet, TouchableOpacity, FlatList, Image } from "react-native";
import { Text, View } from "./Themed";
import TextLabel from "./TextLabel";
import { formatVolumn } from "../services/util";
import { MAPPINGLOGO } from "../constants/MappingLogo";

function FlatListCrypto({
  isMostVolumnEnable,
  isMostGainEnable,
  cryptoListTicker,
  refreshControl,
}: {
  isMostVolumnEnable: boolean;
  isMostGainEnable: boolean;
  cryptoListTicker: any;
  refreshControl: any;
}) {
  if (isMostGainEnable) {
    cryptoListTicker.sort((a: any, b: any) =>
      a.percentChange < b.percentChange ? 1 : -1
    );
  }

  if (isMostVolumnEnable) {
    cryptoListTicker.sort((a: any, b: any) =>
      a.quoteVolume < b.quoteVolume ? 1 : -1
    );
  }
  const isPercentPositive = (last: any, prevOpen: any) => {
    return prevOpen - last > 0 ? true : false;
  };

  const Item = ({
    percentChange,
    change,
    last,
    nameCoin,
    prevOpen,
    baseVolume,
  }: {
    percentChange: any;
    change: any;
    last: any;
    nameCoin: string;
    prevOpen: any;
    baseVolume: number;
  }) => (
    <TouchableOpacity key={nameCoin} onPress={() => onPress()}>
      <View
        style={[
          styles.item,
          !isPercentPositive(last, prevOpen)
            ? styles.positive
            : styles.negative,
        ]}
      >
        <View
          style={[
            { flexDirection: "row", alignItems: "center" },
            !isPercentPositive(last, prevOpen)
              ? styles.positive
              : styles.negative,
          ]}
        >
          <Image style={styles.tinyLogo} source={MAPPINGLOGO[nameCoin].image} />
          <View
            style={[
              styles.leftStatus,
              !isPercentPositive(last, prevOpen)
                ? styles.positive
                : styles.negative,
            ]}
          >
            <Text style={styles.namecoin}>{nameCoin}</Text>
            <View
              style={[
                { flexDirection: "row" },
                !isPercentPositive(last, prevOpen)
                  ? styles.positive
                  : styles.negative,
              ]}
            >
              <Text style={styles.volumn}>{`Vol : `}</Text>
              <Text style={styles.volumn}>{formatVolumn(baseVolume)}</Text>
            </View>
          </View>
        </View>

        <View
          style={[
            styles.rightStatus,
            !isPercentPositive(last, prevOpen)
              ? styles.positive
              : styles.negative,
          ]}
        >
          <Text style={styles.price}>{last}</Text>
          <TextLabel
            style={[
              !isPercentPositive(last, prevOpen)
                ? styles.codeHighlightTextPositive
                : styles.codeHighlightTextNegative,
              styles.codeHighlightContainer,
            ]}
          >
            {`${
              isPercentPositive(last, prevOpen) ? `` : `+`
            }${percentChange} %`}
          </TextLabel>
        </View>
      </View>
    </TouchableOpacity>
  );
  const renderItem = (item: any) => (
    <Item
      percentChange={item.percentChange}
      change={item.change}
      last={item.last}
      nameCoin={item.nameCoin.slice(4)}
      prevOpen={item.prevOpen}
      baseVolume={item.baseVolume}
    />
  );
  const onPress = () => {
    // sortMostValue();
  };

  return (
    <FlatList
      data={cryptoListTicker}
      renderItem={({ item }) => renderItem(item)}
      keyExtractor={(item) => item.id}
      refreshControl={refreshControl}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 6,
    marginVertical: 3,
    marginHorizontal: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rightStatus: {
    alignItems: "flex-end",
  },
  leftStatus: {
    alignItems: "flex-start",
  },
  positive: {
    backgroundColor: "#565252",
    // borderWidth: 2,
    // borderColor: "#52C471",
  },
  negative: {
    backgroundColor: "#565252",
    // borderWidth: 2,
    // borderColor: "#FA5F55",
  },
  title: {
    fontSize: 12,
    fontFamily: "prompt",
    color: "#EBEBEB",
  },
  namecoin: {
    fontSize: 16,
    fontFamily: "prompt",
    color: "#EBEBEB",
    fontWeight: "800",
  },
  volumn: {
    fontSize: 12,
    fontFamily: "prompt",
    color: "#EBEBEB",
    fontWeight: "600",
  },
  price: {
    fontSize: 14,
    fontFamily: "prompt",
    padding: 3,
    color: "#EBEBEB",
  },
  codeHighlightTextPositive: {
    color: "#088306",
    backgroundColor: "#B6EFA9",
    fontSize: 12,
  },
  codeHighlightTextNegative: {
    color: "#F02315",
    backgroundColor: "#EFB7B7",
    fontSize: 12,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    padding: 2,
  },
  tinyLogo: {
    width: 30,
    height: 30,
    marginLeft: 5,
    marginRight: 10,
    
  },
});

export default FlatListCrypto;
