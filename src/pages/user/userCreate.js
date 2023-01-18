import React from 'react';
import DatePicker from "react-multi-date-picker";

function UserCreate() {
    return (
        <>
            <section className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between p-2">
                <section className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                    <div className="col-12 d-flex flex-wrap justify-content-end align-items-center p-2">
                        <h5 className="col-12 border-bottom rounded p-2">ایجاد کاربر</h5>
                    </div>
                </section>
                <section className="col-12 d-flex justify-content-center align-items-start flex-wrap rounded p-2 shadow-sm">
                    <h6 className="col-12 bg-default p-3 rounded text-white ">
                       ایجاد
                    </h6>
                    <div className="col-12 p-4 d-flex justify-content-between align-content-center  flex-wrap font-14 border-bottom rounded">
                        <label className="col-12 col-md-5  mx-1 py-2" >
                            موبایل
                            <input className="col-12 mt-2 p-1" type="tel"  name="mobile-number" id="mobile-number"/>
                        </label>
                        <label className="col-12 col-md-5  mx-1 py-2" >
                            ایمیل
                            <input className="col-12 mt-2 p-1" type="email"  name="email-address" id="email-address"/>
                        </label>
                        <label className="col-12 col-md-5  mx-1 py-2" >
                            نام
                            <input className="col-12 mt-2 p-1" type="text" name="first-name" id="first-name"/>
                        </label>
                        <label className="col-12 col-md-5  mx-1 py-2" >
                            نام خانوادگی
                            <input className="col-12 mt-2 p-1" type="text" name="last-name" id="last-name"/>
                        </label>
                        <label className="col-12 col-md-5  mx-1 py-2" >
                            رمز عبور
                            <input className="col-12 mt-2 p-1" type="text" name="password" id="password"/>
                        </label>
                        <label className="col-12 col-md-5  mx-1 py-2" >
                            تکرار رمز عبور
                            <input className="col-12 mt-2 p-1" type="text" name="confirm-password" id="confirm-password"/>
                        </label>
                        <label className="col-12 col-md-5  mx-1 py-2" >
                            کد ملی
                            <input className="col-12 mt-2 p-1" type="text" name="national-code" id="national-code"/>
                        </label>
                        <label className="col-12 col-md-5  mx-1 py-2" >
                            جنسیت
                            <input className="col-12 mt-2 p-1" type="text" name="gender" id="gender"/>
                        </label>
                        <label className="col-12 col-md-5  mx-1 py-2" >
                             <span className="col-12 d-flex">
                                 تاریخ تولد
                             </span>
                            <DatePicker />
                        </label>
                        <div className="col-12 col-md-5  mx-1 py-2" >
                            <label className="col-12 mx-1 py-2">
                                <input className="m-2 p-1" type="checkbox" name="status" id="status"/>
                                فعال باشد
                            </label>
                            <label className="col-12 mx-1 py-2">
                                <input className="m-2 p-1" type="checkbox" name="accept" id="accept"/>
                                تایید عکس اول گذرنامه یا گواهی اقامت
                            </label>
                            <label className="col-12 mx-1 py-2">
                                <input className="m-2 p-1" type="checkbox" name="news" id="news"/>
                                عضویت در خبرنامه
                            </label>
                            <label className="col-12 mx-1 py-2">
                                <input className="m-2 p-1" type="checkbox" name="fallow-info" id="fallow"/>
                                عضویت در اطلاعیه ها
                            </label>
                        </div>
                        <label className="col-12 col-md-5  mx-1 p-2" >
                            نقش ها
                            <select name="rolls" id="rolls" className="col-12 border rounded p-2 m-1">
                                <option value=""></option>
                            </select>
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

export default UserCreate;