import React from 'react';

function Seo() {

    const text = `{
  "title": "الانزا",
  "description": "لذت خوب خرید اینترنتی انواع محصولات مد و زیبایی را با بهترین قیمت می توانید در الانزا تجربه کنید، همراه با ضمانت 7 روزه بازگشت کالا و ارسال رایگان به سراسر ایران",
  "abstract": "لذت خوب خرید اینترنتی انواع محصولات مد و زیبایی را با بهترین قیمت می توانید در الانزا تجربه کنید، همراه با ضمانت 7 روزه بازگشت کالا و ارسال رایگان به سراسر ایران",
  "summary": "لذت خوب خرید اینترنتی انواع محصولات مد و زیبایی را با بهترین قیمت می توانید در الانزا تجربه کنید، همراه با ضمانت 7 روزه بازگشت کالا و ارسال رایگان به سراسر ایران",
  "subject": "فروشگاه اینترنتی الانزا",
  "topic": "محصولات آرایشی و بهداشتی، پوشاک، اکسسوری",
  "classification": "Fashion, Clothes, Accessories, Cosmetics, Skin Care"
}
    `

    return (
        <section className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between p-2">
            <section className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                <div className="col-12 d-flex flex-wrap justify-content-end align-items-center p-2">
                    <h5 className="col-12 p-2">تنظیم تاریخ انقضا محصولات</h5>
                </div>
            </section>
            <section className="col-12 d-flex justify-content-center align-items-start flex-wrap rounded p-2 shadow-sm mt-2">
                <h6 className="col-12 bg-default p-3 rounded d-flex align-items-end text-white ">
                    تنظیم تاریخ انقضا محصولات
                </h6>
                <section className="col-12 d-flex justify-content-center justify-content-xl-between align-items-start flex-wrap p-3 rounded">
                    <textarea dir="ltr" name="seo" id="" className="col-12" rows="10">
                     {text}
                    </textarea>
                </section>
                <div className="col-12 p-2 rounded bg-secondary bg-opacity-10">
                    <button className="btn btn-success text-white mx-1">ذخیره</button>
                </div>
            </section>
        </section>
    );
}

export default Seo;