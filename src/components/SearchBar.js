import React from "react"
import "./StyleBar.css"

class SearchBar extends React.Component {
	state = {val: ""}

	onInputChange = event => {
		this.setState({val: event.target.value})
	}

	onFormSubmit = event => {
		this.props.userSubmit(this.state.val)
		event.preventDefault()
		console.log(this.state.val)
		this.setState({val: ""})
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onFormSubmit} className="flexContainer">
					<label>
						<h5>Image Search: </h5>
					</label>
					<input
						className="inputStyle"
						type="text"
						value={this.state.val}
						onChange={this.onInputChange}
					/>
				</form>
			</div>
		)
	}
}

export default SearchBar
