import React, { useState} from 'react';
import {Outlet} from "react-router";

import Aside from "../components/sideBar/aside";
import Navigation from "../components/navigation/navigation";
import TodoList from "../components/todoList/todoList";
import ColorPallet from "../components/public/color-Pallete/color-Pallet";
import {useSelector} from "react-redux";



function PanelLayout() {
    const [asideClass, setAsideClass] = useState('hide-sidebar')
    const {theme}= useSelector(state => state?.theme)

    return (
        <>
            <div  className={`${theme} mains d-flex flex-nowrap theme-orange  align-items-start justify-content-end font-medium  position-relative overflow-hidden h-100`} >
                <ColorPallet />
                <Navigation />
                <Aside setAsideClass={setAsideClass} asideClass={asideClass}/>
                <section id="stage" className={`col-12 col-md justify-content-center align-items-start`}>
                    <div className="d-flex p-2  ">
                        <button id="menu"  onClick={()=> asideClass === "hide-sidebar" ? setAsideClass('show-sidebar') : setAsideClass('hide-sidebar')}
                                className={`icon icon-Menu font-25 border-0 bg-transparent cursor-pointer`}>
                        </button>
                    </div>
                    <TodoList/>
                    <Outlet/>
                </section>
            </div>

        </>
    );
}

export default PanelLayout;