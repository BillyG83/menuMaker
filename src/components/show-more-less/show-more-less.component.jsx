import { useState, memo } from 'react'
import './show-more-less.styles.scss'

const ShowMoreLess = memo(({ title, content }) => {
    ShowMoreLess.displayName = 'ShowMoreLess'

    const [isOpen, toggleOpen] = useState(false)
    const [a11yMessage, setA11yMessage] = useState('Show more information')

    const handleClick = (event) => {
        event.preventDefault()
        setA11yMessage(isOpen ? 'Show more information' : 'Hide the extra information')
        toggleOpen(!isOpen)
    }

    return (
        <div className={`show-more-less ${isOpen ? 'open' : 'closed'}`}>
            <div className="show-more-less__header">
                <h4>{title}</h4>
                <button onClick={handleClick}>
                    {a11yMessage}
                    <span 
                        aria-hidden="true"
                        style={{ 
                            backgroundImage: `url("img/arrow.svg")` 
                        }}
                    ></span>
                </button>
            </div>
            <div className="show-more-less__content">
                <p>{ content }</p>
            </div>
        </div>
    )
})

export default ShowMoreLess