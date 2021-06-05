import React, { memo, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faLanguage, faShareAlt } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from '../../App.js'
import './button.styles.scss'

const Button = memo((props) => {
    Button.displayName = 'Button'
    const theme = useContext(ThemeContext)

    const {
        Id,
        clickEvent,
        icon,
        text,
        type,
    } = props

    const handleClick = (event) => {
        if (!clickEvent) return
        console.log('handleClick');
        clickEvent(event.target.id)
    }

    const getIcon = (icon) => {
        switch(icon) {
            case 'share':
                return <FontAwesomeIcon icon={faShareAlt} />
            case 'info':
                return <FontAwesomeIcon icon={faInfo} />
            case 'language':
                return <FontAwesomeIcon icon={faLanguage} />
            default:
                return
        }
    }

    return(
        <button 
            className={`
                button 
                button--${theme} 
                ${icon ? 'button--icon' : ''}
            `}
            id={Id}
            onClick={handleClick}
            type={type ? type : 'button'}
        >
            {   icon ?
                getIcon(icon)
                : null
            }
            {text && text}
        </button>
    )
})

export default Button