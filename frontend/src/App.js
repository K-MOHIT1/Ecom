import logo from './logo.svg';
import './App.css';
import Navigation from './customer/containers/Navigation/Navigation';
import MainCarousal from './customer/containers/HomeCarousal/MainCarousal';
import HomePage from './customer/pages/HomePage/HomePage';
import Footer from './customer/containers/Footer/Footer';
import Product from './customer/containers/Product/Product';
import ProductDetails from './customer/containers/ProductDetails/ProductDetails';
import React from 'react';
import Cart from 'customer/containers/Cart/Cart';
import Checkout from 'customer/containers/Checkout/Checkout';

function App() {
  return (
    <div className="">
    <Navigation/>
      <div>
        {/* <HomePage/> */}
        {/* <Product></Product> */}
        {/* <ProductDetails></ProductDetails> */}
        {/* <Cart></Cart> */}
        <Checkout/>
      </div>

      <Footer></Footer>
      
    </div>
  );
}

export default App;
