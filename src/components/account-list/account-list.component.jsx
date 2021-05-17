import React from 'react'
import { connect } from 'react-redux'
import { selectUserAccounts } from '../../redux/accounts/accounts.selectors.js'
import { userSelectedAccount } from '../../firebase/firebase.js'
import './account-list.styles.scss'

const AccountList = ({ accounts }) => (
    <ul className="account-list">
        {
            accounts && accounts.map(account => (
                <li key={account.businessId}>
                    <button 
                        id={account.businessId}
                        onClick={userSelectedAccount}
                    >
                        <span>{account.businessName}</span>
                        <span>{account.businessPostCode}</span>
                    </button>
                </li>
            ))
        }
    </ul>
)

const mapStateToProps = state => ({
	accounts: selectUserAccounts(state),
})

export default connect(mapStateToProps)(AccountList)