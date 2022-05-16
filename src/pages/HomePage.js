import React from "react";
import Hero from "../components/Hero"
import ProductsGrid from "../components/ProductsGrid";


function HomePage(props) {
    return(
        <div className="container">
            <Hero/>
            <ProductsGrid items = {props.items} />
        </div>
    )
}

export default HomePage;