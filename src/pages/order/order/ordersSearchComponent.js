import React from 'react';

function OrdersSearchComponent({data}) {
    return (
        <div className="col-12 d-flex justify-content-between p-2 flex-wrap">
            <span className="d-flex col-12 col-md-3 ">  تعداد سفارش ها : {data?.total} </span>
            <form className="col-12 col-md-3 rounded p-1 d-flex ">
                <label htmlFor="search"
                       className="position-relative d-flex flex-row-reverse col-12">
                    <input type="search" name="search" id="search" className="font-14 col-12 col-md-9 p-2 border "
                           placeholder="جستجو"/>
                    <button
                        className="center h-100 bg-default border-none rounded position-absolute p-3 ">
                        <i className="icon icon-Search-2 font-14"></i></button>
                </label>
            </form>
        </div>
    );
}

export default OrdersSearchComponent;