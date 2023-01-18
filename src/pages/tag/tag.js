import React from 'react';
import {Link} from "react-router-dom";

function Tag() {
    return (
        <>
            <section className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between p-2">
                <section className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                    <h4 className="py-3 py-md-2 px-2">
                        لیست تگ ها
                    </h4>
                </section>
                <section className="col-12 p-2 py-4">
                    <h5 className=" border-bottom rounded p-2 col-2 text-center d-none d-md-block">تعداد تگ ها : (15)</h5>
                </section>
                <section className="col-12 d-flex justify-content-center align-items-start flex-wrap  rounded">
                    {/*menu*/}
                    <div className="col-12  d-flex justify-content-between align-items-center border-bottom rounded-pill p-2 px-4">
                        <div className="col-3 text-center p-2">تگ </div>
                        <div className="col-3 text-center p-2">عملیات</div>
                    </div>
                    {/*list*/}
                    <div className="col-12 d-flex justify-content-between flex-wrap">
                        <div className="col-12 my-1 d-flex justify-content-between align-items-center border-bottom shadow-sm rounded p-2 py-4 ">
                            <div className="col-3 text-center p-2">محصولات هیدرودرم</div>
                            <div className="col-8 col-xl-3 text-center p-2 ">
                                <button className="btn btn-primary border-none mx-1 font-16-rem">کالا (20)</button>
                                <Link to='/tag/edit' className="btn btn-warning text-white border-none mx-1 font-16-rem">ویرایش</Link>
                                <button className="btn btn-danger border-none mx-1 font-16-rem">لغو</button>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}

export default Tag;