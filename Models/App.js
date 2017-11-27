import HomePage from 'Pages/HomePage';
import EditHikePage from 'Pages/EditHikePage';
import SplashPage from 'Pages/SplashPage';
import MockBackend from 'Services/MockBackend';

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
		this.mockBackend = new MockBackend();
		this.pages = [new SplashPage()];
		this.hikes = [];
		this.mockBackend.getHikes().then(hikes => {
			this.hikes = hikes;
		});
	}

	goToHike(arg) {
		this.pages.push(new EditHikePage(arg.data, this.pages, this.mockBackend));
	}
	
	goToHomePage() {
		this.pages = [new HomePage()]
	}
}
