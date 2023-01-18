import React from 'react';

function Robot() {
    const text = `{
  User-agent: *
Allow: /
Allow: /wp-content/uploads/
Allow: /wp-admin/admin-ajax.php
disallow: /cart-item
disallow: /cart-item/*
disallow: /address
disallow: /address/*
disallow: /search
disallow: /search/*
disallow: /error
disallow: /error/*
disallow: /order
disallow: /order/*
disallow: /checkout
disallow: /transaction
disallow: /transaction/*
disallow: /ticket
disallow: /ticket/*
disallow: /notification
disallow: /voucher
disallow: /voucher/*
disallow: /logout
disallow: /auth/verify/*
disallow: /auth/login/*
disallow: /list*
disallow: /page=
disallow: /page/*
disallow: *utm_*
Disallow: /*?
Disallow: /wp-content/plugins/
Disallow: /wp-admin/
Disallow: /2021/
Disallow: /2020/
Disallow: /blog/
Disallow: /mag/portfolio/
Disallow: /mag/gallery/

#SiteMap:
sitemap: https://elanza.com/sitemap.xml
  }
    `

    return (
        <section className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between p-2">
            <section className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                <div className="col-12 d-flex flex-wrap justify-content-end align-items-center p-2">
                        <h5 className="col-12 p-2">robots.txt</h5>
                </div>
            </section>
            <section className="col-12 d-flex justify-content-center align-items-start flex-wrap rounded p-2 shadow-sm mt-2">
                <h6 className="col-12 bg-default p-3 rounded d-flex align-items-end text-white ">
                    robots.txt
                </h6>
                <section className="col-12 d-flex justify-content-center justify-content-xl-between align-items-start flex-wrap p-3 rounded">
                    <textarea dir="ltr" name="seo" id="" className="col-12" rows="30">
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

export default Robot;