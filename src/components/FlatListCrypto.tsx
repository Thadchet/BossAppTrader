import React, { useEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Text,
  View,
} from "react-native";
import { formatVolumn } from "../services/util";
import { MAPPINGLOGO } from "../constants/MappingLogo";
import MenuFlatList from "./MenuFlatList";
import { Colors } from "../constants/Colors";

function FlatListCrypto({
  isMostVolumnEnable,
  isMostGainEnable,
  setModalVisible,
  isModalVisible,
  cryptoListTicker,
  refreshControl,
}: {
  isMostVolumnEnable: boolean;
  isMostGainEnable: boolean;
  setModalVisible: any;
  isModalVisible: boolean;
  cryptoListTicker: any;
  refreshControl: any;
}) {
  useEffect(() => {
    console.log("isMostGain");
    console.log(`isMostGainEnable ==> ${isMostGainEnable}`);
  }, [isMostGainEnable, isMostVolumnEnable]);

  const isPercentPositive = (last: any, prevOpen: any) => {
    return prevOpen - last > 0 ? true : false;
  };

  const sortCryptoBy = (sortBy: any, order: any) => {
    switch (order) {
      case "desc":
        return cryptoListTicker.sort((a: any, b: any) =>
          a[sortBy] < b[sortBy] ? 1 : -1
        );
      case "inc":
        return cryptoListTicker.sort((a: any, b: any) =>
          a[sortBy] >= b[sortBy] ? 1 : -1
        );
    }
  };

  const renderItemByIndex = (
    index: any,
    percentChange: any,
    change: any,
    last: any,
    nameCoin: any,
    prevOpen: any,
    baseVolume: any
  ) => {
    switch (index) {
      case 0:
        return (
          <View
            key={index}
            style={{
              borderTopRightRadius: 35,
              borderTopLeftRadius: 35,
              paddingHorizontal: 20,
              paddingTop: 20,
              backgroundColor: Colors.WHITE,
            }}
          >
            <Text style={styles.titleMarget}>Marget</Text>
          </View>
        );
      case 1:
        return (
          <MenuFlatList
            setModalVisible={setModalVisible}
            isModalVisible={isModalVisible}
          />
        );
      default:
        return (
          <TouchableOpacity key={index}>
            <View
              key={index}
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
                <Image
                  style={styles.tinyLogo}
                  source={MAPPINGLOGO[nameCoin].image}
                />
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
                    <Text style={styles.volumn}>
                      {formatVolumn(baseVolume)}
                    </Text>
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
                <View
                  style={[
                    !isPercentPositive(last, prevOpen)
                      ? styles.codeHighlightTextPositive
                      : styles.codeHighlightTextNegative,
                    styles.codeHighlightContainer,
                  ]}
                >
                  <Text style={{color : Colors.WHITE}}>
                    {`${
                      isPercentPositive(last, prevOpen) ? `` : `+`
                    }${percentChange} %`}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
    }
  };
  const Item = ({
    index,
    percentChange,
    change,
    last,
    nameCoin,
    prevOpen,
    baseVolume,
  }: {
    index: any;
    percentChange: any;
    change: any;
    last: any;
    nameCoin: string;
    prevOpen: any;
    baseVolume: number;
  }) => (
    <View key={index}>
      {renderItemByIndex(
        index,
        percentChange,
        change,
        last,
        nameCoin,
        prevOpen,
        baseVolume
      )}
    </View>
  );
  const renderItem = (index: any, item: any) => (
    <Item
      index={index}
      percentChange={item.percentChange}
      change={item.change}
      last={item.last}
      nameCoin={item.nameCoin.slice(4)}
      prevOpen={item.prevOpen}
      baseVolume={item.baseVolume}
    />
  );

  return (
    <FlatList
      data={sortCryptoBy("percentChange", isMostGainEnable ? "desc" : "inc")}
      renderItem={({ index, item }) => renderItem(index, item)}
      keyExtractor={(item) => item.id}
      refreshControl={refreshControl}
      stickyHeaderIndices={[1]}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.WHITE,
  },
  container: {
    padding: 20,
    borderTopEndRadius: 35,
    borderTopLeftRadius: 35,
    elevation: 20,
  },
  rightStatus: {
    alignItems: "flex-end",
  },
  leftStatus: {
    alignItems: "flex-start",
  },
  positive: {},
  negative: {},
  title: {
    fontSize: 12,
    fontFamily: "prompt",
    color: Colors.TEXT,
  },
  namecoin: {
    fontSize: 16,
    fontFamily: "prompt",
    color: Colors.TEXT,
    fontWeight: "800",
  },
  volumn: {
    fontSize: 12,
    fontFamily: "prompt",
    color: Colors.TEXT_GRAY,
    fontWeight: "600",
  },
  price: {
    fontSize: 14,
    fontFamily: "prompt",
    padding: 3,
    color: Colors.TEXT,
  },
  codeHighlightTextPositive: {
    color: Colors.WHITE,
    backgroundColor: Colors.POSITIVE,
    fontSize: 12,
  },
  codeHighlightTextNegative: {
    color: Colors.WHITE,
    backgroundColor: Colors.NEGATIVE,
    fontSize: 12,
  },
  codeHighlightContainer: {
    padding: 5,
    borderRadius: 10,
  },
  tinyLogo: {
    width: 30,
    height: 30,
    marginLeft: 5,
    marginRight: 10,
  },
  titleMarget: {
    fontSize: 30,
    fontFamily: "prompt",
  },
});

export default FlatListCrypto;
