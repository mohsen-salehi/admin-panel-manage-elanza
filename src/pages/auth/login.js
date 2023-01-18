import React, {useState} from "react";
import LoginComponent from "../../components/auth/loginComponent";
import GetCodeComponent from "../../components/auth/getCodeComponent";


const Login = () => {


    const [statusForm, setStatusForm] = useState('login') // getMobile   ,  getCode  , getNewPassword
    const [contact , setContact] = useState('')
    return (

       <>
       <div className="p-2 p-lx-5 d-flex justify-content-center align-items-center font-medium main-login bg-default">

           <div className="form col-12 col-md-4 col-xxl-3 p-4 rounded mt-5 border login bg-white shadow">
               <figure className="col-12 d-flex justify-content-center align-items-center position-relative">
                   <img
                       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTjpGnSbPzYjPRnrndaMmGLhhRNeXsbRRgsFYfpX4GjBM7lOusbOuX8P5L7KNmKUpTfng&usqp=CAU"
                       alt="" className="img-fluid shadow position-absolute col-3 rounded-circle"/>
               </figure>

               <h3 className="col-12 text-center text-caption-grey text-shadow p-2">ورود | ثبت نام </h3>
                {/*login*/}
               {
                   statusForm === 'login' && <LoginComponent  setStatusForm={setStatusForm} setContact={setContact} contact={contact} />
               }
               {/* getCode*/}
               {
                   statusForm === 'getCode' && <GetCodeComponent contact={contact} />
               }
           </div>
       </div>

       </>


    )

};

export default Login;
