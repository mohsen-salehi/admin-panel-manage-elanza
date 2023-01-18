import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Select from "react-select";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import DateObject from "react-date-object";
import DatePicker from "react-multi-date-picker";
import InputIcon from "react-multi-date-picker/components/input_icon"


function Product() {
    const options = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'},
    ];
    const [selectedOption, setSelectedOption] = useState('');
    const [values, setValues] = useState([
        new DateObject({calendar: persian}).subtract(0, "days"),
        new DateObject({calendar: persian}).add(0, "days")
    ])

    return (
        <>
            <div
                className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between">
                <div className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                    <h4 className="py-3 py-md-2 px-2">
                        کالاها
                    </h4>
                </div>

                {/*filter*/}


                <div className="col-12 p-2">
                    <div className="accordion  col-12 font-medium font-14 text-submit-black1  rounded-manual"
                         id="accordionPanelsStayOpenExample">
                        <div className="accordion-item  my-3 border-none shadow rounded-manual">
                            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                <button
                                    className="bg-default  col-12 accordion-button rounded-manual d-flex justify-content-between collapsed py-3 "
                                    type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseTwo"
                                    aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                    <span className="text-white">فیلتر ها</span>
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse "
                                 aria-labelledby="panelsStayOpen-headingTwo">
                                <div className="accordion-body row justify-content-center">
                                    <div className="col-12 row justify-content-md-between justify-content-center p-2 ">
                                        <label className="col-md-5 col-12 centre p-1">
                                            <span className="py-2 d-flex">وضعیت</span>
                                            <select name="status" id="status"
                                                    className="d-flex p-1  rounded border col-12">
                                                <option value="انتخاب کنید" selected>انتخاب کنید</option>
                                            </select>
                                        </label>
                                        <label className="col-md-5 col-12 centre p-1">
                                            <span className="py-2 d-flex">  فعال / غیر فعال</span>
                                            <select name="active-not-active" id="active-not-active"
                                                    className="d-flex p-1  rounded border col-12">
                                                <option value="انتخاب کنید" selected>انتخاب کنید</option>
                                            </select>
                                        </label>
                                        <label className="col-md-5 col-12 centre p-1">
                                            <span className="py-2 d-flex">فروشگاه ها</span>
                                            <Select
                                                isMulti
                                                placeholder={'سرچ کنید'}
                                                defaultValue={selectedOption}
                                                onChange={setSelectedOption}
                                                options={options}
                                            />
                                        </label>
                                        <label className="col-md-5 col-12 centre p-1">
                                            <span className="py-2 d-flex"> برند </span>
                                            <Select
                                                isMulti
                                                placeholder={'سرچ کنید'}
                                                defaultValue={selectedOption}
                                                onChange={setSelectedOption}
                                                options={options}
                                            />
                                        </label>
                                        <label className="col-md-5 col-12 centre p-1">
                                            <span className="py-2 d-flex">دسته بندی </span>
                                            <select className="col-12 p-1 border rounded" name="group" id="group">
                                                <option value="انتخاب کنید">انتخاب کنید</option>
                                            </select>
                                        </label>
                                        <label className="col-md-5 col-12 centre p-1">
                                            <span className="py-2 d-flex">تاریخ   </span>
                                            <DatePicker
                                                value={values}
                                                onChange={setValues}
                                                range
                                                render={<InputIcon/>}
                                                calendar={persian}
                                                locale={persian_fa}
                                                calendarPosition="bottom-right"
                                            />
                                        </label>
                                        <div className="col-12 p-1 row m-auto">
                                            <label className="border rounded d-flex align-items-center col-2 p-1">
                                                <input type="checkbox" name="select-pic" id="select-pic"/>
                                                <span className="p-2"> انتخاب کالاهای با تصویر</span>
                                            </label>
                                        </div>
                                        <div className="col-12 p-3 center ">
                                            <button
                                                className="col-3 col-md-1 m-2 btn text-white bg-green-success font-16-rem">فیلتر
                                            </button>
                                            <button
                                                className="col-4 col-md-1 m-2 btn text-white bg-danger font-16-rem">حذف
                                                فیلتر
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*number-page*/}
                    <div className="col-12 bg-zebra d-flex justify-content-between p-2 rounded-pill">
                        <div className="col-10 col-lg-6   d-flex justify-content-start align-items-center">
                            <ul className="col-8 col-lg-6 p-2 rounded-pill overflow-visible  shadow bg-white bg-opacity-25 d-flex justify-content-evenly   m-0 p-0 list-unstyled">
                                <li className="center  font-16 m-0"><a
                                    className="col-1 p-1 rounded-circle center text-decoration-none icon icon-Right-1"
                                    href="/"></a></li>
                                <li className="center   font-16 m-0"><a
                                    className=" rounded-circle center text-decoration-none " href="/">1</a></li>
                                <li className="center   font-16 m-0"><a
                                    className=" rounded-circle center text-decoration-none " href="/">2</a></li>
                                <li className="center   font-16 m-0"><a
                                    className=" rounded-circle center text-decoration-none " href="/">3</a></li>
                                <li className="center  font-16 m-0"><a
                                    className="col-1 p-1 rounded-circle center text-decoration-none text-decoration-none icon icon-Left-1"
                                    href="/"></a></li>
                            </ul>
                        </div>
                        <label className="col-2  p-2 font-14 d-flex justify-content-center align-items-center"><select
                            className="col-12 p-1 rounded">
                            <option value="انتخاب کنید">انتخاب کنید</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select></label></div>

                    <div className="col-12 d-flex justify-content-between align-items-center p-2 flex-wrap">
                        <span className="d-flex col-12 col-md-3 ">  تعداد سفارش ها : (12453)  </span>
                        <form className="col-12 col-md-3 rounded p-1 d-flex ">
                            <label htmlFor="search"
                                   className="position-relative d-flex flex-row-reverse col-12">
                                <input type="search" name="search" id="search"
                                       className="font-14 col-12 col-md-9 p-2 border "
                                       placeholder="جستجو"/>
                                <button
                                    className="center h-100 bg-default border-none rounded position-absolute p-3 ">
                                    <i className="icon icon-Search-2 font-14"></i></button>
                            </label>
                        </form>
                    </div>
                    <div className="col-12 d-flex p-2 ">
                        <button onClick={e => alert()}
                                className="btn btn-success col-3 col-md-1 d-flex justify-content-center align-items-center">
                            جدید
                            <i className="icon icon-Add1 text-white d-flex justify-content-center align-items-center pe-1"></i>
                        </button>
                        <h3 className="col-9 text-center  d-none d-md-block">لیست کالا ها </h3>
                    </div>
                </div>

                <div className="col-12 d-flex flex-wrap rounded justify-content-center font-16-rem">
                    {/*title*/}
                    <div
                        className="col-12 d-none d-md-flex justify-content-between p-2 py-3 rounded   mt-2 border-bottom font-14">
                        <div
                            className="col-1 d-flex justify-content-center   py-2">تصویر
                        </div>
                        <div
                            className="col-3 d-flex justify-content-center  py-2">کالا
                        </div>
                        <div
                            className="col-3 d-flex justify-content-center  py-2">دسته
                            بندی
                        </div>
                        <div
                            className="col-1 d-flex justify-content-center  py-2">وضعیت
                        </div>
                        <div
                            className="col-1 d-flex justify-content-center  py-2">فعال
                        </div>
                        <div
                            className="col-3 d-flex justify-content-center  py-2"> عملیات
                        </div>
                    </div>
                    {/*titleMobile*/}
                    <div
                        className="col-12 d-flex d-md-none justify-content-center border-bottom rounded-pill py-3">کالاها
                    </div>
                    {/*list*/}
                    <div className="col-12 row m-auto justify-content-center p-2">
                        <div className="col-11 col-md-12 shadow-sm border-bottom  d-flex flex-wrap py-2 px-2  rounded">
                            {/*logo*/}
                            <div
                                className="col-6 d-none d-md-block col-md-1 d-flex align-items-center flex-wrap py-1 justify-content-md-center justify-content-end">
                                <figure
                                    className='center p-0 m-0 border border-3 col-5 col-md-7  overflow-hidden rounded-circle'>
                                    <img className="img-fluid"
                                         src="https://static.elanza.com/media/brand/logo/2022/02/19/49984/a9a3e435538a7bf231cec2ae4e6c8b6e.jpg"
                                         alt="ایلابرت"/>
                                </figure>
                            </div>
                            {/*menuMobile*/}
                            <div className="col-12  p-2 m-auto d-md-none">
                                <div className="col-12 d-flex justify-content-between ">
                                    <span className="my-2">کالا : </span>
                                    <span className="my-2">فوم شستشوی صورت آقایان ژوت حجم 150 میلی لیتر </span>
                                </div>
                                <div className="col-12 d-flex justify-content-between ">
                                    <span className="my-2">برند : </span>
                                    <span className="my-2">ژوت </span>
                                </div>
                                <div className="col-12 d-flex justify-content-between ">
                                    <span className="my-2">فروشندگان : </span>
                                    <span className="my-2">الانزا </span>
                                </div>
                                <div className="col-12 d-flex justify-content-between ">
                                    <span className="my-2 d-flex col-3">دسته بندی  : </span>
                                    <span className="my-2 d-flex ">
                                            محصولات بهداشتی و مراقبتی
                                           >
                                            پاک کننده صورت
                                           >
                                            شوینده صورت
                                       >
                                        ژل شستشوی صورت
                                    </span>
                                </div>
                                <div className="col-12 d-flex justify-content-between ">
                                    <span className="my-2">وضعیت  : </span>
                                    <span className="my-2">در انتظار بررسی  </span>
                                </div>
                                <div className="col-12 d-flex justify-content-between ">
                                    <span className="my-2">فعال  : </span>
                                    <span className="my-2 ">فعال
                                         <i className="alert p-0 m-1 alert-success icon icon-Tick"></i>
                                    </span>
                                </div>
                                <div
                                    className="col-12 col-md-3 d-flex align-items-center justify-content-center flex-wrap ">
                                    <button
                                        className="col-2 col-md-3 col-xxl-2 m-1 font-14-rem btn px-1 btn-primary center">کپی
                                    </button>
                                    <button
                                        className="col-2 col-md-3 col-xxl-2 m-1 font-14-rem btn btn-danger center">حذف
                                    </button>
                                    <button
                                        className="col-2 px-1  m-1 font-14-rem btn btn-info text-white center text-nowrap  ">
                                        <Link className="text-decoration-none" to="/product-variations"> تنوع ها
                                            (1)</Link>

                                    </button>
                                    <button
                                        className="col-2 col-md-3 col-xxl-2 m-1 font-14-rem btn btn-secondary text-white center">
                                        سئو
                                    </button>
                                    <button
                                        className="col-2 col-md-3 col-xxl-2 m-1 font-14-rem btn btn-warning text-white center ">
                                        <Link className="text-decoration-none" to="/commodity-edit">ویرایش</Link>
                                    </button>
                                </div>
                            </div>
                            {/*menuDesk*/}
                            <div
                                className="d-none col-3  d-md-flex px-2  py-2 py-md-0  align-items-center flex-wrap justify-content-md-center font-FaNum-Medium">
                                <div
                                    className="d-md-flex p-2 d-none justify-content-center align-content-center flex-wrap">
                                    <span className="col-12 d-flex">فوم شستشوی صورت آقایان ژوت حجم 150 میلی لیتر </span>
                                    <span className="col-12 d-flex">برند : ژوت </span>
                                    <span className="col-12 d-flex">فروشندگان : الانزا</span>
                                </div>
                            </div>
                            {/*Grouping*/}
                            <div
                                className="d-none col-3  d-md-flex px-2  py-2 py-md-0  align-items-center flex-wrap justify-content-md-center font-FaNum-Medium">
                             <span className="my-2 d-flex ">

                                            محصولات بهداشتی و مراقبتی
                                           >
                                            پاک کننده صورت
                                           >
                                            شوینده صورت
                                           >
                                            ژل شستشوی صورت
                                    </span>
                            </div>
                            <div
                                className="d-none col-1  d-md-flex px-2  py-2 py-md-0  align-items-center flex-wrap justify-content-md-center font-FaNum-Medium">
                                در انتظار برررسی
                            </div>
                            <div
                                className="d-none col-1  d-md-flex px-2  py-2 py-md-0  align-items-center flex-wrap justify-content-md-center font-FaNum-Medium">
                                فعال
                                <i className="alert p-0 m-1 alert-success icon icon-Tick"></i>
                            </div>
                            <div
                                className="col-12 d-none d-md-flex col-md-3 align-items-center justify-content-center flex-wrap ">
                                <button
                                    className="col-2  text-nowrap  m-1 font-14-rem btn px-1 btn-primary center">کپی
                                </button>
                                <button className="col-2   m-1 font-14-rem btn btn-danger center">حذف
                                </button>
                                <button
                                    className="text-nowrap col-2  m-1 font-14-rem btn btn-info text-white center ">
                                    <Link className="text-decoration-none" to="/product-variations"> تنوع ها (1)</Link>
                                </button>
                                <button
                                    className="col-2 col-md-3 col-xxl-2 m-1 font-14-rem btn btn-secondary text-white center">
                                    سئو
                                </button>
                                <button
                                    className="col-2 col-md-3 col-xxl-2 m-1 font-14-rem btn btn-warning text-white center ">
                                    <Link className="text-decoration-none" to="/product-edit">ویرایش</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Product;