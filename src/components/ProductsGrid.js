import React from 'react'
import Product from './Product'
import Button from './Button';

export default function ProductsGrid(props) {
    const productList = props.items.slice(0,props.limit).map((item)=>{
        return <Product key={item.name} name={item.name} price={item.price} img={item.image} />
    })
    const a = false;
    return (
        <section className='products'>
            <h2>{a? `Might also like`:"Our Products"}</h2>
            <div className='products__grid'>
                {productList}
            </div>
            <Button content="more products"/>
        </section>
    )
}

