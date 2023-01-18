import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    token : null
}

const logout = (state,action )=>{
    state.token = action.payload
}

const logoutSlice = createSlice({
    name:'logout',
    initialState ,
    reducers:{
        logout
    }
})


export default logoutSlice