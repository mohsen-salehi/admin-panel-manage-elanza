import React, {useState} from 'react';
import {Link} from "react-router-dom";

import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import DateObject from "react-date-object";
import DatePicker from "react-multi-date-picker";
import InputIcon from "react-multi-date-picker/components/input_icon"

function StoresList() {

    const [selectedOption, setSelectedOption] = useState('');
    const [values, setValues] = useState([
        new DateObject({ calendar: persian }).subtract(0, "days"),
        new DateObject({ calendar: persian }).add(0, "days")
    ])

    return (
        <>
                    <div className="col-12 d-flex flex-wrap justify-content-between align-items-center p-2">
                        <h4 className="py-3 py-md-2">
                            فروشگاه ها
                        </h4>
                        <div className="d-flex  d-flex justify-content-between  ">
                            <button
                                className="d-flex mx-1 justify-content-center btn align-items-center text-info rounded-pill  border-info   border-top-0 border-bottom-0 font-16-rem">
                                <i className="icon icon-Add fw-bold px-1 m-0 "></i>
                                جدید
                            </button>
                            <button
                                className="btn mx-1 text-danger rounded-pill  border-danger   border-top-0 border-bottom-0  font-16-rem">لغو
                                قرارداد همه ی فروشگاه ها
                            </button>
                            <button
                                className="btn mx-1 text-secondary rounded-pill  border-secondary  border-top-0 border-bottom-0  font-16-rem">ارسال
                                قرارداد به همه ی فروشگاه ها
                            </button>
                        </div>
                    </div>
                    {/*filter*/}
                    <section className="col-12 p-2">
                        <div className="accordion  col-12 font-medium font-14 text-submit-black1  rounded-manual" id="accordionPanelsStayOpenExample">
                            <div className="accordion-item  my-3 border-none shadow rounded-manual">
                                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                    <button
                                        className="bg-default text-white col-12 accordion-button rounded-manual d-flex justify-content-between collapsed py-3 "
                                        type="button" data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseTwo"
                                        aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                        فیلتر ها
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse "
                                     aria-labelledby="panelsStayOpen-headingTwo">
                                    <div className="accordion-body">
                                        <form
                                            className="col-12 d-flex flex-wrap justify-content-between align-content-around">
                                            <label htmlFor="status" className="col-12 col-md-4 p-2">
                                                وضعیت
                                                <select name="status" id="status"
                                                        className="col-12 rounded p-2 my-2 outline-platinum1 border">
                                                    <option value="انتخاب کنید" selected disabled>انتخاب کنید</option>
                                                    <option value="در انتظار بررسی">در انتظار بررسی</option>
                                                    <option value="نایید شده">نایید شده</option>
                                                    <option value="رد شده">رد شده</option>
                                                </select>
                                            </label>
                                            <label htmlFor="Payment-Method" className="col-12 col-md-4 p-2">
                                                روش پرداخت
                                                <select name="method" id="method"
                                                        className="col-12 rounded p-2 my-2 outline-platinum1 border">
                                                    <option value="انتخاب کنید" selected disabled>انتخاب کنید</option>
                                                    <option value="فعال">فعال</option>
                                                    <option value="غیر فعال">غیر فعال</option>
                                                </select>
                                            </label>
                                            <label htmlFor="contract" className="col-12 col-md-4 p-2">
                                                وضعیت قرار داد
                                                <select name="contract" id="contract"
                                                        className="col-12 rounded p-2 my-2 outline-platinum1 border">
                                                    <option value="انتخاب کنید" selected disabled>انتخاب کنید</option>
                                                    <option value="تایید شده">تایید شده</option>
                                                    <option value="تایید نشده">تایید نشده</option>
                                                </select>
                                            </label>
                                            <label htmlFor="Query-status" className="col-12 col-md-6 p-2">
                                                وضعیت استعلام
                                                <select name="Query-status" id="Query-status"
                                                        className="col-12 rounded p-2 my-2 outline-platinum1 border">
                                                    <option value="انتخاب کنید" selected disabled>انتخاب کنید</option>
                                                    <option value="استعلام شده">استعلام شده</option>
                                                    <option value="استعلام نشده ">استعلام نشده</option>
                                                </select>
                                            </label>
                                            <label htmlFor="Approval-status" className="col-12 col-md-6 p-2">
                                                وضعیت تایید (تیک آبی)
                                                <select name="Approval-status" id="Approval-status"
                                                        className="col-12 rounded p-2 my-2 outline-platinum1 border">
                                                    <option value="انتخاب کنید" selected disabled>انتخاب کنید</option>
                                                    <option value="تایید شده ">تایید شده</option>
                                                    <option value="تایید نشده">تایید نشده</option>
                                                </select>
                                            </label>

                                            <div className="col-12 d-flex flex-wrap  align-content-center">
                                                <span className="col-12 d-flex p-2"> تاریخ</span>
                                                <div className="col-12 col-md-3  p-2 rounded" id="app">
                                                    <DatePicker
                                                        value={values}
                                                        onChange={setValues}
                                                        range
                                                        render={<InputIcon/>}
                                                        calendar={persian}
                                                        locale={persian_fa}
                                                        calendarPosition="bottom-right"
                                                    />

                                                </div>
                                            </div>
                                            <div className="col-12 p-3 center ">
                                                <button
                                                    className="col-3 col-md-1 m-2 btn text-white bg-green-success font-16-rem">فیلتر
                                                </button>
                                                <button className="col-4 col-md-1 m-2 btn text-white bg-danger font-16-rem">حذف
                                                    فیلتر
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-4 border-top p-2 rounded">
                            <div className="col-12 bg-zebra d-flex justify-content-between p-2 rounded-pill">
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
                                <label className="col-2  p-2 font-14 d-flex justify-content-center align-items-center">
                                    <select className="col-12 p-1 rounded">
                                        <option value="انتخاب کنید">انتخاب کنید</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </label>
                            </div>
                            <div className="col-12 d-flex justify-content-between p-2 flex-wrap">
                                <span className="d-flex col-12 col-md-3 ">  تعداد سفارش ها : (12453)  </span>
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
                            {/*title*/}
                            <div className="col-12 d-none d-md-flex justify-content-between p-2 py-3 rounded mt-2 border-bottom font-14">
                                <div className="col-1 d-flex justify-content-center py-2 rounded-pill">شناسه</div>
                                <div className="col-1 d-flex justify-content-center py-2 rounded-pill">لوگو</div>
                                <div className="col-1 d-flex justify-content-center py-2 rounded-pill">عنوان</div>
                                <div className="col-1 d-flex justify-content-center py-2 rounded-pill">نوع</div>
                                <div className="col-1 d-flex justify-content-center py-2 rounded-pill">وضعیت</div>
                                <div className="col-1 d-flex justify-content-center py-2 rounded-pill">فعال</div>
                                <div className="col-1 d-flex justify-content-center py-2 rounded-pill">قرار داد</div>
                                <div className="col-1 d-flex justify-content-center py-2 rounded-pill">رسمی</div>
                                <div className="col-1 d-flex justify-content-center py-2 rounded-pill">تاریخ ثبت</div>
                                <div className="col-3 d-flex justify-content-center py-2 rounded-pill"> عملیات</div>
                            </div>
                            {/*titleMobile*/}
                            <div className="col-12 d-flex d-md-none justify-content-center border-bottom rounded-pill py-3">لیست فروشگاه ها</div>
                                {/*list*/}
                                <div className="col-12 shadow-sm  d-flex flex-wrap p-1 py-2 py-md-0  px-2 my-2 rounded font-16-rem">
                                    <div  className="col-6 col-md-1 d-flex  align-items-center justify-content-start text-primary ">LNZO-552971119 </div>
                                    {/*logo*/}
                                    <div className="col-6 col-md-1 d-flex align-items-center flex-wrap py-1 justify-content-md-center justify-content-end">
                                        <figure
                                            className='center p-0 m-0 border border-3 col-5 col-md-7  overflow-hidden rounded-circle'>
                                            <img className="img-fluid"
                                                 src="https://static.elanza.com/media/brand/logo/2022/02/19/49984/a9a3e435538a7bf231cec2ae4e6c8b6e.jpg"
                                                 alt="ایلابرت"/>
                                        </figure>
                                    </div>
                                    <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                                        <span className="d-block d-md-none"> عنوان : </span>
                                        <span>ایلابرت</span>
                                    </div>
                                    <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                                        <span className="d-block d-md-none"> نوع : </span>
                                        <span>حقوقی</span>
                                    </div>
                                    <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                                        <span className="d-block d-md-none"> وضعیت : </span>
                                        <span>تایید شده <i className="alert p-0 alert-success icon icon-Tick"></i></span>
                                    </div>
                                    <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                                        <span className="d-block d-md-none"> فعال : </span>
                                        <span>
                                            <i className="icon icon-Tick border rounded-circle border-success font-16 p-1 p-md-2"></i>
                                        </span>
                                    </div>
                                    <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                                        <span className="d-block d-md-none"> قرار داد : </span>
                                        <span>
                                            <i className="icon icon-Close border rounded-circle border-danger font-16 p-1 p-md-2"></i>
                                        </span>
                                    </div>
                                    <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                                        <span className="d-block d-md-none"> رسمی  : </span>
                                        <span className=" center col-1 font-16">-</span>
                                    </div>
                                    <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                                        <span className="d-block d-md-none"> تاریخ ثبت  : </span>
                                        <span>1401/11/30</span>
                                    </div>
                                    <div className="col-12 col-md-3 d-flex align-items-center justify-content-center flex-wrap ">
                                        <button className="col-2 col-md-3 col-xxl-2 m-1 font-14-rem btn btn-success center">ورود</button>
                                        <button className="col-2 col-md-3 col-xxl-2 m-1 font-14-rem btn px-1 btn-primary center">کالا ها
                                        </button>
                                        <button className="col-2 col-md-3 col-xxl-2 m-1 font-14-rem btn btn-danger center">حذف</button>
                                        <button className="col-2 col-md-3 col-xxl-2 m-1 font-14-rem btn btn-info text-white center">نمایش
                                        </button>
                                        <button
                                            className="col-2 col-md-3 col-xxl-2 m-1 font-14-rem btn btn-warning text-white center ">
                                            <Link className="text-decoration-none" to="/editStore">ویرایش</Link>
                                        </button>
                                    </div>
                                </div>
                            <div className="col-12 shadow-sm  d-flex flex-wrap p-1 py-2 py-md-0  px-2 my-2 rounded font-16-rem">
                                <div  className="col-6 col-md-1 d-flex  align-items-center justify-content-start text-primary ">LNZO-552971119 </div>
                                {/*logo*/}
                                <div className="col-6 col-md-1 d-flex align-items-center flex-wrap py-1 justify-content-md-center justify-content-end">
                                    <figure
                                        className='center p-0 m-0 border border-3 col-5 col-md-7  overflow-hidden rounded-circle'>
                                        <img className="img-fluid"
                                             src="https://static.elanza.com/media/brand/logo/2022/02/19/49984/a9a3e435538a7bf231cec2ae4e6c8b6e.jpg"
                                             alt="ایلابرت"/>
                                    </figure>
                                </div>
                                <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                                    <span className="d-block d-md-none"> عنوان : </span>
                                    <span>ایلابرت</span>
                                </div>
                                <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                                    <span className="d-block d-md-none"> نوع : </span>
                                    <span>حقوقی</span>
                                </div>
                                <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                                    <span className="d-block d-md-none"> وضعیت : </span>
                                    <span>تایید شده <i className="alert p-0 alert-success icon icon-Tick"></i></span>
                                </div>
                                <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                                    <span className="d-block d-md-none"> فعال : </span>
                                    <span>
                                        <i className="icon icon-Tick border rounded-circle border-success font-16 p-1 p-md-2"></i>
                                    </span>
                                </div>
                                <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                                    <span className="d-block d-md-none"> قرار داد : </span>
                                    <span>
                                        <i className="icon icon-Close border rounded-circle border-danger font-16 p-1 p-md-2"></i>
                                    </span>
                                </div>
                                <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                                    <span className="d-block d-md-none"> رسمی  : </span>
                                    <span className=" center col-1 font-16">-</span>
                                </div>
                                <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                                    <span className="d-block d-md-none"> تاریخ ثبت  : </span>
                                    <span>1401/11/30</span>
                                </div>
                                <div className="col-12 col-md-3 d-flex align-items-center justify-content-center flex-wrap ">
                                    <button className="col-2 col-md-3 col-xxl-2 m-1 font-14-rem btn btn-success center">ورود</button>
                                    <button className="col-2 col-md-3 col-xxl-2 m-1 font-14-rem btn px-1 btn-primary center">کالا ها
                                    </button>
                                    <button className="col-2 col-md-3 col-xxl-2 m-1 font-14-rem btn btn-danger center">حذف</button>
                                    <button className="col-2 col-md-3 col-xxl-2 m-1 font-14-rem btn btn-info text-white center">نمایش
                                    </button>
                                    <button
                                        className="col-2 col-md-3 col-xxl-2 m-1 font-14-rem btn btn-warning text-white center ">
                                        <Link className="text-decoration-none" to="/editStore">ویرایش</Link>
                                    </button>
                                </div>
                            </div>
                            <div className="col-12 shadow-sm  d-flex flex-wrap p-1 py-2 py-md-0  px-2 my-2 rounded font-16-rem">
                                <div  className="col-6 col-md-1 d-flex  align-items-center justify-content-start text-primary ">LNZO-552971119 </div>
                                {/*logo*/}
                                <div className="col-6 col-md-1 d-flex align-items-center flex-wrap py-1 justify-content-md-center justify-content-end">
                                    <figure
                                        className='center p-0 m-0 border border-3 col-5 col-md-7  overflow-hidden rounded-circle'>
                                        <img className="img-fluid"
                                             src="https://static.elanza.com/media/brand/logo/2022/02/19/49984/a9a3e435538a7bf231cec2ae4e6c8b6e.jpg"
                                             alt="ایلابرت"/>
                                    </figure>
                                </div>
                                <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                                    <span className="d-block d-md-none"> عنوان : </span>
                                    <span>ایلابرت</span>
                                </div>
                                <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                                    <span className="d-block d-md-none"> نوع : </span>
                                    <span>حقوقی</span>
                                </div>
                                <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                                    <span className="d-block d-md-none"> وضعیت : </span>
                                    <span>تایید شده <i className="alert p-0 alert-success icon icon-Tick"></i></span>
                                </div>
                                <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                                    <span className="d-block d-md-none"> فعال : </span>
                                    <span>
                                        <i className="icon icon-Tick border rounded-circle border-success font-16 p-1 p-md-2"></i>
                                    </span>
                                </div>
                                <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                                    <span className="d-block d-md-none"> قرار داد : </span>
                                    <span>
                                        <i className="icon icon-Close border rounded-circle border-danger font-16 p-1 p-md-2"></i>
                                    </span>
                                </div>
                                <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                                    <span className="d-block d-md-none"> رسمی  : </span>
                                    <span className=" center col-1 font-16">-</span>
                                </div>
                                <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                                    <span className="d-block d-md-none"> تاریخ ثبت  : </span>
                                    <span>1401/11/30</span>
                                </div>
                                <div className="col-12 col-md-3 d-flex align-items-center justify-content-center flex-wrap ">
                                    <button className="col-2 col-md-3 col-xxl-2 m-1 font-14-rem btn btn-success center">ورود</button>
                                    <button className="col-2 col-md-3 col-xxl-2 m-1 font-14-rem btn px-1 btn-primary center">کالا ها
                                    </button>
                                    <button className="col-2 col-md-3 col-xxl-2 m-1 font-14-rem btn btn-danger center">حذف</button>
                                    <button className="col-2 col-md-3 col-xxl-2 m-1 font-14-rem btn btn-info text-white center">نمایش
                                    </button>
                                    <button
                                        className="col-2 col-md-3 col-xxl-2 m-1 font-14-rem btn btn-warning text-white center ">
                                        <Link className="text-decoration-none" to="/editStore">ویرایش</Link>
                                    </button>
                                </div>
                            </div>
                            <div className="col-12 shadow-sm  d-flex flex-wrap p-1 py-2 py-md-0  px-2 my-2 rounded font-16-rem">
                                <div  className="col-6 col-md-1 d-flex  align-items-center justify-content-start text-primary ">LNZO-552971119 </div>
                                {/*logo*/}
                                <div className="col-6 col-md-1 d-flex align-items-center flex-wrap py-1 justify-content-md-center justify-content-end">
                                    <figure
                                        className='center p-0 m-0 border border-3 col-5 col-md-7  overflow-hidden rounded-circle'>
                                        <img className="img-fluid"
                                             src="https://static.elanza.com/media/brand/logo/2022/02/19/49984/a9a3e435538a7bf231cec2ae4e6c8b6e.jpg"
                                             alt="ایلابرت"/>
                                    </figure>
                                </div>
                                <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                                    <span className="d-block d-md-none"> عنوان : </span>
                                    <span>ایلابرت</span>
                                </div>
                                <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                                    <span className="d-block d-md-none"> نوع : </span>
                                    <span>حقوقی</span>
                                </div>
                                <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                                    <span className="d-block d-md-none"> وضعیت : </span>
                                    <span>تایید شده <i className="alert p-0 alert-success icon icon-Tick"></i></span>
                                </div>
                                <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                                    <span className="d-block d-md-none"> فعال : </span>
                                    <span>
                                        <i className="icon icon-Tick border rounded-circle border-success font-16 p-1 p-md-2"></i>
                                    </span>
                                </div>
                                <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                                    <span className="d-block d-md-none"> قرار داد : </span>
                                    <span>
                                        <i className="icon icon-Close border rounded-circle border-danger font-16 p-1 p-md-2"></i>
                                    </span>
                                </div>
                                <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                                    <span className="d-block d-md-none"> رسمی  : </span>
                                    <span className=" center col-1 font-16">-</span>
                                </div>
                                <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                                    <span className="d-block d-md-none"> تاریخ ثبت  : </span>
                                    <span>1401/11/30</span>
                                </div>
                                <div className="col-12 col-md-3 d-flex align-items-center justify-content-center flex-wrap ">
                                    <button className="col-2 col-md-3 col-xxl-2 m-1 font-14-rem btn btn-success center">ورود</button>
                                    <button className="col-2 col-md-3 col-xxl-2 m-1 font-14-rem btn px-1 btn-primary center">کالا ها
                                    </button>
                                    <button className="col-2 col-md-3 col-xxl-2 m-1 font-14-rem btn btn-danger center">حذف</button>
                                    <button className="col-2 col-md-3 col-xxl-2 m-1 font-14-rem btn btn-info text-white center">نمایش
                                    </button>
                                    <button
                                        className="col-2 col-md-3 col-xxl-2 m-1 font-14-rem btn btn-warning text-white center ">
                                        <Link className="text-decoration-none" to="/editStore">ویرایش</Link>
                                    </button>
                                </div>
                            </div>
                            <div className="col-12 shadow-sm  d-flex flex-wrap p-1 py-2 py-md-0  px-2 my-2 rounded font-16-rem">
                                <div  className="col-6 col-md-1 d-flex  align-items-center justify-content-start text-primary ">LNZO-552971119 </div>
                                {/*logo*/}
                                <div className="col-6 col-md-1 d-flex align-items-center flex-wrap py-1 justify-content-md-center justify-content-end">
                                    <figure
                                        className='center p-0 m-0 border border-3 col-5 col-md-7  overflow-hidden rounded-circle'>
                                        <img className="img-fluid"
                                             src="https://static.elanza.com/media/brand/logo/2022/02/19/49984/a9a3e435538a7bf231cec2ae4e6c8b6e.jpg"
                                             alt="ایلابرت"/>
                                    </figure>
                                </div>
                                <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                                    <span className="d-block d-md-none"> عنوان : </span>
                                    <span>ایلابرت</span>
                                </div>
                                <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                                    <span className="d-block d-md-none"> نوع : </span>
                                    <span>حقوقی</span>
                                </div>
                                <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                                    <span className="d-block d-md-none"> وضعیت : </span>
                                    <span>تایید شده <i className="alert p-0 alert-success icon icon-Tick"></i></span>
                                </div>
                                <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                                    <span className="d-block d-md-none"> فعال : </span>
                                    <span>
                                        <i className="icon icon-Tick border rounded-circle border-success font-16 p-1 p-md-2"></i>
                                    </span>
                                </div>
                                <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                                    <span className="d-block d-md-none"> قرار داد : </span>
                                    <span>
                                        <i className="icon icon-Close border rounded-circle border-danger font-16 p-1 p-md-2"></i>
                                    </span>
                                </div>
                                <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                                    <span className="d-block d-md-none"> رسمی  : </span>
                                    <span className=" center col-1 font-16">-</span>
                                </div>
                                <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                                    <span className="d-block d-md-none"> تاریخ ثبت  : </span>
                                    <span>1401/11/30</span>
                                </div>
                                <div className="col-12 col-md-3 d-flex align-items-center justify-content-center flex-wrap ">
                                    <button className="col-2 col-md-3 col-xxl-2 m-1 font-14-rem btn btn-success center">ورود</button>
                                    <button className="col-2 col-md-3 col-xxl-2 m-1 font-14-rem btn px-1 btn-primary center">کالا ها
                                    </button>
                                    <button className="col-2 col-md-3 col-xxl-2 m-1 font-14-rem btn btn-danger center">حذف</button>
                                    <button className="col-2 col-md-3 col-xxl-2 m-1 font-14-rem btn btn-info text-white center">نمایش
                                    </button>
                                    <button
                                        className="col-2 col-md-3 col-xxl-2 m-1 font-14-rem btn btn-warning text-white center ">
                                        <Link className="text-decoration-none" to="/editStore">ویرایش</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
        </>
    );
}

export default StoresList;