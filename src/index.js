import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Sequel from './Components/Sequel/Sequel';

//import components for routing
import Cart from './Components/Cart/Cart';
import FMS from './Components/FMS/FMS';
//accounts
import Customer from './Components/Accounts/Customer/Customer';
import Admin from './Components/Accounts/Admin/Admin';
import ShopOwner from './Components/Accounts/ShopOwner/ShopOwner';

//admin routes
import Dashboard from './Components/Accounts/Admin/Dashboard/Dashboard';
import Orders from './Components/Accounts/Admin/Orders/Orders';
import ProductsA from './Components/Accounts/Admin/Products/Products';
import Shops from './Components/Accounts/Admin/Shops/Shops';
import Customers from './Components/Accounts/Admin/Customers/Customers';
import ShopOwners from './Components/Accounts/Admin/ShopOwners/ShopOwners';


//customer routes
import Favorites from './Components/Accounts/Customer/sections/Favorites';
import PersonalData from './Components/Accounts/Customer/sections/PersonalData';
import MySupplements from './Components/Accounts/Customer/sections/MySupplements';
import DataUpdate from './Components/Accounts/Customer/sections/DataUpdate';
import OrdersC from './Components/Accounts/Customer/sections/Orders';

//shop owner routes
import DashboardS from './Components/Accounts/ShopOwner/Dashboard/Dashboard';
import OrdersS from './Components/Accounts/ShopOwner/Orders/Orders';
import ProductsAS from './Components/Accounts/ShopOwner/Products/Products';
import CustomersS from './Components/Accounts/ShopOwner/Customers/Customers';



//product page
import ProductPage from './Components/Products/ProductPage/ProductPage';

//auth
import Auth from './Components/auth/Auth';
import Login from './Components/auth/login/Login';
import SignUp from './Components/auth/signup/SignUp';

import Results from './Components/Results/Results';




//redux imports
import { Provider } from 'react-redux';
import store from "./redux/store/store";




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
   <Provider store={store}>

    <BrowserRouter>
    <Routes>
          <Route path="/" element={<App/>} />
          <Route  path="/cart" element={<Cart/>} />
          <Route  path="/fms" element={<FMS/>} />

           <Route path='/admin' element={<Admin/>} >
            {/* Admin */}
            <Route path="/admin/dashboard" element={<Dashboard/>} />
            <Route path="/admin/orders" element={<Orders/>} />
            <Route path="/admin/productsa" element={<ProductsA/>} />
            <Route path="/admin/customers" element={<Customers/>} />
            <Route path="/admin/shops" element={<Shops/>} />
            <Route path="/admin/owners" element={<ShopOwners/>} />


           </Route>
            <Route path='/customer' element={<Customer/>} >
            {/* customer */}
          <Route index path='/customer/ordersc' element={<OrdersC/>}/>
          <Route path='/customer/favorites' element={<Favorites/>}/>
          <Route path='/customer/personaldata' element={<PersonalData/>}/>
          <Route path='/customer/mysupplements' element={<MySupplements/>}/>
          <Route path='/customer/dataupdate' element={<DataUpdate/>}/>
            </Route>

            <Route path='/shopowner' element={<ShopOwner/>} >
            {/* shop owner */}
          <Route index path='/shopowner/dashboard' element={<DashboardS/>}/>
          <Route path='/shopowner/orders' element={<OrdersS/>}/>
          <Route path='/shopowner/productsa' element={<ProductsAS/>}/>
          <Route path='/shopowner/customers' element={<CustomersS/>}/>
            </Route>

           <Route path= '/product/:id' element={<ProductPage/>}/>
           <Route path='/auth' element={<Auth/>}>
          <Route index path='/auth/login' element={<Login/>}/>
          <Route path='/auth/signup' element={<SignUp/>}/>
        </Route>

        <Route path='/sequel' element={<Sequel/>}/>

        <Route path='/results' element={<Results/>}/>




        </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
