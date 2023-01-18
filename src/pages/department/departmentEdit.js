import React, {useState} from 'react';
import Select from "react-select";
import TinyEditor from "../../components/tinyEditor/tinyEditor";

function DepartmentEdit() {
    const options = [{value: 'chocolate', label: 'Chocolate'}, {
        value: 'strawberry', label: 'Strawberry'
    }, {value: 'vanilla', label: 'Vanilla'},];
    const [selectedOption, setSelectedOption] = useState('');
    return (<>
        <div
            className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between">
            <div className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                <h4 className="py-3 py-md-2 px-2">
                    ویرایش محتوا
                </h4>
            </div>
            <div className="col-12 p-2">
                <div className="accordion col-12 font-medium font-14 text-submit-black1  rounded-manual"
                     id="accordionPanelsStayOpenExample">
                    <div className="accordion-item  my-3 border-none shadow rounded-manual">
                        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                            <button
                                className="bg-default  col-12 accordion-button rounded-manual d-flex justify-content-md-start justify-content-center  py-3 "
                                type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseTwo"
                                aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
                                <span className="text-white">ویرایش همکاری با الانزا</span>
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show"
                             aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="accordion-body row justify-content-center">
                                <div className="col-12 p-2 d-flex justify-content-between flex-wrap px-3">
                                    <label className="col-md-5 col-12 d-flex align-items-center flex-wrap p-2">
                                            <span className="d-flex col-12">
                                             عنوان
                                            <span className="text-danger px-1">*</span>
                                           </span>
                                        <input type="text" name="title" id="title"
                                               className="p-2 col-12"/>
                                    </label>
                                    <label className="col-md-5 col-12 d-flex  flex-wrap p-2">
                                            <span className="d-flex col-12">
                                              آدرس
                                            <span className="text-danger px-1">*</span>
                                           </span>
                                        <input type="text" disabled name="address" id="address"
                                               className="p-2 col-12 "/>
                                    </label>
                                    <label className="col-md-5 col-12 d-flex  flex-wrap p-2">
                                            <span className="d-flex col-12">
                                              ایمیل
                                            <span className="text-danger px-1">*</span>
                                           </span>
                                        <input type="email" name="email" id="email"
                                               className="p-2 col-12 "/>
                                    </label>
                                    <label className="col-md-5 col-12 d-flex  flex-wrap p-2">
                                            <span className="d-flex col-12">
                                              تلفن
                                            <span className="text-danger px-1">*</span>
                                           </span>
                                        <input type="tel" name="tel" id="tel"
                                               className="p-2 col-12 "/>
                                    </label>
                                    <div className="col-md-5 col-12 d-flex  flex-wrap p-2">
                                        <h5 className="col-12 my-2 " >
                                            وضعیت
                                        </h5>
                                        <label className="col-12">
                                            <input type="checkbox" name="active" id="active"/>
                                            <span className="px-2">  فعال باشد </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 d-flex flex-wrap justify-content-between bg-secondary bg-opacity-10 rounded">
                    <div
                        className="col-12 col-md-4  bg-opacity-25 p-3 rounded-pill d-flex justify-content-evenly align-content-center flex-wrap">
                        <button
                            className="col-11 col-md-3 my-1  btn btn-light text-white bg-default border-0 font-16-rem center">
                            ذخیره
                        </button>
                        <button
                            className="col-11 col-md-3 my-1  btn btn-light text-white bg-default border-0 font-16-rem center">

                            ذخیره و بستن
                        </button>
                        <button
                            className="col-11 col-md-3 my-1  btn btn-light text-white bg-default border-0 font-16-rem center">

                            ذخیره و جدید
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </>);
}

export default DepartmentEdit;