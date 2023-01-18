import todoItemSlice from "../../slices/todoItem/todoItemSlice";
import cacheProvider from "../../../providers/cacheProvider";

const {update} = todoItemSlice.actions;



const updateItemAction = (todoId) => (dispatch , getState) => {

    let oldItems= getState().todoItem.items ;

    let itemMustBeUpdated = oldItems.find(todo => todo.id === todoId)
    let oldItemsWithout = oldItems.filter(todo => todo.id !== todoId)

    let updateItems = [todoId , ...oldItems] ;

    cacheProvider.set("todoItem" , updateItems)

    dispatch(update)

}

export default updateItemAction ;
