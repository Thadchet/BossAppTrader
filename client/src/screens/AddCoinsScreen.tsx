import React, { useState, useEffect } from "react";
import { StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { View } from "../components/Themed";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducers";
import { addMyCoin } from "../actions/crypto.actions";
import { updateIsScreenChange } from "../actions/spinner.action";
import { Input, Button } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";

export default function AddCoinsScreen({ navigation }: { navigation: any }) {
  const dispatch = useDispatch();
  const { symbols } = useSelector((state: RootState) => state.crypto);
  const { isShowSpinner, isChangeScreen } = useSelector(
    (state: RootState) => state.spinner
  );
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [price, setPrice] = useState<any>();
  const [amount, setAmount] = useState<any>();

  const renderCoins = () => {
    return symbols.map((item: any) => (
      <Picker.Item
        key={item.id}
        label={item.symbol.slice(4)}
        value={item.symbol}
      />
    ));
  };

  const onAddCoinPress = () => {
    dispatch(
      addMyCoin({
        namecoin: selectedLanguage,
        price,
        amount,
      })
    );
  };

  useEffect(() => {
    console.log(`isChangeScreen ${isChangeScreen}`);
    if (isChangeScreen) {
      navigation.navigate("MyBalance");
      dispatch(updateIsScreenChange(false));
    }
  }, [isChangeScreen]);
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.groupInput}>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
          >
            {renderCoins()}
          </Picker>
          <Input
            keyboardType="numeric"
            label="Buy Price (THB)"
            onChangeText={(value) => setPrice(value)}
            placeholder="price"
            returnKeyType="done"
            leftIcon={
              <MaterialIcons name="attach-money" size={24} color="black" />
            }
          />
          <Input
            label="Buy Amount (Coin)"
            keyboardType="numeric"
            onChangeText={(value) => setAmount(value)}
            returnKeyType="done"
            placeholder="amount"
            leftIcon={<MaterialIcons name="money" size={24} color="black" />}
          />
          <Button
            title="Add Coin"
            onPress={onAddCoinPress}
            loading={isShowSpinner}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.BACKGROUND_COLOR,
  },
  groupInput: {
    backgroundColor: Colors.BACKGROUND_COLOR,
    width: "80%",
    alignSelf: "center",
  },
});
