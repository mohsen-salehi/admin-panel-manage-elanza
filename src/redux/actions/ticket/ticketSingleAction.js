import ticketSlice from "../../slices/ticket/ticketSlice";
import httpProvider from "../../../providers/httpProvider";
import ExceptionProvider from "../../../providers/ExceptionProvider";

const {ticketSingle} = ticketSlice.actions;


const ticketSingleAction = (id) => async (dispatch , getState)=> {
    try {
        const headers = httpProvider.setTokenHeader(getState)
        const response =await httpProvider.get('manage/ticket/'+ id , headers)
        dispatch(ticketSingle(response?.data?.data))
    }catch (e){
        ExceptionProvider.handle(e,e?.response?.status)
        throw e
    }
}

export default ticketSingleAction;