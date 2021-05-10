import React from 'react'

const NewMenuForm = ({ formSubmitted }) => {
    let businessName = ''
    let businessPostCode = ''

    const inputChanged = (event) => {
        event.target.id === 'businessName' ?
        businessName = event.target.value
        :
        businessPostCode = event.target.value
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const createdAt = new Date().toISOString().split('T')[0]
        formSubmitted(businessName, businessPostCode, createdAt)
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
            <button type="button" onClick={handleSubmit}>Done, easy</button>
        </form>
    )
}

export default NewMenuForm