import { current } from "../Models/App";

export default class EditHikePage {
	constructor(hike) {
		this.hike = hike;
		this.hikeCopy = Object.assign({}, hike);
	}

	save() {
		current.mockBackend.updateHike(
			this.hike.id, 
			this.hike.name, 
			this.hike.location, 
			this.hike.distance, 
			this.hike.rating, 
			this.hike.comments
		).catch(err => {
			console.log("There was an error updating hike " + this.hike.id + ": " + err);
		});
		
		current.navigation.goBack();
	}

	cancel() {
		Object.assign(this.hike, this.hikeCopy);
		current.navigation.goBack();
	}
}
