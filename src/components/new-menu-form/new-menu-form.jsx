import React from 'react'
import Button from '../button/button.component.jsx'
import './new-menu-form.styles.scss'

const NewMenuForm = ({ formSubmitted }) => {
    let businessName = ''
    let businessPostCode = ''
    let currency = 'EUR'

    const inputChanged = (event) => {
        if (!event.target.id || !event.target.value) return

        switch(event.target.id) {
            case 'businessName':
                businessName = event.target.value
                return
            case 'businessPostCode':
                businessPostCode = event.target.value
                return
            case 'currency':
                currency = event.target.value
                return
            default:
                return
        }
    }

    const handleSubmit = (event) => {
        event && event.preventDefault()
        const newMenuData = {
            'businessName': businessName,
            'businessPostCode': businessPostCode,
            'businessJoinDate': new Date().toISOString().split('T')[0],
            'businessCurrency': currency,
        }
        formSubmitted(newMenuData)
    }

    return(
        <form className="new-menu">
            <label>
                Business Name (required)
                <input 
                    id="businessName" 
                    type="text" 
                    placeholder="Central Perk"
                    required
                    onKeyUp={inputChanged}
                />
            </label>

            <label>
                Business Post Code (required)
                <input 
                    id="businessPostCode" 
                    type="text" 
                    placeholder="10024" 
                    required
                    onKeyUp={inputChanged}
                />
            </label>

            <label>
                Please select your currency
                <select id="currency" onChange={inputChanged}>
                    <option value="EUR">Euros €</option>
                    <option value="USD">Dollars $</option>
                    <option value="GBP">Pounds £</option>
                </select>
            </label>
            
            <Button 
                id="account-card-edit" 
                text="Done, easy"
                clickEvent={handleSubmit}
            />
        </form>
    )
}

export default NewMenuForm