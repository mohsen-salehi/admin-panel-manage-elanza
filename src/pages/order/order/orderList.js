import React from 'react';
import DateFormat from "../../../components/public/dateFormat/dateFormat";
import {Link} from "react-router-dom";
import FormatNumber from "../../../components/public/formatNumber";

function OrderList({data}) {
    console.log(data)
    return (
        <>
            {
                data?.map(item =>(
                    <div key={item?.id}  className="col-12 d-flex flex-wrap  justify-content-between p-3 my-2 rounded shadow-sm border-bottom font-16-rem">
                        <div
                            className="col-5 col-md-2 d-flex  align-items-center justify-content-center justify-content-md-start text-primary  my-1">
                            {item?.unique_id}
                        </div>
                        <div className="col-5 col-md-1 d-flex align-items-center flex-wrap justify-content-center justify-content-md-start my-1">
                            { <span className="col-12 text-center text-md-end">  {item?.address?.first_name} {item.address?.last_name}  </span> }
                            { <span className="col-12 text-center text-md-end">  {item?.address?.mobile}  </span> }
                        </div>
                        <div
                            className="col-5 col-md-1 d-flex  align-items-center flex-wrap justify-content-center justify-content-center justify-content-md-start font-FaNum-Medium my-1">
                            <span className="col-12 text-center text-md-end">{<DateFormat data={item?.created_at} /> }</span>
                        </div>
                        <div className="col-5 col-md-1 d-flex align-items-center justify-content-center justify-content-md-start my-1">{item?.state_enum_trans}</div>
                        <div
                            className="col-5 col-md-1 d-flex align-items-center justify-content-center justify-content-md-start font-FaNum-Medium my-1">  <FormatNumber number={item?.final_price}/>
                            تومان
                        </div>
                        <div className="col-5 col-md-1 d-none d-md-flex  align-items-center justify-content-center justify-content-md-start my-1"><i
                            className="icon icon-Edit-21 font-20 p-2"></i></div>
                        <div className="col-5 col-md-1 d-flex align-items-center justify-content-center justify-content-md-start my-1">
                            {item?.pay_type_trans}
                        </div>
                        <div className="col-12 col-md-1 d-flex align-items-center justify-content-center justify-content-center justify-content-md-start my-1">
                            <Link
                                className="font-14-rem my-1 center btn col-7  bg-default border-0 "
                                to={`/order/${item?.unique_id}`}>
                                <button className="border-0 bg-transparent text-white" >
                                    مشاهده
                                </button>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </>
    );
}

export default OrderList;