import { View, Text, StyleSheet, Platform } from "react-native";
import React from "react";
import BtnForm from "../components/buttons/btn";
import { useNavigation, useRoute } from "@react-navigation/native";

const ToDoDesc = () => {
  const navigation = useNavigation();
  const params = useRoute().params;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 100,
        fontWeight: "bold",
      }}
    >
      {params && (
        <View
          style={{
            textAlign: "center",
            borderRadius: 8,
            width: "75%",
            ...Platform.select({
              android: {
                backgroundColor: "transparent",
              },
              ios: {
                backgroundColor: "red",
              },
              default: {
                // other platforms, web for example
                backgroundColor: "transparent",
              },
            }),
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 30,
              marginBottom: 8,
              paddingHorizontal: 100,
              borderColor: "black",
              backgroundColor: "white",
              borderRadius: 10,
              borderWidth: 3,
              borderStyle: "solid",
              textAlign: "center",
            }}
          >
            {params.title}
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              marginBottom: 20,
              paddingHorizontal: 100,
              paddingVertical: 5,
              borderColor: "black",
              backgroundColor: "white",
              borderRadius: 10,
              borderWidth: 2,
              borderStyle: "solid",
              textAlign: "center",
            }}
          >
            {params.description}
          </Text>
        </View>
      )}

      <BtnForm
        style={styles.button}
        Text={"Back to home"}
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 25,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#aaa",
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    width: 150,
    fontWeight: "bolder",
  },
});

export default ToDoDesc;
