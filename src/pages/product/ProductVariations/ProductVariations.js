import React, { useState} from 'react';
import {Link} from "react-router-dom";


function ProductVariations() {

    const [state , setState ] = useState('0')
    const [salesPrice , setSalesPrice] = useState('0')
    const [salesSpecial , setSalesSpecial] = useState('0')
    const [discount , setDiscount] = useState('0')
    const [inventory , setInventory] = useState('0')
    const [status , setStatus] = useState('')



    return (
        <>
            <div className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between">
                <div className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                    <h4 className="py-3 py-md-2 px-2">
                      تنوع های کالا
                    </h4>
                </div>

                {/*filter*/}
               <div className="col-12 center p-2">
                   <div className="accordion col-12 font-medium font-14 text-submit-black1  rounded-manual"
                        id="accordionPanelsStayOpenExample-product">
                       <div className="accordion-item  my-3 border-none shadow rounded-manual">
                           <h2 className="accordion-header" id="panelsStayOpen-heading-product">
                               <button
                                   className="bg-default collapse col-12 accordion-button rounded-manual d-flex justify-content-md-start justify-content-center py-3 collapsed"
                                   type="button" data-bs-toggle="collapse"
                                   data-bs-target="#panelsStayOpen-collapse-product" aria-expanded="false"
                                   aria-controls="panelsStayOpen-collapse-product"><span className="text-white">درج اطلاعات کالا</span>
                               </button>
                           </h2>
                           <div id="panelsStayOpen-collapse-product" className="accordion-collapse collapse "
                                aria-labelledby="panelsStayOpen-heading-product">
                               <div className="accordion-body row justify-content-center  ">
                                   <div className="col-12 p-2 d-flex  justify-content-between flex-wrap px-3">
                                       <label className="col-md-5 col-12 d-flex flex-wrap p-2">
                                            <span className="d-flex col-12">
                                                نام کالا
                                            <span className="text-danger px-1">*</span>
                                           </span>
                                           <input type="text" disabled name="name-commodity-old" id="name-commodity-old" className="p-2 col-12 my-1 bg-disable" value="test"/>
                                           <input type="text" name="name-commodity-new" id="name-commodity-new" className="p-2 col-12 my-1"/>
                                       </label>
                                       <label className="col-md-5 col-12 d-flex  flex-wrap p-2">
                                            <span className="d-flex col-12">
                                                آدرس کالا
                                            <span className="text-danger px-1">*</span>
                                           </span>
                                           <input type="text" disabled name="address-commodity-old" id="address-commodity-old" className="p-2 col-12 my-1 bg-disable" value="test"/>
                                           <input type="text" name="address-commodity-new" id="address-commodity-new" className="p-2 col-12 my-1"/>
                                       </label>
                                       <label className="col-md-5 col-12 d-flex  flex-wrap p-2">
                                            <span className="d-flex col-12">
                                               نام انگلیسی کالا
                                            <span className="text-danger px-1">*</span>
                                           </span>
                                           <textarea rows="1" disabled name="name-english-old" id="name-english-old" className="p-2 col-12 my-1 bg-disable" value="test"/>
                                           <textarea rows="1" name="name-english-new" id="name-english-new" className="p-2 col-12 my-1"/>
                                       </label>
                                       <label className="col-md-5 col-12 d-flex  flex-wrap p-2">
                                            <span className="d-flex col-12">
                                               شرح مختصر کالا
                                            <span className="text-danger px-1">*</span>
                                           </span>
                                           <textarea rows="1" disabled name="description-commodity-old" id="description-commodity-old" className="p-2 col-12 my-1 bg-disable" value="test"/>
                                           <textarea rows="1" name="description-commodity-new" id="description-commodity-new" className="p-2 col-12 my-1"/>
                                       </label>
                                       <label className=" col-12 d-flex my-4 border p-4 rounded flex-wrap">
                                            <span className="d-flex col-12">
                                               شرح مختصر کالا
                                            <span className="text-danger px-1">*</span>
                                           </span>
                                           <span className="col-12"> </span>
                                       </label>
                                       <label className="col-md-5 col-12 d-flex  flex-wrap p-2">
                                            <span className="d-flex col-12">
                                                کد وزارت بهداشت
                                            <span className="text-danger px-1">*</span>
                                           </span>
                                           <input type="text" disabled name="code-behdasht-old" id="code-behdasht-old" className="p-2 col-12 my-1 bg-disable" value="test"/>
                                           <input type="text" name="code-behdasht-new" id="code-behdasht-new" className="p-2 col-12 my-1"/>
                                       </label>
                                       <label className="col-md-5 col-12 d-flex  flex-wrap p-2">
                                            <span className="d-flex col-12">
                                               شناسه کالا
                                            <span className="text-danger px-1">*</span>
                                           </span>
                                           <input type="text" disabled name="number-old" id="number-old" className="p-2 col-12 my-1 bg-disable" value="test"/>
                                           <input type="text" name="number-new" id="number-new" className="p-2 col-12 my-1"/>
                                       </label>
                                       <label className="col-md-5 col-12 d-flex  flex-wrap p-2">
                                            <span className="d-flex col-12">
                                               برند
                                            <span className="text-danger px-1">*</span>
                                           </span>
                                           <input type="text" disabled name="brand-old" id="brand-old" className="p-2 col-12 my-1 bg-disable" value="test"/>
                                           <input type="text" name="brand-new" id="brand-new" className="p-2 col-12 my-1"/>
                                       </label>
                                       <div className="col-md-5 col-12 d-flex  flex-wrap p-2">
                                           <label className="col-12 d-flex align-items-center py-1 text-secondary">
                                               <input type="checkbox" disabled name="return-false" id="return-false"/>
                                               <span className="px-2">قابل برگشت نباشد</span>
                                           </label>
                                           <label className="col-12">
                                               <input type="checkbox" name="return-true" id="return-true"/>
                                               <span className="px-2"> قابل برگشت باشد</span>
                                           </label>
                                           <label className="col-12">
                                               <input type="checkbox" name="active-true" id="active-true"/>
                                               <span className="px-2"> فعال باشد</span>
                                           </label>
                                           <label className="col-12">
                                               <input type="checkbox" name="active-false" id="return-false"/>
                                               <span className="px-2"> فعال نباشد</span>
                                           </label>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>

               </div>
                {/*details*/}
                <section className="col-12 d-flex flex-wrap p-3">
                    {/*name*/}
                    <div className="col-12 d-none d-md-flex border-bottom  flex-wrap rounded p-2 font-FaNum-Medium">
                        <h5 className="d-flex col-12">
                            کالا :
                            فوم شستشوی صورت اقایان ژوت حجم 150 میلی لیتر
                        </h5>
                        <h5 className="d-flex col-12">
                            تعداد :
                            ( 1 )
                        </h5>

                    </div>
                    <div className="col-12 border-bottom d-md-none rounded p-2 font-FaNum-Medium">
                        <h6>
                            کالا :
                            فوم شستشوی صورت اقایان ژوت حجم 150 میلی لیتر
                        </h6>
                        <h6>
                            تعداد :
                            ( 1 )
                        </h6>

                    </div>
                    {/*title*/}
                    <div className="col-12 py-2 rounded d-none d-md-flex justify-content-between align-items-center border-bottom ">
                        <div className="col-1 d-flex justify-content-center py-2 rounded-pill">فروشنده</div>
                        <div className="col-2 d-flex justify-content-center py-2 rounded-pill">تنوع</div>
                        <div className="col-1 d-flex justify-content-center py-2 rounded-pill">قیمت فروش </div>
                        <div className="col-1 d-flex justify-content-center py-2 rounded-pill">قیمت فروش ویژه </div>
                        <div className="col-1 d-flex justify-content-center py-2 rounded-pill">تخفیف</div>
                        <div className="col-1 d-flex justify-content-center py-2 rounded-pill">موجودی فروشنده</div>
                        <div className="col-1 d-flex justify-content-center py-2 rounded-pill">موجودی انبار الانزا</div>
                        <div className="col-1 d-flex justify-content-center py-2 rounded-pill">وضعیت </div>
                        <div className="col-1 d-flex justify-content-center py-2 rounded-pill"> فعال / غیرفعال</div>
                        <div className="col-1 d-flex justify-content-center py-2 rounded-pill"> شناسه</div>
                    </div>
                    <div className="col-12  d-flex flex-wrap justify-content-between p-2 rounded  font-14 ">
                    {/*list*/}
                      <div className="col-12 d-flex shadow-sm border-top border-bottom  rounded align-content-center my-2 flex-wrap">
                          <div className="col-12 align-content-center d-flex flex-wrap p-1 py-2 py-md-3 justify-content-between rounded font-16-rem">
                              <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-start flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                                  <span className="d-block d-md-none"> فروشنده : </span>
                                  <span>الانزا</span>
                              </div>
                              <div className="col-12 px-2 py-2 py-md-0 col-md-2 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                                  <span className="d-block d-md-none"> تنوع : </span>
                                  <span>[150ml , ...]</span>
                              </div>
                              <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                                  <span className="d-block d-md-none"> قیمت فروش : </span>
                                  {
                                      state === 'edited' ?(
                                             <input className='p-1 mx-1 col-12' value={salesPrice} onInput={e=> {setSalesPrice(e.target.value)}}/>
                                          ) :
                                          (
                                              <span>{salesPrice}</span>
                                          )
                                  }
                              </div>
                              <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                                  <span className="d-block d-md-none"> قیمت فروش ویژه  : </span>
                                  {
                                      state === 'edited' ?(
                                              <input className='p-1 mx-1 col-12' value={salesSpecial} onInput={e=> {setSalesSpecial(e.target.value)}}/>
                                          ) :
                                          (
                                              <span>{salesSpecial}</span>
                                          )
                                  }
                              </div>
                              <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                                  <span className="d-block d-md-none"> موجودی فروشنده : </span>
                                  {
                                      state === 'edited' ?(
                                              <input className='p-1 mx-1 col-12' value={discount} onInput={e=> {setDiscount(e.target.value)}}/>
                                          ) :
                                          (
                                              <span>{discount}</span>
                                          )
                                  }
                              </div>
                              <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                                  <span className="d-block d-md-none"> موجودی فروشنده : </span>
                                  {
                                      state === 'edited' ?(
                                              <input className='p-1 mx-1 col-12 overflow-auto' value={inventory} onInput={e=> {setInventory(e.target.value)}}/>
                                          ) :
                                          (
                                              <span>{inventory}</span>
                                          )
                                  }
                              </div>
                              <div className="col-12 px-2 py-2 py-md-1 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                                  <span className="d-block d-md-none"> موجودی انبار الانزا  : </span>
                                  <span>0</span>
                              </div>
                              <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                                  <span className="d-block d-md-none">وضعیت  : </span>
                                  {
                                      state === 'edited' ?(
                                                <select className='col-12 border rounded' onChange={e=>{setStatus(e.target.value)}}>
                                                    <option >انتخاب کنید</option>
                                                    <option value="موجود">موجود</option>
                                                    <option value="ناموجود">نا موجود</option>
                                                </select>

                                          ) :
                                          (
                                              <span className=" alert-success p-1">{status}</span>
                                          )
                                  }
                              </div>
                              <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                                  <span className="d-block d-md-none">فعال / غیرفعال  : </span>
                                  <span>فعال</span>
                              </div>
                              <div className="col-12 px-2 py-2 py-md-0 col-md-1 d-flex  align-items-center flex-wrap justify-content-md-center justify-content-between font-FaNum-Medium">
                                  <span className="d-block d-md-none">شناسه  : </span>
                                  <span>25247</span>
                              </div>
                          </div>
                          {/*عملیات*/}
                         <div className="col-12 px-4 py-1 d-flex justify-content-md-end justify-content-center align-items-center ">
                             <div className="col-md-4 d-flex align-items-center justify-content-md-end justify-content-center  ">
                                 {
                                   state === 'edited' ?(
                                           <button
                                                   className=" col-3 text-nowrap py-2 col-md-3 me-1 font-14-rem btn bg-success text-white center " onClick={e=> {setState('done-edit')}}>
                                               <span className="text-decoration-none" >ذخیره</span>
                                           </button>
                                       ) :
                                       (
                                           <button
                                               className="col-3 text-nowrap py-2 col-md-3 me-1 font-14-rem btn bg-secondary text-white center " onClick={e=> {setState('edited')}}>
                                               <span className="text-decoration-none" >ویرایش سریع </span>
                                           </button>
                                       )
                                 }
                                 <button
                                     className="col-2 py-2 col-md-3 col-xxl-2 me-1 font-14-rem btn bg-warning text-white center ">
                                     <Link className="text-decoration-none" to="/product-variations-edit">ویرایش</Link>
                                 </button>
                                 <button
                                     className="col-2 col-md-3 py-2 col-xxl-2 me-1 font-14-rem btn bg-danger  text-white center ">
                                     <span className="text-decoration-none" >حذف </span>
                                 </button>
                                 <button
                                     className="col-md-3  py-2 me-1 font-14-rem btn bg-info  text-white center text-nowrap">
                                     <Link className="text-decoration-none" to="/see-variations" >مشاهده تنوع ها ( 0 ) </Link>
                                 </button>
                             </div>
                         </div>
                      </div>
                    </div>
                </section>

            </div>

        </>
    );
}

export default ProductVariations;