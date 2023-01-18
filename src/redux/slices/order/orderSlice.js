import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    orderList : [],
    order : [] ,
    status : false ,
    filterOrder : []
}

const orderList = (state= initialState , action) => {
    state.status = true
    state.orderList = action.payload
}

const order = (state = initialState , action ) => {
    state.status = true
    state.order = action.payload
}
const filterOrder = (state = initialState , action) => {
    state.orderList = action.payload
}
const filterClear = (state = initialState )=> {
    state.filterOrder = []
}

const orderSlice = createSlice({
    name : "order",
    initialState,
    reducers : {
        orderList ,
        order ,
        filterOrder ,
        filterClear
    }
})

export default orderSlice ;