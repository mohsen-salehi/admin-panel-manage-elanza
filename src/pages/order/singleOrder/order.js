import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import orderAction from "../../../redux/actions/order/orderAction";
import OrderTitleComponent from "./orderTitleComponent";
import OrderStatusComponent from "./orderStatusComponent";
import OrderInformationComponent from "./orderInformationComponent";
import OrderNameMobileComponent from "./orderNameMobileComponent";
import OrderPayment from "./orderPayment";
import OrderPrivacyElanza from "./orderPrivacyElanza";
import OrdersFilterComponent from "../order/ordersFilterComponent";
import OrderFilterComponent from "./OrderFilterComponent";

function Order() {

    const dispatch = useDispatch()
    const {unique_id} = useParams()
    useEffect(() => {
        dispatch(orderAction(unique_id))
    }, [])

    const {order} = useSelector(state => state.order)

    return (order ? (<div className="row p-3">
            <OrderTitleComponent/>
            <div
                className="col-12 d-flex justify-content-center align-content-start flex-wrap vh-80 overflow-scroll">
                <OrderStatusComponent/>
                <div className="col-12 mt-4 border-top  rounded">
                    <OrderInformationComponent data={order}/>
                    <OrderNameMobileComponent/>
                    <OrderFilterComponent data={order?.order_items}/>
                </div>
                <OrderPayment/>
                <OrderPrivacyElanza/>
            </div>
        </div>) : (<div>loading...</div>)
    );
}

export default Order;