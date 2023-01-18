import React from 'react';
import {Link} from "react-router-dom";

function GuaranteeEdit() {
    return (
        <>
            <section className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between p-2">
                <section className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                    <div className="col-12 d-flex flex-wrap justify-content-end align-items-center p-2">
                        <h5 className="col-12 border-bottom rounded p-2">ویرایش  گارانتی </h5>
                    </div>
                </section>
                <section className="col-12 d-flex justify-content-center align-items-start flex-wrap rounded p-2 shadow-sm mt-2">
                    <h6 className="col-12 bg-default p-3 rounded d-flex justify-content-between align-items-end text-white ">
                       ویرایش گارانتی 7 روزه ضمانت بازگشت کالا
                    </h6>
                    <div className="col-12 p-3 d-flex justify-content-between align-content-center  flex-wrap font-14 border-bottom rounded">
                        <label className="col-12 col-md-5 col-xxl-3 mx-1 py-2" >
                           نام گارانتی
                            <span className="text-danger"> * </span>
                            <input name="guarantee-name" id="guarantee-name" className="col-12 p-2 my-1"/>
                        </label>
                        <label className="col-12 col-md-5 col-xxl-3 mx-1 py-2" >
                           فروشگاه ها
                            <input name="orders" id="orders" className="col-12 p-2 my-1"/>
                            <span className="d-flex col-12 alert alert-danger p-1 font-14-rem">در صورت عدم انتخاب، این گارانتی برای همه فروشگاه ها فعال خواهد بود</span>
                        </label>
                        <label className="col-12 col-md-5 col-xxl-3 mx-1 py-2" >
                            ترتیب نمایش
                            <input name="order-show" id="order-show" className="col-12 p-2 my-1"/>
                        </label>
                        <label className="col-12 col-md-5 col-xxl-3 d-flex align-items-end mx-1 py-2" >
                            <input type="checkbox" name="active" id="active" className="m-1"/>
                            فعال باشد
                        </label>
                        <div className="col-12 p-3 bg-secondary bg-opacity-10 rounded ">
                            <button className="btn btn-success font-16-rem mx-1">ذخیره</button>
                            <button className="btn btn-success font-16-rem mx-1">ذخیره و بستن</button>
                            <button className="btn btn-success font-16-rem mx-1">ذخیره و جدید</button>
                        </div>
                    </div>
                </section>

            </section>
        </>
    );
}

export default GuaranteeEdit;