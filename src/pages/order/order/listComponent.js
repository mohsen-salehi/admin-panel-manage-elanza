import React from 'react';
import OrderList from "./orderList";

function ListComponent({data}) {
    return (
        <div className="col-12 d-flex  justify-content-center align-content-start flex-wrap vh-50 overflow-scroll">
            <OrderList data={data}/>
        </div>
    );
}

export default ListComponent;