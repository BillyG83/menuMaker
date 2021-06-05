import React, { memo, useContext } from 'react'
import { ThemeContext } from '../../App.js'
import './button.styles.scss'

const Button = memo((props) => {
    Button.displayName = 'Button'
    const theme = useContext(ThemeContext)

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
            className={`button button--${theme}`}
            id={Id}
            onClick={handleClick}
            type={type ? type : 'button'}
        >
            {text}
        </button>
    )
})

export default Button