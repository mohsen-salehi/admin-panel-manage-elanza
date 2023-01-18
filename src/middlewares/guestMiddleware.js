import React, {useEffect} from 'react';
import {Outlet, useNavigate} from "react-router";
import {useSelector} from "react-redux";

function GuestMiddleware() {
    const navigate = useNavigate()
    const {token} = useSelector(state => state.verify.auth)
    
    useEffect(()=>{
        if (token) navigate("/")
    },[token])
    return !token && <Outlet />
}

export default GuestMiddleware;