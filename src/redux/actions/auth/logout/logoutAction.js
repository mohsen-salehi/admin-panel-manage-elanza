import logoutSlice from "../../../slices/auth/logout/logoutSlice";
import httpProvider from "../../../../providers/httpProvider";
import cacheProvider from "../../../../providers/cacheProvider";


const {logout} = logoutSlice.actions;

const logoutAction = () => async (dispatch , getState) => {

    try {
        let headers = httpProvider.setTokenHeader(getState)
        let response = await httpProvider.get("auth/logout" , headers)
        if (response?.statusText === "OK") {
            cacheProvider.clear("Token")
            dispatch(logout())
        }
    }catch (err) {
        throw err
    }
}
export default logoutAction;