import React from 'react';
import {Link} from "react-router-dom";

function Variation() {
    return (
        <>
            <section className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between p-2">
                <section className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                    <div className="col-12 d-flex flex-wrap justify-content-end align-items-center p-2">
                        <h5 className="col-12 border-bottom rounded p-2">تنوع ها </h5>
                        <button className="col-5 col-xl-1 mb-1 btn btn-info d-flex align-items-center justify-content-center font-16-rem text-white">
                            <i className="icon icon-Add1 center "></i>
                            جدید
                        </button>
                    </div>
                </section>
                <section className="col-12 d-flex flex-wrap p-2 py-4">
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
                    <h5 className=" text-center border-bottom rounded p-3  d-none d-md-block">تنوع برند ها(26) </h5>
                </section>
                <section className="col-12 d-flex justify-content-center align-items-start flex-wrap  rounded">
                    {/*menu*/}
                    <div className="col-12  d-flex justify-content-between align-items-center border-bottom rounded-pill p-2 px-4">
                        <div className="col-3 text-center p-2">عنوان</div>
                        <div className="col-4 text-center p-2">دسته بندی</div>
                        <div className="col-2 text-center p-2">وضعیت</div>
                        <div className="col-3 text-center p-2">عملیات</div>
                    </div>
                    {/*list*/}
                    <div className="col-12 d-flex justify-content-between flex-wrap">
                        <div className="col-12 my-1 d-flex justify-content-between align-items-center border-bottom shadow-sm rounded p-2 ">
                            <div className="col-3 d-flex flex-wrap justify-content-center align-content-center text-justify p-2">
                              <div className="col-12">طول</div>
                              <div className="col-12 font-FaNum-Medium">[55 متر،50 متر،30 متر،...]</div>
                            </div>
                            <div className="col-4 text-center p-2">[نخ دندان ، ...]</div>
                            <div className="col-2 text-center p-2"> فعال </div>
                            <div className="col-3 d-flex flex-wrap justify-content-evenly text-center p-2">
                                <Link to="/variation-option" className="btn btn-secondary border-none text-white font-16-rem">مقادیر</Link>
                                <Link to="/variation-category" className="btn btn-primary border-none text-white font-16-rem">دسته بندی</Link>
                                <Link to="/variation-edit" className="btn btn-warning text-white border-none  font-16-rem">ویرایش</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}

export default Variation;