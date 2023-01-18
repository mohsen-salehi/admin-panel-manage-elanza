import React from 'react';

function GroupCommodity() {
    return (
        <>
            <section
                className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between p-2">
                <section className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                    <h4 className="py-3 py-md-2 px-4 px-md-2 font-16">
                        لیست کالا های گروه ماسک مو فاقد سولفات سریتا بیوتی
                    </h4>
                </section>
                <div className="col-12 p-2 ">
                    <button className="btn btn-success col-md-1 col-5">جدید</button>
                </div>
                <div className="col-12 p-2 bg-secondary bg-opacity-10 mt-2 rounded">
                    <div className="col-12 p-3 rounded border-bottom rounded">افزودن کالا به گروه</div>
                    <div className="col-12  rounded p-4 ">
                        <label className="col-12 row m-auto">
                            <select id="create" className="col-8 col-md-5 p-1 px-2 border rounded">
                                <option value="انتخاب کنید">انتخاب کنید</option>
                            </select>
                            <button className="btn btn-success col-3 font-16-rem col-md-1 mx-2 ">افزودن</button>
                        </label>
                    </div>
                </div>
                <div className="col-12 p-2 border rounded align-items-center">
                    <div className="col-12 p-2 d-flex align-items-center justify-content-between">
                        <h6 className="d-flex m-0">تعداد کالاها : ( 3 )</h6>
                        <form className="col-md-2  p-2 d-flex justify-content-center align-items-center">
                            <input type="text" name="search" id="search" className="col-10 p-1" placeholder="جستجو"/>
                            <button
                                className="rounded border p-2 bg-dark bg-opacity-50 icon icon-Search-1 text-light col-md-2"></button>
                        </form>
                    </div>

                    <section className="col-12 d-flex flex-wrap">
                        <div className="col-12 d-none d-md-flex px-2">
                            <span className="d-flex col-2">تصویر</span>
                            <span className="d-flex col-6">کالا</span>
                            <span className="d-flex col-3">عنوان (اختیاری)</span>
                            <span className="d-flex col-1">عملیات</span>
                        </div>
                        <div className="col-12 d-flex flex-wrap my-1 p-2">
                            <div className="col-12 d-flex align-items-center justify-content-between flex-wrap  p-0 border-start border-end rounded my-1 shadow-sm">
                                <figure className="col-md-2 col-3 p-2  rounded overflow-hidden m-0">
                                    <img
                                        src="https://static.elanza.com/media/product/product_images/2020/10/14/14197/responsive/88c9e640d024af91c73a487c6235dfb9___product_images_responsive_1500_1500.jpg"
                                        alt="pic" className="col-md-4 img-fluid shadow-sm rounded-circle"
                                    />
                                </figure>
                                <div className="col-7 d-flex align-items-center col-md-6 ">
                                    ماسک مو فاقد سولفات سریتا بیوتی مناسب موهای رنگ شده حجم 200 میلی لیتر
                                </div>
                                <div className="col-md-3  col-12 justify-content-center justify-content-md-start d-flex align-items-center">
                                    <label className="col-10  position-relative ">
                                        <input type="text" name="title" id="title" className="col-9 p-1 "/>
                                        <button className="col-3 p-1 text-bg-primary font-14 rounded border position-absolute h-100">ذخیره</button>
                                    </label>
                                </div>
                                <div className="col-md-1 col-12 my-2 d-flex justify-content-center justify-content-md-start">
                                    <button className="btn col-4 btn-danger center font-14">حذف</button>
                                </div>
                            </div>
                            <div className="col-12 d-flex align-items-center justify-content-between flex-wrap  p-0 border-start border-end rounded my-1 shadow-sm">
                                <figure className="col-md-2 col-3 p-2  rounded overflow-hidden m-0">
                                    <img
                                        src="https://static.elanza.com/media/product/product_images/2020/10/14/14197/responsive/88c9e640d024af91c73a487c6235dfb9___product_images_responsive_1500_1500.jpg"
                                        alt="pic" className="col-md-4 img-fluid shadow-sm rounded-circle"
                                    />
                                </figure>
                                <div className="col-7 d-flex align-items-center col-md-6 ">
                                    ماسک مو فاقد سولفات سریتا بیوتی مناسب موهای رنگ شده حجم 200 میلی لیتر
                                </div>
                                <div className="col-md-3  col-12 justify-content-center justify-content-md-start d-flex align-items-center">
                                    <label className="col-10  position-relative ">
                                        <input type="text" name="title" id="title" className="col-9 p-1 "/>
                                        <button className="col-3 p-1 text-bg-primary font-14 rounded border position-absolute h-100">ذخیره</button>
                                    </label>
                                </div>
                                <div className="col-md-1 col-12 my-2 d-flex justify-content-center justify-content-md-start">
                                    <button className="btn col-4 btn-danger center font-14">حذف</button>
                                </div>
                            </div>
                            <div className="col-12 d-flex align-items-center justify-content-between flex-wrap  p-0 border-start border-end rounded my-1 shadow-sm">
                                <figure className="col-md-2 col-3 p-2  rounded overflow-hidden m-0">
                                    <img
                                        src="https://static.elanza.com/media/product/product_images/2020/10/14/14197/responsive/88c9e640d024af91c73a487c6235dfb9___product_images_responsive_1500_1500.jpg"
                                        alt="pic" className="col-md-4 img-fluid shadow-sm rounded-circle"
                                    />
                                </figure>
                                <div className="col-7 d-flex align-items-center col-md-6 ">
                                    ماسک مو فاقد سولفات سریتا بیوتی مناسب موهای رنگ شده حجم 200 میلی لیتر
                                </div>
                                <div className="col-md-3  col-12 justify-content-center justify-content-md-start d-flex align-items-center">
                                    <label className="col-10  position-relative ">
                                        <input type="text" name="title" id="title" className="col-9 p-1 "/>
                                        <button className="col-3 p-1 text-bg-primary font-14 rounded border position-absolute h-100">ذخیره</button>
                                    </label>
                                </div>
                                <div className="col-md-1 col-12 my-2 d-flex justify-content-center justify-content-md-start">
                                    <button className="btn col-4 btn-danger center font-14">حذف</button>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </section>
        </>
    );
}

export default GroupCommodity;