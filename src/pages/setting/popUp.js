import React from 'react';

function PopUp() {
    return (
        <>
            <section className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between p-2">
                <section className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                    <div className="col-12 d-flex flex-wrap justify-content-end align-items-center p-2">
                        <h5 className="col-12 p-2">پاپ آپ صفحه نخست دسکتاپ</h5>
                    </div>
                </section>
                <section className="col-12 d-flex justify-content-center align-items-start flex-wrap rounded p-2 shadow-sm mt-2">
                    <h6 className="col-12 bg-default p-3 rounded d-flex align-items-end text-white ">
                        پاپ آپ اصلی صفحه نخست
                    </h6>
                    <section className="col-12 d-flex justify-content-center justify-content-xl-between align-items-start flex-wrap p-2  rounded">
                        <div className="col-12 d-flex flex-wrap justify-content-center justify-content-xl-between align-items-start">
                            <label className="col-12 col-xl-6  mx-1  col-xxl-5 py-2 font-14" >
                                عنوان
                                <span className="text-danger mx-1">*</span>
                                <input className="col-12 mt-2 p-1 center p-2" name="title" id="title"/>
                            </label>
                            <label className="col-12 col-xl-6  mx-1  col-xxl-5 py-2 font-14" >
                               لینک
                                <span className="text-danger mx-1">*</span>
                                <input className="col-12 mt-2 p-1 center p-2" name="link" id="link"/>
                            </label>
                            <div className="accordion-body d-flex justify-content-between">
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
                                    <button className="btn btn-danger font-16-rem col-11 mx-xl-1 col-xl-1">حذف</button>
                                </div>

                            </div>
                            <div className="col-12 p-3">
                                <label className="col-6">
                                    <input type="checkbox" name="active_slider" className="mx-1" id="active_slider"/>
                                    فعال باشد
                                </label>
                            </div>
                        </div>
                    </section>
                    <div className="col-12 p-2 rounded bg-secondary bg-opacity-10">
                        <button className="btn btn-success text-white mx-1">ذخیره</button>
                    </div>

                </section>
            </section>
        </>
    );
}

export default PopUp;