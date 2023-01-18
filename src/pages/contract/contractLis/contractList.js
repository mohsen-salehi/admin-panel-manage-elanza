import React from 'react';
import {Link} from "react-router-dom";

function ContractList() {
    return (
       <>
           <div className="col-12 d-flex flex-wrap justify-content-between align-items-center p-2">
               <div className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                   <h4 className="py-3 py-md-2">
                       گزارش سفارشات
                   </h4>
               </div>
               <div className="col-12 p-2  d-flex justify-content-end">
                   <button className="btn btn-outline-success d-flex align-items-center justify-content-center font-16-rem ">
                       <i className="icon icon-Add1 center "></i>
                       جدید
                   </button>
               </div>
               <div className="col-12 mt-4 border-top p-2 rounded">
                   <div className="col-12 bg-zebra d-flex justify-content-between p-2 rounded-pill">
                       <div className="col-10 col-lg-6   d-flex justify-content-start align-items-center">
                           <ul className="col-8 col-lg-6 p-2 rounded-pill overflow-visible  shadow bg-white bg-opacity-25 d-flex justify-content-evenly   m-0 p-0 list-unstyled">
                               <li className="center  font-16 m-0">
                                   <Link to="/" className="col-1 p-1 rounded-circle center text-decoration-none icon icon-Right-1"></Link>
                               </li>
                               <li className="center   font-16 m-0">
                                   <Link to="/" className=" rounded-circle center text-decoration-none ">1</Link>
                               </li>
                               <li className="center   font-16 m-0">
                                   <Link to="/" className=" rounded-circle center text-decoration-none ">2</Link>
                               </li>
                               <li className="center   font-16 m-0">
                                   <Link to="/" className=" rounded-circle center text-decoration-none ">3</Link>
                               </li>
                               <li className="center  font-16 m-0">
                                   <Link to="/" className="col-1 p-1 rounded-circle center text-decoration-none text-decoration-none icon icon-Left-1"></Link>
                               </li>
                           </ul>

                       </div>
                       <label className="col-2  p-2 font-14 d-flex justify-content-center align-items-center">
                           <select className="col-12 p-1 rounded">
                               <option value="انتخاب کنید">انتخاب کنید</option>
                               <option value="1">1</option>
                               <option value="2">2</option>
                               <option value="3">3</option>
                           </select>
                       </label>
                   </div>
                   <div className="col-12 d-flex justify-content-between p-2 flex-wrap">
                       <span className="d-flex col-12 col-md-3 ">  تعداد قرارداد ها : (12453)  </span>
                       <form className="col-12 col-md-3 rounded p-1 d-flex ">
                           <label htmlFor="search"
                                  className="position-relative d-flex flex-row-reverse col-12">
                               <input type="search" name="search" id="search" className="font-14 col-12 col-md-9 p-2 border "
                                      placeholder="جستجو"/>
                               <button
                                   className="center h-100 bg-default border-none rounded position-absolute p-3 ">
                                   <i className="icon icon-Search-2 font-14"></i></button>
                           </label>
                       </form>
                   </div>
                   {/*title*/}
                   <div className="col-12 d-none d-md-flex justify-content-evenly p-2 py-3 rounded mt-2 border-bottom font-14">
                       <div className="col-1 d-flex justify-content-center py-2 rounded-pill">شماره قرارداد</div>
                       <div className="col-1 d-flex justify-content-center py-2 rounded-pill">وضعیت</div>
                       <div className="col-2 col-xxl-1 d-flex justify-content-center py-2 rounded-pill">تاریخ شروع قرارداد</div>
                       <div className="col-2 col-xxl-1 d-flex justify-content-center py-2 rounded-pill">تاریخ پایان قرارداد</div>
                       <div className="col-1 d-flex justify-content-center py-2 rounded-pill">فروشگاه</div>
                       <div className="col-3 d-flex justify-content-center py-2 rounded-pill"> عملیات</div>
                   </div>
                   {/*titleMobile*/}
                   <div className="col-12 d-flex d-md-none justify-content-center border-bottom rounded-pill py-3">لیست قراردادها</div>
                   {/*list*/}
                   <div className="col-12 shadow-sm d-flex justify-content-evenly flex-wrap p-1 py-md-2 border-bottom  px-2 my-2 rounded font-16-rem">
                       <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                           <span className="d-block d-md-none"> شماره قرارداد : </span>
                           <span className="text-primary">LNZO-552971119 </span>
                       </div>
                       <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                           <span className="d-block d-md-none"> وضعیت : </span>
                           <span>منتشر شده</span>
                       </div>
                       <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                           <span className="d-block d-md-none"> تاریخ شروع قرارداد : </span>
                           <span className="font-FaNum-Medium">1401/03/23</span>
                       </div>
                       <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                           <span className="d-block d-md-none"> تاریخ پایان قرارداد : </span>
                           <span className="font-FaNum-Medium">1402/03/23</span>
                       </div>
                       <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                           <span className="d-block d-md-none"> فروشگاه : </span>
                           <span> استاویتا</span>
                       </div>
                       <div className="col-12 col-md-3 d-flex align-items-center py-md-3 justify-content-md-center justify-content-center  ">
                           <button
                               className="col-3 col-md-4 col-xxl-3 m-1 font-14-rem btn btn-primary text-white center ">
                               <Link className="text-decoration-none" to="">مشاهده</Link>
                           </button>
                           <button
                               className="col-3 col-md-4 col-xxl-3 m-1 font-14-rem btn btn-warning text-white center ">
                               <Link className="text-decoration-none" to="/contract-list-edit">ویرایش</Link>
                           </button>
                           <button className="col-3 col-md-4 col-xxl-3   m-1 font-14-rem btn btn-success text-white  ">
                               <Link className="text-decoration-none" to="">کمسیون ها</Link>
                           </button>
                       </div>
                   </div>
                   <div className="col-12 shadow-sm d-flex justify-content-evenly flex-wrap p-1 py-md-2 border-bottom  px-2 my-2 rounded font-16-rem">
                       <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                           <span className="d-block d-md-none"> شماره قرارداد : </span>
                           <span className="text-primary">LNZO-552971119 </span>
                       </div>
                       <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                           <span className="d-block d-md-none"> وضعیت : </span>
                           <span>منتشر شده</span>
                       </div>
                       <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                           <span className="d-block d-md-none"> تاریخ شروع قرارداد : </span>
                           <span className="font-FaNum-Medium">1401/03/23</span>
                       </div>
                       <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                           <span className="d-block d-md-none"> تاریخ پایان قرارداد : </span>
                           <span className="font-FaNum-Medium">1402/03/23</span>
                       </div>
                       <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                           <span className="d-block d-md-none"> فروشگاه : </span>
                           <span> استاویتا</span>
                       </div>
                       <div className="col-12 col-md-3 d-flex align-items-center py-md-3 justify-content-md-center justify-content-center  ">
                           <button
                               className="col-3 col-md-4 col-xxl-3 m-1 font-14-rem btn btn-primary text-white center ">
                               <Link className="text-decoration-none" to="">مشاهده</Link>
                           </button>
                           <button
                               className="col-3 col-md-4 col-xxl-3 m-1 font-14-rem btn btn-warning text-white center ">
                               <Link className="text-decoration-none" to="/contract-list-edit">ویرایش</Link>
                           </button>
                           <button className="col-3 col-md-4 col-xxl-3   m-1 font-14-rem btn btn-success text-white  ">
                               <Link className="text-decoration-none" to="">کمسیون ها</Link>
                           </button>
                       </div>
                   </div>
                   <div className="col-12 shadow-sm d-flex justify-content-evenly flex-wrap p-1 py-md-2 border-bottom  px-2 my-2 rounded font-16-rem">
                       <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                           <span className="d-block d-md-none"> شماره قرارداد : </span>
                           <span className="text-primary">LNZO-552971119 </span>
                       </div>
                       <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                           <span className="d-block d-md-none"> وضعیت : </span>
                           <span>منتشر شده</span>
                       </div>
                       <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                           <span className="d-block d-md-none"> تاریخ شروع قرارداد : </span>
                           <span className="font-FaNum-Medium">1401/03/23</span>
                       </div>
                       <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                           <span className="d-block d-md-none"> تاریخ پایان قرارداد : </span>
                           <span className="font-FaNum-Medium">1402/03/23</span>
                       </div>
                       <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                           <span className="d-block d-md-none"> فروشگاه : </span>
                           <span> استاویتا</span>
                       </div>
                       <div className="col-12 col-md-3 d-flex align-items-center py-md-3 justify-content-md-center justify-content-center  ">
                           <button
                               className="col-3 col-md-4 col-xxl-3 m-1 font-14-rem btn btn-primary text-white center ">
                               <Link className="text-decoration-none" to="">مشاهده</Link>
                           </button>
                           <button
                               className="col-3 col-md-4 col-xxl-3 m-1 font-14-rem btn btn-warning text-white center ">
                               <Link className="text-decoration-none" to="/contract-list-edit">ویرایش</Link>
                           </button>
                           <button className="col-3 col-md-4 col-xxl-3   m-1 font-14-rem btn btn-success text-white  ">
                               <Link className="text-decoration-none" to="">کمسیون ها</Link>
                           </button>
                       </div>
                   </div>
                   <div className="col-12 shadow-sm d-flex justify-content-evenly flex-wrap p-1 py-md-2 border-bottom  px-2 my-2 rounded font-16-rem">
                       <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                           <span className="d-block d-md-none"> شماره قرارداد : </span>
                           <span className="text-primary">LNZO-552971119 </span>
                       </div>
                       <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                           <span className="d-block d-md-none"> وضعیت : </span>
                           <span>منتشر شده</span>
                       </div>
                       <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                           <span className="d-block d-md-none"> تاریخ شروع قرارداد : </span>
                           <span className="font-FaNum-Medium">1401/03/23</span>
                       </div>
                       <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                           <span className="d-block d-md-none"> تاریخ پایان قرارداد : </span>
                           <span className="font-FaNum-Medium">1402/03/23</span>
                       </div>
                       <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                           <span className="d-block d-md-none"> فروشگاه : </span>
                           <span> استاویتا</span>
                       </div>
                       <div className="col-12 col-md-3 d-flex align-items-center py-md-3 justify-content-md-center justify-content-center  ">
                           <button
                               className="col-3 col-md-4 col-xxl-3 m-1 font-14-rem btn btn-primary text-white center ">
                               <Link className="text-decoration-none" to="">مشاهده</Link>
                           </button>
                           <button
                               className="col-3 col-md-4 col-xxl-3 m-1 font-14-rem btn btn-warning text-white center ">
                               <Link className="text-decoration-none" to="/contract-list-edit">ویرایش</Link>
                           </button>
                           <button className="col-3 col-md-4 col-xxl-3   m-1 font-14-rem btn btn-success text-white  ">
                               <Link className="text-decoration-none" to="">کمسیون ها</Link>
                           </button>
                       </div>
                   </div>
                   <div className="col-12 shadow-sm d-flex justify-content-evenly flex-wrap p-1 py-md-2 border-bottom  px-2 my-2 rounded font-16-rem">
                       <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                           <span className="d-block d-md-none"> شماره قرارداد : </span>
                           <span className="text-primary">LNZO-552971119 </span>
                       </div>
                       <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                           <span className="d-block d-md-none"> وضعیت : </span>
                           <span>منتشر شده</span>
                       </div>
                       <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                           <span className="d-block d-md-none"> تاریخ شروع قرارداد : </span>
                           <span className="font-FaNum-Medium">1401/03/23</span>
                       </div>
                       <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                           <span className="d-block d-md-none"> تاریخ پایان قرارداد : </span>
                           <span className="font-FaNum-Medium">1402/03/23</span>
                       </div>
                       <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                           <span className="d-block d-md-none"> فروشگاه : </span>
                           <span> استاویتا</span>
                       </div>
                       <div className="col-12 col-md-3 d-flex align-items-center py-md-3 justify-content-md-center justify-content-center  ">
                           <button
                               className="col-3 col-md-4 col-xxl-3 m-1 font-14-rem btn btn-primary text-white center ">
                               <Link className="text-decoration-none" to="">مشاهده</Link>
                           </button>
                           <button
                               className="col-3 col-md-4 col-xxl-3 m-1 font-14-rem btn btn-warning text-white center ">
                               <Link className="text-decoration-none" to="/contract-list-edit">ویرایش</Link>
                           </button>
                           <button className="col-3 col-md-4 col-xxl-3   m-1 font-14-rem btn btn-success text-white  ">
                               <Link className="text-decoration-none" to="">کمسیون ها</Link>
                           </button>
                       </div>
                   </div>
                   <div className="col-12 shadow-sm d-flex justify-content-evenly flex-wrap p-1 py-md-2 border-bottom  px-2 my-2 rounded font-16-rem">
                       <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                           <span className="d-block d-md-none"> شماره قرارداد : </span>
                           <span className="text-primary">LNZO-552971119 </span>
                       </div>
                       <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                           <span className="d-block d-md-none"> وضعیت : </span>
                           <span>منتشر شده</span>
                       </div>
                       <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                           <span className="d-block d-md-none"> تاریخ شروع قرارداد : </span>
                           <span className="font-FaNum-Medium">1401/03/23</span>
                       </div>
                       <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                           <span className="d-block d-md-none"> تاریخ پایان قرارداد : </span>
                           <span className="font-FaNum-Medium">1402/03/23</span>
                       </div>
                       <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                           <span className="d-block d-md-none"> فروشگاه : </span>
                           <span> استاویتا</span>
                       </div>
                       <div className="col-12 col-md-3 d-flex align-items-center py-md-3 justify-content-md-center justify-content-center  ">
                           <button
                               className="col-3 col-md-4 col-xxl-3 m-1 font-14-rem btn btn-primary text-white center ">
                               <Link className="text-decoration-none" to="">مشاهده</Link>
                           </button>
                           <button
                               className="col-3 col-md-4 col-xxl-3 m-1 font-14-rem btn btn-warning text-white center ">
                               <Link className="text-decoration-none" to="/contract-list-edit">ویرایش</Link>
                           </button>
                           <button className="col-3 col-md-4 col-xxl-3   m-1 font-14-rem btn btn-success text-white  ">
                               <Link className="text-decoration-none" to="">کمسیون ها</Link>
                           </button>
                       </div>
                   </div>
                   <div className="col-12 shadow-sm d-flex justify-content-evenly flex-wrap p-1 py-md-2 border-bottom  px-2 my-2 rounded font-16-rem">
                       <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                           <span className="d-block d-md-none"> شماره قرارداد : </span>
                           <span className="text-primary">LNZO-552971119 </span>
                       </div>
                       <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                           <span className="d-block d-md-none"> وضعیت : </span>
                           <span>منتشر شده</span>
                       </div>
                       <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                           <span className="d-block d-md-none"> تاریخ شروع قرارداد : </span>
                           <span className="font-FaNum-Medium">1401/03/23</span>
                       </div>
                       <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                           <span className="d-block d-md-none"> تاریخ پایان قرارداد : </span>
                           <span className="font-FaNum-Medium">1402/03/23</span>
                       </div>
                       <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                           <span className="d-block d-md-none"> فروشگاه : </span>
                           <span> استاویتا</span>
                       </div>
                       <div className="col-12 col-md-3 d-flex align-items-center py-md-3 justify-content-md-center justify-content-center  ">
                           <button
                               className="col-3 col-md-4 col-xxl-3 m-1 font-14-rem btn btn-primary text-white center ">
                               <Link className="text-decoration-none" to="">مشاهده</Link>
                           </button>
                           <button
                               className="col-3 col-md-4 col-xxl-3 m-1 font-14-rem btn btn-warning text-white center ">
                               <Link className="text-decoration-none" to="/contract-list-edit">ویرایش</Link>
                           </button>
                           <button className="col-3 col-md-4 col-xxl-3   m-1 font-14-rem btn btn-success text-white  ">
                               <Link className="text-decoration-none" to="">کمسیون ها</Link>
                           </button>
                       </div>
                   </div>

               </div>
           </div>
       </>
    );
}

export default ContractList;