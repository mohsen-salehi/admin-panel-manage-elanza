import verifySlice from "../../../slices/auth/verify/verifySlice";
import ExceptionProvider from "../../../../providers/ExceptionProvider";
import HttpProvider from "../../../../providers/httpProvider";
import cacheProvider from "../../../../providers/cacheProvider";

const {verifySuccess , verifyFailed } = verifySlice.actions ;



const verifyAction = (verifyData) => async dispatch => {
    try {
        const response = await HttpProvider.post("auth/verify", verifyData , {})
        const {token , user} = response?.data?.data
        cacheProvider.set("Token" , token)
        dispatch(verifySuccess({token , user}))
    }catch (e){
        ExceptionProvider.handle(e , e.response.message)
        dispatch(verifyFailed())
    }
}

export default verifyAction;
