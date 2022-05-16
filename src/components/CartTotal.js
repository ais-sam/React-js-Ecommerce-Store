import React from 'react'
import Button from './Button'
export default function CartTotal(props) {
    //######## Calculate the total price of orders ##########
    // 1- Get the array of prices
    const prices = props.orders.map((item)=>{
        return Number(item.price.replace('$',""))
      })
    // 2- Calculate the total price
    const totalPrice =  prices.reduce((price1,price2)=>{
        return price1 + price2
    },0).toFixed(2)
    
    return (
            <div className='cart__total'>
                <span className='item total'>All items</span>
                <span className='item total__qnt'>{props.quantity}</span>
                <span className='item total__price'>{totalPrice}$</span>
            <Button className="item" content="check out all" type="btn-primary btn-cart" />
        </div>
    )
}
