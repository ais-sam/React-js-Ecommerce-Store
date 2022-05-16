import React from 'react'

function Button(props) {
    
    return (
        <button  className={`btn ${props.type}`} onClick={props.onClick}>{props.content}</button>

    )
}


export default Button