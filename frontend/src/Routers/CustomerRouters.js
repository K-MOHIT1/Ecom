import Cart from 'customer/containers/Cart/Cart'
import Checkout from 'customer/containers/Checkout/Checkout'
import Footer from 'customer/containers/Footer/Footer'
import Navigation from 'customer/containers/Navigation/Navigation'
import Order from 'customer/containers/Order/Order'
import OrderDetails from 'customer/containers/Order/OrderDetails'
import Product from 'customer/containers/Product/Product'
import ProductDetails from 'customer/containers/ProductDetails/ProductDetails'
import HomePage from 'customer/pages/HomePage/HomePage'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const CustomerRouters = () => {
  return (
    <div>
      <div>

      <Navigation/>
      </div>


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:productid" element={<ProductDetails />} />
        
        <Route
            path="/:lavelOne/:lavelTwo/:lavelThre"
            element={<Product />}
        />

        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/account/order" element={<Order/>} />
        <Route path="/account/order/:orderId" element={<OrderDetails/>} />


        {/* <Order></Order> */}
        {/* <OrderDetails/> */}

      </Routes>

      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default CustomerRouters
