import cacheProvider from "../../../../providers/cacheProvider";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    status : false ,
    auth : {
        token : cacheProvider.get('Token')?.value ?? null,
        user : {}
    },
    menu : []
}

const verifySuccess = (state = initialState , action) => {
    state.status  = false
    state.auth.token = action.payload.token
    state.auth.user = action.payload.user
    state.menu = action.payload.user
}

const verifyFailed = (state = initialState , action) => {
    state.status = false
    state.auth.user = []
}


const resendVerifySuccess = (state = initialState , action) => {
    state.auth.user = action.payload
    state.menu = action.payload.menu
}

const resendVerifyFailed = (state = initialState , action ) => {
    state.auth.user = null
}

const logout = (state = initialState) => {
    state.status = false ;
    state.auth.user = null
    state.auth.token = null
    state.menu = null
}


const verifySlice = createSlice({
    name : "verify",
    initialState,
    reducers : {
        verifySuccess , verifyFailed ,
        resendVerifySuccess , resendVerifyFailed
    }
})

export default verifySlice;