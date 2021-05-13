import React from 'react'
import { connect } from 'react-redux'
import { selectCurrentUser } from '../../redux/user/user.selectors.js'
import { setUsersAccounts } from '../../redux/user/user.actions.js'
import { auth , getUsersMenus } from '../../firebase/firebase.js'
import AddMenu from '../add-menu/add-menu.component.jsx'

const SignedInUserAdmin = ({ currentUser, setUsersAccounts }) => {
    const userAccounts = getUsersMenus(currentUser.id)
    userAccounts.then((value) => {
        setUsersAccounts(value)
    });
    return(
        <section className="user-signed-in">
            <h2>{`Welcome ${currentUser.displayName}`}</h2>

            <div className="admin-add-menu">
                {
                    currentUser.accounts ?
                    <h3>Add a new menu</h3>
                    :
                    <h3>Create your menu</h3>
                }
                <AddMenu userId={currentUser.id} />
            </div>
            
            <button onClick={() => auth.signOut()}>Sign out</button>
        </section>
    )
}

const mapStateToProps = state => ({
	currentUser: selectCurrentUser(state)
})

const mapDispatchToProps = dispatch => ({
    setUsersAccounts: (data) => dispatch(setUsersAccounts(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignedInUserAdmin)
