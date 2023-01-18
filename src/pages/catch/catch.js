import React from 'react';

function Catch() {
    return (
        <>
            <section className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between p-2">
                <section className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                    <div className="col-12 d-flex flex-wrap justify-content-end align-items-center p-2">
                        <h5 className="col-12 p-2">افزودن اسلایدر</h5>
                    </div>
                </section>
                <section className="col-12 d-flex justify-content-center align-items-start flex-wrap rounded p-2 shadow-sm mt-2">
                    <h6 className="col-12 bg-default p-3 rounded d-flex align-items-end text-white ">
                        مدیریت کش
                    </h6>

                    <div className="col-12 p-2 rounded bg-secondary bg-opacity-10">
                        <button className="btn btn-danger text-white mx-1 font-16-rem d-flex align-items-center">
                            حذف کَش کلی
                            <i className="icon icon-Delete-2  font-20 p-1"></i>
                        </button>
                    </div>
                </section>
            </section>
        </>
    );
}

export default Catch;