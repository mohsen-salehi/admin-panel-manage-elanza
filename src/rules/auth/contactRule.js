import React from "react";
import validations from "../../langs/fa/validations";

function ContactRule({contact, setContact, contactIsValid, setContactIsValid}) {

    const {auth : {login: {mobileInCorrect ,mobileIsCorrect}}} = validations;

    const validMobile = (val)=>{
        setContact(val)
        if (val.length > 0){
            if (
                val.charAt(0) === "0" && val.charAt(1)=== "9" &&
                val.length === 11
            ){
                setContactIsValid(true);
            }else {
                setContactIsValid(false);
            }
        }else {
            setContactIsValid(false);
        }
    }
    return (
        <>
            <input
                id="contact"
                className="col-10 p-3 shadow border border-white "
                name="contact"
                value={contact}
                onChange={e => validMobile(e.target.value)}
                placeholder="موبایل یا ایمیل"
                type="tel"
                maxLength="11"
            />
            {
                contactIsValid &&
                <p className="col-10 mt-4 font-14 text-success">
                    {mobileIsCorrect}
                </p>
            }
            {
                contactIsValid === false &&
                <p className="col-10 mt-4 font-14 text-danger">
                    {mobileInCorrect}
                </p>
            }
        </>
    );
}

export default ContactRule;