import React from 'react';
import DatePicker from "react-multi-date-picker";
import DatePickerManual from "../../components/DatePicker/DatePickerManual";

function VoucherEdit() {
    return (
        <>
            <section className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between p-2">
                <section className="col-12 d-flex justify-content-between align-items-center border-bottom rounded-4">
                    <div className="col-12 d-flex flex-wrap justify-content-end align-items-center p-2">
                        <h5 className="col-12 p-2">ویرایش تخفیف</h5>
                    </div>
                </section>
                <section className="col-12 d-flex justify-content-center align-items-start flex-wrap rounded p-2 shadow-sm mt-2">
                    <h6 className="col-12 bg-default p-3 rounded d-flex justify-content-between align-items-end text-white ">
                        تخفیف کد تخفیف عدم تامین کالا
                    </h6>
                    <div className="col-12 p-2 d-flex justify-content-between align-content-center  flex-wrap font-14 border-bottom rounded">
                        <label className="col-12 col-md-5 col-xxl-3 mx-1 py-2" >
                            عنوان
                            <span className="text-danger"> * </span>
                            <input type="text" className="col-12 p-2 my-1" name="title" id="title"/>
                        </label>
                        <label className="col-12 col-md-5 col-xxl-3 mx-1 py-2" >
                            کد تخفیف
                            <span className="text-danger"> * </span>
                            <input type="text" className="col-12 p-2 my-1" name="voucher" id="voucher"/>
                        </label>
                        <label className="col-12 col-md-5 col-xxl-3 mx-1 py-2" >
                            کد تخفیف چند بار قابل استفاده است
                            <input type="number" className="col-12 p-2 my-1" name="usage_limit" id="usage_limit"/>
                        </label>
                        <label className="col-12  p-2" >
                            توضیحات
                            <textarea rows='3' className="col-12 p-2 my-1 border-0" name="content" id="content"/>
                        </label>
                        <label className="col-12 col-xl-4 col-xxl-3 d-flex flex-wrap p-2" >
                            <span className="col-12 my-2">تاریخ شروع و پایان تخفیف</span>
                            <DatePickerManual />
                        </label>
                        <label className="col-12 col-md-5 col-xxl-3 d-flex justify-content-between flex-wrap py-2" >
                            <label className="col-12 text-center border-bottom p-2">ساعت شروع کد تخفیف</label>
                            <label className="col-12 col-md-5 col-xxl-3  py-2" >
                               ساعت
                                <input type="number" className="col-12 p-2 my-1" name="voucher" id="voucher"/>
                            </label>
                            <label className="col-12 col-md-5 col-xxl-3  py-2" >
                                دقیقه
                                <input type="number" className="col-12 p-2 my-1" name="voucher" id="voucher"/>
                            </label>
                            <label className="col-12 col-md-5 col-xxl-3  py-2" >
                               ثانیه
                                <input type="number" className="col-12 p-2 my-1" name="voucher" id="voucher"/>
                            </label>
                        </label>
                        <label className="col-12 col-md-5 col-xxl-3 d-flex justify-content-between flex-wrap py-2" >
                            <label className="col-12 text-center border-bottom p-2">ساعت پایان کد تخفیف</label>
                            <label className="col-12 col-md-5 col-xxl-3  py-2" >
                               ساعت
                                <input type="number" className="col-12 p-2 my-1" name="voucher" id="voucher"/>
                            </label>
                            <label className="col-12 col-md-5 col-xxl-3  py-2" >
                               دقیقه
                                <input type="number" className="col-12 p-2 my-1" name="voucher" id="voucher"/>
                            </label>
                            <label className="col-12 col-md-5 col-xxl-3  py-2" >
                                ثانیه
                                <input type="number" className="col-12 p-2 my-1" name="voucher" id="voucher"/>
                            </label>
                        </label>
                        <label className="col-12 col-md-5 col-xxl-3 mx-1 py-2" >
                            مبلغ تخفیف (تومان)
                            <input type="text" className="col-12 p-2 my-1" name="price" id="price"/>
                        </label>
                        <label className="col-12 col-md-5 col-xxl-3 mx-1 py-2" >
                            درصد تخفیف
                            <input type="text" className="col-12 p-2 my-1" name="discount_percent" id="discount_percent"/>
                        </label>
                        <label className="col-12 col-md-5 col-xxl-3 mx-1 py-2" >
                            حداقل مبلغ سبد خرید (تومان)
                            <input type="text" className="col-12 p-2 my-1" name="min_cart_price" id="min_cart_price"/>
                        </label>
                        <label className="col-12 col-md-5 col-xxl-3 mx-1 py-2" >
                            حداکثر مبلغ تخفیف (تومان)
                            <input type="text" className="col-12 p-2 my-1" name="max_discount" id="max_discount"/>
                        </label>
                        <label className="col-12 col-md-5 col-xxl-3 mx-1 py-2" >
                           دسته بندی
                            <input type="text" className="col-12 p-2 my-1" name="category" id="category"/>
                        </label>
                        <label className="col-12 col-md-5 col-xxl-3 mx-1 py-2" >
                            کالاها
                            <input type="text" className="col-12 p-2 my-1" name="orders" id="orders"/>
                        </label>
                        <label className="col-12 col-md-5 col-xxl-3 mx-1 py-2" >
                            کاربران
                            <input type="text" className="col-12 p-2 my-1" name="users" id="users"/>
                        </label>
                        <label className="col-12 col-md-5 col-xxl-3 mx-1 py-2" >
                            فروشگاه ها
                            <input type="text" className="col-12 p-2 my-1" name="sellers" id="sellers"/>
                        </label>
                        <div className="col-12  d-flex align-items-center flex-wrap mx-1 py-2" >
                            <label className="col-12 my-2 d-flex align-items-center">
                                <input type="checkbox" className=" p-2 m-1" name="is_reusable" id="is_reusable"/>
                                حداکثر مبلغ تخفیف (تومان)
                            </label>
                            <label className="col-12 my-2 d-flex align-items-center">
                                <input type="checkbox" className=" p-2 m-1" name="is_reusable" id="is_reusable"/>
                                حداکثر مبلغ تخفیف (تومان)
                            </label>
                            <label className="col-12 my-2 d-flex align-items-center">
                                <input type="checkbox" className=" p-2 m-1" name="is_reusable" id="is_reusable"/>
                                حداکثر مبلغ تخفیف (تومان)
                            </label>
                            <label className="col-12 my-2 d-flex align-items-center">
                                <input type="checkbox" className=" p-2 m-1" name="is_reusable" id="is_reusable"/>
                                حداکثر مبلغ تخفیف (تومان)
                            </label>
                            <label className="col-12 my-2 d-flex align-items-center">
                                <input type="checkbox" className=" p-2 m-1" name="is_reusable" id="is_reusable"/>
                                حداکثر مبلغ تخفیف (تومان)
                            </label>

                        </div>

                        <div className="col-12 p-3 bg-secondary bg-opacity-10 rounded my-2 ">
                            <button className="btn btn-success font-16-rem mx-1">ذخیره</button>
                            <button className="btn btn-success font-16-rem mx-1">ذخیره و بستن</button>
                            <button className="btn btn-success font-16-rem mx-1">ذخیره و جدید</button>
                        </div>
                    </div>
                </section>

            </section>
        </>
    );
}

export default VoucherEdit;