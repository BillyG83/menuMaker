import React from 'react'
import './button.styles.scss'

const Button = (props) => {
    const {
        text,
        clickEvent,
        Id
    } = props

    const handleClick = (event) => {
        console.log('handleClick');
        clickEvent(event.target.id)
    }

    return(
        <button 
            id={Id}
            onClick={handleClick}
            className="button"
        >
            {text}
        </button>
    )
}

export default Button