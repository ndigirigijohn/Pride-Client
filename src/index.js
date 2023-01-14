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



//redux imports
import { Provider } from 'react-redux';
import store from "./redux/store/store";




const root = ReactDOM.createRoot(document.getElementById('root'));
// const user = JSON.parse(localStorage.getItem('user')).role;
const user= 'shopowner';
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

           <Route path="/accounts" element={<ELEMENT/>} />


        </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
