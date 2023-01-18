import todoItemSlice from "../../slices/todoItem/todoItemSlice";
import cacheProvider from "../../../providers/cacheProvider";

const {update} = todoItemSlice.actions;



const addItemAction = (todo) => (dispatch , getState) => {
    let oldItems= getState().todoItem.items ;
    let updateItems = [todo , ...oldItems] ;

    cacheProvider.set("todoItem" , updateItems)

    dispatch(update(updateItems))

}

export default addItemAction ;
