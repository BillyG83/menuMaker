import React from 'react'
import './show-more-less.styles.scss'

const ShowMoreLess = ({ content }) => {
    const isOpen = false
    const handleClick = () => {
        isOpen = !isOpen
    }
    return (
        <div className={`show-more-less ${isOpen ? 'open' : 'closed'}`}>
            <div className="show-more-less__header">
                <h4>More Info</h4>
                <button onClick={handleClick}>
                    <span>&gt;</span>
                </button>
            </div>
            <div className="show-more-less__content">
                <p>{ content }</p>
            </div>
        </div>
    )
}

export default ShowMoreLess