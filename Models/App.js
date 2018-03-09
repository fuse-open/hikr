import Navigation from 'Services/Navigation';
import MockBackend from 'Services/MockBackend';

export let current = {
	navigation: new Navigation(),
	mockBackend: new MockBackend()
};

class Hike {
	constructor(id, name, location, distance, rating, comments) {
		this.id = id;
		this.name = name;
		this.location = location;
		this.distance = distance;
		this.rating = rating;
		this.comments = comments;
	}
}

export default class App {
	constructor() {
		this.current = current;
		this.hikes = [];
		current.mockBackend.getHikes().then(hikes => {
			this.hikes = hikes;
		});
		current.navigation.goToHome();
	}
}
