import React  from 'react';
import validations from "../../langs/fa/validations";

function PasswordRule({password, setPassword, passwordIsValid, setPasswordIsValid  ,confirmPasswordIsValid }) {


    const {auth: {login: {passwordInCorrect, passwordIsCorrect  }}} = validations


    const validPassword = (val) => {
        setPassword(val)
        if (val.length >= 0) {
            if (
                val.length > 6 &&
                val.match(/[A-Z]/g) &&
                val.match(/\d/) &&
                val.match(/[@#!]/)
            ) {
                setPasswordIsValid(true)
            } else {
                setPasswordIsValid(false)
            }
        } else {
            setPasswordIsValid(false)
        }
    }

    return (
        <>
            <input
                id="password"
                className="col-10 p-3 shadow border border-white"
                name="password"
                value={password}
                onChange={e => {
                    validPassword(e.target.value)
                }}
                type="text"
                placeholder="رمز عبور "
                minLength="6"
            />
            {
                passwordIsValid &&
                <p className="col-10 mt-4 font-14 text-success">
                    {passwordIsCorrect}
                </p>
            }
            {
                passwordIsValid === false &&
                <p className="rounded-pill  col-10 mt-4 font-14 text-danger">
                    {passwordInCorrect}
                </p>
            }
            {
                confirmPasswordIsValid &&
                <p className="col-10 mt-4 font-14 text-success">
                    {passwordIsCorrect}
                </p>
            }
            {
                confirmPasswordIsValid === false &&
                <p className="rounded-pill  col-10 mt-4 font-14 text-danger">
                    {passwordInCorrect}
                </p>
            }

        </>

    );
}

export default PasswordRule;