import React from 'react'
import "./Button.css"

const Button = ({handleClick, text}) => {
    return (
        <div className="button" onClick={handleClick}>{text}</div>
    )
}

export default Button
