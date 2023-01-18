import React from 'react';
import {Link} from "react-router-dom";

function VariationOptionEdit() {
    return (
        <>
            <section className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between p-2">
                <section className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                    <div className="col-12 d-flex flex-wrap justify-content-end align-items-center p-2">
                        <h5 className="col-12 border-bottom rounded p-2">ویرایش مقادیر تنوع</h5>
                    </div>
                </section>
                <section className="col-12 d-flex justify-content-center align-items-start flex-wrap rounded p-2 shadow-sm">
                    <h6 className="col-12 bg-default p-3 rounded text-white ">
                        ویرایش مقادیر 55 متر برای طول
                    </h6>
                    <div className="col-12 p-4 d-flex justify-content-between align-content-center  flex-wrap font-14 border-bottom rounded">
                        <label className="col-12 col-md-5 mx-1 py-2" htmlFor="Store-title">
                            عنوان
                            <span className="text-danger mx-1">*</span>
                            <input className="col-12 mt-2 p-1" type="text" name="title" id="title"/>
                        </label>
                        <label className="col-12 col-md-5   m-2 rounded  center d-flex flex-wrap justify-content-between align-items-center ">
                            <span className="col-12 d-flex"> ارسال فایل لوگو</span>
                            <span className="col-12 border rounded d-flex align-items-center">
                                <input className="col-3 p-2 position-relative border-0 icon" type="file"
                                       name="picture" id="get-logo"/>
                                 <span className=" text-danger mx-1 font-FaNum-Medium font-9 p-1">(حجم فایل عکس باید زیر 500 کیلوبایت باشد)</span>
                            </span>
                        </label>
                        <label className="col-12 col-md-5 mx-1 py-2" htmlFor="Store-title">
                            ترتیب نمایش
                            <input className="col-12 mt-2 p-1" type="text" name="show-order" id="show-order"/>
                        </label>
                        <label className="col-12   mx-1 py-2" htmlFor="Store-title">
                            <input className=" m-2 p-1" type="checkbox" name="status" id="show-order"/>
                            فعال باشد
                        </label>
                    </div>
                    <div className="col-12 p-3 bg-secondary bg-opacity-10 rounded ">
                        <button className="btn btn-success font-16-rem mx-1">ذخیره</button>
                        <button className="btn btn-success font-16-rem mx-1">ذخیره و بستن</button>
                        <button className="btn btn-success font-16-rem mx-1">ذخیره و جدید</button>
                    </div>
                </section>
            </section>
        </>
    );
}

export default VariationOptionEdit;