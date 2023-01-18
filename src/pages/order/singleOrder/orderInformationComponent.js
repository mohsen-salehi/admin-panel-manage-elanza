import React from 'react';
import DateFormat from "../../../components/public/dateFormat/dateFormat";

function OrderInformationComponent({data}) {
    return (
        <div className="col-12  d-flex flex-wrap justify-content-evenly align-items-start py-3 rounded">
            <section
                className=' col-lg p-lg-3 border-3 border-end rounded d-flex justify-content-center align-content-start flex-wrap '>
                <h6 className="col-12 p-2  rounded-pill text-bg-light text-center">مشخصات سفارش و
                    کاربر </h6>
                <div className="col-12 font-14 py-2 d-flex justify-content-between  px-3">
                    <span>کد سفارش : </span>
                    <span>{data?.unique_id}</span>
                </div>
                <div className="col-12 font-14 py-2 d-flex justify-content-between  px-3">
                    <span>وضعیت : </span>
                    <span className=" text-bg-success p-1 px-2 rounded-pill ">{data?.state_enum_trans}</span>
                </div>
                <div className="col-12 font-14 py-2 d-flex justify-content-between  px-3">
                    <span>تاریخ : </span>
                    <time className="d-flex justify-content-end px-3"> <DateFormat data={data?.created_at}/></time>
                </div>
                <div className="col-12 font-14 py-2 d-flex justify-content-between  px-3">
                    <span>کاربر : </span>
                    <span>{data?.address?.first_name}  {data?.address?.last_name}</span>
                </div>
                <div className="col-12 font-14 py-2 d-flex justify-content-between  px-3">
                    <span>شماره تلفن : </span>
                    <span className="font-16-rem "> {data?.address?.mobile} </span>
                </div>
                <div className="col-12 font-14 py-2 d-flex justify-content-between  px-3">
                    <span> پرداخت : </span>
                    <span> {data?.pay_type_trans}  </span>
                </div>
                <div className="col-12 font-14 py-2 d-flex justify-content-between  px-3">
                    <span> موجودی کیف پول  : </span>
                    <span> 0 تومان   </span>
                </div>
                <div className="col-12 font-14 py-2 d-flex justify-content-between  px-3">
                                <span className="fw-bold font-16-rem ">
                                    یادداشت
                                            <button
                                                className='icon icon-Edit-Square border-0 bg-transparent  fw-bold me-1'></button>
                                </span>
                </div>
            </section>

            <section
                className='col-12 col-lg p-lg-3 border-3 border-end rounded d-flex justify-content-center align-content-start flex-wrap'>
                <h6 className="col-12 p-2  rounded-pill text-bg-light text-center">
                    گیرنده
                    <button className="icon icon-Edit-Square2 me-1 border-0 bg-transparent"></button>
                </h6>
                <div className="col-12 font-14 py-2 d-flex justify-content-between  px-3">
                    <span>نام و نام خانوادگی  : </span>
                    <span>{data?.address?.first_name}  {data?.address?.last_name}</span>
                </div>
                <div className="col-12 font-14 py-2 d-flex justify-content-between  px-3">
                    <span>شهر   : </span>
                    <span className="text-danger "> {data?.address?.city?.title} - {data?.address?.city?.province?.title} </span>
                </div>
                <div className="col-12 font-14 py-2 d-flex justify-content-between d-flex px-3">
                    <span className="ps-2 d-flex col">آدرس:</span>
                    <span className="col-10 d-flex text-justify justify-content-end font-FaNum-Medium">{data?.address?.content}</span>
                </div>
                <div className="col-12 font-14 py-2 d-flex justify-content-between  px-3">
                    <span>کد پستی : </span>
                    <span className="fw-bold"> {data?.address?.postal_code} </span>
                </div>
                <div className="col-12 font-14 py-2 d-flex justify-content-between  px-3">
                    <span>تلفن  : </span>
                    <span>{data?.address?.phone}</span>
                </div>
                <div className="col-12 font-14 py-2 d-flex justify-content-between  px-3">
                    <span>موبایل  : </span>
                    <span>{data?.address?.mobile}</span>
                </div>
                <div className="col-12 font-14 py-2 d-flex justify-content-between  px-3">
                    <span>ایمیل  : </span>
                    <span> {data?.creator?.email? data?.creator?.email : "-"} </span>
                </div>
            </section>


            <section
                className='col p-lg-3 border-3 border-end rounded d-flex justify-content-center align-content-start flex-wrap'>
                <h6 className="col-12 p-2  rounded-pill text-bg-light text-center">فرستنده </h6>

                <div className="col-12 font-14 py-2 d-flex justify-content-between  px-3">
                    <span>نام فرستنده   : </span>
                    <span> شرکت الانزا </span>
                </div>
                <div className="col-12 font-14 py-2 d-flex justify-content-between  px-3">
                    <span>شهر: </span>
                    <span> تهران - تهران</span>
                </div>
                <div className="col-12 font-14 py-2 d-flex justify-content-between d-flex px-3">
                    <span className="ps-2 d-flex col">آدرس:</span>
                    <span className="col-10 d-flex text-justify font-FaNum-Medium">تهران ، ولیعصر بالاتر از میدان ونک ، کوچه خلیل زاده، پلاک 41، طبقه اول </span>
                </div>
                <div className="col-12 font-14 py-2 d-flex justify-content-between  px-3">
                    <span>کد پستی : </span>
                    <span className="fw-bold">1956573</span>
                </div>
                <div className="col-12 font-14 py-2 d-flex justify-content-between  px-3">
                    <span>تلفن  : </span>
                    <span>02197008292</span>
                </div>
                <div className="col-12 font-14 py-2 d-flex justify-content-between  px-3">
                    <span>ایمیل  : </span>
                    <span>cs@elanza.com</span>
                </div>
            </section>

        </div>
    );
}

export default OrderInformationComponent;