import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'
import Button from '../button/button.component'
import './edit-menu-social.styles.scss'

const EditMenuSocial = ({ businessSocial, setBusinessSocial }) => {
    const [ newSocialUrl, setNewSocialUrl ] = useState('')
    const [ socialNetworkName, setSocialNetworkName ] = useState('disabled')
    const [ showNewSocialInput, setShowNewSocialInput ] = useState(false)
    
    const toggleInputShown = () => {
        setShowNewSocialInput(!showNewSocialInput)
    }

    const socialNetworkSelected = (event) => {
        setSocialNetworkName(event.target.value)
    }

    const inputValueChanged = (event) => {
        setNewSocialUrl(event.target.value)
    }

    const addNewSocial = () => {
        const socialArray = businessSocial
        socialArray.push(
            { 
                name: socialNetworkName, 
                url: newSocialUrl,
                id: `social_${socialArray.length + 1}`
            }
        )
        // bubble up
        setBusinessSocial(socialArray)
        // reset value
        setNewSocialUrl('')
        // hide input UI
        toggleInputShown()
    }

    const removeSocialLink = (event) => {
        console.log(event.target.id);
        console.log(businessSocial);
        const newArray = businessSocial.filter(
            item => item.id !== event.target.id
        )
        setBusinessSocial(newArray)
    }
    
    return (
        <div className="menu-social">
            <h3>Social Links</h3>
            {
                businessSocial.length === 0 ?
                    <div className="menu-social__warning">
                        <FontAwesomeIcon icon={faExclamation} /><p> You have not added any social links</p>
                    </div>
                :
                    <ul className="menu-social__list">
                        {
                            businessSocial.map(social => {
                                return (
                                    <li key={social.id}>
                                        <a href={social.url} target="_blank">
                                            {social.name}
                                        </a>

                                        <Button 
                                            clickEvent={removeSocialLink} 
                                            Id={social.id}
                                            icon="trash"
                                            type="button"
                                            color="greyDark"
                                        />
                                    </li>
                                )
                            })
                        }
                    </ul>
            }

            <Button
                Id="add-new-social"
                clickEvent={toggleInputShown}
                color={!showNewSocialInput ? "blue" : "blueDark"}
                width="fit-content"
            >
                { 
                    !showNewSocialInput ? 
                    'Add a social link'
                    : 'never mind'
                    
                }
                </Button>

            {
                showNewSocialInput ?
                    <form 
                        className="menu-social__form" 
                        onSubmit={e => e.preventDefault()}
                    >
                        <label htmlFor="social-url-select">Choose a social network:</label>
                        <select 
                            name="Social network choice" 
                            id="social-url-select"
                            onChange={socialNetworkSelected}
                            defaultValue={socialNetworkName}
                        >
                            <option key="disabled" value="disabled" disabled>Choose one:</option>
                            <option key="facebook" value="facebook">Facebook</option>
                            <option key="instagram" value="instagram">Instagram</option>
                            <option key="twitter" value="twitter">Twitter</option>
                            <option key="pinterest" value="pinterest">Pinterest</option>
                            <option key="linkedIn" value="linkedIn">LinkedIn</option>
                            <option key="other" value="other">other</option>
                        </select>

                        <label htmlFor="social-url-input">
                            Enter the web address:
                            <input 
                                type="url" 
                                placeholder="https://facebook.com/your-business"
                                id="social-url-input"
                                onChange={inputValueChanged}
                                value={newSocialUrl}
                                name="social web address"
                            />
                            <Button
                                Id="add-social-url"
                                clickEvent={addNewSocial}
                                icon="add"
                            />
                        </label>
                    </form>

                : null
            }
        </div>
    )
}

export default EditMenuSocial