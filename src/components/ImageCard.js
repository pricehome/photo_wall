import React, {Component} from "react"
// import {Link} from "react-router-dom"

export default class ImageCard extends Component {
	render() {
		return (
			<div key={this.props.image.id} className="card">
				<div />
				<img src={this.props.image.urls.small} />
				<div className="card-body">
					<div className="card-title">
						<h5>{this.props.image.name}</h5>
						{/* <Link className="nav-link" to={`/image/${this.props.image.id}`}>
							Details
						</Link>
						<button
							type="button"
							className="btn btn-success"
							onClick={() => {
								console.log("this", this.props)
								this.props.history.push(`/animals/${this.props.animal.id}/edit`)
							}}
						/> */}
					</div>
				</div>
			</div>
		)
	}
}
