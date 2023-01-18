import React,{ useState } from 'react';
import Select from "react-select";



function EditStores() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];
    const [selectedOption, setSelectedOption] = useState('');
    return (
        <>
                    <div className="col-12 p-2 bg-warning rounded-pill text-center">
                        فرم ویرایش
                    </div>
                    <div className="col-12 p-2 d-flex flex-wrap justify-content-around ">
                        <div className="col-12 p-4 d-flex justify-content-between align-content-center  flex-wrap font-14 border-bottom rounded">
                            <h5 className="col-12 text-secondary">اطلاعات فروشگاه</h5>
                            <label className="col-12 col-md-5 mx-1  col-xxl-3 py-2" htmlFor="Store-title">
                                عنوان فروشگاه
                                <span className="text-danger mx-1">*</span>
                                <input className="col-12 mt-2 p-1" type="text" name="Store-title" id="Store-title"/>
                            </label>
                            <label className="col-12 col-md-5  mx-1  col-xxl-3 py-2" htmlFor="Store-title-latin">
                                عنوان فروشگاه به لاتین
                                <input className="col-12 mt-2 p-1" type="text" name="Store-title-latin"
                                       id="Store-title-latin"/>
                            </label>
                            <label className="col-12 col-md-5  mx-1  col-xxl-3 py-2" htmlFor="Store-title-url">
                                (URL) لاتین
                                <input className="col-12 mt-2 p-1" type="text" name="Store-title-url" id="Store-title-url"/>
                            </label>
                            <label className="col-12 col-md-5  mx-1  col-xxl-3 py-2" htmlFor="Store-Status">
                                وضعیت فروشگاه
                                <span className="text-danger mx-1">*</span>
                                <select className="col-12 mt-2 p-1 rounded border" name="Store-Status" id="Store-Status">
                                    <option value="انتخاب کنید" selected disabled>انتخاب کنید</option>
                                    <option value="تایید شده">تایید شده</option>
                                    <option value="تایید نشده ">تایید نشده</option>
                                </select>
                            </label>
                            <label className="col-12 col-md-5  mx-1  col-xxl-3 py-2" htmlFor="type">
                                نوع
                                <span className="text-danger mx-1">*</span>
                                <select className="col-12 mt-2 p-1 rounded border" name="type" id="type">
                                    <option value="انتخاب کنید" selected disabled>انتخاب کنید</option>
                                    <option value="حقوقی">حقوقی</option>
                                </select>
                            </label>
                            <label className="col-12 col-md-5   m-2 rounded  center d-flex flex-wrap col-xxl-3 justify-content-between align-items-center ">
                                <span className="col-12 d-flex"> ارسال فایل لوگو</span>
                                <span className="col-12 border rounded d-flex align-items-center">
                                <input className="col-3 p-2 position-relative border-0 icon" type="file"
                                       name="Store-Status" id="get-logo"/>
                                 <span className=" text-danger mx-1 font-FaNum-Medium font-9 p-1">(حجم فایل عکس باید زیر 500 کیلوبایت باشد)</span>
                            </span>
                            </label>
                            <label className="col-12 col-md-5  mx-1  col-xxl-3 py-2" htmlFor="Web-Address">
                                آدرس وب سایت
                                <input dir="ltr" className="col-12 mt-2 p-1 center" type="text" name="Web-Address"
                                       id="Web-Address" value="http://ilabert.ir"/>
                            </label>
                            <label className="col-12 col-md-5  mx-1  col-xxl-3 py-2" htmlFor="Mob-Number">
                                موبایل
                                <span className="col-12 text-danger mx-1 font-FaNum-Medium font-10 p-1">(تمامی اطلاع رسانی ها به این شماره ارسال خواهد شد)</span>
                                <span className="text-danger mx-1">*</span>
                                <input dir="ltr" className="col-12 mt-2 p-1 center" type="tel" name="Mob-Number"
                                       id="Mob-Number"/>
                            </label>
                            <label className="col-12 col-md-5  mx-1  col-xxl-3 py-2" htmlFor="email">
                                ایمیل
                                <span className="col-12 text-danger mx-1 font-FaNum-Medium font-10 p-1">(تمامی اطلاع رسانی ها به این شماره ارسال خواهد شد)</span>
                                <span className="text-danger mx-1">*</span>
                                <input dir="ltr" className="col-12 mt-2 p-1 center" type="tel" name="email" id="email"/>
                            </label>
                            <label className="col-12 col-md-5  mx-1  col-xxl-3 py-2" htmlFor="Name-Company">
                                نام شرکت
                                <span className="text-danger mx-1">*</span>
                                <input dir="ltr" className="col-12 mt-2 p-1 center" type="text" name="Name-Company"
                                       id="Web-Address"/>
                            </label>
                            <label className="col-12 col-md-5  mx-1  col-xxl-3 py-2" htmlFor="National-Num">
                                شناسه ملی
                                <span className="text-danger mx-1">*</span>
                                <input dir="ltr" className="col-12 mt-2 p-1 center" type="text" name="National-Num"
                                       id="National-Num"/>
                            </label>
                            <label className="col-12 col-md-5  mx-1 col-xxl-3 py-2" htmlFor="Sheba-Num">
                                شبا
                                <span className="text-danger mx-1">*</span>
                                <span
                                    className="col-12 mt-2 border rounded  center d-flex justify-content-between align-items-center">
                                <input type="text" className="col" name="Sheba-Num" id="Sheba-Num"/>
                                <button className="btn btn-primary  font-12">استعلام شبا </button>
                            </span>
                            </label>
                            <label className="col-12 col-md-5  mx-1  col-xxl-3 py-2" htmlFor="Account-Num">
                                شماره حساب
                                <span className="text-danger mx-1">*</span>
                                <input dir="ltr" className="col-12 mt-2 p-1 center" type="text" name="Account-Num"
                                       id="Account-Num"/>
                            </label>
                            <label className="col-12 col-md-5  mx-1  col-xxl-3 py-2" htmlFor="Branch-Bank">
                                شعبه بانک
                                <span className="text-danger mx-1">*</span>
                                <input dir="ltr" className="col-12 mt-2 p-1 center" type="tel" name="Branch-Bank"
                                       id="Branch-Bank"/>
                            </label>
                            <label className="col-12 col-md-5  mx-1  col-xxl-3 py-2" htmlFor="Name-Account">
                                نام صاحب بانک
                                <span className="text-danger mx-1">*</span>
                                <input dir="ltr" className="col-12 mt-2 p-1 center" type="text" name="Name-Account"
                                       id="Name-Account"/>
                            </label>
                        </div>
                        <div className="col-12 col-12 p-4 d-flex justify-content-between align-content-center  flex-wrap font-14 border-bottom rounded">
                            <label className="col-12 col-md-5   m-2 rounded  center d-flex flex-wrap col-xxl-3 justify-content-between align-items-center ">
                                <span className="col-12 d-flex"> ارسال فایل کارت ملی </span>
                                <span className="col-12 border rounded d-flex align-items-center">
                                <input className="col-3 p-2 position-relative border-0 icon" type="file"
                                       name="Img-national-card" id="Img-national-card"/>
                                 <span className=" text-danger mx-1 font-FaNum-Medium font-9 p-1">(پشت و روی کارت ملی در یک تصویر کنار هم)</span>
                            </span>
                            </label>
                            <label className="col-12 col-md-5   m-2 rounded  center d-flex flex-wrap col-xxl-3 justify-content-between align-items-center ">
                                <span className="col-12 d-flex py-2"> ارسال فایل مالیات بر ارزش افزوده </span>
                                <span className="col-12 border rounded d-flex align-items-center">
                                <input className="col-3 p-2 position-relative border-0 m-0 icon" type="file"
                                       name="tax" id="tax"/>
                                 <span className=" text-danger mx-1 font-FaNum-Medium font-9 p-1">(ارسال فایل مالیات بر ارزش افزوده)</span>
                            </span>
                            </label>
                            <label className="col-12 col-md-5   m-2 rounded  center d-flex flex-wrap col-xxl-3 justify-content-between align-items-center ">
                                <span className="col-12 d-flex"> ارسال فایل کارت ملی </span>
                                <span className="col-12 border rounded d-flex align-items-center">
                                <input className="col-3 p-2 position-relative border-0 icon" type="file"
                                       name="Img-national-card" id="get-logo"/>
                                 <span className=" text-danger mx-1 font-FaNum-Medium font-9 p-1">(پشت و روی کارت ملی در یک تصویر کنار هم)</span>
                            </span>
                            </label>
                        </div>
                        <div className="col-12 col-12 p-4 d-flex justify-content-between align-content-center  flex-wrap font-14 border-bottom rounded">
                            <div   className="col-12 d-flex justify-content-between align-items-center flex-wrap mb-3">
                                <label className="col-12 col-md-5   col-xxl-3 py-2" htmlFor="Registration-Number">
                                    شماره ثبت
                                    <span className="text-danger mx-1">*</span>
                                    <input dir="ltr" className="col-12 mt-2 p-1 center" type="tel"
                                           name="Registration-Number"
                                           id="Registration-Number"/>
                                </label>
                                <label className="col-12 col-md-5    col-xxl-3  font-14" htmlFor="options">
                                    <span className="py-xxl-2 d-flex">کاربران</span>
                                    <Select
                                        isMulti
                                        defaultValue={selectedOption}
                                        onChange={setSelectedOption}
                                        options={options}
                                    />
                                </label>
                                <label className="col-12 col-md-5  mx-md-1 mx-0  col-xxl-3 py-2" htmlFor="Economical-Number">
                                    شماره اقتصادی
                                    <span className="text-danger mx-1">*</span>
                                    <input dir="ltr" className="col-12 mt-2 p-1 center" type="tel" name="Economical-Number"
                                           id="Economical-Number"/>
                                </label>
                            </div>
                        </div>
                        <div className="col-12 col-12 p-4 d-flex justify-content-between align-content-center  flex-wrap font-14 border-bottom rounded">
                            <label className="col-12 col-md-5  mx-1  col-xxl-3 py-2 font-14" htmlFor="city">
                                شهر
                                <span className="text-danger mx-1">*</span>
                                <select className="col-12 mt-2 p-1 center border rounded" name="city" id="city">
                                    <option value="تهران" selected>تهران</option>
                                </select>
                            </label>
                            <label className="col-12 col-md-5  mx-1  col-xxl-3 py-2 font-14" htmlFor="address">
                                آدرس
                                <span className="text-danger mx-1">*</span>
                                <textarea rows="1" cols="2" className="col-12 mt-2 p-1 center border rounded" name="address"
                                          id="address"/>
                            </label>
                            <label className="col-12 col-md-5  mx-1  col-xxl-3 py-2 font-14" htmlFor="unit">
                                واحد
                                <span className="text-danger mx-1">*</span>
                                <input className="col-12 mt-2 p-1 center  " name="unit" id="unit"/>
                            </label>
                            <label className="col-12 col-md-5  mx-1  col-xxl-3 py-2 font-14" htmlFor="Plaque">
                                شماره پلاک
                                <span className="text-danger mx-1">*</span>
                                <input className="col-12 col-md-5  mt-2 p-1 center  " name="Plaque" id="Plaque"/>
                            </label>
                            <label className="col-12 col-md-5  mx-1  col-xxl-3 py-2 font-14" htmlFor="postal-Code">
                                کد پستی
                                <span className="text-danger mx-1">*</span>
                                <input className="col-12 mt-2 p-1 center  " name="postal-Code" id="postal-Code"/>
                            </label>
                            <label className="col-12 col-md-5  mx-1  col-xxl-3 py-2 font-14" htmlFor="phone">
                                تلفن
                                <span className="text-danger mx-1">*</span>
                                <input className="col-12 mt-2 p-1 center  " name="phone" id="phone"/>
                            </label>
                        </div>
                        {/*Accordion*/}
                        <div className="accordion1 col-12 col-md-5 font-medium text-submit-black1  " id="accordionPanelsStayOpenExample1">
                            <div className="accordion-item my-3 border-none shadow rounded-manual">
                                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                    <button
                                        className="bg-warning font-16-rem text-white col-12 accordion-button rounded-manual d-flex justify-content-evenly collapsed p-3"
                                        type="button" data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseOne"
                                        aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                                        قرارداد فعال فروشنده
                                    </button>
                                </h2>
                                <div    id="panelsStayOpen-collapseOne" className="accordion-collapse collapse p-3 " aria-labelledby="panelsStayOpen-headingOne">
                                    <div className="accordion-body">
                                        <label className="col-12   mx-1  py-2 font-14" htmlFor="unit">
                                            تعداد روز ارسال
                                            <span className="text-danger mx-1">*</span>
                                            <input className="col-12 mt-2 p-1 center  " name="unit" id="unit"/>
                                        </label>
                                        <label className="col-12  mx-1  py-2 font-14" htmlFor="unit">
                                            دوره تسویه حساب (روز)
                                            <span className="text-danger mx-1">*</span>
                                            <input className="col-12 mt-2 p-1 center  " name="unit" id="unit"/>
                                        </label>
                                        <div className="col-12 d-flex flex-wrap justify-content-between">
                                            <div className="col-7 d-flex  flex-wrap  justify-content-between mx-1  py-2 font-14">
                                                <label className="col-12 col-md-7 d-flex my-2 justify-content-start align-content-center">
                                                    <input className="ms-2" type="checkbox" name="shipping-cost" id="shipping-cost"/>
                                                    هزینه ارسال
                                                    <span className="text-danger mx-1">*</span>
                                                </label>
                                                <label className="col-7 d-flex my-2 justify-content-start align-content-center">
                                                    <input className="ms-2" type="checkbox" name="crimes" id="crimes"/>
                                                    جرایم
                                                    <span className="text-danger mx-1">*</span>
                                                </label>
                                            </div>
                                            <div className="col-12 col-md-3 d-flex justify-content-center align-items-center">
                                                <button className="btn btn-warning col-10 text-bg-warning font-16-rem p-2 d-flex justify-content-center align-content-center rounded-pill">
                                                    دانلود قرار داد
                                                    <i className="icon icon-Download2 font-20 me-2"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*seo*/}
                            <div className="accordion2 col-12 col-md-5 font-medium text-submit-black1  " id="accordionPanelsStayOpenExample2">
                                <div className="accordion-item  my-3 border-none shadow rounded-manual">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                        <button
                                            className="bg-warning font-16-rem text-white col-12 accordion-button rounded-manual d-flex justify-content-evenly collapsed p-3 "
                                            type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseTwo"
                                            aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                           تنظیمات SEO
                                        </button>
                                    </h2>
                                    <div    id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse p-3" aria-labelledby="panelsStayOpen-headingTwo">
                                        <div dir="ltr" className="accordion-body">
                                            <label className="col-12  mx-1  py-2 font-14" htmlFor="meta-title">
                                                Meta Title
                                                <span className="text-danger mx-1">*</span>
                                                <input className="col-12 mt-2 p-1 center  " name="meta-title" id="meta-title"/>
                                            </label>
                                            <label className="col-12  mx-1  py-2 font-14" htmlFor="meta-description">
                                                Meta Description
                                                <span className="text-danger mx-1">*</span>
                                                <input className="col-12 mt-2 p-1 center  " name="meta-description" id="meta-description"/>
                                            </label>
                                            <label className="col-12  mx-1  py-2 font-14" htmlFor="meta-canonical">
                                                Meta Canonical
                                                <span className="text-danger mx-1">*</span>
                                                <input className="col-12 mt-2 p-1 center  " name="meta-canonical" id="meta-canonical"/>
                                            </label>
                                            <label className="col-12  mx-1  py-2 font-14" htmlFor="meta-summary">
                                                Meta Summary
                                                <span className="text-danger mx-1">*</span>
                                                <input className="col-12 mt-2 p-1 center  " name="meta-summary" id="meta-summary"/>
                                            </label>
                                            <label className="col-12  mx-1  py-2 font-14" htmlFor="meta-robots">
                                                Meta Robots
                                                <span className="text-danger mx-1">*</span>
                                                <select  className="col-12 mt-2 p-1 center border rounded " name="meta-robots" id="meta-robots">
                                                    <option value="noindex">noindex</option>
                                                    <option value="nofollow">nofollow</option>
                                                </select>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div className="col-11 col-md-5  bg-opacity-25 p-3 rounded-pill d-flex justify-content-evenly align-content-center flex-wrap">
                            <button className="col-11 col-md-3 my-1  btn btn-success bg-default border-0 font-16-rem center">
                                ذخیره
                            </button>
                            <button className="col-11 col-md-3 my-1  btn btn-success bg-default border-0 font-16-rem center">
                                <i className="icon icon-Add1 text-light ps-1"></i>
                                ذخیره و بستن
                            </button>
                            <button className="col-11 col-md-3 my-1  btn btn-success bg-default border-0 font-16-rem center">
                                <i className="icon icon-Add1 text-light ps-1"></i>
                                ذخیره و جدید
                            </button>
                        </div>
                    </div>


        </>
    );
}

export default EditStores;