import React from 'react';
import {Link} from "react-router-dom";

function Department() {
    return (
        <section className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between p-2">
            <section className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                <div className="col-12 d-flex flex-wrap justify-content-end align-items-center p-2">
                    <h5 className="col p-2">لیست دپارتمان ها</h5>
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
                    <span className="p-2">    تعداد دپارتمان ها: (4)</span>
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
                        <div className="col-2 text-center">عنوان</div>
                        <div className="col-2 text-center">آدرس</div>
                        <div className="col-2 text-center">ایمیل</div>
                        <div className="col-2 text-center">تلفن</div>
                        <div className="col-4 text-center">عمالیت</div>
                    </div>
                    <div className="col-12 d-xl-flex p-2 py-3 my-2 shadow-sm rounded">
                        <div className="col-12 col-xl-2 d-flex justify-content-between justify-content-xl-center my-2 my-xl-0 align-items-center">
                            <span className="d-xl-none">عنوان : </span>
                            <span>مالی</span>
                        </div>
                        <div className="col-12 col-xl-2 d-flex justify-content-between justify-content-xl-center my-2 my-xl-0 align-items-center">
                            <span className="d-xl-none">آدرس : </span>
                            <span>finance</span>
                        </div>
                        <div className="col-12 col-xl-2 d-flex justify-content-between justify-content-xl-center my-2 my-xl-0 align-items-center">
                            <span className="d-xl-none">ایمیل : </span>
                            <span>finance@elanza.com</span>
                        </div>
                        <div className="col-12 col-xl-2 d-flex justify-content-between justify-content-xl-center my-2 my-xl-0 align-items-center">
                            <span className="d-xl-none">تلفن : </span>
                            <span>02191008292</span>
                        </div>
                        <div className="col-12 col-xl-4 d-flex justify-content-between justify-content-xl-center my-2 my-xl-0 align-items-center">
                            <div className="col-12 d-flex justify-content-center justify-xl-content-start align-items-center">
                                <Link to="/department/edit" className="btn btn-warning font-16-rem">ویرایش</Link>
                                <button className="btn btn-danger font-16-rem mx-1">حذف</button>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    );
}

export default Department;