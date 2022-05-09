import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { CustomerList } from "./customer/CustomerList";
import { CustomerCreate } from "./customer/CustomerCreate";
import { CustomerEdit } from "./customer/CustomerEdit";
import { CustomerShow } from "./customer/CustomerShow";
import { AddressList } from "./address/AddressList";
import { AddressCreate } from "./address/AddressCreate";
import { AddressEdit } from "./address/AddressEdit";
import { AddressShow } from "./address/AddressShow";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { RoomList } from "./room/RoomList";
import { RoomCreate } from "./room/RoomCreate";
import { RoomEdit } from "./room/RoomEdit";
import { RoomShow } from "./room/RoomShow";
import { RoomEnrollmentList } from "./roomEnrollment/RoomEnrollmentList";
import { RoomEnrollmentCreate } from "./roomEnrollment/RoomEnrollmentCreate";
import { RoomEnrollmentEdit } from "./roomEnrollment/RoomEnrollmentEdit";
import { RoomEnrollmentShow } from "./roomEnrollment/RoomEnrollmentShow";
import { PaymentRecordList } from "./paymentRecord/PaymentRecordList";
import { PaymentRecordCreate } from "./paymentRecord/PaymentRecordCreate";
import { PaymentRecordEdit } from "./paymentRecord/PaymentRecordEdit";
import { PaymentRecordShow } from "./paymentRecord/PaymentRecordShow";
import { PaymentGatewayList } from "./paymentGateway/PaymentGatewayList";
import { PaymentGatewayCreate } from "./paymentGateway/PaymentGatewayCreate";
import { PaymentGatewayEdit } from "./paymentGateway/PaymentGatewayEdit";
import { PaymentGatewayShow } from "./paymentGateway/PaymentGatewayShow";
import { PlatformProviderList } from "./platformProvider/PlatformProviderList";
import { PlatformProviderCreate } from "./platformProvider/PlatformProviderCreate";
import { PlatformProviderEdit } from "./platformProvider/PlatformProviderEdit";
import { PlatformProviderShow } from "./platformProvider/PlatformProviderShow";
import { PlatformTierList } from "./platformTier/PlatformTierList";
import { PlatformTierCreate } from "./platformTier/PlatformTierCreate";
import { PlatformTierEdit } from "./platformTier/PlatformTierEdit";
import { PlatformTierShow } from "./platformTier/PlatformTierShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Famatch App Bootstrap"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="Customer"
          list={CustomerList}
          edit={CustomerEdit}
          create={CustomerCreate}
          show={CustomerShow}
        />
        <Resource
          name="Address"
          list={AddressList}
          edit={AddressEdit}
          create={AddressCreate}
          show={AddressShow}
        />
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
        <Resource
          name="Room"
          list={RoomList}
          edit={RoomEdit}
          create={RoomCreate}
          show={RoomShow}
        />
        <Resource
          name="RoomEnrollment"
          list={RoomEnrollmentList}
          edit={RoomEnrollmentEdit}
          create={RoomEnrollmentCreate}
          show={RoomEnrollmentShow}
        />
        <Resource
          name="PaymentRecord"
          list={PaymentRecordList}
          edit={PaymentRecordEdit}
          create={PaymentRecordCreate}
          show={PaymentRecordShow}
        />
        <Resource
          name="PaymentGateway"
          list={PaymentGatewayList}
          edit={PaymentGatewayEdit}
          create={PaymentGatewayCreate}
          show={PaymentGatewayShow}
        />
        <Resource
          name="PlatformProvider"
          list={PlatformProviderList}
          edit={PlatformProviderEdit}
          create={PlatformProviderCreate}
          show={PlatformProviderShow}
        />
        <Resource
          name="PlatformTier"
          list={PlatformTierList}
          edit={PlatformTierEdit}
          create={PlatformTierCreate}
          show={PlatformTierShow}
        />
      </Admin>
    </div>
  );
};

export default App;
