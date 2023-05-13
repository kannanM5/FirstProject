import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContent from "./mainContent/MainContent";
import User_GM from "./user_gm/User_GM";
import UserSHQ from "./user_SHQ/userSHQ";
import UserBranch from "./userBranch/UserBranch";
import User_Manage from "./user_Manage/User_Manage";
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
import LogOut from "./SuperAdmin/LogOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <MainContent />,
      },
      {
        path: "gm",
        element: <User_GM />,
      },
      {
        path: "shq",
        element: <UserSHQ />,
      },
      {
        path: "branch",
        element: <UserBranch />,
      },
      {
        path: "sales",
        element: <User_Manage />,
      },
      {
        path: "account",
        element: <AccountNumber />,
      },
      {
        path: "fob",
        element: <Fob />,
      },
      {
        path: "freight",
        element: <FreightTerms />,
      },
      {
        path: "orderType",
        element: <OrderType />,
      },
      {
        path: "shippingMethod",
        element: <ShippingMethod />,
      },
      {
        path: "tax",
        element: <Tax />,
      },
      {
        path: "transactionType",
        element: <TransactionTypes />,
      },
      {
        path: "warehouse",
        element: <Warehouse />,
      },
      {
        path: "priceList",
        element: <PriceList />,
      },
      {
        path: "paymentTerms",
        element: <PaymentDetail />,
      },
      {
        path: "Account Number setting",
        element: <AccountNumberSetting />,
      },
      {
        path: "fob setting",
        element: <FobSetting />,
      },
      {
        path: "freight setting",
        element: <FreightSetting />,
      },
      {
        path: "orderType Setting",
        element: <OrderTypeSetting />,
      },
      {
        path: "price Setting",
        element: <PriceListSetting />,
      },
      {
        path: "shippingList Setting",
        element: <ShippingListSetting />,
      },
      {
        path: "transactionSetting",
        element: <TransactionTypeSetting />,
      },
      {
        path: "tax Setting",
        element: <TaxSetting />,
      },
      {
        path: "warehouse setting",
        element: <WarehouseSetting />,
      },
      {
        path: "payment setting",
        element: <PaymentSetting />,
      },
      {
        path: "product setting",
        element: <ProductDetailsSetting />,
      },
      {
        path: "tableAccount",
        element: <AccountNumberSetting />,
      },
      {
        path: "tableFob",
        element: <FobSetting />,
      },
      {
        path: "tableFreight",
        element: <FreightSetting />,
      },
      {
        path: "tableOrder",
        element: <OrderTypeSetting />,
      },
      {
        path: "tablePrice",
        element: <PriceListSetting />,
      },
      {
        path: "tableShipping",
        element: <ShippingListSetting />,
      },
      {
        path: "tableTransaction",
        element: <TransactionTypeSetting />,
      },
      {
        path: "tableTax",
        element: <TaxSetting />,
      },
      {
        path: "tableWareHouse",
        element: <WarehouseSetting />,
      },
      {
        path: "tablePayment",
        element: <PaymentSetting />,
      },
      {
        path: "tableproduct",
        element: <ProductDetailsSetting />,
      },
      {
        path: "conversionReport",
        element: <ConversionReport />,
      },
      {
        path: "lineReport",
        element: <LineReport />,
      },
      {
        path: "others",
        element: <Others />,
      },
      {
        path: "changePassword",
        element: <ChangePassword />,
      },
      {
        path: "updateProfile",
        element: <UpdateProfile />,
      },
    ],
    // path: "logout",
    // element: <LogOut />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
