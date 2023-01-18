import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import addItemAction from "../../redux/actions/todoItem/addItemAction";
import deleteTodoItemAction from "../../redux/actions/todoItem/deleteItemAction";

function TodoItem() {
    const [inputValue, setInputValue] = useState('')
    const [content , setContent] = useState({
        ProductVarietyUnitIdentifier: [] ,
        ProductSpecialOfferVarietyUnitIdentifier : [] ,
        discountPercent : []
    })

    const todoItem = useSelector(state => state.todoItem.items)
    const dispatch = useDispatch()

    const addTodoItem = () => {
        if (
            content.ProductVarietyUnitIdentifier.length > 0 ||
            content.ProductSpecialOfferVarietyUnitIdentifier.length > 0 ||
            content.discountPercent.length > 0
        ){
            dispatch(addItemAction({
                id : new Date().getSeconds() ,
                content ,
                status : "DOING"
            }))
        }else{
            alert("null")
        }
        setContent({
            ProductVarietyUnitIdentifier: [] ,
            ProductSpecialOfferVarietyUnitIdentifier : [] ,
            discountPercent : []
        })
    }






    return (
        <section className="col-12 flex-wrap p-2 d-flex justify-content-center align-items-center">
            <div className="col-12 flex-wrap p-3 rounded d-flex justify-content-between align-items-center bg-dark bg-opacity-10 my-2">
                <label className="col-12 col-xl-5">
                    شناسه واحد تنوع محصول
                    <input type="text" name="offer" value={content.ProductVarietyUnitIdentifier} id="offer" onInput={(e) => {
                        setContent({
                            ProductVarietyUnitIdentifier: [e.target?.value] ,
                            ProductSpecialOfferVarietyUnitIdentifier : [...content.ProductSpecialOfferVarietyUnitIdentifier] ,
                            discountPercent : [...content.discountPercent]
                        })
                    }}
                           className={`${inputValue.length > 0 ? `border` : `border  border-danger`} col-12 p-2 my-2`}/>
                </label>
                <label className="col-12 col-xl-4">
                    شناسه واحد تنوع پیشنهاد ویژه محصول
                    <input type="text" name="offer" id="offer" value={content.ProductSpecialOfferVarietyUnitIdentifier} onInput={(e) => {
                        setContent({
                            ProductVarietyUnitIdentifier: [...content.ProductVarietyUnitIdentifier] ,
                            ProductSpecialOfferVarietyUnitIdentifier : [e.target?.value] ,
                            discountPercent : [...content.discountPercent]
                        })
                    }}
                           className={`${inputValue.length > 0 ? `border` : `border  border-danger`} col-12 p-2 my-2`}/>
                </label>
                <label className="col-12 col-xl-2">
                    درصد تخفیف
                    <input type="text" name="offer" id="offer" value={content.discountPercent} onInput={(e) => {
                        setContent({
                            ProductVarietyUnitIdentifier: [...content.ProductVarietyUnitIdentifier] ,
                            ProductSpecialOfferVarietyUnitIdentifier : [...content.ProductSpecialOfferVarietyUnitIdentifier] ,
                            discountPercent : [e.target.value]
                        })
                    }}
                           className={`${inputValue.length > 0 ? `border` : `border  border-danger`} col-12 p-2 my-2`}/>
                </label>
            </div>
            {
                todoItem.map((item , index)=> (
                    <div key={index} className="col-12 flex-wrap p-3 rounded d-flex justify-content-between align-items-center bg-dark bg-opacity-10">
                        <label className="col-12 col-xl-5">
                            شناسه واحد تنوع محصول
                            <input type="text" name="offer" id="offer" value={item.content.ProductVarietyUnitIdentifier} onInput={(e) => {
                                setContent({
                                    ProductVarietyUnitIdentifier: [e.target?.value] ,
                                    ProductSpecialOfferVarietyUnitIdentifier : [...content.ProductSpecialOfferVarietyUnitIdentifier] ,
                                    discountPercent : [...content.discountPercent]
                                })
                            }}
                                   className={`${inputValue.length > 0 ? `border` : `border  border-danger`} col-12 p-2 my-2`}/>
                        </label>
                        <label className="col-12 col-xl-3">
                            شناسه واحد تنوع پیشنهاد ویژه محصول
                            <input type="text" name="offer" id="offer" value={item.content.ProductSpecialOfferVarietyUnitIdentifier} onInput={(e) => {
                                setContent({
                                    ProductVarietyUnitIdentifier: [...content.ProductVarietyUnitIdentifier] ,
                                    ProductSpecialOfferVarietyUnitIdentifier : [e.target?.value] ,
                                    discountPercent : [...content.discountPercent]
                                })
                            }}
                                   className={`${inputValue.length > 0 ? `border` : `border  border-danger`} col-12 p-2 my-2`}/>
                        </label>
                        <label className="col-12 col-xl-2">
                            درصد تخفیف
                            <input type="text" name="offer" id="offer" value={item.content.discountPercent} onInput={(e) => {
                                setContent({
                                    ProductVarietyUnitIdentifier: [...content.ProductVarietyUnitIdentifier] ,
                                    ProductSpecialOfferVarietyUnitIdentifier : [...content.ProductSpecialOfferVarietyUnitIdentifier] ,
                                    discountPercent : [e.target.value]
                                })
                            }}
                                   className={`${inputValue.length > 0 ? `border` : `border  border-danger`} col-12 p-2 my-2`}/>
                        </label>
                        <label className="col-1 p-2 d-flex justify-content-center align-items-center">
                            <button className="btn btn-danger icon icon-Delete-1" onClick={()=> dispatch(deleteTodoItemAction(item?.id))}></button>
                        </label>
                    </div>
                ) )
            }

            <div className="col-12 d-flex flex-row-reverse p-2">
                <button onClick={addTodoItem} className="btn btn-success">
                    افزودن
                </button>
            </div>

        </section>
    );
}

export default TodoItem;