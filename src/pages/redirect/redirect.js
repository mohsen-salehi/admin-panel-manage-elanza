import React from 'react';
import {Link} from "react-router-dom";

function Redirect() {
    return (
        <section className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between p-2">
            <section className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                <div className="col-12 d-flex flex-wrap justify-content-end align-items-center p-2">
                    <h5 className="col p-2">اطلاعیه ها</h5>
                </div>
            </section>
            <div className="col-12 p-2  d-flex justify-content-end">
                <button className="btn btn-outline-success d-flex align-items-center justify-content-center font-16-rem ">
                    <i className="icon icon-Add1 center "></i>
                    جدید
                </button>
            </div>
            <div className="col-12 bg-zebra d-flex justify-content-between align-items-center p-2 rounded-pill">
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
            <div className="col-12 d-flex justify-content-between align-items-center p-2 flex-wrap">
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
            <section className="col-12 d-flex justify-content-center align-items-start flex-wrap rounded p-2 shadow-sm mt-2">
                <h6 className="col-12 flex-wrap bg-default p-2 rounded d-flex justify-content-between align-items-center text-white ">
                    <span className="p-2">تعداد بانک ها: (34)</span>
                </h6>
                <section className="col-12 p-2 d-flex flex-wrap ">
                    <div className="col-12 d-xl-flex p-2 d-none border-bottom rounded">
                        <div className="col-1">کد انتقال</div>
                        <div className="col-4">آدرس</div>
                        <div className="col-4">انتقال به</div>
                        <div className="col-1">توضیحات</div>
                        <div className="col-2">عملیات</div>
                    </div>
                    <div className="col-12 d-xl-flex p-2 py-3 my-2 shadow-sm rounded">
                        <div className="col-12 col-xl-1 d-flex justify-content-between my-2 my-xl-0 align-items-center">
                            <span className="d-xl-none">کد انتقال  : </span>
                            <span>301</span>
                        </div>
                        <div className="col-12 col-xl-4 d-flex justify-content-between my-2 my-xl-0 align-items-center">
                            <span className="d-xl-none">
                                آدرس:
                            </span>
                            <span className="text-start text-xl-end">
                              /product/LNZP-60a21a0deb3a6/اسپری-زنانه-مدیا-مدل-sky-212-حجم-200-میلی-لیتر-2
                            </span>
                        </div>
                        <div className="col-12 col-xl-4 d-flex justify-content-between my-2 my-xl-0 align-items-center">
                            <span className="d-xl-none col-3">انتقال به:  </span>
                            <span className="text-start text-xl-end col-9 col-xl-12">/product/LNZP-60bdb9f1b059e/اسپری-زنانه-مدیا-مدل-sky-212-حجم-200-میلی-لیتر-1	</span>
                        </div>
                        <div className="col-12 col-xl-1 d-flex justify-content-between my-2 my-xl-0 align-items-center">
                            <span className="d-xl-none">توضیحات</span>
                            <span>-</span>
                        </div>
                        <div className="col-12 col-xl-2 d-flex justify-content-between my-2 my-xl-0 align-items-center">
                            <div className="col-12 d-flex justify-content-center justify-content-xl-start align-items-center">
                                <Link className="btn btn-warning font-16-rem" to="/redirect/edit">ویرایش</Link>
                                <button className="btn btn-danger font-16-rem mx-1">حذف</button>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    );
}

export default Redirect;