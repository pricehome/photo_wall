import React, {Component} from "react"
import {Link} from "react-router-dom"

export class PictureCard extends Component {
	render() {
		return (
			<div key={this.props.picture.id}>
				<img src={this.props.picture.url} alt={this.props.picture.alt} />
				<h5>{this.props.picture.alt}</h5>

				{
					<a
						href="/#"
						onClick={() => this.props.deletePicture(this.props.picture.id)}
					>
						Delete
					</a>
				}
				<div>
					<Link to={`/collection/${this.props.picture.id}/edit`}>Edit</Link>
				</div>
			</div>
		)
	}
}

export default PictureCard
