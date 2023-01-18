import React, {useState} from 'react';
import DatePickerManual from "../../../components/DatePicker/DatePickerManual";
import {useSearchParams} from "react-router-dom";
import SelectOption from "../../../components/selectReact/select";
import {useNavigate, useParams} from "react-router";
import {useDispatch} from "react-redux";
import ordersFilterAction from "../../../redux/actions/order/ordersFilterAction";

function OrdersFilterComponent() {
    const [date, setDate] = useState([])
    const [searchParams , setSearchParams] = useSearchParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const log = useParams()



    const filterHandel = (e) => {
        e.preventDefault()
        // setSearchParams({state : "CONFIRMED" , order_item_state : "CONFIRMED" , pay_type : "CARD_TO_CARD" , seller_id_manage : "125" , start_at : "2023-01-2" , end_at : "2023-01-2"})
        dispatch(ordersFilterAction(
            {state : "CONFIRMED" , order_item_state : "CONFIRMED" , pay_type : "CARD_TO_CARD" , seller_id_manage : "125" , start_at : "2023-01-2" , end_at : "2023-01-2"}
        ))
        console.log(log)
    }

    const getParams = (e) => {
        e.preventDefault()
        navigate("/order")
    }


    return (
        <div className="accordion col-12 font-medium text-submit-black1  " id="accordionPanelsStayOpenExample">
            <div className="accordion-item  my-3 border-none shadow rounded-manual">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                    <button
                        className="bg-default text-white col-12 accordion-button rounded-manual d-flex justify-content-evenly collapsed px-2 "
                        type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo"
                        aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        <span className="text-light"> فیلتر ها</span>
                    </button>
                </h2>
                <div  id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse " aria-labelledby="panelsStayOpen-headingTwo">
                    <div className="accordion-body">
                        <form
                            className="col-12 d-flex flex-wrap justify-content-between align-content-around">
                            <label htmlFor="status" className="col-12 col-md-4 p-2">
                                وضعیت
                               <SelectOption placeholder={"وضعیت سفارش"} />
                            </label>
                            <label htmlFor="Payment-Method" className="col-12 col-md-4 p-2">
                                روش پرداخت
                                <SelectOption placeholder={"روش پرداخت"} />
                            </label>
                            <label htmlFor="seller" className="col-12 col-md-4 p-2">
                                فروشنده
                                <SelectOption placeholder={"فروشنده"} />
                            </label>
                            <label htmlFor="seller-status" className="col-12 col-md-4 p-2">
                                وضعیت ایتم های سفارش
                                <SelectOption placeholder={"وضعیت ایتم های سفارش"} />
                            </label>
                                <div className="col-12 col-lg-4 d-flex flex-wrap  align-content-center">
                                    <span className="col-12 d-flex px-2"> از تاریخ </span>
                                    <div className="col-12  rounded p-2" id="app">
                                        <DatePickerManual setDate={setDate}/>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4 d-flex flex-wrap  align-content-center">
                                    <span className="col-12 d-flex px-2"> تا تاریخ</span>
                                    <div className="col-12  rounded p-2" id="app">
                                        <DatePickerManual setDate={setDate}/>
                                    </div>
                                </div>

                            <div className="col-12 p-3 center ">
                                <button onClick={filterHandel} className="col-3 col-md-1 m-2 btn text-white bg-green-success font-16-rem">فیلتر
                                </button>
                                <button onClick={getParams} className="col-5 col-md-1 m-2 btn text-white bg-danger font-16-rem">حذف
                                    فیلتر
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrdersFilterComponent;