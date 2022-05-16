import React from 'react'
import {Link} from "react-router-dom"

const Product = (props)=>{
    return(
        <Link to={`/product/${props.name}`} className="product">
            <div className="product__img">
                <img src={props.img} alt=""/>
            </div>
            <div className="product__data">
                <span className="product__name">{props.name}</span>
                <span className="product__price">{props.price}</span>
            </div>
        </Link>
    )
}

export default Product;