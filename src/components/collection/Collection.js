import React, {Component} from "react"
import ApiLocal from "../../module/ApiLocal"
import PictureCard from "./PictureCard"

export class Collection extends Component {
	state = {
		pictures: []
	}

	componentDidMount() {
		const newState = {}

		ApiLocal.getAll()
			.then(pictures => (newState.pictures = pictures))
			.then(() => this.setState(newState))
	}

	deletePicture = pictureId => {
		ApiLocal.delete(pictureId)
			.then(() => ApiLocal.getAll())
			.then(pictures => {
				this.setState({pictures: pictures})
			})
	}

	render() {
		return (
			<React.Fragment>
				<div>
					{this.state.pictures.map(picture => (
						<PictureCard
							key={picture.id}
							picture={picture}
							{...this.props}
							deletePicture={this.deletePicture}
						/>
					))}
				</div>
			</React.Fragment>
		)
	}
}

export default Collection
