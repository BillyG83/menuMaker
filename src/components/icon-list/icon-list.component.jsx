import React, { memo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faCheese, 
    faCookieBite,
    faGlassCheers, 
    faKiwiBird, 
    faPepperHot, 
    faSeedling, 
} from '@fortawesome/free-solid-svg-icons'
import './icon-list.style.scss'

const IconList = memo(({ icons }) => {
    IconList.displayName = 'IconList'

    const getIcon = (icon) => {
        switch(icon) {
            case 'cheese' :
                return <FontAwesomeIcon className="yellow" icon={faCheese} />
            case 'chili':
                return <FontAwesomeIcon className="red" icon={faPepperHot} />
            case 'plant':
                return <FontAwesomeIcon className="green" icon={faSeedling} />
            case 'drink':
                return <FontAwesomeIcon className="blue" icon={faGlassCheers} />
            case 'sugar':
                return <FontAwesomeIcon className="purple" icon={faCookieBite} />
            default:
                return <FontAwesomeIcon className="green" icon={faKiwiBird} />
        }
    }

    const handleClick = (event) => {
        if (event.target.classList.contains('icon-list--open-tooltip')) {
            event.target.classList.remove('icon-list--open-tooltip')
        } else {
            const iconListItems = document.querySelectorAll('.jsIconListItem')
            iconListItems && iconListItems.forEach(item => item.classList.remove('icon-list--open-tooltip'))
            event.target.classList.toggle('icon-list--open-tooltip')
        }
    }

    return (
        <ul className="icon-list">
            {
                icons.map((icon, i) => {
                    return (
                        <li 
                            aria-label={`icon of ${icon.name}`} 
                            key={`${icon.name}_${i}`}
                            onClick={handleClick}
                            className="jsIconListItem"
                        >
                            <span aria-hidden="true" className="icon-list__icon">{getIcon(icon.icon)}</span>
                            <span aria-hidden="true" className="icon-list__tooltip">
                                <span className="icon-list__tooltip-text">{icon.name}</span>
                            </span>
                        </li>
                    )
                })
            }
        </ul>
    )
})

export default IconList