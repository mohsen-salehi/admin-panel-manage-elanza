import React from 'react';
import {Link} from "react-router-dom";

function UserBySuccessOrder() {
    return (
        <section className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between p-2" >
            <section className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                <div className="col-12 d-flex flex-wrap justify-content-end align-items-center p-2">
                    <h5 className="col p-2">گزارش تفکیک کاربران بر اساس تعداد سفارش موفق
                    </h5>
                </div>
            </section>
            <div className="col-12 p-2  d-flex justify-content-end">
                <a download className="btn btn-outline-success d-flex align-items-center justify-content-center font-16-rem ">
                    <i className="icon icon-Download1 center "></i>
                    دانلود
                </a>
            </div>

            <section className="col-12 d-flex justify-content-center align-items-start flex-wrap rounded p-2 shadow-sm mt-2">
                <h6 className="col-12 flex-wrap bg-default p-2 rounded d-flex justify-content-between align-items-center text-white ">
                    <span className="p-2">تعداد پیشنهادات: (97)</span>
                </h6>
                <section className="col-12 p-2 d-flex flex-wrap ">
                    <div className="col-12 d-xl-flex p-2 d-none border-bottom rounded">
                        <div className="col-1 text-center">تاریخ </div>
                        <div className="col text-center">کل کاربران </div>
                        <div className="col text-center">کاربران بدون سفارش</div>
                        <div className="col text-center">	کاربران تک سفارش</div>
                        <div className="col text-center">کاربران دو سفارش	</div>
                        <div className="col text-center">کاربران سه سفارش</div>
                        <div className="col text-center">کاربران چهار سفارش</div>
                        <div className="col text-center">کاربران پنج  سفارش</div>
                        <div className="col text-center">کاربران شش سفارش به بالا</div>
                    </div>
                    <div className="col-12 d-xl-flex p-2 py-3 my-2 shadow-sm rounded">
                        <div className="col-12 col-xl-1 d-flex justify-content-between justify-content-xl-center my-2 my-xl-0 align-items-center">
                            <span className="d-xl-none">تاریخ : </span>
                            <span>1401/09/30</span>
                        </div>
                        <div className="col-12 col-xl d-flex justify-content-between justify-content-xl-center my-2 my-xl-0 align-items-center">
                            <span className="d-xl-none col-3">
                                 کل کاربران
                            </span>
                            <span className="d-flex text-start text-xl-end ">
                               79637
                            </span>
                        </div>
                        <div className="col-12 col-xl d-flex justify-content-between justify-content-xl-center my-2 my-xl-0 align-items-center">
                            <span className="d-xl-none col-3">
                                 کاربران بدون سفارش
                            </span>
                            <span className="d-flex text-start text-xl-end ">
                               48234
                            </span>
                        </div>
                        <div className="col-12 col-xl d-flex justify-content-between justify-content-xl-center my-2 my-xl-0 align-items-center">
                            <span className="d-xl-none col-3">
                                کاربران یک سفارش
                            </span>
                            <span className="d-flex text-start text-xl-end ">
                               25044
                            </span>
                        </div>
                        <div className="col-12 col-xl d-flex justify-content-between justify-content-xl-center my-2 my-xl-0 align-items-center">
                            <span className="d-xl-none col-3">
                               کاربران دو سفارش
                            </span>
                            <span className="d-flex text-start text-xl-end ">
                               4111
                            </span>
                        </div>
                        <div className="col-12 col-xl d-flex justify-content-between justify-content-xl-center my-2 my-xl-0 align-items-center">
                            <span className="d-xl-none col-3">
                              کاربران سه سفارش
                            </span>
                            <span className="d-flex text-start text-xl-end ">
                               1250
                            </span>
                        </div>
                        <div className="col-12 col-xl d-flex justify-content-between justify-content-xl-center my-2 my-xl-0 align-items-center">
                            <span className="d-xl-none col-3">
                             کاربران چهار سفارش
                            </span>
                            <span className="d-flex text-start text-xl-end ">
                               479
                            </span>
                        </div>
                        <div className="col-12 col-xl d-flex justify-content-between justify-content-xl-center my-2 my-xl-0 align-items-center">
                            <span className="d-xl-none col-3">
                             کاربران پنج سفارش
                            </span>
                            <span className="d-flex text-start text-xl-end ">
                               226
                            </span>
                        </div>
                        <div className="col-12 col-xl d-flex justify-content-between justify-content-xl-center my-2 my-xl-0 align-items-center">
                            <span className="d-xl-none col-3">
                            کاربران شش سفارش به بالا
                            </span>
                            <span className="d-flex text-start text-xl-end ">
                               293
                            </span>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    );
}

export default UserBySuccessOrder;