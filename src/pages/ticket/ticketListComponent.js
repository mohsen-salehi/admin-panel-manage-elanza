import React from 'react';
import {Link} from "react-router-dom";

function TicketListComponent({data}) {
    return (

        data ? data?.map(item =>
            <div key={item?.id} className="col-12 d-flex flex-wrap  justify-content-between p-3 my-2 rounded shadow-sm border-bottom font-14 font-FaNum-Medium">
                <div
                    className="col-12 col-md-2 d-flex flex-wrap align-items-center justify-content-between justify-content-md-center">
                    <span className="col-3 d-md-none d-flex justify-content-start ">کاربر : </span>
                    <div className=" center flex-wrap">
                        {item?.user?.first_name} {item?.user?.last_name}
                    </div>
                </div>
                <div
                    className="col-12 col-md-3  d-flex justify-content-xl-center justify-content-between flex-wrap   my-2">
                    <span className="col-3 d-md-none d-flex justify-content-start ">عنوان : </span>
                    <span className=" d-flex justify-content-center text-justify p-2 ">{item?.title}</span>
                </div>
                <div className="col-12  col-md-2   flex-wrap center ps-2 ">
                    <span className="col-3 d-md-none d-flex justify-content-start ">وضعیت : </span>
                    <span
                        className="col col-md-12  d-flex justify-content-end justify-content-md-center"> {item?.state_enum_trans} </span>
                </div>
                <div
                    className="col-12  col-md-2  d-flex justify-content-between justify-content-xl-center align-items-center my-1 flex-wrap  ps-2 ">
                                <span
                                    className="col-3 d-md-none d-flex justify-content-start ">آخرین بروزرسانی   : </span>
                    4 ماه قبل
                </div>
                <div className="col-12 col-md-1 d-flex center">
                    <Link
                        className="font-14-rem my-1 center btn col-7  bg-default border-0 "
                        to={`/ticket/${item?.id}`}>
                        <button className="border-0 bg-transparent text-white" >
                            مشاهده
                        </button>
                    </Link>
                </div>
            </div>
        ) : "Loading"

    );
}

export default TicketListComponent;