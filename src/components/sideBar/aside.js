import React, {useState} from 'react';
import {Link, useLocation} from "react-router-dom";

function Aside({asideClass, setAsideClass}) {

    const [active, setActive] = useState('')

    return (
        <>
            <aside  className={`px-2 vh-100 col-8 col-md-3 sidebar  bg-white shadow rounded d-flex flex-wrap justify-content-center  align-content-start font-14 ${asideClass}`}>
                {/*name&picture*/}
                <div className="col-12 pt-3  fw-bold">
                    <span onClick={e => {
                        setAsideClass('hide-sidebar')
                    }} className="icon icon-Close shadow p-2 rounded-circle cursor-pointer"></span>
                </div>
                <figure className="col-9 ">
                    <img src="https://elanza.com/assets/global/img/logo.svg" className="img-fluid py-3" alt=""/>
                </figure>
                <h5 className="col-12 d-flex p-2 px-4 my-3 border-bottom rounded">پنل مدیریت</h5>
                {/*list*/}
                <div className="col-12 d-flex  align-items-center px-1 my-3 ">
                    <figure className="col-2 m-0 center p-0 h-100"><img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHUndSzxcF1UbSXX3bVILVaUbSIhoc_GEA8g&usqp=CAU"
                        className="img-fluid" alt=""/></figure>
                    <span className="px-1"> خدای فرانت آقا محسن صالحی </span>
                </div>
                {/*dashboard*/}
                <Link  to="/dashboard" className="col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2">
                    <i className="icon icon-Home-4 px-1 font-25"></i>
                    داشبورد
                </Link>
                {/*orders*/}
                <Link to="/order" onClick={e => setActive('order') }  className={`${active === 'order' ? 'select-default' : ' '} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                    <i className="icon icon-Buy-2 px-1 font-25"></i>
                    سفارش ها
                </Link>
                {/*stores*/}
                <div className="accordion col-12 " id="accordionPanelsStayOpenExample">
                    <div className="accordion-item border-0">
                        <h2 className="accordion-header col-12" id="panelsStayOpen-stores">
                            <button
                                type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseStores"
                                aria-expanded="false" aria-controls="panelsStayOpen-collapseStores"
                                onClick={e => setActive('management')}
                                className={`col-12 font-14  accordion-button collapsed py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                                <i className="icon icon-Buy-1 px-1 font-25"></i>
                                مدیریت فروشگاه ها
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseStores" className="accordion-collapse col-12 collapse "
                             aria-labelledby="panelsStayOpen-stores">
                            <div className="accordion-body p-1 center flex-wrap bg-secondary bg-opacity-10 rounded">
                                <Link to="/stores-list"
                                      onClick={e => setActive('stores-list')}
                                      className={`${active === 'stores-list' ? 'select-default' : ' '} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                                    <i className="icon icon-Menu-Veggie-Burger1 px-1 font-25"></i>
                                    لیست فروشگاه ها
                                </Link>
                                <Link to="/stores-status"
                                      onClick={e => setActive('stores-status')}
                                      className={`${active === 'stores-status' ? 'select-default' : ' '} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                                    <i className="icon icon-Menu-Veggie-Burger1 px-1 font-25"></i>
                                    وضعیت فروشگاه ها
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/*management-contract*/}
                <div className="accordion col-12 " id="accordionPanelsStayOpenExample">
                    <div className="accordion-item border-0">
                        <h2 className="accordion-header col-12" id="panelsStayOpen-contract">
                            <button
                                type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseContract"
                                aria-expanded="false" aria-controls="panelsStayOpen-collapseContract"
                                onClick={e => setActive('management')}
                                className={`col-12 font-14  accordion-button collapsed py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                                <i className="icon icon-Document-Justify-Right-1 px-1 font-25"></i>
                                مدیریت قرارداد ها
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseContract" className="accordion-collapse col-12 collapse "
                             aria-labelledby="panelsStayOpen-contract">
                            <div className="accordion-body p-1 center flex-wrap bg-secondary bg-opacity-10 rounded">
                                <Link to="/contract-list"
                                      onClick={e => setActive('contract-list')}
                                      className={`${active === 'contract-list' ? 'select-default' : ' '} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                                    <i className="icon icon-Menu-Veggie-Burger1 px-1 font-25"></i>
                                    لیست قرار دادها
                                </Link>
                                <Link to="/special-contract"
                                      onClick={e => setActive('special-status')}
                                      className={`${active === 'special-status' ? 'select-default' : ' '} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                                    <i className="icon icon-Menu-Veggie-Burger1 px-1 font-25"></i>
                                    قرارداد خاص
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/*product*/}
                <div className="accordion col-12 " id="accordionPanelsStayOpenExample">
                    <div className="accordion-item border-0">
                        <h2 className="accordion-header col-12" id="panelsStayOpen-commodity">
                            <button
                                type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapse-commodity"
                                aria-expanded="false" aria-controls="panelsStayOpen-collapse-commodity"
                                onClick={e => setActive('product')}
                                className={`col-12 font-14  accordion-button collapsed py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                                <i className="icon icon-Folder-2 px-1 font-25"></i>
                                کالاها
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapse-commodity" className="accordion-collapse col-12 collapse "
                             aria-labelledby="panelsStayOpen-commodity">
                            <div className="accordion-body p-1 center flex-wrap bg-secondary bg-opacity-10 rounded">
                                <Link to="/product"
                                      onClick={e => setActive('product-list')}
                                      className={`${active === 'product-list' ? 'select-default' : ' '} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                                    <i className="icon icon-Menu-Veggie-Burger1 px-1 font-25"></i>
                                    لیست
                                </Link>
                                <Link to="/product-create"
                                      onClick={e => setActive('product-create')}
                                      className={`${active === 'product-create' ? 'select-default' : ' '} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                                    <i className="icon icon-Add1 px-1 font-25"></i>
                                   جدید
                                </Link>
                                <Link to="/product-new"
                                      onClick={e => setActive('product-new')}
                                      className={`${active === 'new-product' ? 'select-default' : ' '} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                                    <i className="icon icon-Folder-Add-1 px-1 font-25"></i>
                                    درخواست کالای جدید
                                </Link>
                                <Link to="/request-edit-product"
                                      onClick={e => setActive('request-edit-product')}
                                      className={`${active === 'request-edit-product' ? 'select-default' : ' '} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                                    <i className="icon icon-Edit-Square px-1 font-25"></i>
                                    درخواست ویرایش کالا
                                </Link>
                                <Link to="/request-new-product"
                                      onClick={e => setActive('request-new-product')}
                                      className={`${active === 'request-new-product' ? 'select-default' : ' '} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                                    <i className="icon icon-Document-Align-Right-172 px-1 font-25"></i>
                                   درخواست تنوع جدید
                                </Link>
                                <Link to="/product-import"
                                      onClick={e => setActive('import-product')}
                                      className={`${active === 'import-product' ? 'select-default' : ' '} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                                    <i className="icon icon-Upload px-1 font-25"></i>
                                    بارگذاری محصولات
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Field*/}
                <Link to="/field" onClick={e => setActive('field')} className={`${active === 'field' ? 'select-default' : ''} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                    <i className="icon icon-Password-2 px-1 font-25"></i>
                    فیلد سفارشی
                </Link>
                {/*productGroup*/}
                <Link to="/group" onClick={e => setActive('group')}
                      className={`${active === 'group' ? 'select-default' : ''} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                    <i className="icon  icon-Filter-52 px-1 font-25"></i>
                    گروه کالا
                </Link>
                {/*categories*/}
                <Link to="/categories" onClick={e => setActive('categories')}
                      className={`${active === 'categories' ? 'select-default' : ''} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                    <i className="icon  icon-Add-Category2 px-1 font-25"></i>
                    دسته بندی ها
                </Link>
                {/*guarantees*/}
                <Link to="/guarantee" onClick={e => setActive('guarantee')}
                      className={`${active === 'guarantee' ? 'select-default' : ''} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                    <i className="icon icon-Security-Safe  px-1 font-25"></i>
                    گارانتی ها
                </Link>
                {/*brands*/}
                <div className="accordion col-12 " id="accordionPanelsStayOpenExample">
                    <div className="accordion-item border-0">
                        <h2 className="accordion-header col-12" id="panelsStayOpen-brand">
                            <button
                                type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapse-brand"
                                aria-expanded="false" aria-controls="panelsStayOpen-collapse-brand"
                                onClick={e => setActive('brand')}
                                className={`col-12 font-14  accordion-button collapsed py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                                <i className="icon icon-Folder-2 px-1 font-25"></i>
                                برند ها
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapse-brand" className="accordion-collapse col-12 collapse "
                             aria-labelledby="panelsStayOpen-brand">
                            <div className="accordion-body p-1 center flex-wrap bg-secondary bg-opacity-10 rounded">
                                <Link to="/brand"
                                      onClick={e => setActive('brand')}
                                      className={`${active === 'brand' ? 'select-default' : ' '} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                                    <i className="icon icon-Menu-Veggie-Burger1 px-1 font-25"></i>
                                    لیست
                                </Link>
                                <Link to="/new-brand"
                                      onClick={e => setActive('new-brand')}
                                      className={`${active === 'new-brand' ? 'select-default' : ' '} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                                    <i className="icon icon-Add1 px-1 font-25"></i>
                                    جدید
                                </Link>
                                <Link to="/request-brand"
                                      onClick={e => setActive('request-brand')}
                                      className={`${active === 'request-brand' ? 'select-default' : ' '} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                                    <i className="icon icon-Add1 px-1 font-25"></i>
                                    در خواست استفاده
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/*tags*/}
                <Link to="/tag" onClick={e => setActive('tag')}
                      className={`${active === 'tag' ? 'select-default' : ''} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                    <i className="icon icon-Hashtag  px-1 font-25"></i>
                    تگ ها
                </Link>
                {/*variations*/}
                <Link to="/variation" onClick={e => setActive('variation')}
                      className={`${active === 'variation' ? 'select-default' : ''} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                    <i className="icon icon-Chart2 px-1 font-25"></i>
                    تنوع ها
                </Link>
                {/*attributes*/}
                <Link to="/attribute" onClick={e => setActive('attribute')}
                      className={`${active === 'attribute' ? 'select-default' : ''} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>

                    <i className="icon icon-Graph2 px-1 font-25"></i>
                    ویژگی ها
                </Link>
                {/*users*/}
                <Link to="/user" onClick={e => setActive('user')}
                      className={`${active === 'user' ? 'select-default' : ''} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                    <i className="icon icon-Group-3 px-1 font-25"></i>
                    کاربران
                </Link>
                {/*roles*/}
                <Link to="/role" onClick={e => setActive('role')}
                      className={`${active === 'role' ? 'select-default' : ''} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                    <i className="icon icon-Profile-Square px-1 font-25"></i>
                    نقش ها
                </Link>
                {/*tickets*/}
                <Link to="/ticket" onClick={e => setActive('ticket')}
                      className={`${active === 'ticket' ? 'select-default' : ''} col-12   py-2 rounded hover-default d-flex justify-content-between  align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                    <div className="d-flex justify-content-center  align-items-center">
                        <i className="icon icon-Ticket-1 px-1 font-25"></i>
                        تیکت ها
                    </div>
                    <span className="p-1 rounded bg-default text-white">12</span>
                </Link>
                {/*vouchers*/}
                <Link to="/voucher" onClick={e => setActive('voucher')}
                      className={`${active === 'voucher' ? 'select-default' : ''} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                    <i className="icon icon-Scan-131 px-1 font-25"></i>
                    تخفیف ها
                </Link>
                {/*slider*/}
                <Link to="/slider" onClick={e => setActive('slider')}
                      className={`${active === 'slider' ? 'select-default' : ''} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                    <i className="icon icon-Image-1 px-1 font-25"></i>
                    اسلایدر
                </Link>
                {/*catch*/}
                <Link to="/catch" onClick={e => setActive('catch')}
                      className={`${active === 'catch' ? 'select-default' : ''} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                    <i className="icon icon-Send-12 px-1 font-25"></i>
                    مدیریت کَش
                </Link>
                {/*settings*/}
                <div className="accordion col-12 " id="accordionPanelsStayOpenExample">
                    <div className="accordion-item border-0">
                        <h2 className="accordion-header col-12" id="panelsStayOpen-setting">
                            <button
                                type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapse-setting"
                                aria-expanded="false" aria-controls="panelsStayOpen-collapse-setting"
                                onClick={e => setActive('setting')}
                                className={`col-12 font-14  accordion-button collapsed py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                                <i className="icon icon-Setting px-1 font-25"></i>
                                تنظیمات
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapse-setting" className="accordion-collapse col-12 collapse "
                             aria-labelledby="panelsStayOpen-setting">
                            <div className="accordion-body p-1 center flex-wrap bg-secondary bg-opacity-10 rounded">
                                <Link to="/accounting"
                                      onClick={e => setActive('accounting')}
                                      className={`${active === 'accounting' ? 'select-default' : ' '} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                                    <i className="icon icon-Dollar-Square  px-1 font-25"></i>
                                    تنظیمات حساب
                                </Link>
                                <Link to="/mobile-home"
                                      onClick={e => setActive('mobile-home')}
                                      className={`${active === 'mobile-home' ? 'select-default' : ' '} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                                    <i className="icon icon-Display-32 px-1 font-25"></i>
                                    صفحه نخست موبایل
                                </Link>
                                <Link to="/desktop-home"
                                      onClick={e => setActive('desktop-home')}
                                      className={`${active === 'desktop-home' ? 'select-default' : ' '} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                                    <i className="icon icon-Display-12 px-1 font-25"></i>
                                    صفحه نخست دسکتاپ
                                </Link>
                                <Link to="/snappay"
                                      onClick={e => setActive('snappay')}
                                      className={`${active === 'snappay' ? 'select-default' : ' '} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                                    <i className="icon icon-Display-4 px-1 font-25"></i>
                                   وضعیت سفارش اسنپ پی
                                </Link>
                                <Link to="/reagent-voucher"
                                      onClick={e => setActive('reagent-voucher')}
                                      className={`${active === 'reagent-voucher' ? 'select-default' : ' '} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                                    <i className="icon icon-Discount-Square2 px-1 font-25"></i>
                                   کد تخفیف معرف
                                </Link>
                                <Link to="/pop-up-desktop"
                                      onClick={e => setActive('pop-up-desktop')}
                                      className={`${active === 'pop-up-desktop' ? 'select-default' : ' '} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                                    <i className="icon icon-Image-2 px-1 font-25"></i>
                                    پاپ آپ دسکتاپ
                                </Link>
                                <Link to="/general-popups"
                                      onClick={e => setActive('general-popups')}
                                      className={`${active === 'general-popups' ? 'select-default' : ' '} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                                    <i className="icon icon-Image-2 px-1 font-25"></i>
                                    پاپ آپ اصلی
                                </Link>
                                <Link to="/home-text"
                                      onClick={e => setActive('home-text')}
                                      className={`${active === 'home-text' ? 'select-default' : ' '} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                                    <i className="icon icon-Text px-1 font-25"></i>
                                   متن صفحه اصلی
                                </Link>
                                <Link to="/footer-text"
                                      onClick={e => setActive('footer-text')}
                                      className={`${active === 'footer-text' ? 'select-default' : ' '} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                                    <i className="icon icon-Text px-1 font-25"></i>
                                    متن ثابت فوتر
                                </Link>
                                <Link to="/free-delivery"
                                      onClick={e => setActive('free-delivery')}
                                      className={`${active === 'free-delivery' ? 'select-default' : ' '} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                                    <i className="icon icon-Text px-1 font-25"></i>
                                    حداقل هزینه برای ارسال رایگان
                                </Link>
                                <Link to="/services"
                                      onClick={e => setActive('services')}
                                      className={`${active === 'services' ? 'select-default' : ' '} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                                    <i className="icon icon-Setting1 px-1 font-25"></i>
                                    سرویس های پیامک و درگاه بانک
                                </Link>
                                <Link to="/contract"
                                      onClick={e => setActive('contract')}
                                      className={`${active === 'contract' ? 'select-default' : ' '} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                                    <i className="icon icon-Document-Justify-Center-1 px-1 font-25"></i>
                                    متن قرارداد فروشندگان
                                </Link>
                                <Link to="/penalties"
                                      onClick={e => setActive('penalties')}
                                      className={`${active === 'penalties' ? 'select-default' : ' '} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                                    <i className="icon icon-Dollar-Circle1 px-1 font-25"></i>
                                    پنالتی
                                </Link>
                                <Link to="/products-expiration-period"
                                      onClick={e => setActive('products-expiration-period')}
                                      className={`${active === 'products-expiration-period' ? 'select-default' : ' '} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                                    <i className="icon icon-Calender-1 px-1 font-25"></i>
                                    تنظیم تاریخ انقضای محصولات
                                </Link>
                                <Link to="/seo"
                                      onClick={e => setActive('seo')}
                                      className={`${active === 'seo' ? 'select-default' : ' '} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                                    <i className="icon icon-Document-Justify-Right-2 px-1 font-25"></i>
                                    سئو
                                </Link>
                                <Link to="/robot"
                                      onClick={e => setActive('robot')}
                                      className={`${active === 'robot' ? 'select-default' : ' '} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                                    <i className="bi bi-robot px-1 font-20"></i>
                                    robot
                                </Link>
                                <Link to="/manifest"
                                      onClick={e => setActive('manifest')}
                                      className={`${active === 'manifest' ? 'select-default' : ' '} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                                    <i className="bi bi-robot px-1 font-20"></i>
                                    manifest.json
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/pages"
                      onClick={e => setActive('pages')}
                      className={`${active === 'pages' ? 'select-default' : ' '} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                    <i className="icon icon-Document-Align-Right-162 px-1 font-25"></i>
                    صفحات
                </Link>
                {/*departments*/}
                <Link to='/departments' onClick={e => setActive('departments')}
                      className={`${active === 'departments' ? 'select-default' : ''} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                    <i className="bi bi-building px-1 font-25"></i>
                    دپارتمان ها
                </Link>
                {/*banks*/}
                <Link to="/bank" onClick={e => setActive('bank')}
                      className={`${active === 'bank' ? 'select-default' : ''} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                    <i className="bi bi-bank px-1 font-25"></i>
                    بانک ها
                </Link>
                {/*announcements*/}
                <Link to="/notification" onClick={e => setActive('notification')}
                      className={`${active === 'notification' ? 'select-default' : ''} col-12    py-2 rounded hover-default d-flex align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                    <i className="bi bi-bell px-1 font-25"></i>
                    اطلاعیه ها
                </Link>
                {/*report*/}
                <Link to="/report" onClick={e => setActive('report')}
                      className={`${active === 'report' ? 'select-default' : ''} col-12    py-2 rounded hover-default d-flex justify-content-between align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                    <div className="d-flex justify-content-center  align-items-center">
                        <i className="icon icon-Danger-Triangle px-1 font-25"></i>
                         گزارشات
                    </div>
                    <span className="p-1 rounded bg-default text-white">12</span>
                </Link>
                {/*logs*/}
                <Link to="/logs" onClick={e => setActive('logs')}
                      className={`${active === 'logs' ? 'select-default' : ''} col-12    py-2 rounded hover-default d-flex justify-content-between align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                    <div className="d-flex justify-content-center  align-items-center">
                        <i className="icon icon-Document-Justify-Right-2 px-1 font-25"></i>
                         لاگ ها
                    </div>
                </Link>
                {/*redirect*/}
                <Link to="/redirect" onClick={e => setActive('redirect')}
                      className={`${active === 'redirect' ? 'select-default' : ''} col-12    py-2 rounded hover-default d-flex justify-content-between align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                    <div className="d-flex justify-content-center  align-items-center">
                        <i className="icon icon-Right-Square-1 px-1 font-25"></i>
                        انتقال دهنده ها
                    </div>
                </Link>
                {/*file*/}
                <Link to="/file" onClick={e => setActive('file')}
                      className={`${active === 'file' ? 'select-default' : ''} col-12    py-2 rounded hover-default d-flex justify-content-between align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                    <div className="d-flex justify-content-center  align-items-center">
                        <i className="icon icon-Folder-1 px-1 font-25"></i>
                        مدیریت فایل ها
                    </div>
                </Link>
                {/*daily*/}
                <Link to="/daily" onClick={e => setActive('daily')}
                      className={`${active === 'daily' ? 'select-default' : ''} col-12    py-2 rounded hover-default d-flex justify-content-between align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                    <div className="d-flex justify-content-center  align-items-center">
                        <i className="icon icon-Gift-1 px-1 font-25"></i>
                        لیست پیشنهاد ویژه
                    </div>
                </Link>
                {/*/user/report-by-success-order*/}
                <Link to="/user/report-by-success-order" onClick={e => setActive('/user/report-by-success-order')}
                      className={`${active === '/user/report-by-success-order' ? 'select-default' : ''} col-12    py-2 rounded hover-default d-flex justify-content-between align-items-center px-1 my-1 text-decoration-none text-submit-gunmetal2`}>
                    <div className="d-flex justify-content-center  align-items-center">
                        <i className="icon icon-Profile-Octagon1 px-1 font-25"></i>
                        تفکیک کاربران بر اساس سفارش موفق
                    </div>
                </Link>
            </aside>
        </>
    );
}

export default Aside;