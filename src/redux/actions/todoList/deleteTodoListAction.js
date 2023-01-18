import todoListSlice from "../../slices/todoList/todoListSlice";
import cacheProvider from "../../../providers/cacheProvider";

const {update} = todoListSlice.actions;

const deleteTodoListAction = (todoId) => (dispatch, getState) => {

    let oldLists = getState().todoList.items
    let updatedItems = oldLists.filter(todo => todo.id !== todoId)

    cacheProvider.set('todoList', updatedItems)

    dispatch(update(updatedItems))
}

export default deleteTodoListAction;