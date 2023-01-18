import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    token: null,
}

const loginSuccess = (state, action) => {
    state.token = action.payload;
}
const logoutSuccess = (state, action) => {
    state.token = null;
}


const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginSuccess,
        logoutSuccess
    }
});


export default slice


