import React from 'react'
import { connect } from 'react-redux'
import { selectUserAccounts } from '../../redux/accounts/accounts.selectors.js'

const AccountList = ({ menus }) => (
    <div>
        <ul>
            {
                menus && menus.map(menu => (
                    <li key={menu.businessId}>{menu.businessName}</li>
                ))
            }
        </ul>
    </div>
)

const mapStateToProps = state => ({
	menus: selectUserAccounts(state),
})

export default connect(mapStateToProps)(AccountList)