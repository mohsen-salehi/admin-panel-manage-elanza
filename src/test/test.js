import React, {useEffect, useState} from 'react';
import DatePicker from "react-multi-date-picker";
import InputIcon from "react-multi-date-picker/components/input_icon";
import gregorian from "react-date-object/calendars/gregorian";
import persian_fa from "react-date-object/locales/persian_fa";
import persian from "react-date-object/calendars/persian";
import DateObject from "react-date-object";
import gregorian_en from "react-date-object/locales/gregorian_en";


function Test() {


    // const [date, setDate] = useState()
    //
    // useEffect(() => {
    //     if (date) {
    //         console.log(date)
    //     }
    // }, [date])
    //
    //
    // return (<div className="col-12 ">
    //     <DatePicker
    //         onChange={e => setDate( new DateObject(e)?.convert(gregorian, gregorian_en).format())}
    //         render={<InputIcon/>}
    //         value={new Date().toLocaleDateString("fa-IR")}
    //         calendar={persian}
    //         locale={persian_fa}
    //         format={"YYYY/MM/DD"}
    //     />
    //
    // </div>);
}

export default Test;