import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addNewMenu } from '../../firebase/firebase.js'
import { addNewUsersAccounts } from '../../redux/accounts/accounts.actions'
import NewMenuForm from '../new-menu-form/new-menu-form.jsx'
import Button from '../button/button.component.jsx'
import './add-menu.styles.scss'

const AddMenu = (props) => {
    const [showForm, setShowForm] = useState(false)

    const toggleForm = () => {
        setShowForm({ showForm: !showForm })
    }

    const formSubmitted = (newMenuData) => {
        // making the ID of the new menu account
        const Id1 = props.userId.slice(-8)
        const Id2 = newMenuData.businessJoinDate.replace(/-/gi, '')
        const Id3 = newMenuData.businessPostCode.replace(/ /gi, '').toLowerCase()
        const Id4 = newMenuData.businessName.replace(/[^A-Z0-9]+/ig, '').toLowerCase()
        
        // assigning the ID and other properties
        newMenuData.businessId = Id1 + Id2 + Id3 + Id4
        newMenuData.published = false
        newMenuData.businessInfo = {}
        newMenuData.businessSocial = []
        newMenuData.businessMenu = []

        updateData(newMenuData)   
    }

    const updateData = (newMenuData) => {
        // update the database
        addNewMenu(props.userId, newMenuData)
        // update the redux store
        props.addNewAccountToStore(newMenuData)
        toggleForm()
    }

    return(
        <div className="add-menu">
            <Button 
                id="account-card-edit" 
                text={
                    showForm ?
                    'forget it'
                    :
                    'add menu'
                }
                clickEvent={toggleForm}
            />
            {
                showForm ?
                <NewMenuForm 
                    formSubmitted={formSubmitted}
                />
                :
                null
            }
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addNewAccountToStore: (data) => dispatch(addNewUsersAccounts(data))
})

export default connect(null, mapDispatchToProps)(AddMenu)