import React from 'react';

function SliderCreate() {
    return (
        <>
            <section className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between p-2">
                <section className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                    <div className="col-12 d-flex flex-wrap justify-content-end align-items-center p-2">
                        <h5 className="col-12 p-2">افزودن اسلایدر</h5>
                    </div>
                </section>
                <section className="col-12 d-flex justify-content-center align-items-start flex-wrap rounded p-2 shadow-sm mt-2">
                    <h6 className="col-12 bg-default p-3 rounded d-flex align-items-end text-white ">
                        افزودن
                    </h6>
                    <section className="col-12 d-flex justify-content-center justify-content-xl-between align-items-start flex-wrap p-2  rounded">
                        <label className="col-12 col-md-5 col-xxl-3 mx-1 py-2" >
                            عنوان
                            <span className="text-danger"> * </span>
                            <input type="text" name="title" id="title" className="col-12 p-2 my-1"/>
                        </label>
                        <label className="col-12 col-md-5 col-xxl-3 mx-1 py-2" >
                            لینک
                            <input type="text" name="link" id="link" className="col-12 p-2 my-1"/>
                        </label>
                        <label className="col-12 col-md-5 col-xxl-3 mx-1 py-2" >
                            ترتیب نمایش
                            <input type="text" name="order_show" id="order_show" className="col-12 p-2 my-1"/>
                        </label>
                        <label className="col-12 col-md-5   m-2 rounded  center d-flex flex-wrap col-xxl-3 justify-content-between align-items-center ">
                            <span className="col-12 d-flex"> ارسال تصویر اسلایدر  </span>
                            <span className="col-12 border my-1 rounded d-flex align-items-center">
                                <input className="col-3 p-2 position-relative border-0 icon" type="file"
                                       name="Img-national-card" id="Img-national-card"/>
                            </span>
                        </label>
                    </section>
                    <div className="col-12 p-2 rounded bg-secondary bg-opacity-10">
                        <button className="btn btn-success text-white mx-1">ذخیره</button>
                        <button className="btn btn-success text-white mx-1">ذخیره بستن</button>
                        <button className="btn btn-success text-white mx-1">ذخیره و جدید</button>
                    </div>
                </section>
            </section>
        </>
    );
}

export default SliderCreate;