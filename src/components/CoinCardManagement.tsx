import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { Text, View } from "./Themed";
import { MAPPINGLOGO } from "../constants/MappingLogo";
import TextLabel from "./TextLabel";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { formatBalance } from "../services/util";

function CoinCardManagement({
  currentPrice,
  nameCoin,
}: {
  currentPrice: any;
  nameCoin: any;
}) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.balance}>
          <Image
            style={styles.tinyLogo}
            source={MAPPINGLOGO[nameCoin.slice(4)].image}
          />
          <View>
            <Text style={styles.nameCoin}>{`${nameCoin.slice(4)}`}</Text>
            <Text>{`Current : ${currentPrice} THB`}</Text>
          </View>
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
  nameCoin: {
    fontWeight: "700",
    fontSize: 20,
  },
  balance: {
    margin: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  tinyLogo: {
    width: 60,
    height: 60,
    marginLeft: 5,
    marginRight: 20,
  },
});

export default CoinCardManagement;
