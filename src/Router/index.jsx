import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Stack from "./stack";
import completed from "../pages/completed";
import inProgress from "../pages/inProgress";

const tab = createBottomTabNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <tab.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShadowVisible: true,
          headerShown: true,
          headerBackButtonMenuEnabled: true,
          headerStyle: {backgroundColor:'#fff'},
          headerTintColor: '#000',
          headerTitleStyle: {fontWeight:'bold'},
          headerTitleAlign: 'center',
          gestureDirection: 'vertical', // horizontal or vertical
          headerTitle:'ToDo-App'
        }}
      >
        <tab.Screen name="Completed-todo" component={completed} />
        <tab.Screen name="inProgress-todo" component={inProgress} />
        <tab.Screen
          name="Main"
          component={Stack}
          options={{ headerShadowVisible: true }}
        />
      </tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
