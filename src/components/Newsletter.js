import React from 'react'
import mailing from "../img/mailing-list-img.png"
import arrow from "../img/arrow.svg"

export default function Newsletter() {
    return (
        <section className="newsletter">
            <div className="newsletter__img">
                <img src={mailing} alt=""/>
            </div>
            <div className="newsletter__text">
                <p>Sign up for our newsletter and get 10% off your next order.</p>
                <form action="">
                <div className='newsletter-input'>
                    <a href="/"><img src={arrow} alt="" className="newsletter__arrow" onClick={(event)=>{return event.preventDefault()}}/></a>
                    <input type="email" name="email" id="email" />
                </div>
                </form>
            </div>
        </section>
    )
}
