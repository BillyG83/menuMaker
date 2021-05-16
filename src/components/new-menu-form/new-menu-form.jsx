import React from 'react'

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
        event.preventDefault()
        const newMenuData = {
            'businessName': businessName,
            'businessPostCode': businessPostCode,
            'createdAt': new Date().toISOString().split('T')[0],
            'currency': currency,
        }
        console.log(newMenuData);
        formSubmitted(newMenuData)
    }

    return(
        <form>
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
                <div>Please select your currency</div>
                <select id="currency" onChange={inputChanged}>
                    <option value="EUR">Euros €</option>
                    <option value="USD">Dollars $</option>
                    <option value="GBP">Pounds £</option>
                </select>
            </label>
            
            <button type="button" onClick={handleSubmit}>Done, easy</button>
        </form>
    )
}

export default NewMenuForm