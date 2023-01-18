import React from 'react';
import {Link} from "react-router-dom";

function OrdersPaginationComponent() {
    return (
        <div className="col-12 bg-zebra d-flex justify-content-between p-2 rounded-pill">
            <div className="col-10 col-lg-6   d-flex justify-content-start align-items-center">
                <ul className="col-8 col-lg-6 p-2 rounded-pill overflow-visible  shadow bg-white bg-opacity-25 d-flex justify-content-evenly   m-0 p-0 list-unstyled">
                    <li className="center  font-16 m-0">
                        <Link to="/" className="col-1 p-1 rounded-circle center text-decoration-none icon icon-Right-1"></Link>
                    </li>
                    <li className="center   font-16 m-0">
                        <Link to="/" className=" rounded-circle center text-decoration-none ">1</Link>
                    </li>
                    <li className="center   font-16 m-0">
                        <Link to="/" className=" rounded-circle center text-decoration-none ">2</Link>
                    </li>
                    <li className="center   font-16 m-0">
                        <Link to="/" className=" rounded-circle center text-decoration-none ">3</Link>
                    </li>
                    <li className="center  font-16 m-0">
                        <Link to="/" className="col-1 p-1 rounded-circle center text-decoration-none text-decoration-none icon icon-Left-1"></Link>
                    </li>
                </ul>
            </div>
            <label className="col-2  p-2 font-14 d-flex justify-content-center align-items-center">
                <select className="col-12 p-1 rounded">
                    <option value="انتخاب کنید">انتخاب کنید</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </label>
        </div>
    );
}

export default OrdersPaginationComponent;