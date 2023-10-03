import React from "react";
import { TextInput } from "react-native";

const Inputs = (prop) => {
  return (
    <TextInput
      placeholder={prop.placeholder}
      style={prop.style}
      secureTextEntry={prop.secureTextEntry}
      onChangeText={prop.onChangeText}
    />
  );
};
export default Inputs;
