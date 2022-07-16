import React from "react"
import hero from "../img/hero.png"
import Button from "./Button"
const Hero = ()=>{
    return(
        <section className="hero" id="hero">
            
            <div className="hero__description">
                <h1 className="hero__title">Clothes that talk on behalf of you</h1>
                <p className="hero__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper ultrices magna mauris pellentesque dignissim ante varius diam elit.</p>
                <Button type='btn-primary' content="more products"/>
            </div>
            <div className="hero__img">
                <img src={hero} alt=""/>
            </div>
        </section>
    )
}

export default Hero
