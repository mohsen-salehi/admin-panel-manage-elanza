import React from 'react';
import {Link} from "react-router-dom";

function SliderShow() {
    return (
        <>
            <section className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between p-1">
                <section className="col-12  d-flex justify-content-between align-items-center  ">
                    <div className="col-12 d-flex flex-wrap justify-content-end align-items-center p-2">
                        <h6 className="col-12 bg-default border-bottom rounded p-3 text-white">لیست اسلاید ها</h6>
                        <Link to="/slider-create" className="col-5 col-xl-1 mb-1 btn btn-outline-success d-flex align-items-center justify-content-center font-16-rem">
                            <i className="icon icon-Add1 center "></i>
                            جدید
                        </Link>
                    </div>
                </section>
                <section className="col-12 d-flex  flex-wrap p-2 py-2">
                    <div className="col-12 d-flex justify-content-between border-bottom rounded-pill align-items-center p-2 px-3 flex-wrap">
                        <span className="d-flex col-12 col-md-3 ">   بنر چند تایی پایین صفحه دسته بندی محصولات مو آقایان </span>
                        <form className="col-12 col-md-3 rounded p-1 d-flex ">
                            <label htmlFor="search"
                                   className="position-relative d-flex flex-row-reverse col-12">
                                <input type="search" name="search" id="search" className="font-14 col-12 col-md-9 p-2 border "
                                       placeholder="جستجو"/>
                                <button
                                    className="center h-100 bg-default border-none rounded position-absolute p-3 ">
                                    <i className="icon icon-Search-2 font-14"></i></button>
                            </label>
                        </form>
                    </div>
                </section>
                <section className="col-12 d-flex justify-content-center align-items-start flex-wrap  rounded">
                    {/*menu*/}
                    <div className="col-12 d-none d-xl-flex justify-content-start align-items-center border-bottom rounded-pill p-2 px-3">
                        <div className="col-2 p-2 center">عنوان</div>
                        <div className="col-2 p-2 center">تصویر</div>
                        <div className="col-3 p-2 center">لینک</div>
                        <div className="col-2 p-2 center">ترتیب نمایش </div>
                        <div className="col-3 p-2 center">عملیات</div>
                    </div>

                    {/*mobile_title*/}

                    <div className="col-12 d-xl-none bg-default rounded text-white p-2 center">لیست اسلاید ها</div>

                    {/*list*/}
                    <div className="col-12 d-flex justify-content-start flex-wrap p-xl-2 px-3">
                        <div className="col-12 my-1 d-flex flex-wrap shadow align-items-center border-bottom shadow-sm rounded p-2 px-3 ">
                          <div className="col-xl-2 col-12 d-flex justify-content-between justify-content-xl-center align-items-center my-2 m-xl-0">
                              <span className="d-xl-none">عنوان:</span>
                              <span>محصولات پریم</span>
                          </div>
                          <div className="col-xl-2 col-12 d-flex justify-content-between justify-content-xl-center align-items-center my-2 m-xl-0">
                              <span className="d-xl-none">تصویر:</span>
                              <figure className="p-0 m-0 col col-xl-12 d-flex justify-content-end ">
                                  <img src="https://static.elanzacom.ir/media/slide/image/2022/07/09/52253/706b120cbdc542c5e2c61ca23ce447df.jpg" className="img-fluid col-5 rounded" alt=""/>
                              </figure>
                          </div>
                          <div className="col-xl-3 col-12 d-flex justify-content-between justify-content-xl-center align-items-center my-2 m-xl-0">
                              <span className="d-xl-none">لینک:</span>
                              <a href="  https://elanza.com/brand/prime">  https://elanza.com/brand/prime</a>
                          </div>
                          <div className="col-xl-2 col-12 d-flex justify-content-between justify-content-xl-center align-items-center my-2 m-xl-0">
                              <span className="d-xl-none">ترتیب نمایش:</span>
                              <span>-</span>
                          </div>
                          <div className="col-xl-3 col-12 d-flex  justify-content-center align-items-center my-2 m-xl-0">
                              <Link to="/slider-edit" className="btn btn-warning text-white mx-1 font-16-rem">ویرایش </Link>
                              <button className="btn btn-danger  text-white mx-1 font-16-rem">حذف</button>
                          </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}

export default SliderShow;