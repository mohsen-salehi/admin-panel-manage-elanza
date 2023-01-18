import todoListSlice from "../../slices/todoList/todoListSlice";
import cacheProvider from "../../../providers/cacheProvider";

const {update} = todoListSlice.actions;

const newTodoListAction = (todo) => (dispatch, getState) => {

    let oldLists = getState().todoList.items
    let updatedItems = [todo,...oldLists];

    cacheProvider.set('todoList', updatedItems)

    dispatch(update(updatedItems))
}

export default newTodoListAction;