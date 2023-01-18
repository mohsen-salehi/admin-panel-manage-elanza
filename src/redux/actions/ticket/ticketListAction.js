import ticketSlice from "../../slices/ticket/ticketSlice";
import httpProvider from "../../../providers/httpProvider";
import ExceptionProvider from "../../../providers/ExceptionProvider";

const {ticketList} = ticketSlice.actions ;



const ticketListAction = () => async (dispatch , getState) => {
    try {
        const headers = httpProvider.setTokenHeader(getState)
        const response = await httpProvider.get("manage/ticket" , headers)
        dispatch(ticketList(response?.data?.data))
    }catch (e){
        ExceptionProvider.handle(e , e?.response?.status)
        throw e
    }
}

export default ticketListAction ;