import React from 'react';

function RedirectEdit() {
    return (
        <div className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between">
            <div className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                <h4 className="py-3 py-md-2 px-2">
                    ویرایش انتقال دهنده
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
                                <span className="text-white">ویرایش</span>
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show"
                             aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="accordion-body row justify-content-center">
                                <div className="col-12 p-2 d-flex justify-content-between flex-wrap px-3">
                                    <label className="col-md-5 col-12 d-flex align-items-center flex-wrap p-2">
                                            <span className="d-flex col-12">
                                             آدرس
                                            <span className="text-danger px-1">*</span>
                                           </span>
                                        <input type="text" name="address" dir="ltr" id="address"
                                               className="p-2 col-12"/>
                                    </label>
                                    <label className="col-md-5 col-12 d-flex align-items-center flex-wrap p-2">
                                            <span className="d-flex col-12">
                                             انتقال به
                                            <span className="text-danger px-1">*</span>
                                           </span>
                                        <input type="text" name="redirect" dir="ltr" id="redirect"
                                               className="p-2 col-12"/>
                                    </label>
                                    <label className="col-md-5 col-12 d-flex align-items-center flex-wrap p-2">
                                            <span className="d-flex col-12">
                                             کد انتقال
                                            <span className="text-danger px-1">*</span>
                                           </span>
                                        <select name="code" id="code" className="col-12 p-2 border rounded">
                                            <option value="301">301</option>
                                            <option value="302">302</option>
                                            <option value="303">303</option>
                                            <option value="307">307</option>
                                            <option value="308">308</option>
                                        </select>
                                    </label>
                                    <figure className="col-12 border d-flex justify-content-center align-items-center rounded p-3">
                                        <img src="http://manage.griffin.local/assets/manage/img/redirect-status-codes-info.png" className="img-fluid" alt=""/>
                                    </figure>
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
                </div>

            </div>
        </div>
    );
}

export default RedirectEdit;