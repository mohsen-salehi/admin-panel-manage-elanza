import React from 'react';

function FileCreate() {
    return (
            <section className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between p-2">
                <section className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                    <div className="col-12 d-flex flex-wrap justify-content-end align-items-center p-2">
                        <h5 className="col-12 p-2"> آپلود فایل</h5>
                    </div>
                </section>
                <section className="col-12 d-flex justify-content-center align-items-start flex-wrap rounded p-2 shadow-sm mt-2">
                    <h6 className="col-12 bg-default p-3 rounded d-flex align-items-end text-white ">
                        افزودن
                    </h6>
                    <section className="col-12 d-flex justify-content-center justify-content-xl-between align-items-start flex-wrap p-2  rounded">
                        <label className="col-12 col-md-5  mx-1 py-2" >
                            عنوان
                            <span className="text-danger"> * </span>
                            <input type="text" name="title" id="title" className="col-12 p-2 my-1"/>
                        </label>
                        <label className="col-12 col-md-5  m-2 rounded  center d-flex flex-wrap  justify-content-between align-items-center ">
                            <span className="col-12 d-flex"> ارسال فایل <span className="text-danger"> * </span>  </span>

                            <span className="col-12 border my-1 rounded d-flex align-items-center">
                                <input className="col-3 p-2 position-relative border-0 icon" type="file"
                                       name="Img-national-card" id="Img-national-card"/>
                            </span>
                        </label>
                    </section>
                    <div className="col-12 p-2 rounded bg-secondary bg-opacity-10">
                        <button className="btn btn-success text-white mx-1 font-16-rem">ذخیره بستن</button>
                        <button className="btn btn-success text-white mx-1 font-16-rem">ذخیره و جدید</button>
                    </div>
                </section>
            </section>

    );
}

export default FileCreate;