import React from 'react';
import FormatNumber from "../../../components/public/formatNumber";
import Shop from "./../../../img/shop.png"
import {Link} from "react-router-dom";
function StoresStatus() {
    return (
        <>
            <div className="col-12 d-flex flex-wrap justify-content-between align-items-center p-2">
                <h4 className="py-3 py-md-2">
                   گزارش سفارشات
                </h4>
                <div className="col-12 rounded border-top d-flex p-lg-3 justify-content-center justify-content-lg-between flex-wrap">
                    <div className="col-11 col-lg m-1 rounded bg-primary p-2 px-4 d-flex flex-wrap ">
                        <div className="col-12 col-md-9 d-flex justify-content-between align-items-center flex-wrap p-md-2 px-md-3 text-light ">
                            <h6 className="col-12 d-flex justify-content-center justify-content-md-start p-2">تعداد همه ی فروشگاه ها</h6>
                            <span className="d-flex col-12 justify-content-center justify-content-md-start font-FaNum-Medium display-6">
                                <FormatNumber number={1000}/>
                            </span>
                        </div>
                        <div className="col-3 d-none d-md-flex">
                            <figure className="col-12 center  p-2 m-0">
                                <img className="img-fluid bg-transparent" src={Shop} alt="stores" />
                            </figure>
                        </div>
                        <div className="col-12 d-flex justify-content-center font-16-rem">
                            <Link className="text-decoration-none shadow-lg bg-light bg-opacity-10 rounded-pill p-2 d-flex justify-content-center align-items-center col-12 col-md-7" to="/more" >
                                اطلاعات بیشتر
                                <i className='icon icon-Left-1 px-2 '></i>
                            </Link>
                        </div>
                    </div>
                    <div className="col-11 col-lg m-1 rounded bg-success p-2 px-4 d-flex flex-wrap ">
                        <div className="col-12 col-md-9 d-flex justify-content-between align-items-center flex-wrap p-md-2 px-md-3 text-light ">
                            <h6 className="col-12 d-flex justify-content-center justify-content-md-start p-2">تعداد فروشگاه های بدون قرار داد</h6>
                            <span className="d-flex col-12 justify-content-center justify-content-md-start font-FaNum-Medium display-6">
                                <FormatNumber number={39}/>
                            </span>
                        </div>
                        <div className="col-3 d-none d-md-flex">
                            <figure className="col-12 center  p-2 m-0">
                                <img className="img-fluid bg-transparent" src={Shop} alt="stores" />
                            </figure>
                        </div>
                        <div className="col-12 d-flex justify-content-center font-16-rem">
                            <Link className="text-decoration-none shadow-lg bg-light bg-opacity-10 rounded-pill p-2 d-flex justify-content-center align-items-center col-12 col-md-7" to="/more" >
                                اطلاعات بیشتر
                                <i className='icon icon-Left-1 px-2 '></i>
                            </Link>
                        </div>
                    </div>
                    <div className="col-11 col-lg m-1 rounded text-bg-warning p-2 px-4 d-flex flex-wrap ">
                        <div className="col-12 col-md-9 d-flex justify-content-between align-items-center flex-wrap p-md-2 px-md-3 ">
                            <h6 className="col-12 d-flex justify-content-center justify-content-md-start p-2 font-16-rem ">تعداد فروشگاه های نزدیک به انقضا</h6>
                            <span className="d-flex col-12 justify-content-center justify-content-md-start font-FaNum-Medium display-6">
                                <FormatNumber number={1000}/>
                            </span>
                        </div>
                        <div className="col-3 d-none d-md-flex">
                            <figure className="col-12 center  p-2 m-0">
                                <img className="img-fluid bg-transparent" src={Shop} alt="stores" />
                            </figure>
                        </div>
                        <div className="col-12 d-flex justify-content-center font-16-rem">
                            <Link className="text-decoration-none shadow-lg bg-light bg-opacity-10 rounded-pill p-2 d-flex justify-content-center align-items-center col-12 col-md-7" to="/more" >
                                اطلاعات بیشتر
                                <i className='icon icon-Left-1 px-2 '></i>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default StoresStatus;