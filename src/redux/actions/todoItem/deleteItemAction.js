import todoItemSlice from "../../slices/todoItem/todoItemSlice";
import cacheProvider from "../../../providers/cacheProvider";

const {update} = todoItemSlice.actions;

const deleteTodoItemAction = (todoId) => (dispatch, getState) => {

    let oldItem = getState().todoItem.items
    let updatedItems = oldItem.filter(todo => todo.id !== todoId)

    cacheProvider.set('todoItem', updatedItems)

    dispatch(update(updatedItems))
}

export default deleteTodoItemAction;