import React from 'react';

function FreeDelivery() {
    return (
        <>
            <section className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between p-2">
                <section className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                    <div className="col-12 d-flex flex-wrap justify-content-end align-items-center p-2">
                        <h5 className="col-12 p-2">حداقل هزینه برای ارسال رایگان</h5>
                    </div>
                </section>
                <section className="col-12 d-flex justify-content-center align-items-start flex-wrap rounded p-2 shadow-sm mt-2">
                    <h6 className="col-12 bg-default p-3 rounded d-flex align-items-end text-white ">
                        حداقل هزینه برای ارسال رایگان
                    </h6>
                    <section className="col-12 d-flex justify-content-center justify-content-xl-between align-items-start flex-wrap p-2 rounded">
                        <label className="col-12 col-md-5 col-xxl-4 mx-1 py-2" >
                            حداقل هزینه برای ارسال رایگان
                            <span className="text-danger"> * </span>
                            <input type="text" name="free_delivery" id="free_delivery" className="col-12 p-2 my-1"/>
                        </label>

                    </section>
                    <div className="col-12 p-2 rounded bg-secondary bg-opacity-10">
                        <button className="btn btn-success text-white mx-1">ذخیره</button>
                    </div>
                </section>
            </section>
        </>
    );
}

export default FreeDelivery;