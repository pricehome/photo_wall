import React, {Component} from "react"
import {Link, withRouter} from "react-router-dom"

class NavBar extends Component {
	render() {
		return (
			<div>
				<nav className="nav-wrapper teal">
					<a href="/#" className="brand-logo">
						PhotoLoops
					</a>

					<ul className="right">
						<li>
							<Link to="/home">Home</Link>
						</li>
						<li>
							<Link to="/collection">Collection</Link>
						</li>
					</ul>
					<i className="material-icons">cached</i>
				</nav>
			</div>
		)
	}
}

export default withRouter(NavBar)
