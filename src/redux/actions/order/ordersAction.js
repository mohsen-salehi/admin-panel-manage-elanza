import orderSlice from "../../slices/order/orderSlice";
import httpProvider from "../../../providers/httpProvider";
import ExceptionProvider from "../../../providers/ExceptionProvider";


const {orderList} = orderSlice.actions ;

const orderListAction = (page = 1) => async (dispatch , getState) => {
    try {
        let headers = httpProvider.setTokenHeader(getState) ;
        let response = await httpProvider.get(`manage/order?=page${page}` , headers);
        dispatch(orderList(response.data.data))
    }catch (err){
        ExceptionProvider.handle(err,err.response?.status)
        dispatch(orderList(null))
    }
}

export default orderListAction;