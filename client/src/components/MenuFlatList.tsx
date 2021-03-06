import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";

function MenuFlatList({
  setModalVisible,
  isModalVisible,
}: {
  setModalVisible: any;
  isModalVisible: boolean;
}) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.button}>
          <Text style={styles.title}>ALL</Text>
        </View>
        <View style={styles.button}>
          <Fontisto name="star" size={16} color="#FFF" />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          console.log("Modal open");
          setModalVisible(!isModalVisible);
        }}
      >
        <View style={styles.rightButton}>
          <Text style={styles.title}>Marget Cap</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.WHITE,
  },
  title: {
    fontSize: 14,
    fontFamily: "prompt",
    textAlign: "center",
    color: Colors.WHITE,
  },
  button: {
    // backgroundColor: Colors.LABEL_BACKGROUND,
    backgroundColor: Colors.PRIMARY,
    marginHorizontal: 5,
    padding: 3,
    width: 50,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  rightButton: {
    backgroundColor: Colors.PRIMARY,
    marginHorizontal: 10,
    padding: 3,
    width: 130,
    borderRadius: 30,
  },
});

export default MenuFlatList;
