import React from 'react';
import TinyEditor from "../../components/tinyEditor/tinyEditor";

function Services() {
    return (
        <>
            <section className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between p-2">
                <section className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                    <div className="col-12 d-flex flex-wrap justify-content-end align-items-center p-2">
                        <h5 className="col-12 p-2">سرویس های پیامک و درگاه بانک</h5>
                    </div>
                </section>
                <section className="col-12 d-flex justify-content-center align-items-start flex-wrap rounded p-2 shadow-sm mt-2">
                    <h6 className="col-12 bg-default p-3 rounded d-flex align-items-end text-white ">
                        تنظیمات درگاه های پیامک
                    </h6>
                    <section className="col-12 d-flex justify-content-center justify-content-xl-start align-items-start flex-wrap p-2 rounded">
                        <label className="col-12 col-md-5 col-xxl-1 p-2 shadow d-flex align-items-center rounded mx-1 py-2" >
                            <input type="checkbox" className="mx-2" name="melipayamak" id="melipayamak"/>
                            <h6 className="m-0">ملی پیامک</h6>
                        </label>
                        <label className="col-12 col-md-5 col-xxl-1 p-2 shadow d-flex align-items-center rounded mx-1 py-2" >
                            <input type="checkbox" className="mx-2" name="ghasedak" id="ghasedak"/>
                            <h6 className="m-0"> قاصدک </h6>
                        </label>
                        <label className="col-12 col-md-5 col-xxl-1 p-2 shadow d-flex align-items-center rounded mx-1 py-2" >
                            <input type="checkbox" className="mx-2" name="ippanel" id="ippanel"/>
                            <h6 className="m-0"> آی پی پنل </h6>
                        </label>
                        <label className="col-12 col-md-5 col-xxl-1 p-2 shadow d-flex align-items-center rounded mx-1 py-2" >
                            <input type="checkbox" className="mx-2" name="kavehnegar" id="kavehnegar"/>
                            <h6 className="m-0"> کاوه نگار </h6>
                        </label>
                    </section>
                </section>
                <section className="col-12 d-flex justify-content-center align-items-start flex-wrap rounded p-2 shadow-sm mt-2">
                    <div className="accordion col-12 font-medium font-14 text-submit-black1  rounded-manual"
                         id="accordionPanelsStayOpenExample">
                        <div className="accordion-item  my-3 border-none shadow rounded-manual">
                            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                <button
                                    className="bg-default  col-12 accordion-button rounded-manual d-flex justify-content-md-start justify-content-center collapsed py-3 "
                                    type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseTwo"
                                    aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
                                    <span className="text-white"> تنظیمات درگاه های بانکی</span>
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
                                 aria-labelledby="panelsStayOpen-headingTwo">
                                <div className="accordion-body row justify-content-center">
                                    <section className="col-12 d-flex justify-content-center justify-content-xl-between align-items-start flex-wrap p-2 rounded">
                                        <div className="col-12 my-2">
                                            <label className="col-12  col-xl-4 flex-wrap  mx-1 py-2 p-2 d-flex justify-content-between align-items-center rounded shadow" >
                                                <input type="checkbox" name="sep" id="sep" className=" p-2 my-1"/>
                                                <img src="https://ravandbazar.ir/wp-content/uploads/2022/04/%D8%B4%D8%A7%D9%BE%D8%B1%DA%A9.jpg" alt="sep" className="col-2 my-3 rounded-3"/>
                                                <h6 className="p-0 m-0 text-center px-1">sep</h6>
                                            </label>
                                        </div>
                                        <div className="col-12 my-2">
                                            <label className="col-12 col-xl-4  flex-wrap  mx-1 py-2 p-2 d-flex justify-content-between align-items-center rounded shadow" >
                                                <input type="checkbox" name="pec" id="pec" className=" p-2 my-1"/>
                                                <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQEp17Cd5hJ3xQ/company-logo_200_200/0/1641918906926?e=2147483647&v=beta&t=Ox1NLu5IZ6pnNJtbfrDrMUzZ4NEl2ZMkNg0SvX46C6o" alt="pec" className="col-2 rounded-3"/>
                                                <h6 className="p-0 m-0 text-center px-1">pec</h6>
                                            </label>
                                        </div>
                                        <div className="col-12 my-2">
                                            <label className="col-12 col-xl-4  flex-wrap  mx-1 py-2 p-2 d-flex justify-content-between align-items-center rounded shadow" >
                                                <input type="checkbox" name="behpardakht" id="behpardakht" className=" p-2 my-1"/>
                                                <img src="https://ebinews.com/storage/2022/06/at-1655298830112.jpg" alt="sep" className="col-2 my-3 rounded-3"/>
                                                <h6 className="p-0 m-0 text-center px-1">behpardakht</h6>
                                            </label>
                                        </div>
                                        <div className="col-12 my-2">
                                            <label className="col-12 col-xl-4 flex-wrap  mx-1 py-2 p-2 d-flex justify-content-between align-items-center rounded shadow" >
                                                <input type="checkbox" name="sepehr" id="sepehr" className=" p-2 my-1"/>
                                                <img src="https://www.sepehrpay.com/wp-content/uploads/2019/02/logo.png" alt="sepehr" className="col-2  rounded-3"/>
                                                <h6 className=" text-center p-0 m-0 px-1">sepehr</h6>
                                            </label>
                                        </div>
                                        <div className="col-12 my-2">
                                            <label className="col-12 col-xl-4 flex-wrap  mx-1 py-2 p-2 d-flex justify-content-between align-items-center rounded shadow" >
                                                <input type="checkbox" name="up" id="up" className=" p-2 my-1"/>
                                                <img src="https://asanpardakht.ir/api/resources?name=858c5801-9ab1-40fa-8bf4-89751797036d.jpg" alt="up" className="col-2  rounded-3"/>
                                                <h6 className=" text-center p-0 m-0 px-1">up</h6>
                                            </label>
                                        </div>
                                        <div className="col-12 my-2">
                                            <label className="col-12 col-xl-4 flex-wrap   mx-1 py-2 p-2 d-flex justify-content-between align-items-center rounded shadow" >
                                                <input type="checkbox" name="pep" id="pep" className=" p-2 my-1"/>
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMQMX1P6El1AdE4sjkY_L9P_vrJYG60KNSOQ&usqp=CAU" alt="pep" className="col-2  rounded-3"/>
                                                <h6 className=" text-center p-0 m-0 px-1">pep</h6>
                                            </label>
                                        </div>
                                        <div className="col-12 my-2">
                                            <label className="col-12 col-xl-4 flex-wrap   mx-1 py-2 p-2 d-flex justify-content-between align-items-center rounded shadow" >
                                                <input type="checkbox" name="snappy" id="snappy" className=" p-2 my-1"/>
                                                <img src="https://snapppay.ir/wp-content/uploads/2022/05/snapp-pay_pp-image.jpg" alt="snappy" className="col-2  rounded-3"/>
                                                <h6 className=" text-center p-0 m-0 px-1">snappy</h6>
                                            </label>
                                        </div>
                                        <div className="col-12 my-2">
                                            <label className="col-12 col-xl-4 flex-wrap  mx-1 py-2 p-2 d-flex justify-content-between align-items-center rounded shadow" >
                                                <input type="checkbox" name="snappy" id="snappy" className=" p-2 my-1"/>
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDa_BVqy4Ax-Ss3t1IBD6qzoDgQFPOQKNbJEIhwd0_AfiT37bTinYfVeLJlQZQKwEmO-8&usqp=CAU" alt="pep" className="col-2  rounded-3"/>
                                                <h6 className=" text-center p-0 m-0 px-1">snappy</h6>
                                            </label>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="col-12 p-2 rounded bg-secondary bg-opacity-10">
                    <button className="btn btn-success text-white mx-1">ذخیره</button>
                </div>
            </section>

        </>
    );
}

export default Services;