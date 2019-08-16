import React, {Component} from "react"
import APILocal from "../../module/ApiLocal"

export default class PictureEdit extends Component {
	state = {
		id: "",
		url: "",
		alt: ""
	}

	componentDidMount() {
		APILocal.get(parseInt(this.props.match.params.pictureId)).then(picture => {
			this.setState({
				id: picture.id,
				url: picture.url,
				alt: picture.alt
			})
		})
	}

	handleFieldChange = evt => {
		const stateToChange = {}
		stateToChange[evt.target.id] = evt.target.value
		this.setState(stateToChange)
	}

	editThisPicture = evt => {
		evt.preventDefault()
		console.log("clicked edit")

		const updatePicture = {
			id: this.props.match.params.pictureId,
			url: this.state.url,
			alt: this.state.alt
		}

		this.props.editPicture(updatePicture)
	}

	render() {
		return (
			<React.Fragment>
				<form>
					<div>
						<img src={this.state.url} alt={this.state.alt} />
						<br />
						<label htmlFor="taskName">Edit The Alt</label>
						<input
							className="waves-effect waves-black btn-flat"
							type="text"
							onChange={this.handleFieldChange}
							id="alt"
							value={this.state.alt}
						/>
					</div>
					<button
						className="waves-effect waves-black btn-flat"
						type="button"
						onClick={this.editThisPicture}
					>
						Save Edit
					</button>
				</form>
			</React.Fragment>
		)
	}
}
