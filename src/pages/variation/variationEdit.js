import React from 'react';

function VariationEdit() {
    return (
        <>
            <section className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between p-2">
                <section className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                    <div className="col-12 d-flex flex-wrap justify-content-end align-items-center p-2">
                        <h5 className="col-12 border-bottom rounded p-2">ویرایش تنوع </h5>
                    </div>
                </section>
                <section className="col-12 d-flex justify-content-center align-items-start flex-wrap rounded p-2 shadow-sm">
                    <h6 className="col-12 bg-default p-3 rounded text-white ">
                        ویرایش تنوع (طول)
                    </h6>
                    <div className="col-12 p-4 d-flex justify-content-between align-content-center  flex-wrap font-14 border-bottom rounded">
                        <label className="col-12 col-md-5  py-2" >
                            نام تنوع
                            <span className="text-danger mx-1">*</span>
                            <input className="col-12 mt-2 p-1 center" type="text"
                                   name="title-category"
                                   placeholder="طول"
                                   id="title-category"/>
                        </label>
                        <label className="col-12 col-md-5  py-2">
                            ترتیب نمایش
                            <input className="col-12 mt-2 p-1 center" type="text"
                                   name="show-order"
                                   placeholder="ترتیب نمایش را وارد کنید"
                                   id="show-order"/>
                        </label>
                        <label className="col-12 col-md-5 d-flex justify-content-start align-items-center py-2" >
                            <input type="checkbox" name="status" id="status" className="mx-1"/>
                            فعال باشد
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

export default VariationEdit;