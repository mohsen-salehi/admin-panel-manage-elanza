import React from 'react';

function MobileHome() {
    return (
        <>
            <section className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between p-2">
                <section className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                    <div className="col-12 d-flex flex-wrap justify-content-end align-items-center p-2">
                        <h5 className="col-12 p-2">صفحه نخست موبایل
                        </h5>
                    </div>
                </section>
                <section className="col-12 d-flex justify-content-center align-items-start flex-wrap rounded p-2 shadow-sm mt-2">
                    <div className="accordion  col-12 font-medium font-14 text-submit-black1  rounded-manual" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item  my-3 border-none shadow rounded-manual">
                            <h2 className="accordion-header" id="panelsStayOpen-UpDisplay-Mobile">
                                <button
                                    className="bg-default  col-12 accordion-button rounded-manual d-flex justify-content-between py-3 "
                                    type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseUpDisplay-Mobile"
                                    aria-expanded="false" aria-controls="panelsStayOpen-collapseUpDisplay-Mobile">
                                    <span className="text-white">تصویر بالای صفحه</span>
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseUpDisplay-Mobile" className="accordion-collapse  collapse show "
                                 aria-labelledby="panelsStayOpen-headingUpDisplay-Mobile">
                                <div className="accordion-body ">
                                    <div className="col-12 d-flex flex-wrap justify-content-center justify-content-xl-between align-items-start">
                                        <label className="col-12 col-xl-6  mx-1  col-xxl-5 py-2 font-14" htmlFor="postal-Code">
                                            عنوان
                                            <span className="text-danger mx-1">*</span>
                                            <input className="col-12 mt-2 p-1 center p-2" name="title" id="title"/>
                                        </label>
                                        <label className="col-12 col-xl-6  mx-1  col-xxl-5 py-2 font-14" htmlFor="postal-Code">
                                            اسلایدر
                                            <span className="text-danger mx-1">*</span>
                                            <input className="col-12 mt-2 p-1 center p-2" name="slider" id="slider"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion  col-12 font-medium font-14 text-submit-black1  rounded-manual" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item  my-3 border-none shadow rounded-manual">
                            <h2 className="accordion-header" id="panelsStayOpen-ListOne">
                                <button
                                    className="bg-default  col-12 accordion-button rounded-manual d-flex justify-content-between py-3 "
                                    type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseListOne"
                                    aria-expanded="false" aria-controls="panelsStayOpen-collapseListOne">
                                    <span className="text-white">لیست کالاها با برجسب خاص(سری اول)</span>
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseListOne" className="accordion-collapse collapse  show " aria-labelledby="panelsStayOpen-headingListOne">
                                <div className="accordion-body">
                                    <div className="col-12 d-flex flex-wrap justify-content-center justify-content-xl-between align-items-start">
                                        <label className="col-12 col-xl-6  mx-1  col-xxl-5 py-2 font-14" htmlFor="postal-Code">
                                            عنوان
                                            <span className="text-danger mx-1">*</span>
                                            <input className="col-12 mt-2 p-1 center p-2" name="title" id="title"/>
                                        </label>
                                        <label className="col-12 col-xl-6  mx-1  col-xxl-5 py-2 font-14" htmlFor="postal-Code">
                                            تگ
                                            <span className="text-danger mx-1">*</span>
                                            <input className="col-12 mt-2 p-1 center p-2" name="tag" id="tag"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion  col-12 font-medium font-14 text-submit-black1  rounded-manual" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item  my-3 border-none shadow rounded-manual">
                            <h2 className="accordion-header" id="panelsStayOpen-Banners">
                                <button
                                    className="bg-default  col-12 accordion-button rounded-manual d-flex justify-content-between py-3 "
                                    type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseBanners"
                                    aria-expanded="false" aria-controls="panelsStayOpen-collapseBanners">
                                    <span className="text-white"> بنر ها</span>
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseBanners" className="accordion-collapse collapse  show "
                                 aria-labelledby="panelsStayOpen-headingBanners">
                                <div className="accordion-body">
                                    <div className="col-12 d-flex flex-wrap justify-content-center justify-content-xl-between align-items-start">
                                        <label className="col-12 col-xl-6  mx-1  col-xxl-5 py-2 font-14" htmlFor="postal-Code">
                                            اسلایدر
                                            <span className="text-danger mx-1">*</span>
                                            <input className="col-12 mt-2 p-1 center p-2" name="slider" id="slider"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion  col-12 font-medium font-14 text-submit-black1  rounded-manual" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item  my-3 border-none shadow rounded-manual">
                            <h2 className="accordion-header" id="panelsStayOpen-ListTwo">
                                <button
                                    className="bg-default  col-12 accordion-button rounded-manual d-flex justify-content-between py-3 "
                                    type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseListTwo"
                                    aria-expanded="false" aria-controls="panelsStayOpen-collapseListTwo">
                                    <span className="text-white">لیست کالاها با برجسب خاص(سری دوم)</span>
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseListTwo" className="accordion-collapse collapse  show "
                                 aria-labelledby="panelsStayOpen-headingListTwo">
                                <div className="accordion-body">
                                    <div className="col-12 d-flex flex-wrap justify-content-center justify-content-xl-between align-items-start">
                                        <label className="col-12 col-xl-6  mx-1  col-xxl-5 py-2 font-14" htmlFor="postal-Code">
                                            عنوان
                                            <span className="text-danger mx-1">*</span>
                                            <input className="col-12 mt-2 p-1 center p-2" name="title" id="title"/>
                                        </label>
                                        <label className="col-12 col-xl-6  mx-1  col-xxl-5 py-2 font-14" htmlFor="postal-Code">
                                            تگ
                                            <span className="text-danger mx-1">*</span>
                                            <input className="col-12 mt-2 p-1 center p-2" name="tag" id="tag"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion  col-12 font-medium font-14 text-submit-black1  rounded-manual" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item  my-3 border-none shadow rounded-manual">
                            <h2 className="accordion-header" id="panelsStayOpen-SingleBanner">
                                <button
                                    className="bg-default  col-12 accordion-button rounded-manual d-flex justify-content-between py-3 "
                                    type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseSingleBanner"
                                    aria-expanded="false" aria-controls="panelsStayOpen-collapseSingleBanner">
                                    <span className="text-white">بنر تکی پایین صفحه</span>
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseSingleBanner" className="accordion-collapse collapse  show "
                                 aria-labelledby="panelsStayOpen-headingSingleBanner">
                                <div className="accordion-body">
                                    <div className="col-12 d-flex flex-wrap justify-content-center justify-content-xl-between align-items-start">
                                        <label className="col-12 col-xl-6  mx-1  col-xxl-5 py-2 font-14" htmlFor="postal-Code">
                                            عنوان
                                            <span className="text-danger mx-1">*</span>
                                            <input className="col-12 mt-2 p-1 center p-2" name="title" id="title"/>
                                        </label>
                                        <label className="col-12 col-xl-6  mx-1  col-xxl-5 py-2 font-14" htmlFor="postal-Code">
                                            تگ
                                            <span className="text-danger mx-1">*</span>
                                            <input className="col-12 mt-2 p-1 center p-2" name="tag" id="tag"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion  col-12 font-medium font-14 text-submit-black1  rounded-manual" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item  my-3 border-none shadow rounded-manual">
                            <h2 className="accordion-header" id="panelsStayOpen-ListThree">
                                <button
                                    className="bg-default  col-12 accordion-button rounded-manual d-flex justify-content-between py-3 "
                                    type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseListThree"
                                    aria-expanded="false" aria-controls="panelsStayOpen-collapseListThree">
                                    <span className="text-white">لیست کالاها با برجسب خاص(سری سوم)</span>
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseListThree" className="accordion-collapse collapse  show "
                                 aria-labelledby="panelsStayOpen-headingListThree">
                                <div className="accordion-body">
                                    <div className="col-12 d-flex flex-wrap justify-content-center justify-content-xl-between align-items-start">
                                        <label className="col-12 col-xl-6  mx-1  col-xxl-5 py-2 font-14" htmlFor="postal-Code">
                                            عنوان
                                            <span className="text-danger mx-1">*</span>
                                            <input className="col-12 mt-2 p-1 center p-2" name="title" id="title"/>
                                        </label>
                                        <label className="col-12 col-xl-6  mx-1  col-xxl-5 py-2 font-14" htmlFor="postal-Code">
                                            تگ
                                            <span className="text-danger mx-1">*</span>
                                            <input className="col-12 mt-2 p-1 center p-2" name="tag" id="tag"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion col-12 font-medium text-submit-black1  " id="accordionPanelsStayOpenExample2">
                        <div className="accordion-item  my-3 border-none shadow rounded-manual">
                            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                <button
                                    className="bg-warning font-16-rem text-white col-12 accordion-button rounded-manual d-flex justify-content-evenly  p-3 "
                                    type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseTwo"
                                    aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                    تنظیمات SEO
                                </button>
                            </h2>
                            <div  id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse  show p-3" aria-labelledby="panelsStayOpen-headingTwo">
                                <div dir="ltr" className="accordion-body">
                                    <label className="col-12  mx-1  py-2 font-14" htmlFor="meta-title">
                                        Meta Title
                                        <span className="text-danger mx-1">*</span>
                                        <input className="col-12 mt-2 p-1 center p-2  " name="meta-title" id="meta-title"/>
                                    </label>
                                    <label className="col-12  mx-1  py-2 font-14" htmlFor="meta-description">
                                        Meta Description
                                        <span className="text-danger mx-1">*</span>
                                        <input className="col-12 mt-2 p-1 center p-2  " name="meta-description" id="meta-description"/>
                                    </label>
                                    <label className="col-12  mx-1  py-2 font-14" htmlFor="meta-canonical">
                                        Meta Canonical
                                        <span className="text-danger mx-1">*</span>
                                        <input className="col-12 mt-2 p-1 center p-2  " name="meta-canonical" id="meta-canonical"/>
                                    </label>
                                    <label className="col-12  mx-1  py-2 font-14" htmlFor="meta-summary">
                                        Meta Summary
                                        <span className="text-danger mx-1">*</span>
                                        <input className="col-12 mt-2 p-1 center p-2  " name="meta-summary" id="meta-summary"/>
                                    </label>
                                    <label className="col-12  mx-1  py-2 font-14" htmlFor="meta-robots">
                                        Meta Robots
                                        <span className="text-danger mx-1">*</span>
                                        <select  className="col-12 mt-2 p-1 center p-2 border rounded " name="meta-robots" id="meta-robots">
                                            <option value="noindex">noindex</option>
                                            <option value="nofollow">nofollow</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 p-3 bg-secondary bg-opacity-10 rounded">
                        <button className="btn btn-success">
                            ذخیره
                        </button>
                    </div>
                </section>
            </section>
        </>
    );
}

export default MobileHome;