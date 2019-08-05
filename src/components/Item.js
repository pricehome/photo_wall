import React, {Component} from "react"
import ImageList from "./ImageList"

export class Item extends Component {
	constructor(props) {
		super(props)
		this.state = {
			imgs: props.imgs,
			isSaved: false
		}
	}
	saveImg = e => {
		// save the image to localStorage
		// get the image from localStorage
		// if exists, pars it
		// 						add current img to array
		// 						remove duplicates
		//            update localStorage
		// if not exist
		// 						create a new array with the img
		// 						create item in localStorage
		// update state with isSaved
		let imgs = localStorage.getItem("myImgs")
		let arr = []
		if (imgs) {
			arr = JSON.parse(imgs)
			arr.push(this.state.img)
			arr = Array.from(new Set(arr))
			localStorage.setItem("myImgs", JSON.stringify(arr))
		} else {
			arr = []
			arr.push(this.state.img)
			localStorage.setItem("myImgs", JSON.stringify(arr))
		}
		this.setState({isSaved: true})
	}

	componentDidMount() {
		// giet the array from localStorage
		// parse the array
		// if the img is included in the array
		// update the state for isSaved
		let imgs = localStorage.getItem("myImgs")
		let arr = []
		if (imgs) {
			arr = JSON.parse(imgs)
			if (arr.includes(this.state.num)) {
				this.setState({isSaved: true})
			}
		}
	}
	render() {
		return (
			<p className={this.state.isSaved ? "saved" : ""}>
				Save{this.state.img}.{" "}
				<button onClick={this.saveImg}>Click to Save</button>
			</p>
		)
	}
}

export default Item
