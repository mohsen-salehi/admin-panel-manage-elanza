import React from 'react';


function SeeVariations() {
    return (
        <>
            <div
                className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between">
                <div className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                    <h4 className="py-3 py-md-2 px-2">
                        سفارشات تنوع
                    </h4>
                </div>
                <div className="col-12 p-2 flex-wrap shadow rounded mt-2 d-flex font-FaNum-Medium">
                    <h6 className="col-12 p-2 border-bottom rounded pb-3">سفارشات تنوع فوم شستشوی صورت آقایان ژوت حجم
                        150 میلی لیتر </h6>
                    <div className="col-12 p-3 my-2 d-flex flex-wrap ">
                        <div className="col-md-3 col-12 justify-content-between justify-content-md-start my-1 p-2 rounded d-flex ">
                            <span className="ps-1">عنوان : </span>
                            <span>  فوم شستشوی صورت آقایان ژوت حجم 150 میلی لیتر</span>
                        </div>
                        <div className="col-md-3 col-12 justify-content-between justify-content-md-start my-1 p-2 rounded d-flex ">
                            <span className="ps-1">فروشنده : </span>
                            <span>الانزا</span>
                        </div>
                        <div className="col-md-3 col-12 justify-content-between justify-content-md-start my-1 p-2 rounded d-flex ">
                            <span className="ps-1">تنوع : </span>
                            <span>[ 150ml , ... ]</span>
                        </div>
                        <div className="col-md-3 col-12 justify-content-between justify-content-md-start my-1 p-2 rounded d-flex ">
                            <span className="ps-1">قیمت فروش  : </span>
                            <span> 0 تومان</span>
                        </div>
                    </div>
                    <div className="col-12 p-3 my-2 d-flex flex-wrap ">
                        <div className="col-md-3 col-12 justify-content-between justify-content-md-start my-1 p-2 rounded d-flex ">
                            <span className="ps-1">قیمت فروش ویژه  : </span>
                            <span> 0 تومان </span>
                        </div>
                        <div className="col-md-3 col-12 justify-content-between justify-content-md-start my-1 p-2 rounded d-flex "><span
                            className="ps-1">تخفیف : </span>
                            <span>0 </span>
                        </div>
                        <div className="col-md-3 col-12 justify-content-between justify-content-md-start my-1 p-2 rounded d-flex "><span
                            className="ps-1">موجودی  : </span>
                            <span>0</span>
                        </div>
                        <div className="col-md-3 col-12 justify-content-between justify-content-md-start my-1 p-2 rounded d-flex "><span
                            className="ps-1"> وضعیت   : </span>
                            <span> موجود</span>
                        </div>
                        <div className="col-md-3 col-12 justify-content-between justify-content-md-start my-1 p-2 rounded d-flex "><span
                            className="ps-1"> فعال / غیرفعال   : </span>
                            <span> فعال</span>
                        </div>
                    </div>
                </div>
                <div className="col-12 p-2 flex-wrap shadow rounded mt-4 d-flex font-FaNum-Medium">
                    <div className="col-12 p-2"> لیست سفارشات ( 0 )</div>
                    {/*accordion*/}
                   <div className="col-12  p-2  rounded ">
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
                                   <div className="accordion-body row justify-content-center">

                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                    <section className="col-12  d-flex  p-3 mt-3 flex-wrap rounded">
                        {/*title*/}
                        <section className="col-12 d-none d-md-flex  border-bottom rounded p-2 px-3  ">
                            <div className="col-2 center justify-content-start  ">تاریخ</div>
                            <div className="col-2 center">شماره</div>
                            <div className="col-1 center">کاربر</div>
                            <div className="col-3 center">شهر و شهرستان</div>
                            <div className="col-1 center">تعداد</div>
                            <div className="col-1 center">وضعیت</div>
                            <div className="col-1 center">عملیات</div>
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

export default SeeVariations;