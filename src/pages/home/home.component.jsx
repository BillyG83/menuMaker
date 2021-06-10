import React from 'react'
import PageTitle from '../../components/page-title/page-title.component.jsx'
import './home.styles.scss'

const HomePage = () => (
	<section className="menu-page">
		<PageTitle text={'Home Page'} />
		<div className="page-inner">
			<p>Welcome to Menu Maker</p>
		</div>
	</section>
)

export default HomePage