import verifySlice from "../../../slices/auth/verify/verifySlice";
import httpProvider from "../../../../providers/httpProvider";
import ExceptionProvider from "../../../../providers/ExceptionProvider";

const {resendVerifyFailed , resendVerifySuccess} = verifySlice.actions

const resendVerifyAction = () => async (dispatch , getState )=> {
    try {
        let headers = httpProvider.setTokenHeader(getState)
        const response = await  httpProvider.get("auth/resend-verification" , headers)
        dispatch(resendVerifySuccess(response?.data?.data))
    }catch (err) {
        ExceptionProvider.handle(err , err?.response?.status)
        dispatch(resendVerifyFailed())
    }
}

export default resendVerifyAction;


