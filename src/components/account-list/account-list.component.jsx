import React from 'react'
import { connect } from 'react-redux'
import { selectUserAccounts } from '../../redux/accounts/accounts.selectors.js'
import AccountCard from '../account-card/account-card.component.jsx'
import './account-list.styles.scss'

const AccountList = ({ accounts }) => (
    <div className="account-list">
        <p>
            {
            accounts ? 
                'Here are your accounts:'
            : 
                'Hmmmm, your menus should show here'
            }
        </p>
        <ul className="account-list">
            {
                accounts && accounts.map(account => (
                    <li key={account.businessId}>
                        <AccountCard account={account} />
                    </li>
                ))
            }
        </ul>
    </div>
)

const mapStateToProps = state => ({
	accounts: selectUserAccounts(state),
})

export default connect(mapStateToProps)(AccountList)