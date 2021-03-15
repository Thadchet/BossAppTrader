import * as React from "react";
import { View as DefaultView } from "react-native";

import { Text, TextProps } from "./Themed";

export default function TextLabel(props: TextProps) {
  return (
    <DefaultView
      style={[props.style]}
      //   darkColor="rgba(255,255,255,0.05)"
      //   lightColor="rgba(0,0,0,0.05)"
    >
      <Text {...props} />
    </DefaultView>
  );
}
