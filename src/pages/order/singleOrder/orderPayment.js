import React from 'react';
import FormatNumber from "../../../components/public/formatNumber";

function OrderPayment() {
    return (
        <section className='col-12 d-flex justify-content-around flex-wrap align-content-start'>
            <div
                className="col-12 col-lg-5 p-lg-3 py-2 rounded border-top d-flex flex-wrap justify-content-center align-content-start">
                <h6 className="col-12 p-3  rounded-pill text-bg-light text-center">پرداخت</h6>
                {/*******/}
                <div className="col-12 d-flex justify-content-center flex-wrap">
                    <div className="col-12 font-14 py-2 d-flex justify-content-between px-2 px-lg-5">
                        <span>تاریخ : </span>
                        <time className=""> 16:56 1401/04/08</time>
                    </div>
                    <div className="col-12 font-14 py-2 d-flex justify-content-between px-2 px-lg-5">
                        <span>کد پیگیری  : </span>
                        <span className=""> 236542341545</span>
                    </div>
                    <div className="col-12 font-14 py-2 d-flex justify-content-between px-2 px-lg-5">
                        <span>مبلغ  : </span>
                        <span className=""> 444.128</span>
                    </div>
                    <div className="col-12 font-14 py-2 d-flex justify-content-between px-2 px-lg-5">
                        <span>کد رزرو  : </span>
                        <span> 444.128</span>
                    </div>
                    <div className="col-12 font-14 py-2 d-flex justify-content-between px-2 px-lg-5">
                        <span>کارت  : </span>
                        <span className=""> 6037997365859231</span>
                    </div>
                    <div
                        className="col-12  py-2 font-14 d-flex align-items-center justify-content-between px-2 px-lg-5">
                        <div className="d-flex  justify-content-center align-content-center ">درگاه :</div>
                        <figure className="col-1 m-0 p-0 shadow-sm rounded">
                            <img className="img-fluid "
                                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTY_uwW5saSRhj3s4eCZVYF9LMYWgOWo08MqHgrz4MvVZumhAkc-ZnJbGAjtDI0YL5cWU&usqp=CAU"
                                 alt=""/>
                        </figure>
                    </div>
                    <div
                        className="col-sm-10 col-lg-6 font-14 py-2 d-flex justify-content-center  px-2 bg-success bg-opacity-25 rounded-pill">
                        <span className=""> پرداخت با موفقیت انجام شد.</span>
                    </div>
                </div>
                {/*******/}
            </div>
            {/*result*/}
            <div
                className="col-12 col-lg-5 p-lg-3 py-2 rounded border-top d-flex flex-wrap justify-content-center align-content-start">
                <h6 className="col-12 p-3  rounded-pill text-bg-light text-center">مبلغ</h6>
                <div className="col-12 d-flex justify-content-center flex-wrap ">
                    <div
                        className="col-12  py-3 font-14 d-flex align-items-center justify-content-between px-2 px-lg-5">
                        <span>زیر جمع: </span>
                        <span><FormatNumber number={2355400}/>  تومان</span>
                    </div>
                    <div
                        className="col-12  py-3 font-14 d-flex align-items-center justify-content-between px-2 px-lg-5">
                        <span>جمع تخفیفات: </span>
                        <span> <FormatNumber number={15242}/> تومان</span>
                    </div>
                    <div
                        className="col-12  py-3 font-14 d-flex align-items-center justify-content-between flex-wrap px-2 px-lg-5">
                        <span className="col-sm-12 col-lg-3 py-2">کد تخفیف: </span>
                        <span
                            className="font-FaNum-Medium"> کد تخفیف پیامک جشنواره شیرین مثل توت فرنگی | {new Intl.NumberFormat().format(2355400)} تومان      تومان</span>
                    </div>
                    <div
                        className="col-12  py-3 font-14 d-flex align-items-center justify-content-between px-2 px-lg-5">
                        <span>هزینه ارسال و بسته بندی   : </span>
                        <span><FormatNumber number={0}/> تومان </span>
                    </div>
                    <div
                        className="col-12  py-3 font-16 d-flex align-items-center justify-content-between px-2 px-lg-5">
                        <span>مبلغ پرداخت : </span>
                        <span className="fw-bold"><FormatNumber number={2355400}/> تومان </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OrderPayment;