import React from 'react';

function BankEdit() {
    return (

            <div className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between">
                <div className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                    <h4 className="py-3 py-md-2 px-2">
                        ویرایش بانک
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
                                    <span className="text-white">ویرایش بانک بانک اقتصاد نوین</span>
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show"
                                 aria-labelledby="panelsStayOpen-headingTwo">
                                <div className="accordion-body row justify-content-center">
                                    <div className="col-12 p-2 d-flex justify-content-between flex-wrap px-3">
                                        <label className="col-md-5 col-12 d-flex align-items-center flex-wrap p-2">
                                            <span className="d-flex col-12">
                                             نام بانک
                                            <span className="text-danger px-1">*</span>
                                           </span>
                                            <input type="text" name="bank_name" id="bank_name"
                                                   className="p-2 col-12"/>
                                        </label>
                                        <label className="col-md-5 col-12 d-flex  flex-wrap p-2">
                                            <span className="d-flex col-12">
                                              کد بانک(در صورت اضافه کردن کد جدید اگر تعداد کد بانک بیشتر از یک است آنها را با , جداکنید)
                                            <span className="text-danger px-1">*</span>
                                           </span>
                                            <input type="text" disabled name="bank_code_number" id="bank_code_number"
                                                   className="p-2 col-12 "/>
                                        </label>
                                        <label className="col-md-5 col-12 d-flex  flex-wrap p-2">
                                            <span className="d-flex col-12">
                                             کد بانک
                                                 <span className="text-danger px-1">*</span>
                                           </span>
                                            <input type="number" name="bank_code" id="bank_code"
                                                   className="p-2 col-12 "/>
                                        </label>

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

export default BankEdit;