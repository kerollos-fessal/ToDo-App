import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Inputs from "../components/inputs/inputs";
import BtnForm from "../components/buttons/btn";
import ToDoItem from "../components/ToDoItems/ToDoItem";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector} from "react-redux";
import { addTodo } from "../Redux/slices/Todo.slice";

const Home = ({}) => {
  const [title, settodoTitle] = useState("");
  const [description, setdescription] = useState("");
  const dispatch = useDispatch();
  const {todos} = useSelector((state)=> state.todo)


  useEffect(() => {
    trackStorage();
  }, []);

  const trackStorage = async () => {
    const asyncToDoItems = await AsyncStorage.getItem("todos");
    if (asyncToDoItems) setTodos(JSON.parse(asyncToDoItems));
  };



const createTodo = async  ()=>{
  dispatch(addTodo({title, description}))
}


  return (
    <View style={styles.container}>
      <Text style={styles.para}>ToDo App</Text>
      <View style={styles.holder}>
        <Inputs
          placeholder="ToDo Title"
          style={styles.inputStyling}
          onChangeText={(value) => settodoTitle(value)}
        />
        <Inputs
          placeholder="ToDo Description"
          style={styles.inputStyling}
          onChangeText={(value) => setdescription(value)}
        />
        <BtnForm style={styles.button} Text={"Save"} onPress={createTodo} />
        {/* <BtnForm style={styles.button} Text={"Save"}
         onPress={()=>navigation.navigate("Todo-description", {id:1, name:'kerollos'})}/> */}
      </View>
      <View
        style={{
          height: 2,
          backgroundColor: "black",
          width: "90%",
          marginVertical: 10,
        }}
      />
      <View style={{ width: "90%" }}>
        <Text>
          {todos.length !== 0 && (
            <ToDoItem />
          )}
        </Text>
      </View>
      <StatusBar style="auto" />
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
  holder: {
    alignItems: "center",
    padding: 15,
    borderColor: "black",
    borderWidth: 4,
    borderRadius: 10,
    marginTop: 15,
    backgroundColor: "#fff",
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#aaa",
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    width: 100,
    fontWeight: "bold",
  },
  inputStyling: {
    alignItems: "center",
    backgroundColor: "#eee",
    padding: 10,
    borderWidth: 3,
    borderRadius: 10,
    marginBottom: 15,
    width: 300,
  },
  para: {
    fontWeight: "bolder",
    fontSize: 25,
  },
});

export default Home;
