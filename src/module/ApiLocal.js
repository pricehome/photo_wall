const remoteURL = "http://localhost:5002"

export default {
	get(id) {
		return fetch(`${remoteURL}/pictures/${id}`).then(pictureData =>
			pictureData.json()
		)
	},
	getAll() {
		return fetch(`${remoteURL}/pictures`).then(pictureData =>
			pictureData.json()
		)
	},
	post(newPicture) {
		return fetch(`${remoteURL}/pictures`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(newPicture)
		}).then(data => data.json())
	},

	delete(pictureId) {
		return fetch(`${remoteURL}/pictures/${pictureId}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json"
			}
		}).then(e => e.json())
	},

	put(editedPicture) {
		return fetch(`${remoteURL}/pictures/${editedPicture.id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(editedPicture)
		}).then(data => data.json())
	}
}
