import {ITodo} from "../../../components/todo/types";
import {createSlice} from "@reduxjs/toolkit";

interface ITodos {
    todoList: ITodo[];
}

const initialState: ITodos = {
    todoList: [],
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        onAdd: (state, action) => {
            state.todoList = [...state.todoList, {...action.payload, id: state.todoList.length + 1}]
            return state
        },
        onUpdate: (state, action) => {
            state.todoList = state.todoList.map(el => {
                if (el.id === action.payload) {
                    return {...el, status: !el.status}
                }
                return el
            })
            return state
        }
    }
})

export const { onAdd, onUpdate } = todoSlice.actions

export default todoSlice.reducer