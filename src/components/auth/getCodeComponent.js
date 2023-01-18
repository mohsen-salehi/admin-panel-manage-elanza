import React, {useEffect, useRef, useState} from 'react';
import ToastComponent from "../public/toastComponent";
import validations from "../../langs/fa/validations";
import {useDispatch} from "react-redux";
import verifyAction from "../../redux/actions/auth/verify/verifyAction";

function GetCodeComponent({contact}) {


    const dispatch = useDispatch()
    const code = useRef()

    const formHandler = (e) => {
        e.preventDefault();
        let otpCode = code.current?.value
        if (otpCode.length === 5) dispatch(verifyAction({token: otpCode, contact}))
    }
    return (
        <>
            <form className="p-2  rounded" onSubmit={e => formHandler(e)}>
                <label className="col-12 d-flex justify-content-center my-4">
                    <input ref={code} className="col-10 p-3  shadow border border-white  " type="text" name=""
                           id="username"
                           placeholder="کد ارسال شده "/>
                </label>
                <div className="col-12 px-5">
                    02:00
                </div>
                <div className="col-12 d-flex justify-content-center mt-4">
                    <button className="border-0 p-3 col-10 hover-default text-white shadow">تایید</button>
                </div>
            </form>
        </>
    );
}

export default GetCodeComponent;