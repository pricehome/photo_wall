import React from "react"
import {Route, Link, BrowserRouter as Router} from "react-router-dom"
import App from "../App"

class Route extends Component {

  state = {
    collecton: this.imagesFromAPI,

	render() {
		return
		<React.Fragment>
			<Route
				exact
				path="/collection"
				render={props => {
					return <Collection />
				}}
			/>
		</React.Fragment>
	}
}
export default Route
