import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ordersAction from "../../../redux/actions/order/ordersAction";
import TitleMobileComponent from "./titleMobileComponent";
import OrdersNameComponent from "./ordersNameComponent";
import OrdersFilterComponent from "./ordersFilterComponent";
import OrdersPaginationComponent from "./ordersPaginationComponent";
import OrdersSearchComponent from "./ordersSearchComponent";
import NameComponentMobile from "./nameComponentMobile";
import ListComponent from "./listComponent";

function OrdersComponent() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(ordersAction())
    }, [])

    const {orders} = useSelector(state => state.order.orderList)

    return (orders ? <div className="col-12 p-2">
                <OrdersNameComponent/>
                <section className="col-12  font-14">
                    <OrdersFilterComponent/>
                    <div className="col-12  border-top p-2">
                        <OrdersPaginationComponent/>
                        <OrdersSearchComponent/>
                        <TitleMobileComponent/>
                        <NameComponentMobile/>
                        <ListComponent data={orders}/>
                    </div>
                </section>
            </div>

            : "Loading"

    );
}

export default OrdersComponent;