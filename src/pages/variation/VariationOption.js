import React from 'react';
import {Link} from "react-router-dom";

function VariationOption() {
    return (
        <>
            <section className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between p-2">
                <section className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                    <div className="col-12 d-flex flex-wrap justify-content-end align-items-center p-2">
                        <h5 className="col-12 border-bottom rounded p-2">مقادیر تنوع طول </h5>
                        <button className="col-5 col-xl-1 mb-1 btn btn-info d-flex align-items-center justify-content-center font-16-rem text-white">
                            <i className="icon icon-Add1 center "></i>
                            جدید
                        </button>
                    </div>
                </section>
                <section className="col-12 d-flex flex-wrap p-2">
                    <div className="col-12 d-flex justify-content-between align-items-center p-2 flex-wrap">
                        <h6 className=" text-center border-bottom rounded p-3 ">تعداد مقادیر (3)</h6>
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
                        <div className="col-3 text-center p-2">عنوان</div>
                        <div className="col-4 text-center p-2">تصویر</div>
                        <div className="col-2 text-center p-2">ترتیب نمایش</div>
                        <div className="col-3 text-center p-2">عملیات</div>
                    </div>
                    {/*list*/}
                    <div className="col-12 d-flex justify-content-between flex-wrap">
                        <div className="col-12 my-1 d-flex justify-content-between align-items-center border-bottom shadow-sm rounded p-2 ">
                            <div className="col-3 d-flex flex-wrap p-2 justify-content-center font-FaNum-Medium">
                                55 متر
                            </div>
                            <div className="col-4 text-center p-2">-</div>
                            <div className="col-2 text-center p-2">-</div>
                            <div className="col-3 d-flex flex-wrap justify-content-center p-2">
                                <Link to="/variation-option-edit" className="btn btn-warning mx-1 text-white border-none font-16-rem">ویرایش</Link>
                                <button className="btn btn-danger text-white border-none font-16-rem">حذف</button>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}

export default VariationOption;