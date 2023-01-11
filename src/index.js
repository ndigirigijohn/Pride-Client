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
          <Route exact path="/cart" component={<Cart/>} />
          <Route exact path="/fms" component={<FMS/>} />
          <Route exact path="/accounts" component={<Accounts/>} />
        </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
