import React, {Component} from "react"
import {Link} from "react-router-dom"

export class PictureCard extends Component {
	render() {
		return (
			<div key={this.props.picture.id}>
				<img src={this.props.picture.url} alt={this.props.picture.alt} />
				<h5>{this.props.picture.alt}</h5>
				<div>
					{
						<a
							className="waves-effect waves-black btn-flat"
							href="/collection"
							onClick={() => this.props.deletePicture(this.props.picture.id)}
						>
							Delete
						</a>
					}

					<Link
						to={`/collection/${this.props.picture.id}/edit`}
						className="waves-effect waves-black btn-flat"
					>
						Edit
					</Link>
				</div>
			</div>
		)
	}
}

export default PictureCard
