import React from 'react'
import CartItem from './CartItem'
import CartTotal from './CartTotal'

export default function Cart(props) {
    function deleteOrder(deletedOrderName) {
        // 1- create an array that hold all the repeated orders
        const repOrders = props.orders.filter((order)=>{
            return order.name === deletedOrderName
        })
        // 2- create an array that hold all no repeated orders
        const nonRepOrders = props.orders.filter((order)=>{
            return order.name !== deletedOrderName
        })
        // 3- delete one item from the duplicated items array
        repOrders.pop()
        // 4- create new array that hold the new order list
        const newOrderList = [...nonRepOrders, ...repOrders]
        // 5- passe the now order list to the parent component (<CartPage/>)
        props.updateCart(newOrderList)
    }

    // ############################################
    
    // Calculate how many times an order is repeated
    var count = {};
    props.orders.forEach(function(i) { count[i.name] = (count[i.name]||0) + 1;});
    // get the list of no repeated orders
    let uniqueOrders = props.orders.filter((order, index) => {
        return props.orders.indexOf(order) === index;
    });
    return (
        <div className='cart'>
            <span className='cart__title'>Your Cart</span>
            {props.orders? uniqueOrders.map((order,index)=>{
                return <CartItem key={index}  name={order.name} price={order.price} image={order.image} quantity={count[order.name]} onDelete={deleteOrder}  />
            }):null}
            <CartTotal orders={props.orders} quantity={props.orders ? props.orders.length:0}/>
        </div>
    )
}
