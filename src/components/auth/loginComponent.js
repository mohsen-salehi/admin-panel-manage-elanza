import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ContactRule from "../../rules/auth/contactRule";
import PasswordRule from "../../rules/auth/passwordRule";
import ToastComponent from "../public/toastComponent";
import requestAction from "../../redux/actions/auth/request/requestAction";


function LoginComponent({setContact, contact , setStatusForm}) {


    const dispatch = useDispatch();


    const {status} = useSelector(state => state.request)

    useEffect(()=> {
        if(status)  setStatusForm("getCode")
    },[status])

    const [password, setPassword] = useState('')
    const [passwordIsValid, setPasswordIsValid] = useState(null);
    const [contactIsValid, setContactIsValid] = useState(null);
    const [loginWithPassword, setLoginWithPassword] = useState('hidden')

    const submitHandler = (e) => {
        e.preventDefault()

        if (loginWithPassword === "hidden"){
            if (contact !== "" && contactIsValid ) {
                dispatch(requestAction({contact}))
            }else{
                ToastComponent( 'شماره تلفن یا ایمیل را وارد کنید.' , "error")
                setContact('')
                setPassword('')
                setPasswordIsValid(null)
                setContactIsValid(null)
            }
        }else {
            if(password !== "" && passwordIsValid){
                dispatch(requestAction({contact, password}))
            }else{
                ToastComponent('رمز عبور را وارد کنید.' ,"error")
                setContact('')
                setPassword('')
                setPasswordIsValid(null)
                setContactIsValid(null)
            }
        }
       
    }


    return (<>
        <form onSubmit={e => {
            submitHandler(e)
        }} className="p-2  rounded center flex-wrap ">
            <label className="col-12 d-flex justify-content-center flex-wrap mt-4">
                <ContactRule
                    contact={contact}
                    setContact={setContact}
                    contactIsValid={contactIsValid}
                    setContactIsValid={setContactIsValid}
                />
            </label>

            {loginWithPassword === "show" ? <>
                    <label className="col-12 d-flex justify-content-center flex-wrap mt-4">
                        <PasswordRule
                            password={password}
                            setPassword={setPassword}
                            passwordIsValid={passwordIsValid}
                            setPasswordIsValid={setPasswordIsValid}
                        />
                    </label>
                    <div className="col-12  mt-4 p-2 pe-5 flex-wrap  d-flex align-content-center">
                        <div className="col-12 d-flex align-content-center   text-secondary "
                             onClick={() => {
                                 setLoginWithPassword('hidden')
                                 setPassword('')
                             } }>
                            <i className="icon icon-Password-2 font-25 px-2"></i>
                            <span className='cursor col-12 d-flex table-hover'>ورود با رمز یکبار مصرف </span>
                        </div>
                    </div>
                </>
                :
                <div className="col-12  mt-4 p-2 pe-5 flex-wrap  d-flex align-content-center">
                    <div className="col-12 d-flex align-content-center   text-secondary "
                         onClick={() => {
                             setLoginWithPassword('show')
                             setPassword('')
                         } }>
                        <i className="icon icon-Password-2 font-25 px-2"></i>
                        <span className='cursor col-12 d-flex table-hover'> ورود با رمز عبور </span>
                    </div>
                </div>
            }
            <div className="col-12 center my-4">
                <button className="border-0 p-3 col-10 hover-default text-white shadow ">ورود</button>
            </div>
        </form>
    </>);
}

export default LoginComponent;