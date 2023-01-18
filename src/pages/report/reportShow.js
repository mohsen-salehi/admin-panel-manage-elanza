import React from 'react';

function ReportShow() {
    return (
        <section className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between p-2">
            <section className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                <div className="col-12 d-flex flex-wrap justify-content-end align-items-center p-2">
                    <h5 className="col-12 p-2"> گزارش</h5>
                </div>
            </section>
            <section className="col-12 d-flex justify-content-center align-items-start flex-wrap rounded p-2 shadow-sm mt-2">
                <h6 className="col-12 bg-default p-3 rounded d-flex align-items-end text-white ">
                    موضوع: ماسک ‌مو‌
                </h6>
                <div className="col-12 bg-secondary bg-opacity-10 rounded p-2 ">
                    <div className="col-12 p-2 border-end border-3 my-3 rounded ">
                        <strong>
                            تاریخ :
                        </strong>
                        <span className="px-2">
                            1401/08/02 20:17
                        </span>
                    </div>
                    <div className="col-12 p-2 border-end border-3 my-3 rounded ">
                        <strong>
                            کاربر :
                        </strong>
                        <span className="px-2">
                          کاربر مهمان: ملیحه عبدالهی - 09128445797 - malihe.abdollahi64@gmail.com
                        </span>
                    </div>
                    <div className="col-12 p-2 border-end border-3 my-3 rounded ">
                        <strong>
                            مربوط به:
                        </strong>
                        <span className="px-2">
                         کالای: ماسک مو اچ اس لاین مدل Karbon9 حجم 300 میلی لیتر
                        </span>
                    </div>
                    <div className="col-12 p-2 border-end border-3 my-3 rounded ">
                        <strong>
                            متن :
                        </strong>
                        <textarea name="" id="" cols="30" rows="5" className="col-12 p-2">
                            سلام
من این ماسک مو خریدم پ در توضیحات نوشته بوده برای موهای رنگ شده و تثبیت کننده ولی من دوبار زدم به نظرم موهام رنگش رفت و تیره شد و در یک سایت دیگه خوندم که این مناسب موهای تیره هست
لطفا راهنمایی کنید اگر مناسب موهای رنگ شده نبوده چرا در توضیحات نوشتید که باعث انتخاب بشه
                        </textarea>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default ReportShow;