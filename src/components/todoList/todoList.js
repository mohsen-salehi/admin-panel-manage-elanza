import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import newTodoListAction from "../../redux/actions/todoList/newTodoListAction";
import deleteTodoListAction from "../../redux/actions/todoList/deleteTodoListAction";
import updateTodoListAction from "../../redux/actions/todoList/updateTodoListAction";

function TodoList() {

    const [content, setContent] = useState('')
    const [anime , setAnime ] = useState('anime')
    const todoLists = useSelector(state => state.todoList.items)
    const dispatch = useDispatch();
    // add_task

    const addTask = () => {
        if (content.length > 1) {
            dispatch(newTodoListAction({
                id: new Date().getSeconds(), content, status: 'DOING'
            }))

        } else {
            alert("null")
        }
        setContent('')
    }

    return (<>
        <div
            className={`${anime} col-11 col-md-4 col-xxl-3 bg-white  position-fixed  rounded p-2 m-2 m-md-5 d-flex justify-content-center align-content-start flex-wrap shadow todo-list overflow-auto anime `}>
            <h5 className="col-12 text-center p-2 pt-3 bg-opacity-25 bg-default rounded-pill "> Todo List </h5>

            <div
                className="col-12 d-flex justify-content-center align-content-center py-2 pb-4 rounded border-bottom flex-wrap">
                <label className="col-12 b d-flex flex-wrap justify-content-around align-items-center">

                    <textarea onChange={e => setContent(e.target.value)} value={content} dir="ltr" rows="1"
                              className="d-flex p-md-3 py-2 col-9 " name="task" id="task"
                              placeholder="Task...">{content}
                    </textarea>
                    <button className="col-9 mt-1 mt-md-0 col-md-2 py-md-3 btn border-0 hover bg-default bg-opacity-25 shadow-sm"
                            id="add_task" onClick={addTask}>Add
                    </button>
                </label>
            </div>
            {/*tasks*/}
            <ul id="stage" className="col-12 mt-1 list-unstyled p-1 d-flex justify-content-center align-items-center p-0 m-0 flex-wrap  ">
                {
                    todoLists?.map(item => (
                        <li key={item.id} dir="ltr"
                            className="col-12 shadow-sm p-2 rounded  d-flex justify-content-between align-items-center p-0 m-0 my-2">
                                <span className={`${item.status==='DONE' && 'text-decoration-line-through'} col d-flex p-2`}>
                                    {
                                        item.content
                                    }
                                </span>
                            <i onClick={e => dispatch(updateTodoListAction(item.id))} className={`${item.status === "DONE" && 'd-none'} icon icon-Tick alert alert-warning p-2 mx-1 d-flex cursor`}></i>
                            <i onClick={e => dispatch(deleteTodoListAction(item.id))}
                               className="icon icon-Delete-2  alert alert-danger p-2 mx-1 d-flex cursor"></i>

                        </li>
                    ))
                }
            </ul>
            <i onClick={e=> anime === 'anime' ? setAnime('todoListAnime') : setAnime('anime')} className="display-6 rounded-circle icon icon-Add-Category2  p-1   position-fixed shadow-lg todoBtn cursor"></i>
        </div>
    </>);
}

export default TodoList;