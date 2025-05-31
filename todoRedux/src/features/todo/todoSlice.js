import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{
        id:1,
        text:"hello world",

    }]
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:{
            reducer:(state,action)=>{
                state.todos.push(action.payload);
            },
            prepare:(text)=>{
                return {
                    payload:{
                        id:nanoid(),
                        text
                    }
                }
            }
        },
        removeTodo:(state,action)=>{
            const index = state.todos.findIndex((todo)=>todo.id===action.payload);
            if(index!==-1){
                state.todos.splice(index,1);
            }
        }
    }
});
export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
// This code defines a Redux slice for managing a todo list.
// It includes an initial state with a sample todo item, and two actions:
// 1. `addTodo`: Adds a new todo item with a unique ID and text.
// 2. `removeTodo`: Removes a todo item by its ID.
// The `createSlice` function from Redux Toolkit is used to create the slice,
// which simplifies the process of writing reducers and actions.
// The `nanoid` function is used to generate unique IDs for new todo items. 