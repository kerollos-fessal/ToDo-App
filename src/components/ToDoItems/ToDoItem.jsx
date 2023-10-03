import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BtnForm from "../buttons/btn";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../../Redux/slices/Todo.slice";
import { changeTodoStatus } from "../../Redux/slices/Todo.slice";
import { Ionicons } from "@expo/vector-icons";

const ToDoItems = () => {
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: "100%",
        textAlign: "center",
        borderRadius: 15,
        fontWeight: "bold",
        fontSize: 20,
        padding: 10,
      }}
    >
      {todos.map((item) => (
        <View key={item.id}>
          <TouchableOpacity
            style={{
              backgroundColor: "#aaa",
              marginBottom: 35,
              height: 50,
              borderRadius: 15,
              paddingTop: 9,
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <View>
              <Text
                onPress={() => navigation.navigate("Todo-description", item)}
              >
                {item.title}
              </Text>
            </View>
            <View style={{flexDirection: "row"}}>
              <BtnForm
                Text={
                  <Ionicons
                    name="trash"
                    size={26}
                    color="red"
                    style={{
                      marginEnd:25
                    }}
                  />
                }
                onPress={() => dispatch(deleteTodo({ id: item.id }))}
              />
              <BtnForm
                Text={
                  <Ionicons
                    name="checkmark-done-circle"
                    size={26}
                    color={item.isDone?"#0b0":'#000'}
                  />
                }
                onPress={() => dispatch(changeTodoStatus({id: item.id}))}
              />
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default ToDoItems;
