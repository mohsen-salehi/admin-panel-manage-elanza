import React, {useState} from 'react';
import DatePicker from "react-multi-date-picker";
import InputIcon from "react-multi-date-picker/components/input_icon";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DateObject from "react-date-object";
import {Link} from "react-router-dom";

function Logs() {

    const [selectedOption, setSelectedOption] = useState('');
    const [values, setValues] = useState([
        new DateObject({ calendar: persian }).subtract(4, "days"),
        new DateObject({ calendar: persian }).add(4, "days")
    ])

    return (
        <div className="col-12 p-2">
            <div className="col-12 d-flex justify-content-center mt-4 flex-wrap">
                <h5 className="col-12 p-3 border-bottom rounded-3">
                    لیست لاگ‌ها
                </h5>
                <div className="col-12 d-flex justify-content-end align-items-center font-FaNum-Medium ">
                    <Link className="btn font-16-rem btn-outline-secondary" to="/">ذخیره موارد جدید (38)</Link>
                </div>
            </div>
            <section className="col-12  font-14 ">
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
                <div className="col-12 shadow border rounded p-1">
                    <h6 className="col-12 flex-wrap bg-default p-2 rounded d-flex justify-content-between align-items-center text-white ">
                        <span className="p-2">تعداد گزارشات: (1443)</span>
                    </h6>
                    <div
                        className="col-12 d-none d-md-flex align-items-center justify-content-between p-3 rounded mt-2 border border-end-0 border-start-0 ">
                        <div className="col-2 d-flex justify-content-center">تاریخ</div>
                        <div className="col-3 d-flex justify-content-center">کاربر</div>
                        <div className="col-2 d-flex justify-content-center">موضوع</div>
                        <div className="col-2 d-flex justify-content-center">عملیات</div>
                        <div className="col-1 d-flex justify-content-center">دیتا</div>
                    </div>
                    <div className="col-12 d-flex d-md-none justify-content-center p-3 rounded mt-2 border-bottom ">
                        لیست لاگ ها
                    </div>
                    <div
                        className="col-12 d-flex flex-wrap  justify-content-between p-3 my-2 rounded shadow-sm border-bottom font-14 font-FaNum-Medium">
                        <div
                            className="col-12 col-md-2 d-flex flex-wrap align-items-center justify-content-between justify-content-md-center">
                            <span className="col-3 d-md-none d-flex justify-content-start ">تاریخ : </span>
                            <div className=" center flex-wrap">
                               -
                            </div>
                        </div>
                        <div
                            className="col-12 col-md-3  d-flex justify-content-xl-center justify-content-between flex-wrap   my-2">
                            <span className="col-3 d-md-none d-flex justify-content-start ">کاربر : </span>
                            <span className=" d-flex justify-content-center text-justify p-2 ">-</span>
                        </div>
                        <div className="col-12  col-md-2   flex-wrap center ps-2 ">
                            <span className="col-3 d-md-none d-flex justify-content-start ">موضوع : </span>
                            <span
                                className="col col-md-12  d-flex justify-content-end justify-content-md-center"> - </span>
                        </div>
                        <div className="col-12 col-md-1 d-flex center">
                            {/*<Link*/}
                            {/*    className="font-14-rem my-1 center btn col-7  bg-default border-0 "*/}
                            {/*    to="">*/}
                            {/*    <button className="border-0 bg-transparent text-white">*/}
                            {/*        <Link className="text-decoration-none " to="/see-ticket"> مشاهده</Link>*/}
                            {/*    </button>*/}
                            {/*</Link>*/}
                            -
                        </div>
                        <div
                            className="col-12  col-md-2  d-flex justify-content-between justify-content-xl-center my-1 flex-wrap  ps-2 ">
                                <span
                                    className="col-3 d-md-none d-flex justify-content-start "> دیتا   : </span>
                           -
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default Logs;