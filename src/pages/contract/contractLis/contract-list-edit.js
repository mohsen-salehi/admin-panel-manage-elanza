import React from 'react';

function ContractListEdit() {

    const text = (
        `
          {{name}}
          {{name}}
          {{seller}} 
          {{seller}} 
          {{seller}}
          {{seller}}
          {{name}} 
          {{name}} 
          {{name}} 
          {{name}} 
          {{name}} 
          {{name}} 
        `
    )

    return (
        <>
            <div className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between">
                <div className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                    <h4 className="py-3 py-md-2 px-2">
                       ویرایش قرار داد
                    </h4>
                </div>
                <div className="col-12 row p-0 m-auto  ">
                    <div className="accordion col-12 font-medium text-submit-black1" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item  my-3 border-none shadow rounded-manual">
                            <h2 className="accordion-header" id="panelsStayOpen-edit-list">
                                <button
                                    className="bg-default col-12 accordion-button rounded-manual d-flex justify-content-start pe-3"
                                    type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapse-edit-list"
                                    aria-expanded="true" aria-controls="panelsStayOpen-collapse-edit-list">
                                    <div className="text-light">
                                        <span> اطاعات قرارداد </span>
                                        <code className="text-light font-FaNum-Medium">LNZSC-4565431346</code>
                                    </div>
                                </button>
                            </h2>
                            <div  id="panelsStayOpen-collapse-edit-list" className="accordion-collapse collapse show " aria-labelledby="panelsStayOpen-edit-list">
                                <div className="accordion-body row justify-content-center">
                                    <div className="col-12 bg-dark bg-opacity-10 p-2 rounded row justify-content-center ">
                                        <div className="col-12  row justify-content-center align-content-between  justify-content-md-between">
                                            <div className="col-12 col-md-9  bg-light rounded border">
                                                <Ckeditor />
                                            </div>
                                            <div className="col-12 row col-md-2 p-1 border bg-white rounded">
                                                <div className="col-12 rounded p-1 bg-secondary bg-opacity-10">
                                                  <pre>
                                                    {text}
                                                  </pre>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-2 p-3 bg-dark bg-opacity-10 rounded row ">
                                           <div className="col-md-6 px-3 py-2 rounded row justify-content-md-center">
                                               <p className="col-12 text-center">تاریخ شروع قرار داد</p>
                                               <label htmlFor="start-year" className="col-md-7 m-2">
                                                   سال
                                                   <select name="start-year" id="start-year" className="col-12 border rounded p-1 my-1">
                                                       <option value="انتخاب کنید" selected disabled>انتخاب کنید</option>
                                                       <option dir="ltr" value="1401">1401</option>
                                                       <option dir="ltr" value="1401">1401</option>
                                                       <option dir="ltr" value="1401">1401</option>
                                                   </select>
                                               </label>
                                               <label htmlFor="start-month" className="col-md-7 m-2" >
                                                   ماه
                                                   <select name="start-month" id="start-year" className="col-12 border rounded p-1 my-1">
                                                       <option value="انتخاب کنید" selected disabled>انتخاب کنید</option>
                                                       <option dir="ltr" value="1">1</option>
                                                       <option dir="ltr" value="2">2</option>
                                                       <option dir="ltr" value="3">3</option>
                                                       <option dir="ltr" value="4">4</option>
                                                       <option dir="ltr" value="5">5</option>
                                                       <option dir="ltr" value="6">6</option>
                                                       <option dir="ltr" value="7">7</option>
                                                       <option dir="ltr" value="8">8</option>
                                                       <option dir="ltr" value="9">9</option>
                                                       <option dir="ltr" value="10">10</option>
                                                       <option dir="ltr" value="11">11</option>
                                                       <option dir="ltr" value="12">12</option>
                                                   </select>
                                               </label>
                                               <label htmlFor="start-day" className="col-md-7 m-2" >
                                                   روز
                                                   <select name="start-day" id="start-year" className="col-12 border rounded p-1 my-1">
                                                       <option value="انتخاب کنید" selected disabled>انتخاب کنید</option>
                                                       <option dir="ltr" value="1">1</option>
                                                       <option dir="ltr" value="2">2</option>
                                                       <option dir="ltr" value="3">3</option>
                                                       <option dir="ltr" value="4">4</option>
                                                       <option dir="ltr" value="5">5</option>
                                                       <option dir="ltr" value="6">6</option>
                                                       <option dir="ltr" value="7">7</option>
                                                       <option dir="ltr" value="8">8</option>
                                                       <option dir="ltr" value="9">9</option>
                                                       <option dir="ltr" value="10">10</option>
                                                       <option dir="ltr" value="11">11</option>
                                                       <option dir="ltr" value="12">12</option>
                                                       <option dir="ltr" value="13">13</option>
                                                       <option dir="ltr" value="14">14</option>
                                                       <option dir="ltr" value="15">15</option>
                                                       <option dir="ltr" value="16">16</option>
                                                       <option dir="ltr" value="17">17</option>
                                                       <option dir="ltr" value="18">18</option>
                                                       <option dir="ltr" value="19">19</option>
                                                       <option dir="ltr" value="20">20</option>
                                                       <option dir="ltr" value="21">21</option>
                                                       <option dir="ltr" value="22">22</option>
                                                       <option dir="ltr" value="23">23</option>
                                                       <option dir="ltr" value="24">24</option>
                                                       <option dir="ltr" value="25">25</option>
                                                       <option dir="ltr" value="26">26</option>
                                                       <option dir="ltr" value="27">27</option>
                                                       <option dir="ltr" value="28">28</option>
                                                       <option dir="ltr" value="29">29</option>
                                                       <option dir="ltr" value="30">30</option>
                                                       <option dir="ltr" value="31">31</option>
                                                   </select>
                                               </label>
                                           </div>
                                        <div className="col-md-6 px-3 py-2 rounded row  justify-content-md-center">
                                            <p className="col-12 text-center">تاریخ پایان قرار داد</p>
                                            <label htmlFor="end-year" className="col-md-7 m-2">
                                                سال
                                                <select name="end-year" id="end-year" className="col-12 border rounded p-1 my-1">
                                                    <option value="انتخاب کنید" selected disabled>انتخاب کنید</option>
                                                    <option dir="ltr" value="1401">1401</option>
                                                    <option dir="ltr" value="1401">1401</option>
                                                    <option dir="ltr" value="1401">1401</option>
                                                </select>
                                            </label>
                                            <label htmlFor="end-month" className="col-md-7 m-2" >
                                                ماه
                                                <select name="end-month" id="end-year" className="col-12 border rounded p-1 my-1">
                                                    <option value="انتخاب کنید" selected disabled>انتخاب کنید</option>
                                                    <option dir="ltr" value="1">1</option>
                                                    <option dir="ltr" value="2">2</option>
                                                    <option dir="ltr" value="3">3</option>
                                                    <option dir="ltr" value="4">4</option>
                                                    <option dir="ltr" value="5">5</option>
                                                    <option dir="ltr" value="6">6</option>
                                                    <option dir="ltr" value="7">7</option>
                                                    <option dir="ltr" value="8">8</option>
                                                    <option dir="ltr" value="9">9</option>
                                                    <option dir="ltr" value="10">10</option>
                                                    <option dir="ltr" value="11">11</option>
                                                    <option dir="ltr" value="12">12</option>
                                                </select>
                                            </label>
                                            <label htmlFor="end-day" className="col-md-7 m-2" >
                                                روز
                                                <select name="end-day" id="end-day" className="col-12 border rounded p-1 my-1">
                                                    <option value="انتخاب کنید" selected disabled>انتخاب کنید</option>
                                                    <option dir="ltr" value="1">1</option>
                                                    <option dir="ltr" value="2">2</option>
                                                    <option dir="ltr" value="3">3</option>
                                                    <option dir="ltr" value="4">4</option>
                                                    <option dir="ltr" value="5">5</option>
                                                    <option dir="ltr" value="6">6</option>
                                                    <option dir="ltr" value="7">7</option>
                                                    <option dir="ltr" value="8">8</option>
                                                    <option dir="ltr" value="9">9</option>
                                                    <option dir="ltr" value="10">10</option>
                                                    <option dir="ltr" value="11">11</option>
                                                    <option dir="ltr" value="12">12</option>
                                                    <option dir="ltr" value="13">13</option>
                                                    <option dir="ltr" value="14">14</option>
                                                    <option dir="ltr" value="15">15</option>
                                                    <option dir="ltr" value="16">16</option>
                                                    <option dir="ltr" value="17">17</option>
                                                    <option dir="ltr" value="18">18</option>
                                                    <option dir="ltr" value="19">19</option>
                                                    <option dir="ltr" value="20">20</option>
                                                    <option dir="ltr" value="21">21</option>
                                                    <option dir="ltr" value="22">22</option>
                                                    <option dir="ltr" value="23">23</option>
                                                    <option dir="ltr" value="24">24</option>
                                                    <option dir="ltr" value="25">25</option>
                                                    <option dir="ltr" value="26">26</option>
                                                    <option dir="ltr" value="27">27</option>
                                                    <option dir="ltr" value="28">28</option>
                                                    <option dir="ltr" value="29">29</option>
                                                    <option dir="ltr" value="30">30</option>
                                                    <option dir="ltr" value="31">31</option>
                                                </select>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-2 p-3 bg-dark bg-opacity-10 rounded row ">
                                        <div className="col-md-6 px-3 py-2 rounded row justify-content-center">
                                            <label  className="col-md-7 m-2">
                                                فروشگاه
                                                <span className="text-danger p-1">*</span>
                                                <select name="store" id="store" className="col-12 border rounded p-1 my-1">
                                                    <option value="انتخاب کنید" selected disabled>انتخاب کنید</option>

                                                </select>
                                            </label>
                                        </div>
                                        <div className="col-md-6 px-3 py-2 rounded row justify-content-center">
                                            <label  className="col-md-7 m-2">
                                                وضعیت
                                                <span className="text-danger p-1">*</span>
                                                <select name="start-year" id="status" className="col-12 border rounded p-1 my-1">
                                                    <option value="انتخاب کنید" selected disabled>انتخاب کنید</option>
                                                </select>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="accordion col-12 font-medium text-submit-black1" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item  my-3 border-none shadow rounded-manual">
                            <h2 className="accordion-header" id="panelsStayOpenException">
                                <button
                                    className="bg-default  col-12 accordion-button rounded-manual d-flex justify-content-start pe-3 collapsed"
                                    type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseException"
                                    aria-expanded="false" aria-controls="panelsStayOpenException">
                                    <div className="text-light">
                                        <span> استثنائات قرارداد </span>
                                    </div>
                                </button>
                            </h2>
                            <div  id="panelsStayOpen-collapseException" className="accordion-collapse collapse " aria-labelledby="panelsStayOpenException">
                                <div className="accordion-body row justify-content-center  px-md-5">
                                  <div className="col-12 row justify-content-between font-FaNum-Medium">
                                      <label className="col-md-5 p-2 ">
                                          تعداد روز ارسال
                                          <span className="text-danger px-1">*</span>
                                          <select name="send-day-count" id="send-day-count" className='col-12  border rounded p-1 my-1 '>
                                              <option value="اتخاب کنید">انتخاب کنید</option>
                                              <option dir="ltr" value="1">1</option>
                                              <option dir="ltr" value="2">2</option>
                                              <option dir="ltr" value="3">3</option>
                                              <option dir="ltr" value="4">4</option>
                                              <option dir="ltr" value="5">5</option>
                                              <option dir="ltr" value="6">6</option>
                                              <option dir="ltr" value="7">7</option>
                                              <option dir="ltr" value="8">8</option>
                                              <option dir="ltr" value="9">9</option>
                                              <option dir="ltr" value="10">10</option>
                                              <option dir="ltr" value="11">11</option>
                                              <option dir="ltr" value="12">12</option>
                                              <option dir="ltr" value="13">13</option>
                                              <option dir="ltr" value="14">14</option>
                                              <option dir="ltr" value="15">15</option>
                                              <option dir="ltr" value="16">16</option>
                                              <option dir="ltr" value="17">17</option>
                                              <option dir="ltr" value="18">18</option>
                                              <option dir="ltr" value="19">19</option>
                                              <option dir="ltr" value="20">20</option>
                                              <option dir="ltr" value="21">21</option>
                                              <option dir="ltr" value="22">22</option>
                                              <option dir="ltr" value="23">23</option>
                                              <option dir="ltr" value="24">24</option>
                                              <option dir="ltr" value="25">25</option>
                                              <option dir="ltr" value="26">26</option>
                                              <option dir="ltr" value="27">27</option>
                                              <option dir="ltr" value="28">28</option>
                                              <option dir="ltr" value="29">29</option>
                                              <option dir="ltr" value="30">30</option>
                                              <option dir="ltr" value="31">31</option>
                                          </select>
                                      </label>
                                      <label className="col-md-5 p-2 ">
                                          تعداد روز لغو سفارش
                                          <span className="text-danger px-1">*</span>
                                          <select name="failed-day-count" id="failed-day-count" className='col-12 border rounded p-1 my-1 '>
                                              <option value="اتخاب کنید">انتخاب کنید</option>
                                              <option dir="ltr" value="1">1</option>
                                              <option dir="ltr" value="2">2</option>
                                              <option dir="ltr" value="3">3</option>
                                              <option dir="ltr" value="4">4</option>
                                              <option dir="ltr" value="5">5</option>
                                              <option dir="ltr" value="6">6</option>
                                              <option dir="ltr" value="7">7</option>
                                              <option dir="ltr" value="8">8</option>
                                              <option dir="ltr" value="9">9</option>
                                              <option dir="ltr" value="10">10</option>
                                              <option dir="ltr" value="11">11</option>
                                              <option dir="ltr" value="12">12</option>
                                              <option dir="ltr" value="13">13</option>
                                              <option dir="ltr" value="14">14</option>
                                              <option dir="ltr" value="15">15</option>
                                              <option dir="ltr" value="16">16</option>
                                              <option dir="ltr" value="17">17</option>
                                              <option dir="ltr" value="18">18</option>
                                              <option dir="ltr" value="19">19</option>
                                              <option dir="ltr" value="20">20</option>
                                              <option dir="ltr" value="21">21</option>
                                              <option dir="ltr" value="22">22</option>
                                              <option dir="ltr" value="23">23</option>
                                              <option dir="ltr" value="24">24</option>
                                              <option dir="ltr" value="25">25</option>
                                              <option dir="ltr" value="26">26</option>
                                              <option dir="ltr" value="27">27</option>
                                              <option dir="ltr" value="28">28</option>
                                              <option dir="ltr" value="29">29</option>
                                              <option dir="ltr" value="30">30</option>
                                              <option dir="ltr" value="31">31</option>
                                          </select>
                                      </label>
                                  </div>
                                    <div className="col-12 row border-top rounded p-3 font-FaNum-Medium">
                                        <span className="col-md-3 d-flex alert alert-danger py-2">
                                            لطفا همه مبالغ به ریال وارد شود.
                                        </span>
                                        <div className="col-12 d-flex flex-wrap justify-content-md-between justify-content-center align-items-center ">
                                            <label className="col-12 col-md-4  px-md-4 ">
                                                هزینه ارسال (کمتر از حد واسط)
                                                <span className="text-danger px-1">*</span>
                                                <input type="text" name="cost-min" id="cost-min" className="col-12 p-1 my-1"/>
                                            </label>
                                            <label className="col-12 col-md-4  px-md-4">
                                                حد واسط هزینه ارسال
                                                <span className="text-danger px-1">*</span>
                                                <input type="text" name="cost-middle" id="cost-middle" className="col-12 p-1 my-1"/>
                                            </label>
                                            <label className="col-12 col-md-4  px-md-4">
                                                هزینه ارسال (بیش از حد واسط)
                                                <span className="text-danger px-1">*</span>
                                                <input type="text" name="cost-max" id="cost-max" className="col-12 p-1 my-1"/>
                                            </label>
                                        </div>
                                        <span className="col-md-6 alert alert-warning py-2 mt-3">به طور مثال هزینه بسته بندی برای سفارشات کمتر از 500 هزار ریال 25 هزار ریال و برای سفارشات بالای 500 هزار ریال 50 هزار ریال می تواند باشد.</span>
                                    </div>
                                    <div className="col-12 mt-3 pt-4  border-top border-danger p-2 rounded ">
                                        <label className='col-12 col-md-4 px-4 my-2'>
                                            جریمه تاخیر
                                            <span className="text-danger px-1">*</span>
                                            <input type="text" name="delay-penalty" id="delay-penalty" className="col-12 p-1 my-1"/>
                                        </label>
                                        <label className='col-12 col-md-4 px-4 my-2'>
                                            جریمه کسنلی
                                            <span className="text-danger px-1">*</span>
                                            <input type="text" name="trespassing-penalty" id="trespassing-penalty" className="col-12 p-1 my-1"/>
                                        </label>
                                        <label className='col-12 col-md-4 px-4 my-2'>
                                            جریمه مغایرت
                                            <span className="text-danger px-1">*</span>
                                            <input type="text" name="contradiction-penalty" id="contradiction-penalty" className="col-12 p-1 my-1"/>
                                        </label>
                                        <label className='col-12 col-md-4 px-4 my-2'>
                                           <span className="col-md-12  d-flex flex-wrap flex-md-nowrap">
                                                جریمه غیراصل
                                            <span className="text-danger px-1">*</span>
                                           <span className="alert  col-12 d-flex col-md-5 my-2 my-md-0 alert-info px-1 font-14 p-0">مقدار این جریمه مضربی از قیمت کالا است.</span>
                                           </span>
                                            <input type="text" name="fake-penalty" id="fake-penalty" className="col-12 p-1 my-2"/>
                                        </label>
                                        <label className='col-12 col-md-4 px-4 my-2'>
                                            <span className="col-md-12  d-flex flex-wrap flex-md-nowrap">
                                                جریمه قاچاق
                                            <span className="text-danger px-1">*</span>
                                            <span className="alert  col-12 d-flex col-md-5 my-2 my-md-0 alert-info px-1 font-14 p-0">مقدار این جریمه مضربی از قیمت کالا است.</span>
                                            </span>
                                            <input type="text" name="smuggling-penalty" id="smuggling-penalty" className="col-12 p-1 my-2"/>
                                        </label>
                                        <label className='col-12 col-md-4 px-4 my-2'>
                                            جریمه مرجوعی
                                            <span className="text-danger px-1">*</span>
                                            <input type="text" name="returned-trespassing" id="returned-trespassing" className="col-12 p-1 my-1"/>
                                        </label>
                                        <label className='col-12 col-md-5 px-4 my-2'>
                                            دوره تسویه حساب (روز)
                                            <span className="text-danger px-1">*</span>
                                            <input type="text" name="checkout" id="checkout" className="col-12 p-1 my-1"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                       <div className="col-12 row m-auto justify-content-center mt-3 py-4">
                           <div  className="col-11 col-md-5  shadow bg-opacity-25 p-3 rounded-pill d-flex justify-content-evenly align-content-center flex-wrap">
                               <button
                                   className="col-md-3  my-1  btn btn-success bg-default border-0 font-16-rem center">ذخیره
                               </button>
                               <button
                                   className="col-md-3  my-1  btn btn-success bg-default border-0 font-16-rem center">
                                   <i className="icon icon-Add1 text-light ps-1"></i>ذخیره و بستن
                               </button>
                               <button
                                   className="col-md-3  my-1  btn btn-success bg-default border-0 font-16-rem center">
                                   <i className="icon icon-Add1 text-light ps-1"></i>ذخیره و جدید
                               </button>
                           </div>
                       </div>

                    </div>
                </div>
                <div className="col-12 p-3 alert alert-light ">
                    تمامی حقوق مادی و معنوی محفوظ می باشد. توسعه توسط واحد فنی الانزا.
                </div>
            </div>
        </>

    );
}

export default ContractListEdit;