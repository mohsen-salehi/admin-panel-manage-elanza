import React from 'react';
import {Link} from "react-router-dom";

function UserShow() {
    return (
        <>
            <section className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between p-2">
                <section className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                    <div className="col-12 d-flex flex-wrap justify-content-end align-items-center p-2">
                        <h5 className="col-12 border-bottom rounded p-2">سفارشات کاربر شماره 65871</h5>
                    </div>
                </section>
                <section className="col-12 d-flex justify-content-center align-items-start flex-wrap rounded p-2 shadow-sm mt-2">
                    <h6 className="col-12 bg-default p-3 rounded d-flex justify-content-between align-items-end text-white ">
                      <span className="d-flex align-items-center">
                            <i className="icon icon-Profile-1 font-25"></i>
                        مشخصات کاربر
                      </span>
                      <span>
                            <Link to="/edit-user" className="btn mx-1  bg-white bg-opacity-25 text-white  font-16-rem">ویرایش</Link>
                            <button className="btn mx-1  bg-white bg-opacity-25 text-white  font-16-rem">ورود</button>
                      </span>
                    </h6>
                    <div className="col-12 p-4 d-flex justify-content-between align-content-center  flex-wrap font-14 border-bottom rounded">
                        <label className="col-12 col-md-5 col-xxl-3 mx-1 py-2" >
                           <span>نام : </span>
                            <strong> محسن </strong>
                        </label>
                        <label className="col-12 col-md-5 col-xxl-3 mx-1 py-2" >
                            <span>نام خانوادگی: </span>
                            <strong> صالحی </strong>
                        </label>
                        <label className="col-12 col-md-5 col-xxl-3 mx-1 py-2" >
                            <span>موبایل : </span>
                            <strong className="font-FaNum-Medium"> 09332609027 </strong>
                        </label>
                        <label className="col-12 col-md-5 col-xxl-3 mx-1 py-2" >
                            <span>ایمیل: </span>
                            <strong> - </strong>
                        </label>
                        <label className="col-12 col-md-5 col-xxl-3 mx-1 py-2" >
                            <span>کد ملی : </span>
                            <strong className="font-FaNum-Medium"> 324249956 </strong>
                        </label>
                        <label className="col-12 col-md-5 col-xxl-3 mx-1 py-2" >
                            <span>جنسیت : </span>
                            <strong className="font-FaNum-Medium"> بچه </strong>
                        </label>
                        <label className="col-12 col-md-5 col-xxl-3 mx-1 py-2" >
                            <span>تاریخ تولد : </span>
                            <strong className="font-FaNum-Medium"> 1401/1/10 </strong>
                        </label>
                    </div>
                </section>
                <section className="col-12 d-flex justify-content-center align-items-start flex-wrap rounded p-2 shadow-sm mt-2">
                    <h6 className="col-12 bg-default p-3 rounded d-flex align-items-end text-white ">
                        <i className="icon icon-Bag-1 font-25"></i>
                        لیست سفارشات (0)
                    </h6>
                    <section className="col-12 d-flex justify-content-center align-items-start flex-wrap  rounded">
                        {/*menu*/}
                        <div className="col-12  d-flex justify-content-between align-items-center border-bottom rounded-pill p-2 px-4">
                            <div className="col-3 p-2">شماره سفارش </div>
                            <div className="col-4 p-2">تاریخ</div>
                            <div className="col-2 p-2">وضعیت</div>
                            <div className="col-3 p-2">عملیات</div>
                        </div>
                        {/*list*/}
                        <div className="col-12 d-flex justify-content-between flex-wrap">
                            <div className="col-12 my-1 d-flex justify-content-between align-items-center border-bottom shadow-sm rounded p-2 ">
                                <div className="col-3 d-flex flex-wrap justify-content-center align-content-center text-justify p-2">
                                    <div className="col-12">جنس سری </div>
                                    <div className="col-12 font-FaNum-Medium">[لاتکس،پلاستیک،سیلیکون،...]</div>
                                </div>
                                <div className="col-4 p-2">[شیشه شیر کودک ، ...]</div>
                                <div className="col-2 p-2"> - </div>
                                <div className="col-3 p-2"> - </div>
                            </div>
                        </div>
                    </section>
                </section>
            </section>
        </>
    );
}

export default UserShow;