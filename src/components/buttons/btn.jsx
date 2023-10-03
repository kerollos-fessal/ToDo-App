import React from "react";
import { Text, TouchableOpacity } from "react-native";

const BtnForm = (prop) => {
  return (
    <TouchableOpacity style={prop.style} onPress={prop.onPress}>
          <Text>{prop.Text}</Text>
        </TouchableOpacity>
  );
};
export default BtnForm;
