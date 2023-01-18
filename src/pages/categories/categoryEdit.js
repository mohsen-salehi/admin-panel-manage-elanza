import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Select from "react-select";
import TinyEditor from "../../components/tinyEditor/tinyEditor";

function CategoryEdit() {
    const options = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'},
    ];
    const [selectedOption, setSelectedOption] = useState('');
    return (
        <>
            <div  className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between">
                <div className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                    <h4 className="py-3 py-md-2 px-2">
                        ویرایش دسته بندی
                    </h4>
                </div>
                <div className="col-12 p-2">
                    <div className="col-12 p-2 d-flex flex-wrap">

                        <div className="col-12 border rounded d-flex flex-wrap  ">
                            <div className="col-12 d-flex p-3 text-white justify-content-center justify-content-md-start align-items-center bg-default rounded-3">
                             مدیریت دسته بندی ها
                            </div>
                            <div className="col-12 col-12 d-flex flex-wrap justify-content-between px-xl-4 p-2">

                                <label className="col-md-5 col-12 col-xxl-3 d-flex flex-wrap py-2">
                                              عنوان
                                    <span className="text-danger">*</span>
                                    <input type="text" name="title" id="title" className="p-2 col-12 my-1"/>
                                </label>

                                <label className="col-md-5 col-12 col-xxl-3 d-flex flex-wrap py-2">
                                    عنوان لاتین
                                    <input type="text" name="title-latin" id="title-latin" className="p-2 col-12 my-1"/>
                                </label>

                                <label className="col-md-5 col-12 col-xxl-3 d-flex flex-wrap py-2">
                                    slug
                                    <span className="text-danger">*</span>
                                    <input type="text" name="slug" id="slug" className="p-2 col-12 my-1"/>
                                </label>

                                <label className=" col-12 d-flex my-4 border p-4 rounded flex-wrap">
                                            <span className="d-flex col-12 my-1">
                                              توضیحات
                                           </span>
                                    <span className="col-12">  <TinyEditor /></span>
                                </label>
                                <label className="col-12 col-md-5   m-2 rounded  center d-flex flex-wrap col-xxl-3 justify-content-between align-items-center ">
                                    <span className="col-12 d-flex"> ارسال فایل تصویر</span>
                                    <span className="col-12 border rounded d-flex align-items-center">
                                <input className="col-3 p-2 position-relative border-0 icon" type="file"
                                       name="Store-Status" id="get-logo"/>
                                 <span className=" text-danger mx-1 font-FaNum-Medium font-9 p-1">(حجم فایل عکس باید زیر 500 کیلوبایت باشد)</span>
                            </span>
                                </label>
                                <label className="col-md-5 col-12 col-xxl-3 d-flex flex-wrap py-2">
                                    کمیسون
                                    <span className="text-danger">*</span>
                                    <input type="number" name="commission" id="commission" className="p-2 col-12 my-1"/>
                                </label>
                                <label className="col-md-5 col-12 col-xxl-3 d-flex flex-wrap py-2">
                                   اولویت نمایش
                                    <input type="number" name="order" id="order" className="p-2 col-12 my-1"/>
                                </label>
                                <label className="col-md-5 col-12 col-xxl-3 d-flex flex-wrap py-2">
                                    والد
                                    <span className="text-danger">*</span>
                                    <input type="text" name="parent" id="parent" className="p-2 col-12 my-1"/>
                                </label>
                                <label className="col-md-5 col-12 col-xxl-3 d-flex flex-wrap py-2">
                                    انتخاب فیلد شفارشی
                                    <input type="text" name="field" id="field" className="p-2 col-12 my-1"/>
                                </label>
                                <div className="col-md-5 col-12 col-xxl-3 d-flex flex-wrap py-2">
                                    <label className="col-12">
                                        <input type="checkbox" name="active" id="active" className="mx-1"/>
                                        فعال
                                    </label>
                                    <label className="col-12">
                                        <input type="checkbox" name="is_health_ministry_code_needed" id="is_health_ministry_code_needed" className="mx-1"/>
                                        نیاز به کد وزارت بهداشت دارد
                                    </label>
                                    <label className="col-12">
                                        <input type="checkbox" name="flat-green form-check-input" id="flat-green form-check-input" className="mx-1"/>
                                        نیاز به فایل راهنما دارد
                                    </label>
                                    <label className="col-12">
                                        <input type="checkbox" name="is_promoted" id="is_promoted" className="mx-1"/>
                                       ویژه
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion col-12 font-medium font-14 text-submit-black1  rounded-manual"  id="accordionPanelsStayOpenExample">
                        <div className="accordion-item  my-3 border-none shadow rounded-manual">
                            <h2 className="accordion-header" id="panelsStayOpen-heading-img">
                                <button
                                    className="bg-default  col-12 accordion-button rounded-manual d-flex justify-content-md-start justify-content-center collapsed py-3 "
                                    type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapse-img"
                                    aria-expanded="false" aria-controls="panelsStayOpen-collapse-img">
                                    <span className="text-white">بارگزاری تصویر اسلایدر </span>
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapse-img" className="accordion-collapse collapse "
                                 aria-labelledby="panelsStayOpen-heading-img">
                                <div className="accordion-body row justify-content-center">
                                    <div className="col-12 p-2 d-flex justify-content-between flex-wrap px-3">
                                        <label className="col-12 col-md-6 d-flex flex-wrap p-2">
                                            <span className="d-flex flex-wrap mt-2 col-12 ">
                                               <h5 className="col-12 d-flex mb-2"> انتخاب تصویر</h5>
                                                <span className='px-1 text-danger font-FaNum-Medium mt-2 alert alert-danger p-2'>    عکس باید از 1000 کیلوبایت کوچک تر ، دارای ابعاد بالاتر از 1000x1000 پیکسل ، مربعی و دارای فرمت معتبر باشد </span>
                                           </span>
                                            <input className="col-md-2 col-12 p-2 mt-3 position-relative border-0 icon" type="file"
                                                   name="Img-national-card" id="get-logo"/>
                                            <span className="d-flex mt-3 col-12">
                                                + افزودن تصویر جدید
                                           </span>
                                        </label>
                                        <div className="col-12 col-md-6 center">
                                            <figure className="col-md-3 col-5 center border p-2 rounded shadow-sm">
                                                <img src="https://www.freeiconspng.com/uploads/upload-icon-30.png" alt="img" className="img-fluid col-10"/>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion col-12 font-medium font-14 text-submit-black1  rounded-manual"  id="accordionPanelsStayOpenExample">
                        <div className="accordion-item  my-3 border-none shadow rounded-manual">
                            <h2 className="accordion-header-faq" id="panelsStayOpen-heading-faq">
                                <button
                                    className="bg-default  col-12 accordion-button rounded-manual d-flex justify-content-md-start justify-content-center collapsed py-3 "
                                    type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapse-faq"
                                    aria-expanded="false" aria-controls="panelsStayOpen-collapse-faq">
                                    <span className="text-white">سوالات متداول </span>
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapse-faq" className="accordion-collapse collapse "
                                 aria-labelledby="panelsStayOpen-heading-faq">
                                <div className="accordion-body row justify-content-center">
                                    <div className="col-12 p-2 d-flex justify-content-between flex-wrap px-3 bg-opacity-10 bg-secondary rounded my-1">
                                        <label className="col-12 d-flex flex-wrap">
                                            عنوان
                                            <input type="text" className="col-12 d-flex p-2 my-1"/>
                                        </label>
                                        <label className="col-12 d-flex flex-wrap">
                                            محتوا
                                            <input type="text" className="col-12 d-flex p-2 my-1"/>
                                        </label>
                                    </div>

                                </div>
                                <div className="col-12 d-flex justify-content-end p-2">
                                    <button className="btn btn-success icon icon-Add1 m-1" onClick={e => e.target.parentElement.previousElementSibling.innerHTML+=`
                                           <div class="col-12 p-2 d-flex justify-content-between flex-wrap px-3 bg-opacity-10 bg-secondary rounded my-1">
                                        <label class="col-12 d-flex flex-wrap">
                                            عنوان
                                            <input type="text" class="col-12 d-flex p-2 my-1"/>
                                        </label>
                                        <label class="col-12 d-flex flex-wrap">
                                            محتوا
                                            <input type="text" class="col-12 d-flex p-2 my-1"/>
                                        </label>
                                    </div>
                                        `}></button>
                                </div>
                                <div className="col-12 p-2 bg-success rounded bg-opacity-10">
                                    <label className="col-12 col-xl-3 d-flex flex-wrap">
                                       وضعیت
                                        <input type="text" className="col-12 d-flex p-2 my-1"/>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-around flex-wrap">
                        {/*seo*/}
                        <div className="accordion2 col-12 col-md-5 font-medium text-submit-black1  " id="accordionPanelsStayOpenExample">
                            <div className="accordion-item  my-3 border-none shadow rounded-manual">
                                <h2 className="accordion-header" id="panelsStayOpen-heading-seo">
                                    <button
                                        className="bg-warning font-16-rem text-white col-12 accordion-button rounded-manual d-flex justify-content-evenly collapsed p-3 "
                                        type="button" data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapse-seo"
                                        aria-expanded="false" aria-controls="panelsStayOpen-collapse-seo">
                                        تنظیمات SEO
                                    </button>
                                </h2>
                                <div    id="panelsStayOpen-collapse-seo" className="accordion-collapse collapse p-3" aria-labelledby="panelsStayOpen-heading-seo">
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
                        {/*active*/}
                        <div className="accordion1 col-12 col-md-5 font-medium text-submit-black1  " id="accordionPanelsStayOpenExample1">
                            <div className="accordion-item my-3 border-none shadow rounded-manual">
                                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                    <button
                                        className="bg-warning font-16-rem text-white col-12 accordion-button rounded-manual d-flex justify-content-evenly collapsed p-3"
                                        type="button" data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseOne"
                                        aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                                        <span >انتخاب تگ ها</span>
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
                    </div>
                    <div className="col-12 d-flex flex-wrap justify-content-between bg-secondary bg-opacity-10 rounded">
                        <div className="col-12 col-md-4  bg-opacity-25 p-3 rounded-pill d-flex justify-content-evenly align-content-center flex-wrap">
                            <button className="col-11 col-md-3 my-1  btn btn-light text-white bg-default border-0 font-16-rem center">
                                ذخیره
                            </button>
                            <button className="col-11 col-md-3 my-1  btn btn-light text-white bg-default border-0 font-16-rem center">

                                ذخیره و بستن
                            </button>
                            <button className="col-11 col-md-3 my-1  btn btn-light text-white bg-default border-0 font-16-rem center">

                                ذخیره و جدید
                            </button>
                        </div>
                        <div className="col-12 col-md-4  bg-opacity-25 p-3 rounded-pill d-flex justify-content-evenly align-content-center flex-wrap ">
                            <button className="col-11 col-md-3 my-1  btn btn-light text-white bg-success border-0 font-16-rem center">

                                ذخیره و تایید
                            </button>
                            <button className="col-11 col-md-4 my-1  btn btn-light text-white bg-danger border-0 font-16-rem center">
                                لغو درخواست تایید
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CategoryEdit;