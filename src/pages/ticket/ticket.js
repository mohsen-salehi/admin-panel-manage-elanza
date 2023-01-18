import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import ticketListAction from "../../redux/actions/ticket/ticketListAction";
import TicketListComponent from "./ticketListComponent";

function Ticket() {

    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(ticketListAction())
    },[])
    const {tickets} = useSelector(state => state.ticket)
    return (<>
        <div className="col-12 p-2">
            <div className="col-12 d-flex justify-content-center mt-4">
                <h3>
                    لیست تیکت ها
                </h3>
            </div>
            <section className="col-12  font-14">
                <div className="accordion col-12 font-medium text-submit-black1  "
                     id="accordionPanelsStayOpenExample">
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
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse "
                             aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="accordion-body">
                                <form
                                    className="col-12 d-flex flex-wrap justify-content-between align-content-around">
                                    <label htmlFor="status" className="col-12 col-md-4 p-2">
                                        وضعیت
                                        <input type="text" name="" id="status" className="col-12 p-2 border my-2"/>
                                    </label>
                                    <div className="col-6 d-flex flex-wrap  align-content-center">
                                        <span className="col-12 d-flex "> تاریخ</span>
                                        <div className="col-12 col-md-5 pt-1 rounded " id="app">

                                        </div>
                                    </div>
                                    <div className="col-12 p-3 center ">
                                        <button
                                            className="col-3 col-md-1 m-2 btn text-white bg-green-success font-16-rem">فیلتر
                                        </button>
                                        <button
                                            className="col-5 col-md-1 m-2 btn text-white bg-danger font-16-rem">حذف
                                            فیلتر
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12  border-top  p-2">
                    <div className="col-12 d-flex justify-content-between p-2 flex-wrap">
                        <span className="d-flex col-12 col-md-3 border"> </span>
                        <form className="col-12 col-md-3 rounded p-1 d-flex ">
                            <label htmlFor="search"
                                   className="position-relative d-flex flex-row-reverse col-12">
                                <input type="search" name="search" id="search"
                                       className="font-14 col-12 col-md-9 p-2 border "
                                       placeholder="جستجو"/>
                                <button
                                    className="center h-100 bg-default border-none rounded position-absolute p-3 ">
                                    <i className="icon icon-Search-2 font-14"></i></button>
                            </label>
                        </form>
                    </div>
                    <div
                        className="col-12 d-none d-md-flex justify-content-between p-3 rounded mt-2 border-bottom ">
                        <div className="col-2 d-flex justify-content-center">کاربر</div>
                        <div className="col-3 d-flex justify-content-center">عنوان</div>
                        <div className="col-2 d-flex justify-content-center">وضعیت</div>
                        <div className="col-2 d-flex justify-content-center">آخرین به روزرسانی</div>
                        <div className="col-1 d-flex justify-content-center">عملیات</div>
                    </div>
                    <div className="col-12 d-flex d-md-none justify-content-center p-3 rounded mt-2 border-bottom ">
                        لیست تیکت ها
                    </div>
                   <TicketListComponent data={tickets}/>
                </div>
            </section>
        </div>

    </>);
}

export default Ticket;