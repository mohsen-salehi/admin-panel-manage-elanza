import React from 'react';
import Select from "react-select";

function ProductsExpirationPeriod() {
    return (
        <section className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between p-2">
            <section className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                <div className="col-12 d-flex flex-wrap justify-content-end align-items-center p-2">
                    <h5 className="col-12 p-2">تنظیم تاریخ انقضا محصولات</h5>
                </div>
            </section>
            <section className="col-12 d-flex justify-content-center align-items-start flex-wrap rounded p-2 shadow-sm mt-2">
                <h6 className="col-12 bg-default p-3 rounded d-flex align-items-end text-white ">
                    تنظیم تاریخ انقضا محصولات
                </h6>
                <section className="col-12 d-flex justify-content-center justify-content-xl-between align-items-start flex-wrap p-3 rounded">
                    <label className="col-12 col-md-5 col-xxl-4 mx-1 py-2" >
                        تعداد روز
                        <input type="text" name="days" id="days" className="col-12 p-2 my-1"/>
                    </label>
                    <label className="col-12 col-md-5 col-xxl-4 mx-1 py-2" >
                        کاربران
                        <Select/>
                    </label>
                </section>
                <div className="col-12 p-2 rounded bg-secondary bg-opacity-10">
                    <button className="btn btn-success text-white mx-1">ذخیره</button>
                </div>
            </section>
        </section>
    );
}

export default ProductsExpirationPeriod;