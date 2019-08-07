import React from "react"
import {Route, Link, BrowserRouter as Router} from "react-router-dom"
import axios from "axios"
import SearchBar from "./components/SearchBar"
import NavBar from "./components/NavBar"
import ImageCard from "./components/ImageCard"
import ApiLocal from "./module/ApiLocal"
import Collection from "./components/Collection"
import PictureEdit from "./components/picture/PictureEdit"

class App extends React.Component {
	state = {images: []}

	saveThisPicture = newPicture => ApiLocal.post(newPicture)

	onSearchSubmit = term => {
		axios
			.get("https://api.unsplash.com/search/photos", {
				params: {query: term},
				headers: {
					Authorization:
						"Client-ID 85a0b9614229dfacfca600ad289483b1debb8e56c208051ac93b6400ddc866da"
				}
			})
			.then(data => {
				console.log(data)
				this.setState({images: data.data.results}, () =>
					console.log(this.state.images)
				)
			})
	}

	render() {
		return (
			<div>
				<NavBar />
				<SearchBar userSubmit={this.onSearchSubmit} />
				<span>Found:{this.state.images.length} images</span>
				<React.Fragment>
					<Route
						exact
						path="/collection"
						render={props => {
							return <Collection />
						}}
					/>
					<Route
						exact
						path="/collection/pictureId(\d+)/edit"
						render={props => {
							return <PictureEdit {...props} />
						}}
					/>
				</React.Fragment>
				<div>
					{this.state.images.map(img => (
						<ImageCard
							key={img.id}
							image={img}
							saveThisPicture={this.saveThisPicture}
						/>
					))}
				</div>
			</div>
		)
	}
}

export default App
