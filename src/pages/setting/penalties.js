import React from 'react';

function Penalties() {
    return (
        <section className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between p-2">
            <section className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                <div className="col-12 d-flex flex-wrap justify-content-end align-items-center p-2">
                    <h5 className="col-12 p-2">پنالتی های فروشندگان</h5>
                </div>
            </section>
            <section className="col-12 d-flex justify-content-center align-items-start flex-wrap rounded p-2 shadow-sm mt-2">
                <h6 className="col-12 bg-default p-3 rounded d-flex align-items-end text-white ">
                    پنالتی های فروشندگان
                </h6>
                <div className="col-12 alert alert-danger m-0 p-2 d-flex align-items-center my-2">لطفا همه مبالغ به ریال وارد شود.</div>
                <section className="col-12 d-flex justify-content-center justify-content-xl-between align-items-start flex-wrap p-3 rounded">
                    <label className="col-12 col-md-5 col-xxl-4 mx-1 py-2" >
                        تاخیر
                        <input type="text" name="DELAY" id="DELAY" className="col-12 p-2 my-1"/>
                    </label>
                    <label className="col-12 col-md-5 col-xxl-4 mx-1 py-2" >
                        کنسلی
                        <input type="text" name="CANCELLATION" id="CANCELLATION" className="col-12 p-2 my-1"/>
                    </label>
                    <label className="col-12 col-md-5 col-xxl-4 mx-1 py-2" >
                        مغایرت
                        <input type="text" name="CONFLICT" id="CONFLICT" className="col-12 p-2 my-1"/>
                    </label>
                    <label className="col-12 col-md-5 col-xxl-4 mx-1 py-2" >
                        غیر اصل
                        <input type="text" name="FAKE" id="FAKE" className="col-12 p-2 my-1"/>
                    </label>
                    <label className="col-12 col-md-5 col-xxl-4 mx-1 py-2" >
                        قاچاق
                        <input type="text" name="SMUGGLING" id="SMUGGLING" className="col-12 p-2 my-1"/>
                    </label>
                </section>
                <div className="col-12 p-2 rounded bg-secondary bg-opacity-10">
                    <button className="btn btn-success text-white mx-1">ذخیره</button>
                </div>
            </section>
        </section>
    );
}

export default Penalties;