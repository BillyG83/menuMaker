import React from 'react'
import { auth } from '../../firebase/firebase.js'
import AddMenu from '../add-menu/add-menu.component.jsx'

const SignedInUserAdmin = ({ currentUser }) => (
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

export default SignedInUserAdmin