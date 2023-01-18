
import "./assets/scss/public/bootstrap.css"
import "./assets/scss/index.scss"
import {Route, Routes} from "react-router";
import Login from "./pages/auth/login";
import User from "./pages/user/user";
import {BrowserRouter} from "react-router-dom";
import AppLayout from "./layouts/appLayout";
import OrdersComponent from "./pages/order/order/ordersComponent";
import Order from "./pages/order/singleOrder/order";
import StoresList from "./pages/stores/storesList/storesList";
import EditStores from "./pages/editStores/editStores";
import PanelLayout from "./layouts/panelLayout";
import StoresStatus from "./pages/stores/storesStatus/storesStatus";
import ContractList from "./pages/contract/contractLis/contractList";
import SpecialContract from "./pages/contract/contractLis/specialContract";
import ContractListEdit from "./pages/contract/contractLis/contract-list-edit";
import Product from "./pages/product/product";
import ProductEdit from "./pages/product/productEdit";
import ProductVariations from "./pages/product/ProductVariations/ProductVariations";
import ProductVariationsEdit from "./pages/product/ProductVariations/ProductVariationsEdit";
import SeeVariations from "./pages/product/ProductVariations/SeeVariations";
import GroupProducts from "./pages/product/group/groupProducts";
import GroupProductCreate from "./pages/product/group/groupProductCreate";
import GroupCommodity from "./pages/product/group/groupCommodity";
import GroupCommodityEdit from "./pages/product/group/groupCommodityEdit";
import Categories from "./pages/categories/categories";
import ProductRequestEdit from "./pages/product/productRequestEdit";
import Brand from "./pages/brand/brand";
import NewBrand from "./pages/brand/newBrand";
import Dashboard from "./pages/dashboard/dashboard";
import RequestBrand from "./pages/brand/requestBrand";
import Tag from "./pages/tag/tag";
import EditTag from "./pages/tag/editTag";
import Variation from "./pages/variation/variation";
import VariationOption from "./pages/variation/VariationOption";
import VariationOptionEdit from "./pages/variation/VariationOptionEdit";
import VariationCategory from "./pages/variation/VariationCategory";
import VariationEdit from "./pages/variation/variationEdit";
import Attribute from "./pages/attribute/Attribute";
import AttributeOption from "./pages/attribute/AttributeOption";
import AttributeOptionEdit from "./pages/attribute/AttributeOptionEdit";
import AttributeCategory from "./pages/attribute/AttributeCategory";
import AttributeEdit from "./pages/attribute/AttributeEdit";
import UserEdit from "./pages/user/userEdit";
import UserShow from "./pages/user/UserShow";
import Field from "./pages/field/field";
import Group from "./pages/group/Group";
import GroupEdit from "./pages/group/GroupEdit";
import GroupOrder from "./pages/group/GroupOrder";
import ProductCreate from "./pages/product/ProductCreate";
import ProductNew from "./pages/product/ProductNew";
import ProductRequestNew from "./pages/product/ProductRequestNew";
import ProductImport from "./pages/product/ProductImport";
import Guarantee from "./pages/guarantee/guarantee";
import GuaranteeEdit from "./pages/guarantee/guaranteeEdit";
import CategoryEdit from "./pages/categories/categoryEdit";
import CategoryShow from "./pages/categories/categoryShow";
import Role from "./pages/role/role";
import RoleEdit from "./pages/role/roleEdit";
import RoleUser from "./pages/role/roleUser";
import RoleCreate from "./pages/role/roleCreate";
import UserCreate from "./pages/user/userCreate";
import RolePermission from "./pages/role/rolePermission";
import Ticket from "./pages/ticket/ticket";
import TicketSingleComponent from "./pages/ticket/ticketSingleComponent";
import Voucher from "./pages/voucher/voucher";
import VoucherShow from "./pages/voucher/voucherShow";
import VoucherEdit from "./pages/voucher/voucherEdit";
import VoucherCreate from "./pages/voucher/VoucherCreate";
import Slider from "./pages/slider/slider";
import SliderShow from "./pages/slider/sliderShow";
import SliderEdit from "./pages/slider/sliderEdit";
import SliderCreate from "./pages/slider/sliderCreate";
import Catch from "./pages/catch/catch";
import Accounting from "./pages/setting/accounting";
import MobileHome from "./pages/setting/MobileHome";
import DesktopHome from "./pages/setting/DesktopHome";
import Snappay from "./pages/setting/snappay";
import ReagentVoucher from "./pages/setting/reagentVoucher";
import PopUp from "./pages/setting/popUp";
import GeneralPopups from "./pages/setting/GeneralPopups";
import HomeText from "./pages/setting/homeText";
import FooterText from "./pages/setting/footerText";
import FreeDelivery from "./pages/setting/freeDelivery";
import Services from "./pages/setting/services";
import Test from "./test/test";
import Contract from "./pages/setting/contract";
import Penalties from "./pages/setting/penalties";
import ProductsExpirationPeriod from "./pages/setting/productsExpirationPeriod";
import Seo from "./pages/setting/seo";
import Robot from "./pages/setting/robot";
import Manifest from "./pages/setting/manifest";
import Pages from "./pages/page/pages";
import Department from "./pages/department/department";
import PageEdit from "./pages/page/pagedit";
import DepartmentEdit from "./pages/department/departmentEdit";
import Bank from "./pages/bank/bank";
import BankEdit from "./pages/bank/bankEdit";
import NotificationPage from "./pages/notification/notificationPage";
import NotificationEdit from "./pages/notification/notificationEdit";
import Report from "./pages/report/report";
import ReportShow from "./pages/report/reportShow";
import Logs from "./pages/logs/logs";
import Redirect from "./pages/redirect/redirect";
import RedirectEdit from "./pages/redirect/redirectEdit";
import File from "./pages/file/file";
import FileCreate from "./pages/file/fileCreate";
import Daily from "./pages/daily/daily";
import DailyShow from "./pages/daily/dailyShow";
import DailyCreate from "./pages/daily/dailyCreate";
import UserBySuccessOrder from "./pages/user/userBySuccessOrder";
import AuthMiddleware from "./middlewares/authMiddleware";
import VerifyMiddleWare from "./middlewares/verifyMiddleWare";
import GuestMiddleware from "./middlewares/guestMiddleware";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AuthMiddleware />}>
                    <Route element={<VerifyMiddleWare />}>
                        <Route element={<PanelLayout/>}>
                            <Route path='/dashboard' element={ <Dashboard to="/" /> }/>


                            <Route path="/" element={<Dashboard/>}/>
                            <Route path="/order" element={<OrdersComponent/>}/>
                            <Route path="/order/:unique_id" element={<Order/>}/>
                            <Route path="/stores-list" element={<StoresList/>}/>
                            <Route path="/stores-status" element={<StoresStatus/>}/>
                            <Route path="/editStore" element={<EditStores/>}/>
                            <Route path="/contract-list" element={<ContractList/>}/>


                            <Route path="/brand" element={<Brand/>}/>
                            <Route path="/new-brand" element={<NewBrand/>}/>
                            <Route path="/request-brand" element={<RequestBrand/>}/>

                            <Route path="/tag" element={<Tag/>}/>
                            <Route path="/tag/edit" element={<EditTag/>}/>

                            <Route path="/variation" element={<Variation/>}/>
                            <Route path="/variation-option" element={<VariationOption/>}/>
                            <Route path="/variation-option-edit" element={<VariationOptionEdit/>}/>
                            <Route path="/variation-category" element={<VariationCategory/>}/>
                            <Route path="/variation-edit" element={<VariationEdit/>}/>

                            <Route path="/attribute" element={<Attribute/>}/>
                            <Route path="/attribute-option" element={<AttributeOption/>}/>
                            <Route path="/attribute-option-edit" element={<AttributeOptionEdit/>}/>
                            <Route path="/attribute-category" element={<AttributeCategory/>}/>
                            <Route path="/attribute-edit" element={<AttributeEdit/>}/>

                            <Route path="/user" element={<User/>}/>
                            <Route path="/user-create" element={<UserCreate/>}/>
                            <Route path="/edit-user" element={<UserEdit/>}/>
                            <Route path="/show-user" element={<UserShow/>}/>


                            <Route path="/field" element={<Field/>}/>


                            <Route path="/group" element={<Group/>}/>
                            <Route path="/group-order" element={<GroupOrder/>}/>
                            <Route path="/group-edit" element={<GroupEdit/>}/>

                            <Route path="/product" element={<Product/>}/>
                            <Route path="/product-edit" element={<ProductEdit/>}/>
                            <Route path="/product-new" element={<ProductNew/>}/>
                            <Route path="/product-create" element={<ProductCreate/>}/>
                            <Route path="/product-import" element={<ProductImport/>}/>
                            <Route path="/request-edit-product" element={<ProductRequestEdit/>}/>
                            <Route path="/request-new-product" element={<ProductRequestNew/>}/>


                            <Route path="/product-variations" element={<ProductVariations/>}/>
                            <Route path="/product-variations-edit" element={<ProductVariationsEdit/>}/>

                            <Route path="/guarantee" element={<Guarantee/>}/>
                            <Route path="/guarantee-edit" element={<GuaranteeEdit/>}/>

                            <Route path="/categories" element={<Categories/>}/>
                            <Route path="/category-edit" element={<CategoryEdit/>}/>
                            <Route path="/category-show" element={<CategoryShow/>}/>

                            <Route path="/role" element={<Role/>}/>
                            <Route path="/role-user" element={<RoleUser/>}/>
                            <Route path="/role-edit" element={<RoleEdit/>}/>
                            <Route path="/role-create" element={<RoleCreate/>}/>
                            <Route path="/role-permission" element={<RolePermission/>}/>

                            <Route path="/ticket" element={<Ticket/>}/>
                            <Route path="/ticket/:id" element={<TicketSingleComponent/>}/>

                            <Route path="/voucher" element={<Voucher/>}/>
                            <Route path="/voucher-show-order" element={<VoucherShow/>}/>
                            <Route path="/voucher-edit" element={<VoucherEdit/>}/>
                            <Route path="/voucher-create" element={<VoucherCreate/>}/>

                            <Route path="/slider" element={<Slider/>}/>
                            <Route path="/slider-show" element={<SliderShow/>}/>
                            <Route path="/slider-edit" element={<SliderEdit/>}/>
                            <Route path="/slider-create" element={<SliderCreate/>}/>


                            <Route path="/catch" element={<Catch/>}/>


                            {/*setting*/}
                            <Route path="/accounting" element={<Accounting/>}/>
                            <Route path="/mobile-home" element={<MobileHome/>}/>
                            <Route path="/desktop-home" element={<DesktopHome/>}/>
                            <Route path="/snappay" element={<Snappay/>}/>
                            <Route path="/reagent-voucher" element={<ReagentVoucher/>}/>
                            <Route path="/pop-up-desktop" element={<PopUp/>}/>
                            <Route path="/general-popups" element={<GeneralPopups/>}/>
                            <Route path="/home-text" element={<HomeText/>}/>
                            <Route path="/footer-text" element={<FooterText/>}/>
                            <Route path="/free-delivery" element={<FreeDelivery/>}/>
                            <Route path="/services" element={<Services/>}/>
                            <Route path="/contract" element={<Contract/>}/>
                            <Route path="/penalties" element={<Penalties/>}/>
                            <Route path="/products-expiration-period" element={<ProductsExpirationPeriod/>}/>
                            <Route path="/seo" element={<Seo/>}/>
                            <Route path="/robot" element={<Robot/>}/>
                            <Route path="/manifest" element={<Manifest/>}/>



                            <Route path="/pages" element={<Pages/>}/>
                            <Route path="/page/edit" element={<PageEdit/>}/>




                            <Route path="/departments" element={<Department/>}/>
                            <Route path="/department/edit" element={<DepartmentEdit/>}/>


                            <Route path="/bank" element={<Bank/>}/>
                            <Route path="/bank/edit" element={<BankEdit/>}/>

                            <Route path="/notification" element={<NotificationPage/>}/>
                            <Route path="/notification/edit" element={<NotificationEdit/>}/>


                            <Route path="/report" element={<Report/>}/>
                            <Route path="/report/show" element={<ReportShow/>}/>


                            <Route path="/logs" element={<Logs/>}/>


                            <Route path="/redirect" element={<Redirect/>}/>
                            <Route path="/redirect/edit" element={<RedirectEdit/>}/>


                            <Route path="/file" element={<File/>}/>
                            <Route path="/file/create" element={<FileCreate/>}/>


                            <Route path="/daily" element={<Daily/>}/>
                            <Route path="/daily/show" element={<DailyShow/>}/>
                            <Route path="/daily/create" element={<DailyCreate/>}/>



                            <Route path="/user/report-by-success-order" element={<UserBySuccessOrder/>}/>




                            <Route path="/contract-list-edit" element={<ContractListEdit/>}/>
                            <Route path="/special-contract" element={<SpecialContract/>}/>
                            <Route path="/see-variations" element={<SeeVariations/>}/>
                            <Route path="/group-products" element={<GroupProducts/>}/>
                            <Route path="/group-create" element={<GroupProductCreate/>}/>
                            <Route path="/group-commodity" element={<GroupCommodity/>}/>
                            <Route path="/group-commodity-edit" element={<GroupCommodityEdit/>}/>
                        </Route>
                    </Route>
                </Route>
            </Routes>
            <Routes>
              <Route element={<AppLayout />}>
                  <Route element={<GuestMiddleware />}>
                      <Route path="/login" element={<Login/>}/>
                      <Route path="/test" element={<Test/>}/>
                  </Route>
              </Route>
            </Routes>
        </BrowserRouter>


    )
}

export default App;
