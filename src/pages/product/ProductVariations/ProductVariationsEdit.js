import React from 'react';

function ProductVariationsEdit() {
    return (
        <>
            <div
                className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between">
                <div
                    className="col-12 d-flex justify-content-between flex-wrap align-items-center border-bottom rounded">
                    <h5 className="py-3 col-12 py-md-2 px-2 font-FaNum-Medium px-3 px-md-0">
                        تنوع کالا : فوم شستشوی صورت آقایان ژوت حجم 150 میلی لیتر
                    </h5>
                    <h6 className="py-3  py-md-2 px-2 font-FaNum-Medium border-bottom rounded">
                        فروشنده : الانزا
                    </h6>
                </div>
                {/*accordion*/}
                <div className="col-12 p-2 d-flex justify-content-evenly flex-wrap">
                    {/*selection-of-variations*/}
                    <div className="accordion col-12 col-md-5 font-medium font-14 text-submit-black1  rounded-manual"
                         id="accordionPanelsStayOpenExample-selection-of-variations">
                        <div className="accordion-item  my-3 border-none shadow rounded-manual">
                            <h2 className="accordion-header" id="panelsStayOpen-heading-selection-of-variations">
                                <button
                                    className="bg-default collapse col-12 accordion-button rounded-manual d-flex justify-content-md-start justify-content-center py-3 collapsed"
                                    type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapse-selection-of-variations"
                                    aria-expanded="false"
                                    aria-controls="panelsStayOpen-collapse-selection-of-variations"><span
                                    className="text-white">انتخاب تنوع ها</span>
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapse-selection-of-variations"
                                 className="accordion-collapse collapse "
                                 aria-labelledby="panelsStayOpen-heading-selection-of-variations">
                                <div className="accordion-body row justify-content-center">
                                    <div className="col-12 d-flex justify-content-between px-4 flex-wrap">
                                        <label className=" col-12 d-flex flex-wrap p-2">
                                            <span className="d-flex p-2 col-12">
                                                تعداد در بسته
                                           </span>
                                            <select className="col-12 border rounded p-1">
                                                <option value="انتخاب کنید ">انتخاب کنید</option>
                                            </select>
                                        </label>
                                        <label className=" col-12 d-flex flex-wrap p-2">
                                            <span className="d-flex p-2 col-12">
                                                وزن
                                           </span>
                                            <select className="col-12 border rounded p-1">
                                                <option value="انتخاب کنید ">انتخاب کنید</option>
                                            </select>
                                        </label>
                                        <label className=" col-12 d-flex flex-wrap p-2">
                                            <span className="d-flex p-2 col-12">
                                                حجم
                                           </span>
                                            <select className="col-12 border rounded p-1">
                                                <option value="انتخاب کنید ">انتخاب کنید</option>
                                            </select>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Diversity profile*/}
                    <div className="accordion col-12 col-md-5 font-medium font-14 text-submit-black1  rounded-manual"
                         id="accordionPanelsStayOpenExample-diversity-profile">
                        <div className="accordion-item  my-3 border-none shadow rounded-manual">
                            <h2 className="accordion-header" id="panelsStayOpen-heading-diversity-profile">
                                <button
                                    className="bg-default collapse col-12 accordion-button rounded-manual d-flex justify-content-md-start justify-content-center py-3 collapsed"
                                    type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapse-diversity-profile" aria-expanded="false"
                                    aria-controls="panelsStayOpen-collapse-diversity-profile"><span
                                    className="text-white">مشخصات تنوع </span>
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapse-diversity-profile" className="accordion-collapse collapse "
                                 aria-labelledby="panelsStayOpen-heading-diversity-profile">
                                <div className="accordion-body row justify-content-center">
                                    <div className="col-12 d-flex justify-content-between px-4 flex-wrap">
                                        <label className=" col-12 d-flex flex-wrap p-2">
                                            <span className="d-flex p-2 col-12">
                                                کد تنوع فروشنده
                                                <span className="text-danger px-1">*</span>
                                           </span>
                                            <input type="text" name="code" id="code" className="col-12 p-1 px-2"
                                                   dir="ltr" value="jute"/>
                                        </label>
                                        <label className=" col-12 d-flex flex-wrap p-2">
                                            <span className="d-flex p-2 col-12">
                                                تعداد موجودی
                                                <span className="text-danger px-1">*</span>
                                           </span>
                                            <input type="text" name="number-of-inventory" id="number-of-inventory"
                                                   value="0" className="col-12 p-1"/>
                                        </label>
                                        <label className=" col-12 d-flex flex-wrap p-2">
                                            <span className="d-flex p-2 col-12">
                                                موجودی انبار الانزا
                                           </span>
                                            <input type="text" disabled value="0" name="elanza-of-inventory"
                                                   id="elanza-of-inventory" className="col-12 p-1 bg-disable"/>
                                        </label>
                                        <label className=" col-12 d-flex flex-wrap p-2">
                                            <span className="d-flex p-2 col-12">
                                               تعداد موجودی رزرو شده

                                           </span>
                                            <input type="text" disabled value="0" name="number-of-reserved-items"
                                                   id="number-of-reserved-items" className="col-12 p-1 bg-disable"/>
                                        </label>
                                        <label className=" col-12 d-flex flex-wrap p-2">
                                        <span className="d-flex p-2 col-12">
                                                قیمت فروش
                                                <span className="text-danger px-1">*</span>
                                           </span>
                                            <input type="text" name="sales-price" id="sales-price"
                                                   className="col-12 p-1" value="0"/>
                                        </label>
                                        <label className=" col-12 d-flex flex-wrap p-2">
                                        <span className="d-flex p-2 col-12">
                                                قیمت فروش ویژه
                                           </span>
                                            <input type="text" name="sales-price-special" id="sales-price-special"
                                                   className="col-12 p-1" placeholder="قیمت فروش ویژه را وارد کنید "/>
                                        </label>
                                        <label className=" col-12 d-flex flex-wrap p-2">
                                        <span className="d-flex p-2 col-12">
                                                بازه زمانی ارسال
                                            <span className="text-danger px-1">*</span>
                                           </span>
                                            <input type="text" name="posting-time-frame" id="posting-time-frame"
                                                   className="col-12 p-1" value="0"/>
                                        </label>
                                        <label className=" col-12 d-flex flex-wrap p-2">
                                        <span className="d-flex p-2 col-12">
                                               حداکثر تعداد در سبد
                                            <span className="text-danger px-1">*</span>
                                           </span>
                                            <input type="text" name="maximum-quantity-in-basket"
                                                   id="maximum-quantity-in-basket"
                                                   className="col-12 p-1" value="0"/>
                                        </label>
                                        <label className=" col-12 d-flex flex-wrap p-2">
                                        <span className="d-flex p-2 col-12">
                                               وزن
                                           </span>
                                            <input type="text" name="weight"
                                                   id="weight"
                                                   className="col-12 p-1" placeholder="وزن محصول را وارد کنید "/>
                                        </label>
                                        <label className=" col-12 d-flex flex-wrap p-2">
                                        <span className="d-flex p-2 col-12">
                                             ترتیب نمایش
                                           </span>
                                            <input type="text" name="view-order"
                                                   id="view-order"
                                                   className="col-12 p-1" placeholder="ترتیب نمایش را وارد کنید "/>
                                        </label>
                                        <label className=" col-12 d-flex flex-wrap p-2">
                                        <span className="d-flex p-2 col-12">
                                            گارانتی
                                             <span className="text-danger px-1">*</span>
                                           </span>
                                            <select name="warranty" id="warranty" className="col-12 p-1 border rounded">
                                                <option value="انتخاب کنید">انتخاب کنید</option>
                                            </select>
                                        </label>
                                        <label className=" col-12 d-flex flex-wrap p-2">
                                        <span className="d-flex p-2 col-12">
                                            وضعیت
                                             <span className="text-danger px-1">*</span>
                                           </span>
                                            <select name="status" id="status" className="col-12 p-1 border rounded">
                                                <option value="انتخاب کنید">انتخاب شده</option>
                                                <option value="تایید شده ">تایید شده</option>
                                                <option value="تایید نشده ">تایید نشده</option>
                                            </select>
                                        </label>
                                        <label className=" col-12 d-flex flex-wrap p-2">
                                           <span className="d-flex my-1 col-12">
                                              <input type="checkbox" name="active" id="active" className="mx-1"/>
                                                فعال باشد.
                                           </span>
                                            <span className="d-flex my-1 col-12">
                                            <input type="checkbox" name="available" id="available" className="mx-1"/>
                                                موجود باشد.
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-11 p-3 bg-secondary bg-opacity-10 rounded d-flex justify-content-center justify-content-md-start ">
                        <button className="col-5 col-md-1 btn btn-success  mx-2 text-white">ذخیره</button>
                        <button className="col-5 col-md-1 btn btn-success mx-2  text-white">ذخیره و بستن</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductVariationsEdit;