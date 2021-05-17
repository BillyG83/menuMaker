import React from 'react'
import { connect } from 'react-redux'
import { selectCurrentUser } from '../../redux/user/user.selectors.js'
import { signInWithGoogle } from '../../firebase/firebase.js'
import { auth } from '../../firebase/firebase.js'
import PageTitle from '../../components/page-title/page-title.component.jsx'
import Button from '../../components/button/button.component.jsx'
import './menu.styles.scss'

const MenuPage = ({ currentUser }) => (
	<section className="menu-page">
		<PageTitle text={'Update Menu'} />
		<div className="page-inner">
			<p>user can add, edit, remove menus</p>

			{
				currentUser ?
					<Button 
						id="google-sign-in" 
						text="Sign out"
						clickEvent={auth.signOut()}
					/>
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

export default connect(mapStateToProps)(MenuPage)