import React from 'react';

function TitleMobileComponent() {
    return (
        <div className="col-12 d-none d-md-flex justify-content-between p-3 rounded mt-2 border-bottom ">
            <div className="col-2 d-flex justify-content-start">شماره</div>
            <div className="col-1 d-flex justify-content-start">کاربر</div>
            <div className="col-1 d-flex justify-content-start">تاریخ</div>
            <div className="col-1 d-none d-md-block d-flex justify-content-start">وضعیت</div>
            <div className="col-1 d-none d-md-flex justify-content-start">مبلغ نهایی</div>
            <div className="col-1 d-flex d-md-none justify-content-start">مبلغ</div>
            <div className="col-1 d-none d-md-flex  justify-content-start">یادداشت</div>
            <div className="col-1 d-flex justify-content-center justify-content-md-start">پرداخت</div>
            <div className="col-1 d-flex justify-content-start">عملیات</div>
        </div>
    );
}

export default TitleMobileComponent;