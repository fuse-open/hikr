export default class EditHikePage {
	constructor(hike, pages, mockBackend) {
		this.mockBackend = mockBackend;
		this.pages = pages;
		
		this.hike = hike;
		this.hikeCopy = Object.assign({}, hike);
	}

	save() {
		this.mockBackend.updateHike(
			this.hike.id, 
			this.hike.name, 
			this.hike.location, 
			this.hike.distance, 
			this.hike.rating, 
			this.hike.comments
		).catch(err => {
			console.log("There was an error updating hike " + this.hike.id + ": " + err);
		});
		
		this.pages.pop();
	}

	cancel() {
		Object.assign(this.hike, this.hikeCopy);
		this.pages.pop();
	}
}
