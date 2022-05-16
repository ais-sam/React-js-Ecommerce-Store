import React from 'react'
import logo from "../img/logo.svg"
import cart from "../img/cart.svg"
import {Link} from "react-router-dom"

function Header(props) {
  
    return(
        <header>
          <nav>
            <div className ="nav__info">
              <Link to="/"className ="nav__logo">
                <img src={logo} alt=""/>
              </Link>
              <div className ="nav__menu">
                <ul className ="nav__list">
                  <li className ="nav__item"><Link to="/" className ="nav__link">Home</Link></li>
                  <li className ="nav__item"><Link to="/" className ="nav__link">Collection</Link></li>
                  <li className ="nav__item"><Link to="/" className ="nav__link">Contacts</Link></li>
                </ul>
              </div>
            </div>
            <Link to="/cart" className ="nav__cart">
              <img src={cart} className="cart-icon" alt="cart-icon"/>
              <span>Cart</span>
              {props.cart!==0? <span className='orders'>{props.cart}</span>: null}
            </Link>
          </nav>
        </header>
    )
}

export default Header