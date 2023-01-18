import colorPalletSlice from "../../slices/colorPallet/colorPalletSlice";
import cacheProvider from "../../../providers/cacheProvider";

const {change} = colorPalletSlice.actions

const addColorAction = (theme) => (dispatch ) =>{
    cacheProvider.set('theme' , theme)
    dispatch(change(theme))
}
export default addColorAction;