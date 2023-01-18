import React from 'react';
import {Link} from "react-router-dom";

function Slider() {
    return (
        <>
            <section className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between p-2">
                <section className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                    <div className="col-12 d-flex flex-wrap justify-content-end align-items-center p-2">
                        <h5 className="col-12 p-2">لیست اسلایدرها</h5>
                    </div>
                </section>
                <section className="col-12 d-flex justify-content-center align-items-start flex-wrap rounded p-2 shadow-sm mt-2">
                    <h6 className="col-12 bg-default p-3 rounded d-flex align-items-end text-white ">
                        لیست
                    </h6>
                    <section className="col-12 d-flex justify-content-center align-items-start flex-wrap  rounded">
                        {/*menu*/}
                        <div className="col-12  d-flex justify-content-between align-items-center border-bottom rounded-pill p-2 px-4">
                            <div className="col-5 text-center text-xl-end p-2">عنوان </div>
                            <div className="col-5 text-center text-xl-end p-2">عملیات</div>
                        </div>
                        {/*list*/}
                        <div className="col-12 d-flex justify-content-between flex-wrap">
                            <div className="col-12 my-1 d-flex justify-content-between align-items-center border-bottom shadow-sm rounded p-2 ">
                                <div className="col-5 p-2">
                                    بنر چند تایی پایین صفحه دسته بندی محصولات مو آقایان
                                </div>
                                <div className="col-5 p-2">
                                    <Link to="/slider-show" className="btn font-16-rem mx-1  btn-secondary text-white"> نمایش اسلایدرها</Link>
                                    <Link to="/slider-edit" className="btn font-16-rem mx-1  btn-success text-white">افزودن اسلایدر</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </section>
        </>
    );
}

export default Slider;