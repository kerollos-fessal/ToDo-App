import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo: (state, action) =>{
            const {title, description} = action.payload;

                if (title) {
                  const obj = {
                    id: Date.now(),
                    title,
                    description: description,
                    isDone: false,
                  };
                  
                  if (state.todos.find((item) => item.title === obj.title)) {
                      alert("duplicated title");
                    } else {
                    const allItems = [...state.todos, obj];
                    state.todos = [...allItems]
                  }
                }
        },
        deleteTodo: (state, action) =>{
          const {id} = action.payload;
          const filteredTodos = state.todos.filter(todo => +todo.id !== +id)
          state.todos = filteredTodos
        },
        changeTodoStatus: (state, action)=>{
          const {id} = action.payload
          const todo = state.todos.find(res => res.id === id)
          if (todo) todo.isDone = !todo.isDone
        }
    }
});
export const {addTodo, deleteTodo, changeTodoStatus} = TodoSlice.actions
export default TodoSlice