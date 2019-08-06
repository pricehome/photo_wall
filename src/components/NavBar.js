import React, {Component} from "react"

export default class NavBar extends Component {
	render() {
		return (
			<div>
				<nav className="nav-wrapper teal">
					<a href="/#" className="brand-logo">
						PhotoLoops
					</a>

					<ul className="right">
						<li>
							<a href="/#">Home</a>
						</li>
						<li>
							<a href="/#">Collection</a>
						</li>
					</ul>
					<i class="material-icons">cached</i>
				</nav>
			</div>
		)
	}
}
