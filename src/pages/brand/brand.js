import React from 'react';
import DatePicker from "react-multi-date-picker";
import InputIcon from "react-multi-date-picker/components/input_icon";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import {Link} from "react-router-dom";
import FormatNumber from "../../components/public/formatNumber";

function Brand() {
    return (
        <>
            <div className="col-12 p-2">
                <div className="col-12 d-flex justify-content-center mt-4">
                    <h3>
                        لیست برند ها
                    </h3>
                </div>
                <section className="col-12  font-14">
                    <div className="col-12  border-top  p-2">
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

                        <div  className="col-12 d-flex flex-wrap  justify-content-between p-3 p-xl-1 my-2 rounded shadow-sm border-bottom font-16-rem">
                            <div className="col-12 justify-content-between col-md-2 d-flex  align-items-center justify-content-xl-center  my-1">
                                <span className="d-xl-none ">لوگو:</span>
                                <figure className="col-2 col-xl-3 p-0 m-0">
                                    <img className="img-fluid rounded shadow-sm" src="https://static.elanza.com/media/setting/tag-2/2022/10/31/54198/8fe427af6aedf8b3d17f68101e338e3c.jpg" alt=""/>
                                </figure>
                            </div>
                            <div className="col-12 justify-content-between col-md-2 d-flex align-items-center flex-wrap justify-content-xl-center my-1">
                                <span className="d-xl-none">نام  برند:</span>
                                <span>
                                    زنون
                                </span>
                            </div>
                            <div className="col-12 justify-content-between col-md-2 d-flex  align-items-center flex-wrap justify-content-xl-center font-FaNum-Medium my-1">
                                <span className="d-xl-none">نام لاتین برند:</span>
                                <span>
                                    zenon
                                </span>
                            </div>
                            <div className="col-12 justify-content-between col-md-2 d-flex align-items-center  justify-content-xl-center my-1">
                                <span className="d-xl-none">وضعیت:</span>
                                <span>
                                    تایید شده
                                </span>
                            </div>
                            <div className="col-12 justify-content-center col-md-2 d-flex align-items-center  my-1">
                                <div>
                                    <button className="btn btn-warning font-14-rem">
                                        نمایش
                                    </button>
                                    <button className="btn btn-info font-14-rem text-light "> ویرایش</button>
                                </div>
                            </div>
                        </div>
                        <div  className="col-12 d-flex flex-wrap  justify-content-between p-3 p-xl-1 my-2 rounded shadow-sm border-bottom font-16-rem">
                            <div className="col-12 justify-content-between col-md-2 d-flex  align-items-center justify-content-xl-center  my-1">
                                <span className="d-xl-none ">لوگو:</span>
                                <figure className="col-2 col-xl-3 p-0 m-0">
                                    <img className="img-fluid rounded shadow-sm" src="https://static.elanza.com/media/setting/tag-2/2022/10/31/54198/8fe427af6aedf8b3d17f68101e338e3c.jpg" alt=""/>
                                </figure>
                            </div>
                            <div className="col-12 justify-content-between col-md-2 d-flex align-items-center flex-wrap justify-content-xl-center my-1">
                                <span className="d-xl-none">نام  برند:</span>
                                <span>
                                    زنون
                                </span>
                            </div>
                            <div className="col-12 justify-content-between col-md-2 d-flex  align-items-center flex-wrap justify-content-xl-center font-FaNum-Medium my-1">
                                <span className="d-xl-none">نام لاتین برند:</span>
                                <span>
                                    zenon
                                </span>
                            </div>
                            <div className="col-12 justify-content-between col-md-2 d-flex align-items-center  justify-content-xl-center my-1">
                                <span className="d-xl-none">وضعیت:</span>
                                <span>
                                    تایید شده
                                </span>
                            </div>
                            <div className="col-12 justify-content-center col-md-2 d-flex align-items-center  my-1">
                                <div>
                                    <button className="btn btn-warning font-14-rem">
                                        نمایش
                                    </button>
                                    <button className="btn btn-info font-14-rem text-light "> ویرایش</button>
                                </div>
                            </div>
                        </div>
                        <div  className="col-12 d-flex flex-wrap  justify-content-between p-3 p-xl-1 my-2 rounded shadow-sm border-bottom font-16-rem">
                            <div className="col-12 justify-content-between col-md-2 d-flex  align-items-center justify-content-xl-center  my-1">
                                <span className="d-xl-none ">لوگو:</span>
                                <figure className="col-2 col-xl-3 p-0 m-0">
                                    <img className="img-fluid rounded shadow-sm" src="https://static.elanza.com/media/setting/tag-2/2022/10/31/54198/8fe427af6aedf8b3d17f68101e338e3c.jpg" alt=""/>
                                </figure>
                            </div>
                            <div className="col-12 justify-content-between col-md-2 d-flex align-items-center flex-wrap justify-content-xl-center my-1">
                                <span className="d-xl-none">نام  برند:</span>
                                <span>
                                    زنون
                                </span>
                            </div>
                            <div className="col-12 justify-content-between col-md-2 d-flex  align-items-center flex-wrap justify-content-xl-center font-FaNum-Medium my-1">
                                <span className="d-xl-none">نام لاتین برند:</span>
                                <span>
                                    zenon
                                </span>
                            </div>
                            <div className="col-12 justify-content-between col-md-2 d-flex align-items-center  justify-content-xl-center my-1">
                                <span className="d-xl-none">وضعیت:</span>
                                <span>
                                    تایید شده
                                </span>
                            </div>
                            <div className="col-12 justify-content-center col-md-2 d-flex align-items-center  my-1">
                                <div>
                                    <button className="btn btn-warning font-14-rem">
                                        نمایش
                                    </button>
                                    <button className="btn btn-info font-14-rem text-light "> ویرایش</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
}

export default Brand;