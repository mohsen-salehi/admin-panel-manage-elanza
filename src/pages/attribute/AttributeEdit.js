import React from 'react';

function AttributeEdit() {
    return (
        <>
            <section className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between p-2">
                <section className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                    <div className="col-12 d-flex flex-wrap justify-content-end align-items-center p-2">
                        <h5 className="col-12 border-bottom rounded p-2">ویرایش ویژگی</h5>
                    </div>
                </section>
                <section className="col-12 d-flex justify-content-center align-items-start flex-wrap rounded p-2 shadow-sm">
                    <h6 className="col-12 bg-default p-3 rounded text-white ">
                        ویرایش ویژگی نوع سِت
                    </h6>
                    <div className="col-12 p-4 d-flex justify-content-between align-content-center  flex-wrap font-14 border-bottom rounded">
                        <label className="col-12 col-md-5 mx-1 py-2" >
                            نام ویژگی
                            <span className="text-danger mx-1">*</span>
                            <input className="col-12 mt-2 p-1" type="text" name="attr-name" id="attr-name"/>
                        </label>
                        <label className="col-12 col-md-5 mx-1 py-2" >
                            ترتیب نمایش
                            <input className="col-12 mt-2 p-1" type="text" name="show-order" id="show-order"/>
                        </label>
                        <label className="col-12 col-md-5 mx-1 py-2" >
                            عنوان (لاتین)
                            <input className="col-12 mt-2 p-1" type="text" name="title-latin" id="title-latin"/>
                        </label>
                        <label className="col-12 col-md-5 mx-1 py-2" >
                            <div className="col-12 m-1">
                                <strong>پیوند یکتا : </strong>
                                <span className="text-caption-grey"> ست-بادی-اسپلش</span>
                            </div>
                            <label className="mx-1 py-2">
                                <input className="m-2 p-1" type="checkbox" name="status" id="status"/>
                                فعال باشد
                            </label>
                        </label>

                    </div>
                    <div className="col-12 p-3 bg-secondary bg-opacity-10 rounded ">
                        <button className="btn btn-success font-16-rem mx-1">ذخیره</button>
                        <button className="btn btn-success font-16-rem mx-1">ذخیره و بستن</button>
                        <button className="btn btn-success font-16-rem mx-1">ذخیره و جدید</button>
                    </div>
                </section>
            </section>
        </>
    );
}

export default AttributeEdit;