import React from 'react';
import {Outlet} from "react-router";
import {ToastContainer } from "react-toastify";

function AppLayout() {
    return (
        <>
            <ToastContainer
            rtl={true}
            />
            <Outlet />
        </>
    );
}

export default AppLayout;