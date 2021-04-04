import React from 'react'
import './nav.styles.scss'

const Nav = ({ businessSocial, businessInfo }) => {
	const clickHandle = (event) => {
		console.log(event.target.id);
	}

	return(
		<nav className="nav">
			<ul>
				<li>
					<button 
						onClick={clickHandle} 
						className="square icon"
						id="social"
					>Social</button>
				</li>
				<li>
					<button 
						onClick={clickHandle} 
						className="square icon"
						id="info"
					>Info</button>
				</li>
				<li>
					<button 
						onClick={clickHandle} 
						className="square icon"
						id="translate"
					>Translate</button>
				</li>
			</ul>
		</nav>
	)
}

export default Nav