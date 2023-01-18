import React from 'react';
import {Link} from "react-router-dom";

function Pages() {
    return (
        <section className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between p-2">
            <section className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                <div className="col-12 d-flex flex-wrap justify-content-end align-items-center p-2">
                    <h5 className="col p-2">لیست صفحات</h5>
                </div>
            </section>
            <div className="col-12 p-2  d-flex justify-content-end">
                <button className="btn btn-outline-success d-flex align-items-center justify-content-center font-16-rem ">
                    <i className="icon icon-Add1 center "></i>
                    جدید
                </button>
            </div>
            <section className="col-12 d-flex justify-content-center align-items-start flex-wrap rounded p-2 shadow-sm mt-2">
                <h6 className="col-12 flex-wrap bg-default p-2 rounded d-flex justify-content-between align-items-center text-white ">
                   <span className="p-2">    تعداد صفحات: (5)</span>
                    <form className="col-12 col-xl-2 bg-white rounded p-1 d-flex ">
                        <label htmlFor="search"
                               className="position-relative d-flex flex-row-reverse col-12">
                            <input type="search" name="search" id="search" className="font-14 col-12 p-2 border "
                                   placeholder="جستجو"/>
                            <button
                                className="center h-100 bg-default border-none rounded position-absolute p-3 ">
                                <i className="icon icon-Search-2 font-14"></i></button>
                        </label>
                    </form>
                </h6>
                <section className="col-12 p-2 d-flex flex-wrap ">
                    <div className="col-12 d-xl-flex p-2 d-none border-bottom rounded">
                        <div className="col-4">عنوان</div>
                        <div className="col-2">ترتیب نمایش</div>
                        <div className="col-2">فعال/غیرفعال</div>
                        <div className="col-4">عمالیت</div>
                    </div>
                    <div className="col-12 d-xl-flex p-2 py-3 my-2 shadow-sm rounded">
                        <div className="col-12 col-xl-4 d-flex justify-content-between my-2 my-xl-0 align-items-center">
                            <span className="d-xl-none">عنوان : </span>
                            <span>همکاری با الانزا</span>
                        </div>
                        <div className="col-12 col-xl-2 d-flex justify-content-between my-2 my-xl-0 align-items-center">
                            <span className="d-xl-none">
                                ترتیب نمایش
                            </span>
                            <span>
                                -
                            </span>
                        </div>
                        <div className="col-12 col-xl-2 d-flex justify-content-between my-2 my-xl-0 align-items-center">
                            <span className="d-xl-none">فعال/غیرفعال</span>
                            <span>فعال</span>
                        </div>
                        <div className="col-12 col-xl-4 d-flex justify-content-between my-2 my-xl-0 align-items-center">
                            <div className="col-12 d-flex justify-content-center justify-content-xl-start align-items-center">
                                <Link className="btn btn-warning font-16-rem" to="/page/edit">ویرایش</Link>
                                <button className="btn btn-danger font-16-rem mx-1">حذف</button>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    );
}

export default Pages;