import React from 'react';
import {Link} from "react-router-dom";

function Guarantee() {
    return (
        <>
            <section className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between p-2">
                <section className="col-12 d-flex justify-content-between align-items-center  rounded">
                    <div className="col-12 d-flex flex-wrap justify-content-end align-items-center p-2">
                        <h5 className="col-12 border-bottom rounded p-2">گارانتی ها</h5>
                        <button className="btn btn-success text-white border-none center font-16-rem">
                            <i className="icon icon-Add1"></i>
                            جدید
                        </button>
                    </div>

                </section>
                <section className="col-12 d-flex flex-wrap p-2">

                    <div className="col-12 d-flex justify-content-between align-items-center border-top border-bottom px-xl-3 rounded-pill  p-2 flex-wrap">
                        <h5 className="d-flex col-12 col-md-3 "> تعداد گارانتی ها (2)  </h5>
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
                <section className="col-12 d-flex justify-content-center align-items-center flex-wrap  rounded">
                    {/*menu*/}
                    <div className="col-12  d-flex justify-content-between align-items-center border-bottom rounded-pill p-2 px-4">
                        <div className="col-3  p-2">عنوان</div>
                        <div className="col-3 text-center p-2">وضعیت</div>
                        <div className="col-3 text-center p-2">عملیات</div>
                    </div>
                    {/*list*/}
                    <div className="col-12 d-flex justify-content-between flex-wrap">
                        <div className="col-12 my-1 d-flex justify-content-between align-items-center border-bottom shadow-sm rounded p-2 ">
                            <div className="col-3 d-flex flex-wrap  align-content-center p-3">
                                7 روز ضمانت بازگشت کالا
                            </div>
                            <div className="col-3 text-center  p-3">
                             فعال
                            </div>

                            <div className="col-3 d-flex flex-wrap  justify-content-center p-2">
                                <Link to="/guarantee-edit" className="btn btn-warning border-none text-white mx-1 font-16-rem">ویرایش</Link>
                                <button className="btn btn-danger text-white border-none  font-16-rem">رد</button>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}

export default Guarantee;