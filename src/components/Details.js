import React, {useState} from 'react'
import Button from './Button'

import item0 from "../img/item-1.png"
import item1 from "../img/item-2.png"
import item2 from "../img/item-3.png"
import item3 from "../img/item-4.png"
import item4 from "../img/item-5.png"
import item5 from "../img/item-6.png"
import item6 from "../img/item-7.png"
import item7 from "../img/item-8.png"
import item8 from "../img/item-9.png"

function Details(props) {
    
    // ################ Colors Stats ##############
    // use state to update the color name
    const [colorName,setColorName] = useState("Pink")
    // use state to update the selected color
    const [activeColors, setActColors] = useState({
        aPink:"active",
        aBlue:"",
        aBlack:""
    })
    // Function to handle the Color Click
    function handleColorClick(e) {
        const {name} = e.target
        // update the Color name
        setColorName(e.target.name) 
        // update the selected color
        if (name === "pink") {
            setActColors({
                aPink:"active",
                aBlue:"",
                aBlack:""
            })
        } else if(e.target.name ==="blue"){
            setActColors({
                aPink:"",
                aBlue:"active",
                aBlack:""
            })
        }else{
            setActColors({
                aPink:"",
                aBlue:"",
                aBlack:"active"
            })
        }
    }

    // ################ Cart orders State ##############
    // Function to handle the Add To Cart Click
    function handleAddToCart() {
        props.cartChange(props.item.name)
    }
    // array that hold all images 
    const itemImgs = [item0, item1, item2,item3, item4, item5,item6, item7, item8]
    return (
        <div className='details'>
                {/* <div className='details__images'>
                        <img className='det-sml' src={props.item.image} alt={props.item.name} />
                        <img className='det-sml lft' src={props.item.image} alt={props.item.name} />
                        <img className='det-sml rgt' src={props.item.image} alt={props.item.name} />
                </div> */}
                <div className='details__main-img'>
                    <img className='det-big' src={itemImgs[props.index]} alt={props.item.name}/>
                </div>
           
            <div className='details__text'>
                <h2 className='details__price'>{props.item.price}</h2>
                <h2 className='details__name'>{props.item.name}</h2>
                <p className='details__description'>{props.item.description}</p>
                <div className='details__colors'>
                    <span className='color-choice'><span>Color</span> : {colorName}</span>
                    <div className='colors'>
                        <button name="pink" className={`color ${activeColors.aPink}`} onClick={handleColorClick}></button>
                        <button name="blue" className={`color ${activeColors.aBlue}`} onClick={handleColorClick}></button>
                        <button name="black" className={`color ${activeColors.aBlack}`} onClick={handleColorClick}></button>
                    </div>
                </div>
                <div className='details__cart'>
                    <span>{props.quantity}</span>
                    <Button content= "add to cart" type="btn-primary" onClick={handleAddToCart}/>
                </div>
            </div>
        </div>
    )
}

export default Details;