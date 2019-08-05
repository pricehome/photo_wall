import React from "react"
import axios from "axios"
import SearchBar from "./components/SearchBar"
import ImageList from "./components/ImageList"
import Item from "./components/Item"

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			images: []
		}
	}

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
	// sort imgs by number within arr
	imgSort = (a, b) => {
		if (a < b) {
			return -1
		} else if (b < a) {
			return 1
		} else {
			return 0
		}
	}
	addImg = e => {
		e.preventDefault()
		// get the sorted values from state.items
		//find the highest number in items,
		// incremetn it,
		// update state
		let _items = this.state.items
		let max = Math.max(..._items) + 1
		_items.push(max)
		this.setState({items: _items})
	}
	addFromLS = img => {
		// accept a number
		// get the values from state.items
		// add the new value to the array
		// remove duplicates
		// sort the array
		// update state
		let _items = this.state.items
		_items.push(img)
		_items = Array.from(new Set(_items)).sort(this.imgSort)
		this.setState({items: _items})
	}
	componentDidMount() {
		// check localStorage for an array
		// if it exists parse the array
		// call addFromLS method for each img
		let _items = localStorage.getItem("myImgs")
		if (_items) {
			_items = JSON.parse(_items)
			_items.forEach(this.addFromLS)
		}
	}

	render() {
		return (
			<div>
				<SearchBar userSubmit={this.onSearchSubmit} />
				<span>Found: {this.state.images.length} images</span>
				<ImageList foundImages={this.state.images} />
				<p>
					<button onClick={this.addImg}>Add an Item</button>
				</p>

				{this.state.items &&
					this.state.items.map(item => <Item key={item} Img={item} />)}
			</div>
		)
	}
}

export default App
