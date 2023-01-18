import {createSlice} from "@reduxjs/toolkit";
import cacheProvider from "../../../providers/cacheProvider";

const initialState = {
    items : cacheProvider.get('todoItem')?.value ?? []
}



const update = (state = initialState , action) => {
    state.items = action.payload
}

const itemListSlice = createSlice({
    name : 'todoItem' ,
    initialState,
    reducers: {update}
})


export default itemListSlice ;
