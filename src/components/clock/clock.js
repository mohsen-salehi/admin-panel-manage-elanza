import React, {useEffect, useState} from 'react';

function myClock() {

    const [date, setDate] = useState('')
    const [hours, setHours] = useState('')
    useEffect(() => {
        let interval = setInterval(() => {
            setDate(new Date().toLocaleDateString('fa-IR'))
            setHours(new Date().toLocaleTimeString('fa-IR'))
        }, 1000)
    },[]);

    return (
        <>
            <div className="col-12 ">
                <span className="d-flex justify-content-end align-items-center">{hours} <span className="px-2 font-20 fw-light text-secondary"> | </span> {date}</span>
            </div>

        </>
    );
}

export default myClock