import React from 'react';
import {Link} from "react-router-dom";
import DatePicker from "react-multi-date-picker";
import InputIcon from "react-multi-date-picker/components/input_icon";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function User() {
    return (
        <>
            <section className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between p-2">
                <section className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                    <div className="col-12 d-flex flex-wrap justify-content-end align-items-center p-2">
                        <h5 className="col-12 border-bottom rounded p-2">کاربران</h5>
                        <button className="col-5 col-xl-1 mb-1 btn btn-info d-flex align-items-center justify-content-center font-16-rem text-white">
                            <i className="icon icon-Add1 center "></i>
                            جدید
                        </button>
                        <button className="col-5 mx-1 col-xl-1 mb-1 btn btn-success d-flex align-items-center justify-content-center font-16-rem text-white">
                            <i className="icon icon-Document-Add-1 center "></i>
                            خروجی اکسل
                        </button>
                    </div>
                </section>
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
                                        <input type="text" name="" id="status" className="col-12 p-2 border my-2"/>
                                    </label>
                                    <label htmlFor="Payment-Method" className="col-12 col-md-4 p-2">
                                        روش پرداخت
                                        <input type="text" name="" id="Payment-Method"
                                               className="col-12 border p-2 my-2"/>
                                    </label>
                                    <label htmlFor="seller" className="col-12 col-md-4 p-2">
                                        فروشنده

                                        <select id="seller" className="col-12 p-2 border rounded my-2">
                                            <option value="اتخاب کنید " selected>انتخاب کنید</option>
                                        </select>
                                    </label>

                                    <div className="col-12 d-flex flex-wrap  align-content-center">
                                        <span className="col-12 d-flex p-2"> تاریخ</span>
                                        <div className="col-12 col-md-5  rounded my-2 p-2" id="app">
                                            {/*<DatePicker*/}
                                            {/*    value={values}*/}
                                            {/*    onChange={setValues}*/}
                                            {/*    range*/}
                                            {/*    render={<InputIcon/>}*/}
                                            {/*    calendar={persian}*/}
                                            {/*    locale={persian_fa}*/}
                                            {/*    calendarPosition="bottom-right"*/}
                                            {/*/>*/}
                                        </div>
                                    </div>
                                    <div className="col-12 p-3 center ">
                                        <button
                                            className="col-3 col-md-1 m-2 btn text-white bg-green-success font-16-rem">فیلتر
                                        </button>
                                        <button className="col-5 col-md-1 m-2 btn text-white bg-danger font-16-rem">حذف
                                            فیلتر
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="col-12 d-flex flex-wrap p-2">
                    <div className="col-12 bg-zebra d-flex justify-content-between align-content-center p-2 rounded-pill">
                        <div className="col-10 col-lg-6   d-flex justify-content-start align-items-center">
                            <ul className="col-8 col-lg-6 p-2 rounded-pill overflow-visible  shadow bg-white bg-opacity-25 d-flex justify-content-evenly   m-0 p-0 list-unstyled">
                                <li className="center  font-16 m-0">
                                    <Link to="/" className="col-1 p-1 rounded-circle center text-decoration-none icon icon-Right-1"></Link>
                                </li>
                                <li className="center   font-16 m-0">
                                    <Link to="/" className=" rounded-circle center text-decoration-none ">1</Link>
                                </li>
                                <li className="center   font-16 m-0">
                                    <Link to="/" className=" rounded-circle center text-decoration-none ">2</Link>
                                </li>
                                <li className="center   font-16 m-0">
                                    <Link to="/" className=" rounded-circle center text-decoration-none ">3</Link>
                                </li>
                                <li className="center  font-16 m-0">
                                    <Link to="/" className="col-1 p-1 rounded-circle center text-decoration-none text-decoration-none icon icon-Left-1"></Link>
                                </li>
                            </ul>

                        </div>
                        <label className="col-2 p-2 font-14 d-flex justify-content-center align-items-center">
                            <select className="col-12 p-1 rounded">
                                <option value="انتخاب کنید">انتخاب کنید</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </label>
                    </div>
                    <div className="col-12 d-flex justify-content-between align-items-center p-2 flex-wrap">
                        <span className="d-flex col-12 col-md-3 ">  تعداد کاربران : (12453)  </span>
                        <form className="col-12 col-md-3 rounded p-1 d-flex ">
                            <label htmlFor="search"
                                   className="position-relative d-flex flex-row-reverse col-12">
                                <input type="search" name="search" id="search" className="font-14 col-12 col-md-9 p-2 border "
                                       placeholder="جستجو"/>
                                <button
                                    className="center h-100 bg-default border-none rounded position-absolute p-3 ">
                                    <i className="icon icon-Search-2 font-14"></i></button>
                            </label>
                        </form>
                    </div>
                </section>
                <section className="col-12 d-flex justify-content-center align-items-center flex-wrap  rounded">
                    {/*menu*/}
                    <div className="col-12  d-flex justify-content-between align-items-center border-bottom rounded-pill p-2 px-4">
                        <div className="col-3 text-center p-2">کاربر</div>
                        <div className="col-4 text-center p-2">عضویت</div>
                        <div className="col-2 text-center p-2">وضعیت</div>
                        <div className="col-3 text-center p-2">عملیات</div>
                    </div>
                    {/*list*/}
                    <div className="col-12 d-flex justify-content-between flex-wrap">
                        <div className="col-12 my-1 d-flex justify-content-between align-items-center border-bottom shadow-sm rounded p-2 ">
                            <div className="col-3 d-flex flex-wrap justify-content-center align-content-center p-2">
                                <div className="font-FaNum-Medium text-center"> حکیمه خواجه
                                    <br/>
                                    09037550610
                                </div>
                            </div>
                            <div className="col-4 text-center font-FaNum-Medium p-2">1401/06/20 <br/> 09:30</div>
                            <div className="col-2 text-center p-2"> فعال </div>
                            <div className="col-3 d-flex flex-wrap justify-content-evenly text-center p-2">
                                <Link to="/show-user" className="btn btn-secondary border-none text-white font-16-rem">مشاهده</Link>
                                <Link to="/edit-user" className="btn btn-warning border-none text-white font-16-rem">ویرایش</Link>
                                <Link to="/open-user" className="btn btn-success text-white border-none  font-16-rem">ورود</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}

export default User;