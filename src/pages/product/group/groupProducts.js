import React from 'react';
import {Link} from "react-router-dom";

function GroupProducts() {
    return (
       <>
           <section className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between p-2">
               <section className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                   <h4 className="py-3 py-md-2 px-2">
                        لیست گروه کالا ها
                   </h4>
               </section>
               <section className="col-12 bg-zebra d-flex justify-content-between p-2 rounded-pill mt-2">
                   <div className="col-10 col-lg-6   d-flex justify-content-start align-items-center">
                       <ul className="col-8 col-lg-6 p-2 rounded-pill overflow-visible  shadow bg-white bg-opacity-25 d-flex justify-content-evenly   m-0 p-0 list-unstyled">
                           <li className="center  font-16 m-0"><a
                               className="col-1 p-1 rounded-circle center text-decoration-none icon icon-Right-1"
                               href="/"></a></li>
                           <li className="center   font-16 m-0"><a
                               className=" rounded-circle center text-decoration-none " href="/">1</a></li>
                           <li className="center   font-16 m-0"><a
                               className=" rounded-circle center text-decoration-none " href="/">2</a></li>
                           <li className="center   font-16 m-0"><a
                               className=" rounded-circle center text-decoration-none " href="/">3</a></li>
                           <li className="center  font-16 m-0"><a
                               className="col-1 p-1 rounded-circle center text-decoration-none text-decoration-none icon icon-Left-1"
                               href="/"></a></li>
                       </ul>
                   </div>
                   <label className="col-2  p-2 font-14 d-flex justify-content-center align-items-center "><select
                       className="col-5 col-md-12 p-1 rounded">
                       <option value="انتخاب کنید">انتخاب کنید</option>
                       <option value="1">1</option>
                       <option value="2">2</option>
                       <option value="3">3</option>
                   </select></label >
               </section>
               <section className="col-12 d-flex p-2 py-4">
                   <button className="btn btn-success col-3 col-md-1 ">
                     <Link to="/group-create" className="col-12 d-flex justify-content-center align-items-center text-decoration-none">
                         جدید
                         <i className="icon icon-Add1 text-white d-flex justify-content-center align-items-center pe-1"></i></Link>
                   </button>
                   <h3 className="col-10 text-center  d-none d-md-block">لیست کالا ها </h3>
               </section>
               <section className="col-12 d-flex justify-content-center align-items-start flex-wrap pt-4 rounded">
                   <div className="col-12  d-flex justify-content-center align-items-center border-bottom rounded-pill p-3 px-4">
                       <span className="d-flex col-5 justify-content-start">گروه کالا</span>
                       <span className="d-flex col-7 center">عملیات</span>
                   </div>
                   <div className="col-12 d-flex justify-content-center flex-wrap">
                       <div className="col-12 my-1 d-flex justify-content-start align-items-center border-bottom shadow-sm rounded p-2 py-4 ">
                           <div className="col-md-8 col-6">ماسک مو فاقد سولفات سریتا بیوتی </div>
                           <div className="col-md-3 col-6 d-flex justify-content-evenly px-3 ">
                                   <button className="col-md-3 center col-5 mx-1 mx-md-0 text-nowrap btn btn-info text-light font-16-rem "><Link className="text-decoration-none" to='/group-commodity'>کالا ها( 0 )</Link></button>
                               <button className="col-md-3 center col-5 mx-1 mx-md-0 text-nowrap btn btn-warning text-light font-16-rem " ><Link className="text-decoration-none" to="/group-commodity-edit">ویرایش</Link> </button>
                               <button className="col-md-3 center col-5 mx-1 mx-md-0 text-nowrap btn btn-danger text-light font-16-rem ">حدف</button>
                           </div>
                       </div>
                   </div>
               </section>
           </section>
           </>
    );
}

export default GroupProducts;