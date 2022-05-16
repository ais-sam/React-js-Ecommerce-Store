import React from 'react'
import Cart from '../components/Cart'

export default function CartPage(props) {
    // fucntion that passes the new order List to the parent component (<App/>)
    function updateCartOrders(newOrderList) {
        props.updateOrders(newOrderList)
    }

    return (
        <Cart orders={props.orders} updateCart={updateCartOrders}/>
    )
}
