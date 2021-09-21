import React from 'react'
import './list.styles.scss'

const List = ({listTitle, listItems}) => {
    console.log(typeof listItems);
    return (
        <div className="list">
            {
                listTitle ?
                <h4>{listTitle}</h4>
                : ''
            }
            <ul>
                {
                    listItems.map((item, i) => {
                        return (
                            <li key={i}>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default List