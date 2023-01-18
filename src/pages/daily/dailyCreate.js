import React, {useRef, useState} from 'react';

import DatePickerManual from "../../components/DatePicker/DatePickerManual";
import TodoItem from "../../components/todoItem/todoItem";

function DailyCreate() {

    const [index, setIndex] = useState([])





    return (
        <section
            className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between p-2">
            <section className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                <div className="col-12 d-flex flex-wrap justify-content-end align-items-center p-2">
                    <h5 className="col-12 p-2">ساختن پیشنهاد روزانه</h5>
                </div>
            </section>
            <section
                className="col-12 d-flex justify-content-center align-items-start flex-wrap rounded p-2 shadow-sm mt-2">
                <h6 className="col-12 bg-default p-3 rounded d-flex align-items-end text-white ">
                    تنظیمات
                </h6>
                <section className="col-12 d-flex justify-content-center align-items-start flex-wrap  rounded p-2">
                    <div className="col-12 border-bottom rounded p-2">
                        <h6>تاریخ : </h6>
                        <DatePickerManual/>
                    </div>
                    <div className="col-12 p-2 my-2  d-flex justify-content-center align-items-center flex-wrap">
                        <h6 className="m-0 col-12">لیست محصولات پیشنهاد ویژه: </h6>
                        <TodoItem />
                    </div>
                </section>
            </section>
        </section>
    );
}

export default DailyCreate;