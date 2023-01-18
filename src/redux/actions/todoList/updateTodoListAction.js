import todoListSlice from "../../slices/todoList/todoListSlice";
import cacheProvider from "../../../providers/cacheProvider";

const {update} = todoListSlice.actions;

const updateTodoListAction = (todoID) => (dispatch, getState) => {

    let oldLists = getState().todoList.items


    let itemMustBeUpdated = oldLists.find(todo => todo.id === todoID)
    let oldItemsWithout = oldLists.filter(todo => todo.id !== todoID)
    itemMustBeUpdated = {...itemMustBeUpdated, status: 'DONE'}

    oldItemsWithout.push(itemMustBeUpdated)

    cacheProvider.set('todoList', oldItemsWithout)

    dispatch(update(oldItemsWithout))
}

export default updateTodoListAction;