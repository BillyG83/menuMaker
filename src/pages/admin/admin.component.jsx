import React from 'react'
import { connect } from 'react-redux'
import { selectCurrentUser } from '../../redux/user/user.selectors.js'
import { signInWithGoogle } from '../../firebase/firebase.js'
import SignedInUserAdmin from '../../components/admin-logged-in/admin-logged-in.component.jsx'
import PageTitle from '../../components/page-title/page-title.component.jsx'
import Button from '../../components/button/button.component.jsx'

import './admin.styles.scss'

const AdminPage = ({ currentUser }) => (
	<section className="admin-page">
		<PageTitle text={'My Account'}/>

		<div className="page-inner">
			{
				currentUser ?
				<SignedInUserAdmin />
				:
				<Button 
					id="google-sign-in" 
					text="Sign in with Google"
					clickEvent={signInWithGoogle}
				/>
			}	
		</div>	
	</section>
)

const mapStateToProps = state => ({
	currentUser: selectCurrentUser(state)
})

export default connect(mapStateToProps)(AdminPage)