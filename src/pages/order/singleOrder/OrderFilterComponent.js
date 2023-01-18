import React from 'react';
import FormatNumber from "../../../components/public/formatNumber";

function OrderFilterComponent({data}) {
    return (
        data?<div className="accordion col-12 font-medium text-submit-black1  "
                       id="accordionPanelsStayOpenExample">
                <div className="accordion-item  my-3 border-none shadow rounded-manual">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button
                            className="bg-default font-16-rem text-white col-12 accordion-button rounded-manual d-flex justify-content-evenly collapsed px-2 "
                            type="button" data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseTwo"
                            aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            <span className="text-white"> مشاهده لیست سفارش ها</span>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse "
                         aria-labelledby="panelsStayOpen-headingTwo">
                        <div className="accordion-body">
                            <div
                                className="col-12 d-none  d-lg-flex justify-content-evenly p-3 rounded mt-2 border-bottom font-16-rem">
                                <div className="col-1 d-flex justify-content-start">تصویر</div>
                                <div className="col-3 d-flex justify-content-center">مشخصات کالا</div>
                                <div className="col-1 d-flex justify-content-center">فروشنده</div>
                                <div className="col-2 d-flex justify-content-center">تعداد</div>
                                <div className="col-1 d-flex justify-content-center"> قیمت واحد</div>
                                <div className="col-1 d-flex justify-content-center">تخفیف واحد</div>
                                <div className="col-1 d-flex justify-content-center">قیمت پس از تخفیف</div>
                                <div className="col-1 d-flex justify-content-center">مبلغ نهایی</div>
                                <div className="col-1 d-flex justify-content-center">وضعیت</div>
                            </div>
                            {
                                data?.map(item => (
                                    <div key={item?.id}
                                        className="col-12 d-flex flex-wrap justify-content-between p-3 py-2  shadow-sm  rounded border-bottom font-16-rem">
                                        <figure
                                            className="col-4 col-lg-1 d-flex align-items-center flex-wrap justify-content-start m-0 p-0">
                                            <img
                                                src={item?.product_images[0]}
                                                className="img-fluid rounded shadow-sm" alt={item?.product_title}/>
                                        </figure>
                                        <div
                                            className="col-8 col-lg-3 my-2  d-flex px-lg-2 align-items-center flex-wrap justify-content-center font-FaNum-Medium">
                                            {item?.product_title}
                                        </div>
                                        <div
                                            className="col-12 col-lg-1 my-2 d-flex align-items-center justify-content-between justify-content-lg-center">
                                            <span className="d-block d-lg-none">فروشنده :</span>
                                            <span>{item?.product_seller_title}</span>
                                        </div>
                                        <div
                                            className="col-12 col-lg-2 my-2 d-flex align-items-center justify-content-between justify-content-lg-center font-FaNum-Medium ">
                                            <span className="d-block d-lg-none">تعداد :</span>
                                            <span>2 عدد در انبار فروشنده</span>
                                        </div>
                                        <div
                                            className="col-12 col-lg-1 my-2 d-flex align-items-center justify-content-between justify-content-lg-center">
                                            <span className="d-block d-lg-none">قیمت واحد :</span>
                                            <span><FormatNumber number={
                                                item?.product_unit_old_price ? item?.product_unit_old_price : item?.product_unit_price
                                            }/> تومان</span>
                                        </div>
                                        <div
                                            className="col-12 col-lg-1 my-2 d-flex align-items-center justify-content-between justify-content-lg-center">
                                            <span className="d-block d-lg-none">نخفیف واحد :</span>
                                            <span> <FormatNumber number={
                                                item?.product_unit_old_price ? (item?.product_unit_old_price) - (item?.product_unit_price) : 0
                                            }/> تومان</span>
                                        </div>
                                        <div
                                            className="col-12 col-lg-1 my-2 d-flex align-items-center justify-content-between justify-content-lg-center">
                                            <span className="d-block d-lg-none">قیمت پس از تخفیف  :</span>
                                            <span> <FormatNumber number={item?.product_unit_price}/> تومان</span>
                                        </div>
                                        <div
                                            className="col-12 col-lg-1 my-2 d-flex align-items-center justify-content-between justify-content-lg-center">
                                            <span className="d-block d-lg-none">مبلغ نهایی :</span>
                                            <span>   <FormatNumber number={
                                                (item?.product_unit_price) * (item?.requested_quantity)
                                            }/> تومان</span>
                                        </div>
                                        <div
                                            className="col-12 col-lg-1 my-2 d-flex align-items-center justify-content-between justify-content-lg-center">
                                            <span className="d-block d-lg-none"> وضعیت :</span>
                                            <span className="py-1 px-2 rounded-pill text-bg-success">{item?.state_enum_trans}</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        :"Loading..."

    );
}

export default OrderFilterComponent;