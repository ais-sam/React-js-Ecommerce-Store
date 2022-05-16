import React, {useState} from 'react'
import Button from './Button'


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
    return (
        <div className='details'>
                {/* <div className='details__images'>
                        <img className='det-sml' src={props.item.image} alt={props.item.name} />
                        <img className='det-sml lft' src={props.item.image} alt={props.item.name} />
                        <img className='det-sml rgt' src={props.item.image} alt={props.item.name} />
                </div> */}
                <div className='details__main-img'>
                    <img className='det-big' src={props.item.image} alt={props.item.name}/>
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