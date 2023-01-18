import orderSlice from "../../slices/order/orderSlice";
import httpProvider from "../../../providers/httpProvider";
import exceptionProvider from "../../../providers/ExceptionProvider";

const {order} = orderSlice.actions;


const orderAction = (unique_id) => async (dispatch , getState) => {
    try {
        const headers = httpProvider.setTokenHeader(getState)
        const response = await httpProvider.get(`manage/order/${unique_id}` , headers)
        dispatch(order(response?.data?.data))
    }catch (err){
        exceptionProvider.handle(err , err.response.status)
    }
}

export default orderAction;