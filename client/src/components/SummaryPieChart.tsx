import React, { useState } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { PieChart } from "react-native-svg-charts";
import { FontAwesome } from "@expo/vector-icons";
import { Input, Button } from "react-native-elements";

export default function SummaryPieChart({ coinRatio }: { coinRatio: any[] }) {
  const colors = ["#ffa500", "#228ae6", "#7f7570", "#008080", "#f4514a"];
  const data = coinRatio.map((key, index) => {
    return {
      key: index,
      value: key.ratio,
      svg: { fill: colors[index] },
      arc: {
        outerRadius: 40 + key.ratio + "%",
      },
    };
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PortFolio</Text>
      <PieChart
        style={{ height: 200 }}
        outerRadius={"70%"}
        innerRadius={10}
        data={data}
      />

      {coinRatio.map((key, index) => {
        return (
          <View key={index} style={styles.detailcoin}>
            <FontAwesome name="circle" size={24} color={colors[index]} />
            <Text style={styles.coin}>{`${key.nameCoin.slice(4)} : ${
              key.ratio
            } %`}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",

    padding: 20,
    marginHorizontal: 10,
    borderRadius: 20,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10.0,
    elevation: 20,
  },
  title: {
    fontSize: 20,
    padding: 10,
  },
  coin: {
    fontSize: 14,
    padding: 10,
  },
  detailcoin: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 25,
  },
});
