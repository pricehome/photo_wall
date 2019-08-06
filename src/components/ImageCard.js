import React, {Component} from "react"

export default class ImageCard extends Component {
	savePicture = evt => {
		evt.preventDefault()

		const newPicture = {
			url: this.props.image.urls.small,
			alt: this.props.image.alt_description
		}

		this.props.saveThisPicture(newPicture)
	}

	render() {
		return (
			<div key={this.props.image.id} className="card">
				<div />
				<div className="row">
					<div className="col s12 m7">
						<div className="card-body">
							<div className="card-title">
								<img src={this.props.image.urls.small} alt="alt_description" />
								<h5>{this.props.image.name}</h5>
								<button
									className="waves-effect waves-black btn-flat"
									type="submit"
									onClick={this.savePicture}
								>
									Save
								</button>
								<button className="waves-effect waves-black btn-flat">
									Delete
								</button>
								<button className="waves-effect waves-black btn-flat">
									Info
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
