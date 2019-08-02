import React from "react"
// import Unsplash from "unsplash-js"
import axios from "axios"
import SearchBar from "./components/SearchBar"

class App extends React.Component {
	// const Unsplash = require('unsplash-js').default;

	// const Unsplash = new Unsplash({
	//   applicationId: "85a0b9614229dfacfca600ad289483b1debb8e56c208051ac93b6400ddc866da",
	//   secret: "c65676844daa4e79ff263c24dcd55f6c10ba7b3054d9481784f9ac680d021e59"
	// });

	onSearchSubmit(term) {
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
			})
	}

	render() {
		return (
			<div>
				<SearchBar userSubmit={this.onSearchSubmit} />
			</div>
		)
	}
}

export default App
