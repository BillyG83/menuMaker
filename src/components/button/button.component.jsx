import React, { memo, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faLanguage, faShareAlt, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from '../../App.js'
import './button.styles.scss'

const Button = memo((props) => {
    Button.displayName = 'Button'
    const theme = useContext(ThemeContext)

    const {
        Id,
        clickEvent,
        color,
        icon,
        text,
        type,
        width,
    } = props

    const handleClick = (event) => {
        if (!clickEvent) return
        clickEvent(event)
    }

    const getIcon = (icon) => {
        switch(icon) {
            case 'add' :
                return <FontAwesomeIcon icon={faPlus} />
            case 'share':
                return <FontAwesomeIcon icon={faShareAlt} />
            case 'info':
                return <FontAwesomeIcon icon={faInfo} />
            case 'language':
                return <FontAwesomeIcon icon={faLanguage} />
            case 'trash':
                return <FontAwesomeIcon icon={faTrash} />
            default:
                return
        }
    }

    return(
        <button 
            aria-label={text && text}
            className={`
                button 
                button--${theme} 
                ${color ? `button--${color}` : ''}
                ${width ? `button--${width}` : ''}
                ${icon ? 'button--icon' : ''}
            `}
            id={`${Id}`}
            onClick={handleClick}
            type={type ? type : 'button'}
        >
            <span className="no-click">
            {
                icon ? getIcon(icon)
                : props.children || text
            }
            </span>
        </button>
    )
})

export default Button