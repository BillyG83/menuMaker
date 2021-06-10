import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectMenuToEdit } from '../../redux/accounts/accounts.actions'
import './account-card-styles.scss'

const AccountCard = (props) => {
    const { account, accountToEdit } = props

    const editAccount = () => {
        accountToEdit(account);
    }

    return(
        <div className="account-card">
            <h3>{account.businessName}</h3>
            <p>{account.businessPostCode}</p>
            <p>{account.currency}</p>
            <p className="published">
                {
                    account.published ?
                        'Published'
                        :
                        'Not Published'
                }
            </p>

            <Link 
                onClick={editAccount} 
                className="button" 
                to="/menu"
            >
                Edit Menu
            </Link>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
	accountToEdit: account => dispatch(selectMenuToEdit(account))
})


export default connect(null, mapDispatchToProps)(AccountCard)