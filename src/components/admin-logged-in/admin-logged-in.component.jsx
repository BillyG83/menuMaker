import React from 'react'
import { connect } from 'react-redux'
import { selectCurrentUser } from '../../redux/user/user.selectors.js'
import { setUsersAccounts } from '../../redux/accounts/accounts.actions'
import { auth , getUsersMenus } from '../../firebase/firebase.js'
import AddMenu from '../add-menu/add-menu.component.jsx'
import AccountList from '../account-list/account-list.component.jsx'

const SignedInUserAdmin = ({ currentUser, setAccountDatabaseToStore }) => {
    const userAccounts = getUsersMenus(currentUser.id)
    userAccounts.then(value => {
        setAccountDatabaseToStore(value)
    });
    return(
        <section className="user-signed-in">
            <h2>{`Welcome ${currentUser.displayName}`}</h2>

            <div className="admin-add-menu">
                <AccountList />
                <AddMenu userId={currentUser.id} />
            </div>
            
            <button onClick={() => auth.signOut()}>Sign out</button>
        </section>
    )
}

const mapStateToProps = state => ({
	currentUser: selectCurrentUser(state),
})

const mapDispatchToProps = dispatch => ({
    setAccountDatabaseToStore: (data) => dispatch(setUsersAccounts(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignedInUserAdmin)
