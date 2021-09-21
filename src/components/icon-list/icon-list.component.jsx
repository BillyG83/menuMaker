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

    return (
        <ul className="icon-list">
            {
                icons.map((icon, i) => {
                    return (
                        <li key={`${icon.name}_${i}`}>{getIcon(icon.icon)}</li>
                    )
                })
            }
        </ul>
    )
})

export default IconList