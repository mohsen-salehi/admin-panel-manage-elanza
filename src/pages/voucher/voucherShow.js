import React from 'react';

function VoucherShow() {
    return (
        <>
            <div
                className="col-12 d-flex p-2 justify-content-center align-items-start flex-wrap font-16-rem align-content-between">
                <div className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                    <h5 className=" bg-default text-white p-3 col-12  border-bottom rounded">
                        کد تخفیف
                    </h5>
                </div>
                <div className="col-12 p-2 flex-wrap shadow rounded mt-2 d-flex font-FaNum-Medium">
                    <h6 className="col-12 p-2 border-bottom rounded pb-3">
                        سفارشات تخفیف کد تخفیف عدم تامین کالا
                    </h6>
                    <div className="col-12 p-3 my-2 d-flex flex-wrap ">
                        <div className="col-12 col-xl-4 align-items-center justify-content-md-start my-1 p-2 rounded d-flex ">
                            <span className="ps-1">عنوان : </span>
                            <span> کد تخفیف عدم تامین کالا</span>
                        </div>
                        <div className="col-xl-4 col-12 justify-content-between align-items-center justify-content-md-start my-1 p-2 rounded d-flex ">
                            <span className="ps-1">کد تخفیف : </span>
                            <code className="font-20">07CC1A5</code>
                        </div>
                        <div className="col-xl-4 col-12 justify-content-between justify-content-md-start my-1 p-2 rounded d-flex ">
                            <span className="ps-1">توضیخات:</span>
                            <span>کد تخفیف عدم تامین کالا از جانب انبار برای سفارش شماره LNZO-608751199</span>
                        </div>
                        <div className="col-xl-4 col-12 justify-content-between justify-content-md-start my-1 p-2 rounded d-flex ">
                            <span className="ps-1">قیمت فروش  : </span>
                            <span> 0 تومان</span>
                        </div>
                        <div className="col-xl-4 col-12 justify-content-between justify-content-md-start my-1 p-2 rounded d-flex ">
                            <span className="ps-1">تاریخ شروع تخفیف:  : </span>
                            <span> -</span>
                        </div>
                        <div className="col-xl-4 col-12 justify-content-between justify-content-md-start my-1 p-2 rounded d-flex ">
                            <span className="ps-1">تاریخ پایان تخفیف: </span>
                            <span> 1401/05/27 | 05:26 </span>
                        </div>
                        <div className="col-xl-4 col-12 justify-content-between justify-content-md-start my-1 p-2 rounded d-flex ">
                            <span className="ps-1">مبلغ تخفیف : </span>
                            <span>15,000 تومان</span>
                        </div>
                        <div className="col-xl-4 col-12 justify-content-between justify-content-md-start my-1 p-2 rounded d-flex ">
                            <span className="ps-1">درصد تخفیف : </span>
                            <span>0 درصد</span>
                        </div>
                        <div className="col-xl-4 col-12 justify-content-between justify-content-md-start my-1 p-2 rounded d-flex ">
                            <span className="ps-1">حداقل مبلغ سبد خرید : </span>
                            <span>0 تومان</span>
                        </div>
                        <div className="col-xl-4 col-12 justify-content-between justify-content-md-start my-1 p-2 rounded d-flex ">
                            <span className="ps-1">حداکثر مبلغ تخفیف :  </span>
                            <span>0 تومان</span>
                        </div>
                        <div className="col-xl-4 col-12 justify-content-between justify-content-md-start my-1 p-2 rounded d-flex ">
                            <span className="ps-1">کد تخفیف قابل استفاده مجدد می باشد :</span>
                            <span> نه خیر</span>
                        </div>
                        <div className="col-xl-4 col-12 justify-content-between justify-content-md-start my-1 p-2 rounded d-flex ">
                            <span className="ps-1">کد تخفیف برای خرید اول اعمال می شود :</span>
                            <span> نه خیر</span>
                        </div>
                        <div className="col-xl-4 col-12 justify-content-between justify-content-md-start my-1 p-2 rounded d-flex ">
                            <span className="ps-1">هزینه حمل و نقل رایگان می باشد :</span>
                            <span> نه خیر</span>
                        </div>
                        <div className="col-xl-4 col-12 justify-content-between justify-content-md-start my-1 p-2 rounded d-flex ">
                            <span className="ps-1">فعال می باشد :</span>
                            <span> بله</span>
                        </div>
                    </div>

                </div>
                <div className="col-12 p-2 flex-wrap shadow rounded mt-4 d-flex font-FaNum-Medium">
                    <div className="col-12 p-2"> لیست سفارشات ( 0 )</div>
                    {/*accordion*/}
                    <div className="col-12   rounded ">
                        <div className="accordion col-12 font-medium font-14 text-submit-black1  rounded-manual"
                             id="accordionPanelsStayOpenExample-discount">
                            <div className="accordion-item  my-3 border-none shadow rounded-manual">
                                <h2 className="accordion-header" id="panelsStayOpen-heading-discount">
                                    <button
                                        className="bg-default collapse col-12 accordion-button rounded-manual d-flex justify-content-md-start justify-content-center py-3 collapsed"
                                        type="button" data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapse-discount" aria-expanded="false"
                                        aria-controls="panelsStayOpen-collapse-discount"><span className="text-white">فیلتر ها </span>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapse-discount" className="accordion-collapse collapse "
                                     aria-labelledby="panelsStayOpen-heading-discount">
                                    <div className="accordion-body row justify-content-center"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="col-12  d-flex  p-3 mt-3 flex-wrap rounded">
                        {/*title*/}
                        <section className="col-12 d-none d-md-flex justify-content-between align-items-center border-bottom rounded p-2 px-3  ">
                            <div className="col-2 center">شماره</div>
                            <div className="col-2 center">کاربر</div>
                            <div className="col-2 center ">تاریخ</div>
                            <div className="col-2 center">وضعیت</div>
                            <div className="col-2 center">عملیات</div>
                        </section>
                        {/*list*/}
                        <section className="col-12  p-3  mt-3 rounded border-top ">
                            <div className="col-12 d-flex  justify-content-center justify-content-md-start ">
                                سفارشی برای این تخفیف ثبت نشده
                            </div>
                        </section>

                    </section>
                </div>
            </div>
        </>
    );
}

export default VoucherShow;