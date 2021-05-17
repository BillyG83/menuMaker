import React from 'react'
import Button from '../button/button.component.jsx'
import './account-card-styles.scss'

const AccountCard = ({ account }) => {
    const editAccount = () => {
        console.log('editAccount clicked');
    }
    return(
        <div className="account-card">
            <h3>{account.businessName}</h3>
            <p>{account.businessPostCode}</p>
            <p>{account.currency}</p>
            <p className="published">{
                account.published ?
                    'Published'
                    :
                    'Not Published'
            }</p>
            <Button 
                id="account-card-edit" 
                text="Edit"
                clickEvent={editAccount}
            />
        </div>
    )
}

export default AccountCard