import React from 'react'
import {Link} from "react-router-dom"

export default function Footer() {
    return (
        <footer>
            <ul className="footer__list">
                <li><Link to="/" className="footer__link">About</Link></li>
                <li><Link to="/" className="footer__link">Customer Care</Link></li>
                <li><Link to="/" className="footer__link">Instagram</Link></li>
            </ul>
            <div className="footer__copyrights">
                <span>© Pretend Store</span>
            </div>
        </footer>
    )
}
