import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Colors } from "../constants/Colors";
export default function ModalButtom({
  isModalVisible,
  setIsMostGainEnable,
}: {
  isModalVisible: boolean;
  setIsMostGainEnable: any;
}) {
  const [modalVisible, setModalVisible] = useState<boolean>(isModalVisible);
  const [selectedSort, setSelectedSort] = useState<string>("");
  const [isFristTime, setIsFristTime] = useState<boolean>(true);

  useEffect(() => {
    // setModalVisible(!modalVisible);
    console.log("============");
    console.log(isModalVisible);
    console.log(modalVisible);

    if (!isModalVisible && !modalVisible && !isFristTime) {
      setModalVisible(true);
    } else {
      setModalVisible(isModalVisible);
    }

    setIsFristTime(false);

    console.log(`isModalVisible = ${modalVisible}`);
    console.log("############");
  }, [isModalVisible]);

  const renderByIndex = (index: any, title: any) => {
    switch (title) {
      case "Sort By":
        return (
          <View key={index} style={styles.itemHead}>
            <Text style={styles.text}>{title}</Text>
          </View>
        );
      case "Most Lost":
        return (
          <View key={index} style={styles.item}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
                setIsMostGainEnable(false);
                setSelectedSort(title);
              }}
            >
              <Text
                style={[
                  styles.text,
                  selectedSort === "Most Lost"
                    ? styles.selected
                    : styles.noselected,
                ]}
              >
                {title}
              </Text>
            </TouchableOpacity>
          </View>
        );
      case "Most Gain":
        return (
          <View key={index} style={styles.item}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
                setIsMostGainEnable(true);
                setSelectedSort(title);
              }}
            >
              <Text
                style={[
                  styles.text,
                  selectedSort === "Most Gain"
                    ? styles.selected
                    : styles.noselected,
                ]}
              >
                {title}
              </Text>
            </TouchableOpacity>
          </View>
        );
      default:
        return (
          <View style={styles.item} key={title}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
                setIsMostGainEnable(false);
              }}
            >
              <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
          </View>
        );
    }
  };
  const Item = ({ index, title }: { index: any; title: any }) =>
    renderByIndex(index, title);

  const renderItems = (index: any, key: any) => {
    return <Item index={index} title={key.key} />;
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}
    >
      <View
        style={{
          height: "27%",
          marginTop: "auto",
          backgroundColor: "#FFF",
        }}
      >
        <View style={styles.footer}>
          <FlatList
            data={[
              { key: "Sort By" },
              { key: "Most Gain" },
              { key: "Most Lost" },
              { key: "Cancel" },
            ]}
            renderItem={({ index, item }) => renderItems(index, item)}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
    borderColor: "#F3F3F3",
    borderBottomWidth: 1,
  },
  itemHead: {
    padding: 10,
    backgroundColor: "#FAFAFA",
    borderColor: "#F3F3F3",
    borderBottomWidth: 1,
    fontSize: 18,
    height: 44,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 35,
    borderTopEndRadius: 35,
  },
  text: {
    color: "#908F8F",
  },
  selected: {
    color: Colors.PRIMARY,
  },
  noselected: {},
});
