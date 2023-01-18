import {createSlice} from "@reduxjs/toolkit";
import cacheProvider from "../../../providers/cacheProvider";

const initialState= {
    theme : cacheProvider.get('theme')?.value ?? 'theme-red'
}
const change  = (state = initialState , action)=>{
    state.theme = action.payload
}

const colorPalletSlice = createSlice({
    name : "theme",
    initialState ,
    reducers:{
        change
    }
})
export default colorPalletSlice ;