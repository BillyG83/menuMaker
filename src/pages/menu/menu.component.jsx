import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selectors.js'
import { selectMenuToEdit } from '../../redux/accounts/accounts.selectors.js'
import { signInWithGoogle } from '../../firebase/firebase.js'
import { auth } from '../../firebase/firebase.js'
import PageTitle from '../../components/page-title/page-title.component.jsx'
import EditMenu from '../../components/edit-menu/edit-menu.component'
import Button from '../../components/button/button.component.jsx'
import './menu.styles.scss'

const MenuPage = ({ currentUser, accountToEdit }) => {
	const hasAccountToEdit = Object.entries(accountToEdit)
	
	return (
		<section className="menu-page">
			<PageTitle text={'Update Menu'} />
			<div className="page-inner">
				{
					hasAccountToEdit ?
					<EditMenu />
					:
					<div>
						<p>Oops there is no menu to edit</p>
						<Link
							className="button" 
							to="/admin"
						>
							Admin Area
						</Link>
					</div>
				}
				{
					currentUser ?
						<div className="menu-page__footer">
							<Button 
								id="google-sign-in" 
								text="Sign out"
								clickEvent={auth.signOut()}
							/>
						</div>
					:
						<div className="menu-page__footer">
							<p>Hey there, are you a customer?</p>
							<p>If so use this button to sign in:</p>
							<Button 
								id="google-sign-in" 
								text="Sign in with Google"
								clickEvent={signInWithGoogle}
							/>
							<p>If not maybe you shouldn't be here..?</p>
							<Link
							 className="button" 
							 to="/home"
							>
								Back our homepage
							</Link>
						</div>
				}
			</div>
		</section>
	)
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
	accountToEdit: selectMenuToEdit
})

export default connect(mapStateToProps)(MenuPage)