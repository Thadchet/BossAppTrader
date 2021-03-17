import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, FlatList, Switch } from "react-native";
import { Text, View } from "./Themed";

function SwitchSort({
  isMostVolumnEnable,
  isMostGainEnable,
  setIsMostVolumnEnable,
  setIsMostGainEnable,
}: {
  isMostVolumnEnable: boolean;
  isMostGainEnable: boolean;
  setIsMostVolumnEnable: any;
  setIsMostGainEnable: any;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sort By</Text>
      <View style={styles.switchGroup}>
        <View style={styles.switch}>
          <Text>Most Volumn</Text>
          <Switch
            style={{ marginLeft: 10, marginVertical: 2 }}
            trackColor={{ false: "#767577", true: "#52C471" }}
            thumbColor={isMostVolumnEnable ? "#f4f3f4" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => {
              setIsMostVolumnEnable(!isMostVolumnEnable);
              setIsMostGainEnable(!isMostGainEnable);
            }}
            value={isMostVolumnEnable}
          />
        </View>
        <View style={styles.switch}>
          <Text>Most Gain</Text>
          <Switch
            style={{ marginLeft: 10, marginVertical: 2 }}
            trackColor={{ false: "#767577", true: "#52C471" }}
            thumbColor={isMostGainEnable ? "#f4f3f4" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => {
              setIsMostGainEnable(!isMostGainEnable);
              setIsMostVolumnEnable(!isMostVolumnEnable);
            }}
            value={isMostGainEnable}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#F1F1F1",
  },
  title: {
    fontFamily: "prompt",
    fontSize: 20,
  },
  switchGroup: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-end",
    backgroundColor: "#F1F1F1",
  },
  switch: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1F1F1",
  },
});

export default SwitchSort;
