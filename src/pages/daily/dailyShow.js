import React from 'react';

function DailyShow() {
    return (
        <section
            className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between p-2">
            <section className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                <div className="col-12 d-flex flex-wrap justify-content-end align-items-center p-2">
                    <h5 className="col-12 p-2"> تاریخ پیشنهاد ویژه 1401/08/16</h5>
                    <h6 className="col-12 p-2"> وضعیت : فعال</h6>
                    <h6 className="col-12 p-2"> لیست محصولات پیشنهاد ویژه</h6>
                </div>
            </section>
            <section
                className="col-12 d-flex justify-content-center align-items-start flex-wrap rounded p-2 shadow-sm mt-2">
                <h6 className="col-12 bg-default p-3 rounded d-flex align-items-end text-white ">
                    مشاهد پیشنهاد ویژه
                </h6>
                <section className="col-12 d-flex justify-content-center  align-items-start flex-wrap p-2  rounded font-14">
                    <div className="col-12 d-flex justify-content-between border-bottom rounded-3 p-2 d-none d-xl-flex align-items-center">
                        <span className="col-2">عنوان شناسه اصلی	</span>
                        <span className="col-1">شناسه تنوع اصلی		</span>
                        <span className="col-1">فروشنده تنوع اصلی		</span>
                        <span className="col-1">شناسه محصول اصلی برای تنوع اصلی		</span>
                        <span className="col-2">عنوان شناسه پیشنهاد ویژه</span>
                        <span className="col-1">شناسه تنوع پیشنهاد ویژه				</span>
                        <span className="col-1">فروشنده تنوع پیشنهاد ویژه				</span>
                        <span className="col-1">شناسه محصول اصلی برای تنوع پبشنهاد ویؤه				</span>
                        <span className="col-1">درصد تخفیف</span>
                    </div>
                    <div className="col-12 my-3 d-flex flex-wrap justify-content-between align-items-center p-2 rounded shadow-sm ">
                        <div className="col-12 col-xl-2 d-flex justify-content-between justify-content-xl-center align-items-center my-2 my-xl-0">
                            <span className="col d-xl-none">عنوان شناسه اصلی	</span>
                            <span className="col">کرم دست نئودرم مدل Re-Nutrive Honey Shea حجم 150 میلی لیتر	</span>
                        </div>
                        <div className="col-12 col-xl-1 d-flex justify-content-between justify-content-xl-center align-items-center my-2 my-xl-0">
                            <span className="col d-xl-none ">شناسه تنوع اصلی		</span>
                            <span className="col ">25595</span>
                        </div>
                        <div className="col-12 col-xl-1 d-flex justify-content-between justify-content-xl-center align-items-center my-2 my-xl-0">
                            <span className="col d-xl-none">فروشنده تنوع اصلی		</span>
                            <span className="col">الانزا</span>
                        </div>
                        <div className="col-12 col-xl-1 d-flex justify-content-between justify-content-xl-center align-items-center my-2 my-xl-0">
                            <span className="col d-xl-none">شناسه محصول اصلی برای تنوع اصلی		</span>
                            <span className="col d-flex align-items-center "><i className="icon icon-Tick-Circle text-success font-20"></i> 8826 	</span>
                        </div>
                        <div className="col-12 col-xl-2 d-flex justify-content-between justify-content-xl-center align-items-center my-2 my-xl-0">
                            <span className="col d-xl-none">عنوان شناسه پیشنهاد ویژه</span>
                            <span className="col">کرم دست نئودرم مدل Re-Nutrive Honey Shea حجم 150 میلی لیتر	</span>
                        </div>
                        <div className="col-12 col-xl-1 d-flex justify-content-between justify-content-xl-center align-items-center my-2 my-xl-0">
                            <span className="col d-xl-none">شناسه تنوع پیشنهاد ویژه	</span>
                            <span className="col">24657</span>
                        </div>
                        <div className="col-12 col-xl-1 d-flex justify-content-between justify-content-xl-center align-items-center my-2 my-xl-0">
                            <span className="col d-xl-none">فروشنده تنوع پیشنهاد ویژه	</span>
                            <span className="col">الانزا</span>
                        </div>
                        <div className="col-12 col-xl-1 d-flex justify-content-between justify-content-xl-center align-items-center my-2 my-xl-0">
                            <span className="col d-xl-none">شناسه محصول اصلی برای تنوع پبشنهاد ویؤه</span>
                            <span className="col d-flex align-items-center "><i className="icon icon-Tick-Circle text-success font-20"></i> 8826 	</span>
                        </div>
                        <div className="col-12 col-xl-1 d-flex justify-content-between justify-content-xl-center align-items-center my-2 my-xl-0">
                            <span className="col d-xl-none">درصد تخفیف</span>
                            <span className="col">22 درصد</span>
                        </div>
                    </div>
                </section>
                <div className="col-12 p-2 rounded bg-secondary bg-opacity-10">
                    <button className="btn btn-success text-white mx-1 font-16-rem"> ویرایش</button>
                </div>
            </section>
        </section>
    );
}

export default DailyShow;