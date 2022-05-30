import React from 'react'
import Details from '../components/Details'
import ProductsGrid from "../components/ProductsGrid"
import { useParams } from 'react-router-dom'

export default function ProductPage(props) {
    React.useEffect(()=> {
        window.scrollTo(0, 0);
    })

    // get the name of the current product from the URL 
    const itemName = useParams().id
    // A - Get the item from the list of items (data) that have the same name of the current product + pass it using props
    const item = props.items.filter((item,idx)=>{
        // console.log(idx)
        return item.name === itemName
    })[0];
    console.log(item)
    
    console.log(props.items.indexOf(item))
    // console.log(idx)
    // ##############################

    // B- Calculate the quantity of the current product 
    
    //1- create an array that contains the repeated product
    const currentItem = props.orders.filter((item)=>{
        return item.name === itemName
    })
    //2- calculate the quantity of the current product
    const itemQuantity = currentItem.length

    //################################

    // C- Passe the new order to the parent component (<App/>)
    function handleCartData(newOrderName) {
        props.cartChange(newOrderName)
    }

    return (
        <>
            <Details quantity= {itemQuantity} item = {item} index={props.items.indexOf(item)} cartChange={handleCartData} orders={props.orders}/>
            <h3 className='grid-title'>Might also like</h3>
            <ProductsGrid limit={3} items={props.items} />

        </>
    )
}
