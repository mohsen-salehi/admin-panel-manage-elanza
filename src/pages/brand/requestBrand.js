import React from 'react';
import {Link} from "react-router-dom";

function RequestBrand() {
    return (

           <>
               <section className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between p-2">
                   <section className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                       <h4 className="py-3 py-md-2 px-2">
                         درخواست برند
                       </h4>
                   </section>
                   <section className="col-12 center p-2 py-4">
                       <h5 className=" text-center border-bottom rounded p-2  d-none d-md-block">لیست برند ها </h5>
                   </section>
                   <section className="col-12 d-flex justify-content-center align-items-start flex-wrap  rounded">
                       {/*menu*/}
                       <div className="col-12  d-flex justify-content-between align-items-center border-bottom rounded-pill p-2 px-4">
                             <div className="col-3 text-center p-2">برند</div>
                             <div className="col-3 text-center p-2">فروشگاه</div>
                             <div className="col-3 text-center p-2">عملیات</div>
                       </div>
                       {/*list*/}
                       <div className="col-12 d-flex justify-content-between flex-wrap">
                           <div className="col-12 my-1 d-flex justify-content-between align-items-center border-bottom shadow-sm rounded p-2 py-4 ">
                               <div className="col-3 text-center p-2">آلما (Alma)</div>
                               <div className="col-3 text-center p-2">کالا مارکت</div>
                               <div className="col-3 text-center p-2 ">
                                   <button className="btn btn-danger border-none mx-1 font-16-rem">لغو</button>
                                   <button className="btn btn-success border-none mx-1 font-16-rem">تایید</button>
                               </div>
                           </div>
                       </div>
                   </section>
               </section>
           </>

    );
}

export default RequestBrand;