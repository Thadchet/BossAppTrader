import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { View } from "./Themed";
import { MaterialIcons } from "@expo/vector-icons";
import { Input, Button } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { updateCoin } from "../actions/crypto.actions";
import Spinner from "react-native-loading-spinner-overlay";
import { updateIsScreenChange } from "../actions/spinner.action";
import { RootState } from "../reducers";

function CoinCardEdit({
  ID,
  buyPrice,
  buyAmount,
}: {
  ID: any;
  buyPrice: any;
  buyAmount: any;
}) {
  const dispatch = useDispatch();
  const [updatePrice, setUpdatePrice] = useState<any>(buyPrice);
  const [updateAmount, setUpdateAmount] = useState<any>(buyAmount);
  const [isShow, setIsShow] = useState(false);
  const { isChangeScreen, isShowSpinner } = useSelector(
    (state: RootState) => state.spinner
  );

  const onPressUpdateCoin = () => {
    console.log(updatePrice);
    console.log(updateAmount);
    dispatch(updateCoin({ ID, Price: updatePrice, Amount: updateAmount }));
  };
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Spinner
          visible={isShowSpinner}
          textContent={"Loading..."}
          textStyle={styles.spinnerTextStyle}
        />
        <Input
          label="Buy Price (THB)"
          keyboardType="numeric"
          onChangeText={(value) => setUpdatePrice(value)}
          returnKeyType="done"
          placeholder="price"
          defaultValue={buyPrice}
          leftIcon={<MaterialIcons name="money" size={24} color="black" />}
        />
        <Input
          label="Buy Amount (Coin)"
          keyboardType="numeric"
          onChangeText={(value) => setUpdateAmount(value)}
          returnKeyType="done"
          placeholder="amount"
          defaultValue={buyAmount}
          leftIcon={<MaterialIcons name="money" size={24} color="black" />}
        />
        <Button
          title="Update"
          onPress={() => {
            onPressUpdateCoin();
          }}
        />
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
    padding: 30,
  },
  spinnerTextStyle: {
    color: "#FFF",
  },
});

export default CoinCardEdit;
