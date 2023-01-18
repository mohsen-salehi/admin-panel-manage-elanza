import React, {useState} from 'react';
import Select from "react-select";
import TinyEditor from "../../components/tinyEditor/tinyEditor";

function NewBrand() {
    const options = [{value: 'chocolate', label: 'Chocolate'}, {
        value: 'strawberry', label: 'Strawberry'
    }, {value: 'vanilla', label: 'Vanilla'},];
    const [selectedOption, setSelectedOption] = useState('');
    return (<>
        <div
            className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between">
            <div className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                <h4 className="py-3 py-md-2 px-2">
                    افزودن برند
                </h4>
            </div>
            <div className="col-12 p-2">
                <div className="accordion col-12 font-medium font-14 text-submit-black1  rounded-manual"
                     id="accordionPanelsStayOpenExample">
                    <div className="accordion-item  my-3 border-none shadow rounded-manual">
                        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                            <button
                                className="bg-default  col-12 accordion-button rounded-manual d-flex justify-content-md-start justify-content-center  py-3 "
                                type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseTwo"
                                aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
                                <span className="text-white">برند جدید</span>
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show"
                             aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="accordion-body row justify-content-center">
                                <div className="col-12 p-2 d-flex justify-content-between flex-wrap px-3">
                                    <label className="col-md-5 col-12 d-flex align-items-center flex-wrap p-2">
                                            <span className="d-flex col-12">
                                             عنوان برند
                                            <span className="text-danger px-1">*</span>
                                           </span>
                                        <input type="text" name="new-brand-name" id="new-brand-name"
                                               className="p-2 col-12"/>
                                    </label>
                                    <label className="col-md-5 col-12 d-flex  flex-wrap p-2">
                                            <span className="d-flex col-12">
                                               عنوان برند (لاتین)
                                            <span className="text-danger px-1">*</span>
                                           </span>
                                        <input type="text" name="latin-name-brand" id="latin-name-brand"
                                               className="p-2 col-12 "/>
                                    </label>
                                    <label className="col-md-5 col-12 d-flex  flex-wrap p-2">
                                            <span className="d-flex col-12">
                                               url برند (لاتین)
                                            <span className="text-danger px-1">*</span>
                                           </span>
                                        <input type="text" name="latin-url-brand" id="latin-url-brand"
                                               className="p-2 col-12 "/>
                                    </label>

                                    <label
                                        className="col-12 col-md-5  px-1 m-2 rounded  center d-flex flex-wrap  justify-content-between align-items-center ">
                                        <span className="col-12 d-flex"> ارسال فایل لوگو </span>
                                        <span className="col-12 border rounded d-flex align-items-center">
                                          <input className="col-3 p-2 position-relative border-0 icon" type="file"
                                                 name="logo-file" id="Img-national-card"/><span className=" text-danger mx-1 font-FaNum-Medium font-9 p-1">(پشت و روی کارت ملی در یک تصویر کنار هم)</span>
                                         </span>
                                    </label>
                                    <label className=" col-12 d-flex my-4 border p-4 rounded flex-wrap">
                                            <span className="d-flex col-12">
                                               شرح مختصر کالا
                                            <span className="text-danger px-1">*</span>
                                           </span>
                                        <span className="col-12">  <TinyEditor/></span>
                                    </label>
                                    <label className="col-md-5 col-12 d-flex  flex-wrap p-2">
                                            <span className="d-flex col-12">
                                              اولویت نمایش
                                            <span className="text-danger px-1">*</span>
                                           </span>
                                        <input type="text" name="display-priority" id="display-priority"
                                               className="p-2 col-12 "/>
                                    </label>
                                    <label className="col-md-5 col-12 d-flex  flex-wrap p-2">
                                            <span className="d-flex col-12">
                                              اولویت نمایش
                                            <span className="text-danger px-1">*</span>
                                           </span>
                                        <input type="text" name="brand-status" id="brand-status"
                                               className="p-2 col-12 "/>
                                    </label>

                                    <div className="col-md-5 col-12 d-flex  flex-wrap p-2">

                                        <label className="col-12">
                                            <input type="checkbox" name="active" id="active"/>
                                            <span className="px-2"> فعال</span>
                                        </label>
                                        <label className="col-12">
                                            <input type="checkbox" name="is-iraniain" id="is-iraniain"/>
                                            <span className="px-2"> ایرانی است</span>
                                        </label>
                                        <label className="col-12">
                                            <input type="checkbox" name="premium" id="premium"/>
                                            <span className="px-2"> ویژه</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 d-flex justify-content-around flex-wrap">
                    {/*seo*/}
                    <div className="accordion2 col-12 col-md-5 font-medium text-submit-black1  "
                         id="accordionPanelsStayOpenExample">
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
                            <div id="panelsStayOpen-collapse-seo" className="accordion-collapse collapse p-3"
                                 aria-labelledby="panelsStayOpen-heading-seo">
                                <div dir="ltr" className="accordion-body">
                                    <label className="col-12  mx-1  py-2 font-14" htmlFor="meta-title">
                                        Meta Title
                                        <span className="text-danger mx-1">*</span>
                                        <input className="col-12 mt-2 p-1 center  " name="meta-title"
                                               id="meta-title"/>
                                    </label>
                                    <label className="col-12  mx-1  py-2 font-14" htmlFor="meta-description">
                                        Meta Description
                                        <span className="text-danger mx-1">*</span>
                                        <input className="col-12 mt-2 p-1 center  " name="meta-description"
                                               id="meta-description"/>
                                    </label>
                                    <label className="col-12  mx-1  py-2 font-14" htmlFor="meta-canonical">
                                        Meta Canonical
                                        <span className="text-danger mx-1">*</span>
                                        <input className="col-12 mt-2 p-1 center  " name="meta-canonical"
                                               id="meta-canonical"/>
                                    </label>
                                    <label className="col-12  mx-1  py-2 font-14" htmlFor="meta-summary">
                                        Meta Summary
                                        <span className="text-danger mx-1">*</span>
                                        <input className="col-12 mt-2 p-1 center  " name="meta-summary"
                                               id="meta-summary"/>
                                    </label>
                                    <label className="col-12  mx-1  py-2 font-14" htmlFor="meta-robots">
                                        Meta Robots
                                        <span className="text-danger mx-1">*</span>
                                        <select className="col-12 mt-2 p-1 center border rounded "
                                                name="meta-robots" id="meta-robots">
                                            <option value="noindex">noindex</option>
                                            <option value="nofollow">nofollow</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*active*/}
                    <div className="accordion1 col-12 col-md-5 font-medium text-submit-black1  "
                         id="accordionPanelsStayOpenExample1">
                        <div className="accordion-item my-3 border-none shadow rounded-manual">
                            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                <button
                                    className="bg-warning font-16-rem text-white col-12 accordion-button rounded-manual d-flex justify-content-evenly collapsed p-3"
                                    type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseOne"
                                    aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                                    <span>انتخاب تگ ها</span>
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse p-3 "
                                 aria-labelledby="panelsStayOpen-headingOne">
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
                                        <div
                                            className="col-7 d-flex  flex-wrap  justify-content-between mx-1  py-2 font-14">
                                            <label
                                                className="col-12 col-md-7 d-flex my-2 justify-content-start align-content-center">
                                                <input className="ms-2" type="checkbox" name="shipping-cost"
                                                       id="shipping-cost"/>
                                                هزینه ارسال
                                                <span className="text-danger mx-1">*</span>
                                            </label>
                                            <label
                                                className="col-7 d-flex my-2 justify-content-start align-content-center">
                                                <input className="ms-2" type="checkbox" name="crimes" id="crimes"/>
                                                جرایم
                                                <span className="text-danger mx-1">*</span>
                                            </label>
                                        </div>
                                        <div
                                            className="col-12 col-md-3 d-flex justify-content-center align-items-center">
                                            <button
                                                className="btn btn-warning col-10 text-bg-warning font-16-rem p-2 d-flex justify-content-center align-content-center rounded-pill">
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
                    <div
                        className="col-12 col-md-4  bg-opacity-25 p-3 rounded-pill d-flex justify-content-evenly align-content-center flex-wrap">
                        <button
                            className="col-11 col-md-3 my-1  btn btn-light text-white bg-default border-0 font-16-rem center">
                            ذخیره
                        </button>
                        <button
                            className="col-11 col-md-3 my-1  btn btn-light text-white bg-default border-0 font-16-rem center">

                            ذخیره و بستن
                        </button>
                        <button
                            className="col-11 col-md-3 my-1  btn btn-light text-white bg-default border-0 font-16-rem center">

                            ذخیره و جدید
                        </button>
                    </div>
                    <div
                        className="col-12 col-md-4  bg-opacity-25 p-3 rounded-pill d-flex justify-content-evenly align-content-center flex-wrap ">
                        <button
                            className="col-11 col-md-3 my-1  btn btn-light text-white bg-success border-0 font-16-rem center">

                            ذخیره و تایید
                        </button>
                        <button
                            className="col-11 col-md-4 my-1  btn btn-light text-white bg-danger border-0 font-16-rem center">
                            لغو درخواست تایید
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </>);
}

export default NewBrand;