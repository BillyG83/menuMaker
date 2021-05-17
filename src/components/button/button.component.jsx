import React from 'react'
import './button.styles.scss'

const Button = (props) => {
    const {
        text,
        clickEvent,
        Id,
        type,
    } = props

    const handleClick = (event) => {
        if (!clickEvent) return
        console.log('handleClick');
        clickEvent(event.target.id)
    }

    return(
        <button 
            className="button"
            id={Id}
            onClick={handleClick}
            type={type ? type : 'button'}
        >
            {text}
        </button>
    )
}

export default Button