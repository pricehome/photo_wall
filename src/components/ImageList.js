
import React from "react"
import Item from "./Item"

const ImageList = props => {
	const imgs = props.foundImages.map(img => {
		return <img key={img.id} src={img.urls.small} alt={img.alt_description} />
	})
	return <div>{imgs}</div>
}

export default ImageList
