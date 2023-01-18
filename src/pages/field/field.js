import React from 'react';
import {Link} from "react-router-dom";

function Field() {
    return (
        <>
            <section className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between p-1">
                <section className="col-12  d-flex justify-content-between align-items-center border-bottom rounded ">
                    <div className="col-12 d-flex flex-wrap justify-content-end align-items-center p-2">
                        <h6 className="col-12 bg-default border-bottom rounded p-3 text-white">فیلد سفارشی ها  </h6>
                        <button className="col-5 col-xl-1 mb-1 btn btn-outline-success d-flex align-items-center justify-content-center font-16-rem ">
                            <i className="icon icon-Add1 center "></i>
                            جدید
                        </button>
                    </div>
                </section>
                <section className="col-12 d-flex  flex-wrap p-2 py-2">
                    <div className="col-12 d-flex justify-content-between align-items-center p-2 flex-wrap">
                        <span className="d-flex col-12 col-md-3 ">   تعداد فیلد سفارشی ها: (0)  </span>
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
                    <div className="col-12  d-flex justify-content-start align-items-center border-bottom rounded-pill p-2 px-4">
                        <div className="col-3 p-2">عنوان</div>
                        <div className="col-3 p-2">نوع</div>
                        <div className="col-3 p-2">عملیات</div>
                    </div>
                    {/*list*/}
                    <div className="col-12 d-flex justify-content-start flex-wrap">
                        <div className="col-12 my-1 d-flex  align-items-center border-bottom shadow-sm rounded p-2 ">
                            <div className="col-3 d-flex flex-wrap  align-content-center text-justify p-2">
                                -
                            </div>
                            <div className="col-3 p-2"> - </div>
                            <div className="col-3 flex-wrap p-2">
                                <Link to="" className="btn mx-1 btn-secondary border-none text-white font-16-rem">مقادیر</Link>
                                <Link to="" className="btn mx-1 btn-primary border-none text-white font-16-rem">دسته بندی</Link>
                                <Link to="" className="btn mx-1 btn-warning text-white border-none  font-16-rem">ویرایش</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}

export default Field;