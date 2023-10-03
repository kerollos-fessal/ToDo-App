import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import BtnForm from "../components/buttons/btn";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import ToDoItems from "../components/ToDoItems/ToDoItem";

const Completed = () => {
  const navigation = useNavigation();
  const [completedTodos, setCompletedTodos]= useState([])
  const {todos} = useSelector(state => state.todo)

  useEffect(()=>{
    if(todos){
      const filteredTodos = todos.filter(res => res.isDone)
      setCompletedTodos(filteredTodos)
    }
  },[todos])
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
        <View style={{width:'80%'}}>
          {completedTodos.length? (
<View>
       {completedTodos.map(todo=> (
        <ToDoItems key={todo.id} todo={todo}/>
      ))}
      </View>
          ):<Text style={{fontWeight:'800', textAlign:'center', marginBottom:30}}>No completed todos yet!</Text>}
      </View>
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

export default Completed;
