import React from 'react';
import {Link} from "react-router-dom";

function GroupOrder() {
    return (
        <>
            <section className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between p-2">
                <section className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                    <div className="col-12 d-flex flex-wrap justify-content-end align-items-center p-4 ">
                        <h5 className="col-12 border-bottom rounded p-2">لیست کالاهای گروه اسپری و بادی اسپلش مردانه رکسونا</h5>
                        <button className="col-5 col-xl-1 mb-1 btn btn-info text-white d-flex align-items-center font-16-rem justify-content-center">
                            <i className="icon icon-Add1 center "></i>
                            جدید
                        </button>
                        <form className="col-12 d-flex justify-content-between align-items-center flex-wrap ">
                            <select name="tag-product" id="tag-product" className="col-6 col-xl-10 center border rounded p-1"></select>
                            <button className="col-5 col-xl-1 btn btn-success font-16-rem">افزودن</button>
                        </form>
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
                        <span className="d-flex col-12 col-md-3 ">  تعداد کالا ها : (2)  </span>
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
                <section className="col-12 d-flex justify-content-center align-items-start flex-wrap  rounded">
                    {/*menu*/}
                    <div className="col-12  d-flex justify-content-between align-items-center border-bottom rounded-pill p-2 px-4">
                        <div className="col-3  p-2">تصویر</div>
                        <div className="col-4  p-2">کالا</div>
                        <div className="col-3  p-2">عنوان (اختیاری)</div>
                        <div className="col-2  p-2">عملیات</div>
                    </div>
                    {/*list*/}
                    <div className="col-12 d-flex justify-content-between flex-wrap">
                        <div className="col-12 my-1 d-flex justify-content-between align-items-center border-bottom shadow-sm rounded p-2 ">
                            <div className="col-3 p-2">
                                <figure className="p-0 m-0">
                                    <img className="img-fluid shadow-sm rounded-circle col-xl-2" src="https://static.elanza.com/media/product/product_images/2021/12/13/47816/f12c5fd5c8b2d9eb40e7b1f5f1fdefc7.jpg" alt=""/>
                                </figure>
                            </div>
                            <div className="col-4 p-2">شامپو مردانه هیدرودرم مدل felan حجم 250 میلی لیتر</div>
                            <div className="col-3 p-2 d-flex ">
                                <input type="text" name="pr-input" id="pr-input" />
                                <button className="btn btn-success center rounded font-14-rem">
                                    ذخیره
                                </button>
                            </div>
                            <div className="col-2 p-2">
                                <button className="btn btn-danger border-none font-16-rem">لغو</button>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}

export default GroupOrder;