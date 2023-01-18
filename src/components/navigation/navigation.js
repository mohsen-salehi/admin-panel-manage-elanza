import React from 'react';

import Clock from "../clock/clock";

function NavigationBar() {

    return (
        <nav className=" flex-row-reverse d-flex align-items-center justify-content-between p-3 position-absolute">
            <div className=" font-FaNum-Medium col">
                <Clock />
            </div>
        </nav>
    );
}

export default NavigationBar;