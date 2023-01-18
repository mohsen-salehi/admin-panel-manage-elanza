import React from 'react';

function AttributeCategory() {
    return (
        <>
            <section className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between p-2">
                <section className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                    <div className="col-12 d-flex flex-wrap justify-content-end align-items-center p-2">
                        <h5 className="col-12 border-bottom rounded p-2">دسته بندی های نوع سِت </h5>
                    </div>
                </section>
                <section className="col-12 d-flex justify-content-center align-items-start flex-wrap rounded p-2 shadow-sm">
                    <h6 className="col-12 bg-default p-3 rounded text-white ">
                        ویژگی (نوع سِت)
                    </h6>
                    <div className="col-12 p-4 d-flex justify-content-between align-content-center  flex-wrap font-14 border-bottom rounded">
                        <label className="col-12 d-flex flex-wrap p-2">
                            دسته بندی
                        </label>
                        <select name="category" id="category" className="col-12 col-xl-5 p-2 border rounded">

                        </select>
                    </div>
                    <div className="col-12 p-3 bg-secondary bg-opacity-10 rounded ">
                        <button className="btn btn-success font-16-rem mx-1">ذخیره</button>
                        <button className="btn btn-success font-16-rem mx-1">ذخیره و بستن</button>
                    </div>
                </section>
            </section>
        </>
    );
}

export default AttributeCategory;