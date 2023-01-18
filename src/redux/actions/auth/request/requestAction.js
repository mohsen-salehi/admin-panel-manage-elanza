import requestSlice from "../../../slices/auth/request/requetSlice";
import httpProvider from "../../../../providers/httpProvider";
import ExceptionProvider from "../../../../providers/ExceptionProvider";
import ToastComponent from "../../../../components/public/toastComponent";

const {success , failed} = requestSlice.actions ;


const requestAction = (userInfo) => async dispatch => {
    try {
        const response = await httpProvider.post("auth/request" , userInfo)
        let message = response?.data?.messages?.toString()
        ToastComponent(message , "success")
        dispatch(success(response?.data))
    }catch (e){
        ExceptionProvider.handle(e, e.response.status)
        dispatch(failed({messages: e.messages}))
    }
}

export default requestAction;