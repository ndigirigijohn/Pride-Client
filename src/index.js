import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

//import components for routing
import Cart from './Components/Cart/Cart';
import FMS from './Components/FMS/FMS';
import Accounts from './Components/Accounts/Accounts';
//accounts
import Customer from './Components/Accounts/Customer/Customer';
import ShopOwner from './Components/Accounts/ShopOwner/ShopOwner';
import Admin from './Components/Accounts/Admin/Admin';

//admin routes
import Dashboard from './Components/Accounts/Admin/Dashboard/Dashboard';
import Orders from './Components/Accounts/Admin/Orders/Orders';
import ProductsA from './Components/Accounts/Admin/Products/Products';
import Offers from './Components/Accounts/Admin/Offers/Offers';
import Stock from './Components/Accounts/Admin/Stock/Stock';

//customer routes
import Favorites from './Components/Accounts/Customer/sections/Favorites';
import PersonalData from './Components/Accounts/Customer/sections/PersonalData';
import MySupplements from './Components/Accounts/Customer/sections/MySupplements';
import DataUpdate from './Components/Accounts/Customer/sections/DataUpdate';


//product page
import ProductPage from './Components/Products/ProductPage/ProductPage';

//auth
import Auth from './Components/auth/Auth';
import Login from './Components/auth/login/Login';
import SignUp from './Components/auth/signup/SignUp';




//redux imports
import { Provider } from 'react-redux';
import store from "./redux/store/store";




const root = ReactDOM.createRoot(document.getElementById('root'));
// const user = JSON.parse(localStorage.getItem('user')).role;
const user= 'customer';
const ELEMENT =()=>{
  if(user === 'customer'){
    return <Customer/>
  }
  else if(user === 'shopowner'){
    return <ShopOwner/>
  }
  else if(user === 'admin'){
    return <Admin/>
  }
  else{
    return <Accounts/>
  }
}
root.render(
  <React.StrictMode>
   <Provider store={store}>

    <BrowserRouter>
    <Routes>
          <Route path="/" element={<App/>} />
          <Route  path="/cart" element={<Cart/>} />
          <Route  path="/fms" element={<FMS/>} />

           <Route path="/accounts" element={<ELEMENT/>} >
            {/* Admin */}
            <Route path="/accounts/dashboard" element={<Dashboard/>} />
            <Route path="/accounts/orders" element={<Orders/>} />
            <Route path="/accounts/productsa" element={<ProductsA/>} />
            <Route path="/accounts/offers" element={<Offers/>} />
            <Route path="/accounts/stock" element={<Stock/>} />
            {/* customer */}
          <Route index path='/account/orders' element={<Orders/>}/>
          <Route path='/account/favorites' element={<Favorites/>}/>
          <Route path='/account/personaldata' element={<PersonalData/>}/>
          <Route path='/account/mysupplements' element={<MySupplements/>}/>
          <Route path='/account/dataupdate' element={<DataUpdate/>}/>



           </Route>
           <Route path= '/product/:id' element={<ProductPage/>}/>
           <Route path='/auth' element={<Auth/>}>
          <Route index path='/auth/login' element={<Login/>}/>
          <Route path='/auth/signup' element={<SignUp/>}/>
        </Route>




        </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
