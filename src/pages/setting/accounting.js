import React from 'react';

function Accounting() {
    return (
        <>
            <section className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between p-2">
                <section className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                    <div className="col-12 d-flex flex-wrap justify-content-end align-items-center p-2">
                        <h5 className="col-12 p-2">حساب بانکی </h5>
                    </div>
                </section>
                <section className="col-12 d-flex justify-content-center align-items-start flex-wrap rounded p-2 shadow-sm mt-2">
                    <h6 className="col-12 bg-default p-3 rounded d-flex align-items-end text-white ">
                        اطلاعات حساب بانکی
                    </h6>
                    <section className="col-12 d-flex justify-content-center justify-content-xl-between align-items-start flex-wrap p-2  rounded">
                        <label className="col-12 col-md-5 col-xxl-3 mx-1 py-2" >
                            بانک
                            <span className="text-danger"> * </span>
                            <input type="text" name="bank" id="bank" className="col-12 p-2 my-1"/>
                        </label>
                        <label className="col-12 col-md-5 col-xxl-3 mx-1 py-2" >
                            شعبه
                            <span className="text-danger"> * </span>
                            <input type="text" name="products_for_first_tag_section.title" id="products_for_first_tag_section.title" className="col-12 p-2 my-1"/>
                        </label>
                        <label className="col-12 col-md-5 col-xxl-3 mx-1 py-2" >
                           کد شعبه
                            <span className="text-danger"> * </span>
                            <input type="text" name="products_for_first_tag_section.title" id="products_for_first_tag_section.title" className="col-12 p-2 my-1"/>
                        </label>
                        <label className="col-12 col-md-5 col-xxl-3 mx-1 py-2" >
                            شعبه حساب
                            <span className="text-danger"> * </span>
                            <input type="text" name="products_for_first_tag_section.title" id="products_for_first_tag_section.title" className="col-12 p-2 my-1"/>
                        </label>
                        <label className="col-12 col-md-5 col-xxl-3 mx-1 py-2" >
                            شعبه کارت
                            <span className="text-danger"> * </span>
                            <input type="text" name="products_for_first_tag_section.title" id="products_for_first_tag_section.title" className="col-12 p-2 my-1"/>
                        </label>
                        <label className="col-12 col-md-5 col-xxl-3 mx-1 py-2" >
                            شعبه شبا
                            <span className="text-danger"> * </span>
                            <input type="text" name="products_for_first_tag_section.title" id="products_for_first_tag_section.title" className="col-12 p-2 my-1"/>
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

export default Accounting;