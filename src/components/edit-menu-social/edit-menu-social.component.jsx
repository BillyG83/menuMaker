import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'
import Button from '../button/button.component'
import './edit-menu-social.styles.scss'

const EditMenuSocial = ({ businessSocial, setBusinessSocial }) => {
    const [ showNewSocialInput, setShowNewSocialInput] = useState(false)
    const handleClick = event => {
        setShowNewSocialInput(!showNewSocialInput)
    }
    
    return (
        <div className="menu-social">
            {
                businessSocial.length === 0 ?
                <div className="menu-social__warning">
                    <FontAwesomeIcon icon={faExclamation} /><p> You have not added any social links</p>
                </div>
                :
                businessSocial.map(social => {
                    return <p>{social.name}</p>
                })
            }

            <Button
                Id="add-new-social"
                clickEvent={handleClick}
            >Add a social link</Button>

            {
                showNewSocialInput ?
                <input type="text" placeholder="facebook" />
                : null
            }
        </div>
    )
}

export default EditMenuSocial