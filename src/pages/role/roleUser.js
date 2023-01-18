import React from 'react';
import {Link} from "react-router-dom";

function RoleUser() {
    return (
        <>
            <section className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between p-2">
                <section className="col-12 d-flex justify-content-between align-items-center  rounded">
                    <div className="col-12 d-flex flex-wrap justify-content-end align-items-center p-2">
                        <h5 className="col-12 border-bottom rounded p-2">کاربران</h5>
                        <button className="btn btn-outline-success font-16-rem mx-1 d-flex justify-content-center align-items-center">
                            <i className="icon icon-Document-Download-42 ps-1 font-16"></i>
                            خروجی اکسل
                        </button>
                        <Link to="/user-create" className="btn btn-outline-primary text-primary font-16-rem mx-1 d-flex justify-content-center align-items-center">
                            <i className="icon icon-Add1  ps-1 font-16"></i>
                           جدید
                        </Link>
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

                    <div className="col-12 d-flex justify-content-between align-items-center border-top border-bottom px-xl-3 rounded-pill  p-2 flex-wrap">
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
                        <div className="col-2  p-2">کاربر</div>
                        <div className="col-3 text-center p-2">عضویت</div>
                        <div className="col-1 text-center p-2">وضعیت</div>
                        <div className="col-3 text-center p-2">عملیات</div>
                    </div>
                    {/*list*/}
                    <div className="col-12 d-flex justify-content-between flex-wrap p-2">
                        <div className="col-12 rounded p-3 bg-secondary bg-opacity-10 shadow-sm">
                            کاربری موجود نیست
                        </div>
                        <div className="col-12 my-1 d-flex justify-content-between align-items-center border-bottom shadow-sm rounded p-2 ">
                            <div className="col-2 d-flex flex-wrap  align-content-center p-2">
                               <strong className='col-12 py-1'>الهام احمدی</strong>
                                <span className="col-12  py-1">09217925928</span>
                                <span className="col-12  py-1">elham.ahmadi@elanza.com</span>
                            </div>
                            <div className="col-3 d-flex flex-wrap p-3">
                                <date className="col-12 text-center">1401/08/22</date>
                                <time className="col-12 text-center">10:45</time>
                            </div>
                            <div className="col-1 text-center p-2">
                               فعال
                            </div>
                            <div className="col-3 d-flex flex-wrap justify-content-evenly text-center p-2">
                                <Link to="/show-user" className="btn btn-success border-none text-white font-16-rem">مشاهده</Link>
                                <Link to="/edit-user" className="btn btn-warning border-none text-white font-16-rem">ویرایش</Link>
                                <button className="btn btn-secondary text-white border-none  font-16-rem">ورود</button>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}

export default RoleUser;