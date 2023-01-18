import { createSlice } from "@reduxjs/toolkit";
import cacheProvider from "../../../providers/cacheProvider";


const initialState = {
    items: cacheProvider.get('todoList')?.value ?? []
}

const update = (state = initialState, action) => {
    state.items = action.payload;
};

const todoListSlice = createSlice({
    name: "todoList", initialState, reducers: {
        update
    }
})
export default todoListSlice;