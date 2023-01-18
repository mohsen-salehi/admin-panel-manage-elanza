import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    status : false ,
    tickets : [] ,
    ticket : []
}


const ticketList = (state = initialState , action) => {
    state.status = true ;
    state.tickets = action.payload
}
const ticketSingle = (state = initialState , action) => {
    state.status = true ;
    state.ticket = action.payload
}

const ticketSlice = createSlice({
    name : "ticket" , initialState , reducers :{
        ticketList , ticketSingle
    }
})

export default ticketSlice ;