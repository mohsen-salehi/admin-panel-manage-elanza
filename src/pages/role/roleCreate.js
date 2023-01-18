import React from 'react';

function RoleCreate() {
    return (
        <>
            <section className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between p-2">
                <section className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                    <div className="col-12 d-flex flex-wrap justify-content-end align-items-center p-2">
                        <h5 className="col-12 border-bottom rounded p-2">افزودن نقش </h5>
                    </div>
                </section>
                <section className="col-12 d-flex justify-content-center align-items-start flex-wrap rounded p-2 shadow-sm mt-2">
                    <h6 className="col-12 bg-default p-3 rounded d-flex justify-content-between align-items-end text-white ">
                     ایجاد
                    </h6>
                    <div className="col-12 p-2 d-flex justify-content-between align-content-center  flex-wrap font-14 border-bottom rounded">
                        <label className="col-12 col-md-5 col-xxl-3 mx-1 py-2" >
                            عنوان
                            <span className="text-danger"> * </span>
                            <select name="title" id="title" className="col-12 p-2 border rounded">
                                <option value=""></option>
                            </select>
                        </label>
                        <div className="col-12 p-3 bg-secondary bg-opacity-10 rounded ">
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

export default RoleCreate;