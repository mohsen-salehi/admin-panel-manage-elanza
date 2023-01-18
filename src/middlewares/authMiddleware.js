import React, {useEffect} from 'react';
import {Outlet, useNavigate} from "react-router";
import {useSelector} from "react-redux";

function AuthMiddleware() {

    const navigate = useNavigate()

    let {token} = useSelector(state => state.verify.auth)

    useEffect(()=> {
        if (!token) navigate("/login")
    } ,[token])

    return <Outlet />
}

export default AuthMiddleware;