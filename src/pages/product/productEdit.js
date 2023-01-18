import React, {useState} from 'react';
import Select from "react-select";
import TinyEditor from "../../components/tinyEditor/tinyEditor";



function ProductEdit() {

    const options = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'},
    ];
    const [selectedOption, setSelectedOption] = useState('');

    return (
       <>
           <div  className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between">
               <div className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                   <h4 className="py-3 py-md-2 px-2">
                     ویرایش کالا
                   </h4>
               </div>
               <div className="col-12 p-2">

                   <div className="col-12 p-2 d-flex flex-wrap">

                       <div className="col-12 border rounded d-flex flex-wrap  ">
                         <div className="col-12 d-flex mt-2 p-2 justify-content-center justify-content-md-start">
                             <h5 className="d-inline border-bottom rounded-pill mb-2 px-3 pb-2 " >انتخاب گروه کالا</h5>
                         </div>
                               <div className="col-12 col-12 d-flex flex-wrap justify-content-start p-2">
                                   <span className="py-2 d-flex col-12"> دسته بندی کالا <i className="text-danger px-1">*</i></span>
                                  <div className="col-md-6 col-12">
                                      <Select
                                          isMulti
                                          placeholder={'جستجو کنید'}
                                          defaultValue={selectedOption}
                                          onChange={setSelectedOption}
                                          options={options}
                                      />
                                  </div>
                                  <div className="col-md-3 col-12 pt-2 pt-md-0 d-flex justify-content-start px-md-2 align-items-center ">
                                      <span className="alert alert-warning py-2">کمیسیون فروش این کالا 2% است.</span>
                                  </div>
                               </div>
                       </div>
                   </div>

                   <div className="accordion col-12 font-medium font-14 text-submit-black1  rounded-manual"
                        id="accordionPanelsStayOpenExample">
                       <div className="accordion-item  my-3 border-none shadow rounded-manual">
                           <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                               <button
                                   className="bg-default  col-12 accordion-button rounded-manual d-flex justify-content-md-start justify-content-center  py-3 "
                                   type="button" data-bs-toggle="collapse"
                                   data-bs-target="#panelsStayOpen-collapseTwo"
                                   aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
                                   <span className="text-white">درج اطلاعات کالا</span>
                               </button>
                           </h2>
                           <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show"
                                aria-labelledby="panelsStayOpen-headingTwo">
                               <div className="accordion-body row justify-content-center">
                                    <div className="col-12 p-2 d-flex justify-content-between flex-wrap px-3">
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
                                           <span className="col-12">  <TinyEditor /></span>
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
                   <div className="accordion col-12 font-medium font-14 text-submit-black1  rounded-manual"
                        id="accordionPanelsStayOpenExample">
                       <div className="accordion-item  my-3 border-none shadow rounded-manual">
                           <h2 className="accordion-header" id="panelsStayOpen-heading-property">
                               <button
                                   className="bg-default  col-12 accordion-button rounded-manual d-flex justify-content-md-start justify-content-center collapsed py-3 "
                                   type="button" data-bs-toggle="collapse"
                                   data-bs-target="#panelsStayOpen-collapse-property"
                                   aria-expanded="false" aria-controls="panelsStayOpen-collapse-property">
                                   <span className="text-white">درج ویژگی کالا</span>
                               </button>
                           </h2>
                           <div id="panelsStayOpen-collapse-property" className="accordion-collapse collapse "
                                aria-labelledby="panelsStayOpen-heading-property">
                               <div className="accordion-body row justify-content-center">
                                   <div className="col-12 p-2 d-flex justify-content-between flex-wrap px-3">
                                       <label className="col-md-5 col-12 d-flex flex-wrap p-2">
                                            <span className="d-flex my-2 col-12">
                                                نوع
                                           </span>
                                           <input type="text" disabled name="name-commodity-old" id="name-commodity-old" className="p-2 col-12 my-1 bg-disable" value="test"/>
                                           <input type="text" name="name-commodity-new" id="name-commodity-new" className="p-2 col-12 my-1"/>
                                       </label>
                                       <div className="col-md-5 col-12 d-flex flex-wrap p-2">
                                            <span className="d-flex col-12">
                                              مناسب برای پوست های
                                           </span>
                                          <div className="col-12 ">
                                              <Select
                                                  isMulti
                                                  placeholder={'سرچ کنید'}
                                                  defaultValue={selectedOption}
                                                  onChange={setSelectedOption}
                                                  options={options}
                                              />
                                          </div>
                                       </div>
                                       <div className="col-md-5 col-12 d-flex  flex-wrap p-2">
                                            <span className="d-flex col-12">
                                             رایحه و عصاره
                                           </span>
                                           <div className="col-12 my-2">
                                               <Select
                                                   isMulti
                                                   placeholder={'سرچ کنید'}
                                                   defaultValue={selectedOption}
                                                   onChange={setSelectedOption}
                                                   options={options}
                                               />
                                           </div>
                                       </div>

                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="accordion col-12 font-medium font-14 text-submit-black1  rounded-manual"
                        id="accordionPanelsStayOpenExample">
                       <div className="accordion-item  my-3 border-none shadow rounded-manual">
                           <h2 className="accordion-header" id="panelsStayOpen-heading-Ordering">
                               <button
                                   className="bg-default  col-12 accordion-button rounded-manual d-flex justify-content-md-start justify-content-center collapsed py-3 "
                                   type="button" data-bs-toggle="collapse"
                                   data-bs-target="#panelsStayOpen-collapse-Ordering"
                                   aria-expanded="false" aria-controls="panelsStayOpen-collapse-Ordering">
                                   <span className="text-white">مرتب سازی</span>
                               </button>
                           </h2>
                           <div id="panelsStayOpen-collapse-Ordering" className="accordion-collapse collapse "
                                aria-labelledby="panelsStayOpen-heading-Ordering">
                               <div className="accordion-body row justify-content-center">
                                   <div className="col-12 p-2 d-flex justify-content-between flex-wrap px-3">
                                       <label className="col-md-5 col-12 d-flex flex-wrap p-2">
                                            <span className="d-flex my-2 col-12">
                                               تعداد فروش
                                           </span>
                                           <input type="text" name="sales-number" id="sales-number" className="p-2 col-12 my-1"/>
                                       </label>
                                       <label className="col-md-5 col-12 d-flex flex-wrap p-2">
                                            <span className="d-flex my-2 col-12">
                                                تعداد بازدید
                                           </span>
                                           <input type="text" name="view-number" id="view-number" className="p-2 col-12 my-1"/>
                                       </label>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="accordion col-12 font-medium font-14 text-submit-black1  rounded-manual"
                        id="accordionPanelsStayOpenExample">
                       <div className="accordion-item  my-3 border-none shadow rounded-manual">
                           <h2 className="accordion-header" id="panelsStayOpen-heading-img">
                               <button
                                   className="bg-default  col-12 accordion-button rounded-manual d-flex justify-content-md-start justify-content-center collapsed py-3 "
                                   type="button" data-bs-toggle="collapse"
                                   data-bs-target="#panelsStayOpen-collapse-img"
                                   aria-expanded="false" aria-controls="panelsStayOpen-collapse-img">
                                   <span className="text-white">بارگزاری تصویر کالا</span>
                               </button>
                           </h2>
                           <div id="panelsStayOpen-collapse-img" className="accordion-collapse collapse "
                                aria-labelledby="panelsStayOpen-heading-img">
                               <div className="accordion-body row justify-content-center">
                                   <div className="col-12 p-2 d-flex justify-content-between flex-wrap px-3">
                                       <label className="col-12 col-md-6 d-flex flex-wrap p-2">
                                            <span className="d-flex flex-wrap mt-2 col-12 ">
                                               <h5 className="col-12 d-flex mb-2"> انتخاب تصویر</h5>
                                                <span className='px-1 text-danger font-FaNum-Medium mt-2 alert alert-danger p-2'>    عکس باید از 1000 کیلوبایت کوچک تر ، دارای ابعاد بالاتر از 1000x1000 پیکسل ، مربعی و دارای فرمت معتبر باشد </span>
                                           </span>
                                           <input className="col-md-2 col-12 p-2 mt-3 position-relative border-0 icon" type="file"
                                                  name="Img-national-card" id="get-logo"/>
                                           <span className="d-flex mt-3 col-12">
                                                + افزودن تصویر جدید
                                           </span>
                                       </label>
                                       <div className="col-12 col-md-6 center">
                                           <figure className="col-md-3 col-5 center border p-2 rounded shadow-sm">
                                               <img src="https://www.freeiconspng.com/uploads/upload-icon-30.png" alt="img" className="img-fluid col-10"/>
                                           </figure>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>

                   <div className="col-12 d-flex justify-content-around flex-wrap">
                       {/*seo*/}
                       <div className="accordion2 col-12 col-md-5 font-medium text-submit-black1  " id="accordionPanelsStayOpenExample">
                           <div className="accordion-item  my-3 border-none shadow rounded-manual">
                               <h2 className="accordion-header" id="panelsStayOpen-heading-seo">
                                   <button
                                       className="bg-warning font-16-rem text-white col-12 accordion-button rounded-manual d-flex justify-content-evenly collapsed p-3 "
                                       type="button" data-bs-toggle="collapse"
                                       data-bs-target="#panelsStayOpen-collapse-seo"
                                       aria-expanded="false" aria-controls="panelsStayOpen-collapse-seo">
                                       تنظیمات SEO
                                   </button>
                               </h2>
                               <div    id="panelsStayOpen-collapse-seo" className="accordion-collapse collapse p-3" aria-labelledby="panelsStayOpen-heading-seo">
                                   <div dir="ltr" className="accordion-body">
                                       <label className="col-12  mx-1  py-2 font-14" htmlFor="meta-title">
                                           Meta Title
                                           <span className="text-danger mx-1">*</span>
                                           <input className="col-12 mt-2 p-1 center  " name="meta-title" id="meta-title"/>
                                       </label>
                                       <label className="col-12  mx-1  py-2 font-14" htmlFor="meta-description">
                                           Meta Description
                                           <span className="text-danger mx-1">*</span>
                                           <input className="col-12 mt-2 p-1 center  " name="meta-description" id="meta-description"/>
                                       </label>
                                       <label className="col-12  mx-1  py-2 font-14" htmlFor="meta-canonical">
                                           Meta Canonical
                                           <span className="text-danger mx-1">*</span>
                                           <input className="col-12 mt-2 p-1 center  " name="meta-canonical" id="meta-canonical"/>
                                       </label>
                                       <label className="col-12  mx-1  py-2 font-14" htmlFor="meta-summary">
                                           Meta Summary
                                           <span className="text-danger mx-1">*</span>
                                           <input className="col-12 mt-2 p-1 center  " name="meta-summary" id="meta-summary"/>
                                       </label>
                                       <label className="col-12  mx-1  py-2 font-14" htmlFor="meta-robots">
                                           Meta Robots
                                           <span className="text-danger mx-1">*</span>
                                           <select  className="col-12 mt-2 p-1 center border rounded " name="meta-robots" id="meta-robots">
                                               <option value="noindex">noindex</option>
                                               <option value="nofollow">nofollow</option>
                                           </select>
                                       </label>
                                   </div>
                               </div>
                           </div>
                       </div>
                       {/*active*/}
                       <div className="accordion1 col-12 col-md-5 font-medium text-submit-black1  " id="accordionPanelsStayOpenExample1">
                           <div className="accordion-item my-3 border-none shadow rounded-manual">
                               <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                   <button
                                       className="bg-warning font-16-rem text-white col-12 accordion-button rounded-manual d-flex justify-content-evenly collapsed p-3"
                                       type="button" data-bs-toggle="collapse"
                                       data-bs-target="#panelsStayOpen-collapseOne"
                                       aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                                      <span >انتخاب تگ ها</span>
                                   </button>
                               </h2>
                               <div    id="panelsStayOpen-collapseOne" className="accordion-collapse collapse p-3 " aria-labelledby="panelsStayOpen-headingOne">
                                   <div className="accordion-body">
                                       <label className="col-12   mx-1  py-2 font-14" htmlFor="unit">
                                           تعداد روز ارسال
                                           <span className="text-danger mx-1">*</span>
                                           <input className="col-12 mt-2 p-1 center  " name="unit" id="unit"/>
                                       </label>
                                       <label className="col-12  mx-1  py-2 font-14" htmlFor="unit">
                                           دوره تسویه حساب (روز)
                                           <span className="text-danger mx-1">*</span>
                                           <input className="col-12 mt-2 p-1 center  " name="unit" id="unit"/>
                                       </label>
                                       <div className="col-12 d-flex flex-wrap justify-content-between">
                                           <div className="col-7 d-flex  flex-wrap  justify-content-between mx-1  py-2 font-14">
                                               <label className="col-12 col-md-7 d-flex my-2 justify-content-start align-content-center">
                                                   <input className="ms-2" type="checkbox" name="shipping-cost" id="shipping-cost"/>
                                                   هزینه ارسال
                                                   <span className="text-danger mx-1">*</span>
                                               </label>
                                               <label className="col-7 d-flex my-2 justify-content-start align-content-center">
                                                   <input className="ms-2" type="checkbox" name="crimes" id="crimes"/>
                                                   جرایم
                                                   <span className="text-danger mx-1">*</span>
                                               </label>
                                           </div>
                                           <div className="col-12 col-md-3 d-flex justify-content-center align-items-center">
                                               <button className="btn btn-warning col-10 text-bg-warning font-16-rem p-2 d-flex justify-content-center align-content-center rounded-pill">
                                                   دانلود قرار داد
                                                   <i className="icon icon-Download2 font-20 me-2"></i>
                                               </button>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="col-12 d-flex flex-wrap justify-content-between bg-secondary bg-opacity-10 rounded">
                       <div className="col-12 col-md-4  bg-opacity-25 p-3 rounded-pill d-flex justify-content-evenly align-content-center flex-wrap">
                           <button className="col-11 col-md-3 my-1  btn btn-light text-white bg-default border-0 font-16-rem center">
                               ذخیره
                           </button>
                           <button className="col-11 col-md-3 my-1  btn btn-light text-white bg-default border-0 font-16-rem center">

                               ذخیره و بستن
                           </button>
                           <button className="col-11 col-md-3 my-1  btn btn-light text-white bg-default border-0 font-16-rem center">

                               ذخیره و جدید
                           </button>
                       </div>
                       <div className="col-12 col-md-4  bg-opacity-25 p-3 rounded-pill d-flex justify-content-evenly align-content-center flex-wrap ">
                           <button className="col-11 col-md-3 my-1  btn btn-light text-white bg-success border-0 font-16-rem center">

                               ذخیره و تایید
                           </button>
                           <button className="col-11 col-md-4 my-1  btn btn-light text-white bg-danger border-0 font-16-rem center">
                              لغو درخواست تایید
                           </button>
                       </div>
                   </div>

               </div>
           </div>
       </>
    );
}

export default ProductEdit;