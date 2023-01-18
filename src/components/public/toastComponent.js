import React from 'react';

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ToastComponent( message , type){
    switch (type){
        case "success" :   toast.success(message);break
        case "error" : toast.error(message) ; break
        case "warn" : toast.warn(message)
    }

}

export default ToastComponent