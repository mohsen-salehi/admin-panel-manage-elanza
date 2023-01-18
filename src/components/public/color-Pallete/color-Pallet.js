import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import colorPalletAction from "../../../redux/actions/colorPallet/colorPalletAction";

function ColorPallet() {
    const [position, setPosition] = useState('pallet-sec-hide')
    const dispatch = useDispatch()
    const change_color = (className) => {
        dispatch(colorPalletAction(className))
    }
    return (<>
            <div className="position-absolute col-12 d-flex flex-row-reverse mt-md-5 ms-md-3 mt-5  ms-2">
                <button
                    onClick={e => position === "pallet-sec-hide" ? setPosition('pallet-sec') : setPosition('pallet-sec-hide')}
                    className="icon icon-Palette bg-light rounded-circle font-25  cursor-pointer p-1 mt-3 shadow-lg border-none "></button>
            </div>
            <section
                className={`${position} col-8 col-md-4 d-flex justify-content-evenly shadow-lg rounded-pill p-2 position-fixed`}>
                <button onClick={e => change_color('theme-orange')}
                        className="p-3 shadow-lg border-none cursor-pointer rounded-circle bg-warning"></button>
                <button onClick={e => change_color('theme-red')}
                        className="p-3 shadow-lg border-none cursor-pointer rounded-circle bg-danger"></button>
                <button onClick={e => change_color('theme-blue')}
                        className="p-3 shadow-lg border-none cursor-pointer rounded-circle bg-primary"></button>
                <button onClick={e => change_color('theme-green')}
                        className="p-3 shadow-lg border-none cursor-pointer rounded-circle bg-success"></button>
            </section>
        </>);
}

export default ColorPallet;