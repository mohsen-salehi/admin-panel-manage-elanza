import {configureStore} from "@reduxjs/toolkit";
import todoListSlice from "./redux/slices/todoList/todoListSlice";
import colorPalletSlice from "./redux/slices/colorPallet/colorPalletSlice";
import todoItemSlice from "./redux/slices/todoItem/todoItemSlice";
import requestSlice from "./redux/slices/auth/request/requetSlice";
import verifySlice from "./redux/slices/auth/verify/verifySlice";
import orderSlice from "./redux/slices/order/orderSlice";
import ticketSlice from "./redux/slices/ticket/ticketSlice";


export const store = configureStore({
    reducer: {
        todoList : todoListSlice.reducer,
        todoItem : todoItemSlice.reducer,
        theme:colorPalletSlice.reducer,

        request : requestSlice.reducer,
        verify : verifySlice.reducer,

        order : orderSlice.reducer ,
        ticket : ticketSlice.reducer


    },
    devTools: true
})