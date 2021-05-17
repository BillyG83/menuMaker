import React from 'react'
import { connect } from 'react-redux'
import { selectCurrentUser } from '../../redux/user/user.selectors.js'
import { setUsersAccounts } from '../../redux/accounts/accounts.actions'
import { auth , getUsersMenus } from '../../firebase/firebase.js'
import AddMenu from '../add-menu/add-menu.component.jsx'
import AccountList from '../account-list/account-list.component.jsx'
import Button from '../button/button.component.jsx'

const SignedInUserAdmin = ({ currentUser, setAccountDatabaseToStore }) => {
    // getting logged in user's menu account data from database
    const userAccountDataPromise = getUsersMenus(currentUser.id)
    // then passing it into the redux store
    userAccountDataPromise.then(value => {
        setAccountDatabaseToStore(value)
    });

    return(
        <section className="user-signed-in">
            <h2>{`Welcome ${currentUser.displayName}`}</h2>

            <div className="admin-add-menu">
                <AccountList />
                <AddMenu userId={currentUser.id} />
            </div>

            <Button 
                id="sign-out-admin" 
                text="Sign out"
                clickEvent={() => auth.signOut()}
            />
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
