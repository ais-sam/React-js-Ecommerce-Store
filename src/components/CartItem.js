import React from 'react'
import Button from "./Button"
import {Link} from "react-router-dom"


export default function CartItem(props) {
    function handleDelete() {
        props.onDelete(props.name)
    }
    return (
        <div className='cart__item'>
                <Link to={`/product/${props.name}`} >
                    <img className="item item__img" alt="item" src={props.image} />
                </Link>
                <span className='item item__name'>{props.name}</span>
                <span className='item item__qnt'>{props.quantity}</span>
                <span className='item item__price'>{props.price}</span>
            <Button className="item" content="check out" type="btn-cart"/>
            <button className='delete-order' onClick={handleDelete}>x</button>
        </div>
    )
}
