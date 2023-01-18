import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import logoutAction from "../redux/actions/auth/logout/logoutAction";
import {Outlet} from "react-router";
import resendVerifyAction from "../redux/actions/auth/verify/resendVerifyAction";

function VerifyMiddleWare() {
    const dispatch = useDispatch()
    const {user} = useSelector(state => state.verify.auth)
    useEffect(()=> {
        dispatch(resendVerifyAction())
    },[])

    useEffect(() => {
        if (!user) dispatch(logoutAction())
    }, [user])

    return user && <Outlet/>
}
export default VerifyMiddleWare;