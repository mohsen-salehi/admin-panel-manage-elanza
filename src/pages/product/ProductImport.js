import React from 'react';
import {Link} from "react-router-dom";

function ProductImport() {
    return (
        <>
            <section className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between p-2">
                <section className="col-12 d-flex justify-content-between flex-wrap align-items-center border-bottom rounded">

                    <div className="col-12 d-flex flex-wrap justify-content-end align-items-center p-2">
                        <h5 className="col-12 border-bottom rounded p-2">وارد کردن محصولات</h5>
                    </div>
                    <div className="col-12 p-2 alert alert-warning d-flex align-items-center">
                        <i className="icon icon-Close border border-warning mx-1 p-2 rounded cursor" onClick={(e)=>e.target.parentElement.remove()}></i>
                        هرگز یک فایل را دو بار بارگذاری نفرمایید. پیش از بارگذاری مجدد حتما فایل جدید را دانلود نمایید.
                    </div>
                </section>
                <section className="col-12 d-flex justify-content-center align-items-start flex-wrap rounded p-2 shadow-sm">
                    <h6 className="col-12 bg-default p-3 rounded text-white ">
                        بارگذاری فایل محصولات
                    </h6>
                    <div className="col-12 p-4 d-flex justify-content-between align-content-center  flex-wrap font-14 border-bottom rounded">
                        <label className="col-12 col-md-5  py-2" >
                         فروشگاه
                            <span className="text-danger mx-1">*</span>
                            <input className="col-12 mt-2 p-1 center" type="text"
                                   name="seller"
                                   placeholder="  فروشگاه"
                                   id="seller"/>
                        </label>
                        <label className="col-12 col-md-5   m-2 rounded  center d-flex flex-wrap  justify-content-between align-items-center ">
                            <span className="col-12 d-flex"> ارسال فایل اکسل
                              <span className="text-danger mx-1">*</span>
                            </span>

                            <span className="col-12 border rounded d-flex align-items-center">
                                <input className="col-3 p-2 position-relative border-0 icon" type="file"
                                       name="exel" id="Img-national-card"/>
                            </span>
                            <span className="text-danger mx-1 font-FaNum-Medium font-12 p-xl-2 py-2">( فایل ورودی باید همان فایلی باشد که از خروجی محصولات یک فروشگاه گرفته شده باشد و بدون هیچ تغییری در ساختار فایل، تنها مقادیر برخی ستون های مجاز تغییر کرده باشد.)</span>

                        </label>
                    </div>
                    <div className="col-12 p-3 bg-secondary bg-opacity-10 rounded ">
                        <button className="btn btn-success font-16-rem mx-1">بارگذاری</button>
                    </div>
                </section>
            </section>
        </>
    );
}

export default ProductImport;