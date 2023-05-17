import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContent from "./mainContent/MainContent";
import UserGM from "./user_gm/User_GM";
import UserSHQ from "./user_SHQ/userSHQ";
import UserBranch from "./userBranch/UserBranch";
import UserManage from "./user_Manage/User_Manage";
import DashboardLayout from "./Layout/DashboardLayout";
import AccountNumber from "./masters/AccountNumber";
import Fob from "./masters/Fob";
import FreightTerms from "./masters/FreightTerms";
import OrderType from "./masters/OrderType";
import ShippingMethod from "./masters/ShippingMethod";
import Tax from "./masters/Tax";
import TransactionTypes from "./masters/TransactionTypes";
import Warehouse from "./masters/Warehouse";
import PriceList from "./masters/PriceList";
import PaymentDetail from "./masters/PaymentDetail";
import AccountNumberSetting from "./settings/AccountNumber";
import FobSetting from "./settings/Fob";
import FreightSetting from "./settings/Freight";
import OrderTypeSetting from "./settings/OrderType";
import PriceListSetting from "./settings/PriceList";
import ShippingListSetting from "./settings/ShippingList";
import TransactionTypeSetting from "./settings/TransactionType";
import TaxSetting from "./settings/Tax";
import WarehouseSetting from "./settings/Warehouse";
import PaymentSetting from "./settings/Payment";
import ProductDetailsSetting from "./settings/ProductDetails";
import ConversionReport from "./reports/ConversionReport";
import LineReport from "./reports/LineReport";
import Others from "./reports/Others";
import UpdateProfile from "./SuperAdmin/UpdateProfile";
import ChangePassword from "./SuperAdmin/ChangePassword";
import LogOut from "./SuperAdmin/LogIn";
import AccountSetting from "./settingUpdate/UpdateAccountSetting";
import UpdateFobSetting from "./settingUpdate/UpdateFobSetting";
import UpdateFreightSetting from "./settingUpdate/UpdateFreightSetting";
import UpdateOrderSetting from "./settingUpdate/UpdateOrderSetting";
import UpdatePriceSetting from "./settingUpdate/UpdatePriceSetting";
import UpdateShippingSetting from "./settingUpdate/UpdateShippingSetting";
import UpdateTransaction from "./settingUpdate/UpdateTransaction";
import UpdateTax from "./settingUpdate/UpdateTax";
import UpdateWare from "./settingUpdate/UpdateWare";
import UpdatePayment from "./settingUpdate/UpdatePayment";
import UpdateProduct from "./settingUpdate/UpdateProduct";
import UpdateGmUser from "./userUpdate/UpdateGm";
import UpdateSHQ from "./userUpdate/UpdateSHQ";
import UpdateBranch from "./userUpdate/UpdateBranch";
import UpdateSales from "./userUpdate/UpdateSales";
import CreateOffer from "./reports/CreateOffer";
import EditGM from "./editUsers/EditGM";
import EditSGQ from "./editUsers/EditSGQ";
import EditBranch from "./editUsers/EditBranch";
import EditSales from "./editUsers/EditSales";
import EditAccountNumber from "./editSetting/EditAccountNumber";
import EditFob from "./editSetting/EditFob";
import EditFreight from "./editSetting/EditFreight";
import EditOrder from "./editSetting/EditOrder";
import EditPrice from "./editSetting/EditPrice";
import EditShipping from "./editSetting/EditShipping";
import EditTransaction from "./editSetting/EditTransaction";
import EditTax from "./editSetting/EditTax";
import EditWarehouse from "./editSetting/EditWarehouse";
import EditPayment from "./editSetting/EditPayment";
import EditDetails from "./editSetting/EditDetails";
import TrackUser from "./trackUser/TrackUser";
import CreateOrder from "./reports/CreateOrder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { index: true,  element: <MainContent />, },
      {path: "gm", element: <UserGM />, },
      {  path: "shq",element: <UserSHQ />},
      { path: "branch", element: <UserBranch /> },
      { path: "sales", element: <UserManage /> },
      { path: "account", element: <AccountNumber /> },
      { path: "fob", element: <Fob /> },
      { path: "freight", element: <FreightTerms /> },
      { path: "orderType", element: <OrderType /> },
      { path: "shippingMethod", element: <ShippingMethod /> },
      { path: "tax", element: <Tax /> },
      { path: "transactionType", element: <TransactionTypes /> },
      { path: "warehouse", element: <Warehouse /> },
      { path: "priceList", element: <PriceList /> },
      { path: "paymentTerms", element: <PaymentDetail /> },
      { path: "Account Number setting", element: <AccountNumberSetting /> },
      { path: "fob setting", element: <FobSetting /> },
      { path: "freight setting", element: <FreightSetting /> },
      { path: "orderType Setting", element: <OrderTypeSetting /> },
      { path: "price Setting", element: <PriceListSetting /> },
      { path: "shippingList Setting", element: <ShippingListSetting /> },
      { path: "transactionSetting", element: <TransactionTypeSetting /> },
      { path: "tax Setting", element: <TaxSetting /> },
      { path: "warehouse setting", element: <WarehouseSetting /> },
      { path: "payment setting", element: <PaymentSetting /> },
      { path: "product setting", element: <ProductDetailsSetting /> },
      { path: "tableAccount", element: <AccountNumberSetting /> },
      { path: "tableFob", element: <FobSetting /> },
      { path: "tableFreight", element: <FreightSetting /> },
      { path: "tableOrder", element: <OrderTypeSetting /> },
      { path: "tablePrice", element: <PriceListSetting /> },
      { path: "tableShipping", element: <ShippingListSetting /> },
      { path: "tableTransaction", element: <TransactionTypeSetting /> },
      { path: "tableTax", element: <TaxSetting /> },
      { path: "tableWareHouse", element: <WarehouseSetting /> },
      { path: "tablePayment", element: <PaymentSetting /> },
      { path: "tableproduct", element: <ProductDetailsSetting /> },
      { path: "conversionReport", element: <ConversionReport /> },
      { path: "lineReport", element: <LineReport /> },
      { path: "others", element: <Others /> },
      { path: "changePassword", element: <ChangePassword /> },
      { path: "updateProfile", element: <UpdateProfile /> },
      { path: "settingAccount", element: <AccountSetting /> },
      { path: "Account Number setting", element: <AccountNumberSetting /> },
      { path: "UpdateFobSetting", element: <UpdateFobSetting /> },
      { path: "updateFreight", element: <UpdateFreightSetting /> },
      { path: "updateOrder", element: <UpdateOrderSetting /> },
      { path: "updatePriceList", element: <UpdatePriceSetting /> },
      { path: "updateShipping", element: <UpdateShippingSetting /> },
      { path: "updateTransaction", element: <UpdateTransaction /> },
      { path: "updateTax", element: <UpdateTax /> },
      { path: "updateWare", element: <UpdateWare /> },
      { path: "updatePayment", element: <UpdatePayment /> },
      { path: "updateProductDetail", element: <UpdateProduct /> },
      { path: "updateUserGm", element: <UpdateGmUser /> },
      { path: "updateUserShq", element: <UpdateSHQ /> },
      { path: "updateBranch", element: <UpdateBranch /> },
      { path: "updateSales", element: <UpdateSales /> },
      { path: "createOffer", element: <CreateOffer /> },
      { path: "editUserGm", element: <EditGM /> },
      { path: "editShq", element: <EditSGQ /> },
      { path: "editBranch", element: <EditBranch /> },
      { path: "editManage", element: <EditSales /> },
      { path: "editAccountNumber", element: <EditAccountNumber /> },
      { path: "editFob", element: <EditFob /> },
      { path: "editFreight", element: <EditFreight /> },
      { path: "editOrder", element: <EditOrder /> },
      { path: "editPrice", element: <EditPrice /> },
      { path: "editShipping", element: <EditShipping /> },
      { path: "editTax", element: <EditTax /> },
      { path: "editTransaction", element: <EditTransaction /> },
      { path: "editWareHouse", element: <EditWarehouse /> },
      { path: "editWareHouse", element: <EditWarehouse /> },
      { path: "editPayment", element: <EditPayment /> },
      { path: "editDetail", element: <EditDetails /> },
      { path: "track", element: <TrackUser /> },
      { path: "createOrder", element: <CreateOrder /> },
    ],
  },

  { path: "logout", element: <LogOut /> },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
