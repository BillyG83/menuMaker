import React from 'react'
import './nav.styles.scss'

const Nav = () => {
	return(
		<nav className="nav">
			<ul>
				<li>
					<button className="square icon">Social</button>
				</li>
				<li>
					<button className="square icon">Info</button>
				</li>
				<li>
					<button className="square icon">Translate</button>
				</li>
			</ul>
		</nav>
	)
}

export default Nav