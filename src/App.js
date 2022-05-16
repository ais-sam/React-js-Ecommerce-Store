import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import CartPage from './pages/CartPage';
import items from './data/store-items.js';
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
  // states :
  const [data] = useState(items)
  const [orders, setOrders] = useState([])

  // A- function theat updates the orders according to the new added orders
  function handleCart(newOrderName){
    //1- get the item that have the same name of the order and add it to the cart
    let newOrder = data.filter((item)=>{
      return item.name === newOrderName
    })
    //2-  update the orders state using the previous  orders +  the new item added to the cart
     setOrders((prevOrders)=>{
      return [...prevOrders,...newOrder]
     })
   }

   //B-  funciton that updates the orders according to the deleted orders
  function handleDeletedOrders(newOrdersList) {
    setOrders(newOrdersList)
  } 


  return(
    <BrowserRouter>
        <div className="main-container">
          <Header cart={orders.length}/>
          <Routes>
            <Route path="/" element={<HomePage items = {data}/>}/>
            <Route path="/product/:id" element={<ProductPage items = {data} orders={orders} cartChange={handleCart}/>}/>
            <Route path="/cart" element={<CartPage orders = {orders} updateOrders={handleDeletedOrders} />}/>
          </Routes>
          <Newsletter/>
          <Footer/>
        </div>
      </BrowserRouter>

  )
}
export default App;
