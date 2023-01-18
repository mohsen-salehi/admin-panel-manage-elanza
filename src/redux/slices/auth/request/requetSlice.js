import {createSlice} from "@reduxjs/toolkit";

const initialState = {
     status : false ,
     messages : null
}

const success = (state = initialState , action) => {
     state.status = action.payload.status
     state.messages = action.payload.messages
}

const failed = (state = initialState , action) => {
     state.status = false
     state.messages = action.payload.messages
}

const requestSlice = createSlice({
     name : "request" ,
     initialState ,
     reducers : {
          success , failed
     }
})

export default requestSlice;
