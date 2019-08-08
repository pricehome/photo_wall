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
		stateToChange[evt.target.id] = evt.target.alt
		this.setState(stateToChange)
	}
	editThisPicture = evt => {
		evt.preventDefault()

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
						<label htmlFor="taskName">Edit The Alt</label>
						<img src={this.props.picture.url} alt={this.props.picture.alt} />
						<input
							type="text"
							onChange={this.handleFieldChange}
							id="alt"
							value={this.state.alt}
						/>
					</div>
				</form>
			</React.Fragment>
		)
	}
}
