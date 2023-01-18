import React from 'react';

function GroupProductCreate() {
    return (
       <>
           <section className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between p-2">
               <section className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                   <h4 className="py-3 py-md-2 px-2">
                      افزودن گروه کالا
                   </h4>
               </section>
               <div className="col-12 d-flex flex-wrap">
                   <h5 className="col-12 bg-default p-2 py-3 rounded mt-3 text-light">
                        افزودن گروه کالا
                   </h5>
                   <label className="col-12 p-2 d-flex flex-wrap my-2 rounded bg-secondary bg-opacity-10 py-4">
                       <span className="col-12 d-flex">
                           عنوان
                       <span className="text-danger px-1">*</span>
                       </span>
                       <input type="text" name="title" id="title" className="col-md-5 col-12 p-1 my-2 border"/>
                   </label>
                   <div className="col-12 row m-auto justify-content-center justify-content-md-start mt-1 rounded bg-secondary bg-opacity-10 py-2">
                       <button className="col-md-1 col-3 mx-2 btn btn-success bg-success  border-0 font-16-rem">ذخیره</button>
                       <button className="col-md-1 col-3 mx-2 btn btn-danger bg-success  border-0 font-16-rem">ذخیره و بستن </button>
                       <button className="col-md-1 col-3 mx-2 btn btn-warning bg-success border-0  font-16-rem text-light">ذخیره و جدید</button>
                   </div>
               </div>
           </section>
       </>
    );
}

export default GroupProductCreate;