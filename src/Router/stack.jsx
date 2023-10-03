import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ToDoDesc from "../pages/ToDo-desc";
import Home from "../pages/home";

const stack = createNativeStackNavigator();

const Stack = () => {
  return (
      <stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <stack.Screen name="Todo-description" component={ToDoDesc} />
        <stack.Screen
          name="Home"
          component={Home}
          options={{ headerShadowVisible: true }}
        />
      </stack.Navigator>

  );
};

export default Stack;
