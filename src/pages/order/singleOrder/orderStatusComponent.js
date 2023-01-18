import React from 'react';

function OrderStatusComponent() {
    return (<div
            className="col-12 font-medium fw-bold d-flex justify-content-between align-items-center flex-wrap border-3 px-2 border-end  rounded py-2">
            <div className="col-6 col-lg-3">
                <i className=' icon icon-Information-Circle fw-bold ms-1'></i>
                وضعیت ارسال :
            </div>
        </div>);
}

export default OrderStatusComponent;