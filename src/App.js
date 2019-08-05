import React from "react"
import axios from "axios"
import SearchBar from "./components/SearchBar"
// import Collection from "./components/Collection"
import ImageCard from "./components/ImageCard"

class App extends React.Component {
	state = {images: []}

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
				<SearchBar userSubmit={this.onSearchSubmit} />
				<span>Found: {this.state.images.length} images</span>
				<div>
					{this.state.images.map(img => (
						<ImageCard key={img.id} image={img} />
					))}
				</div>
			</div>
		)
	}
}

export default App
