import HomePage from 'Pages/HomePage';
import EditHikePage from 'Pages/EditHikePage';

class Hike {
	constructor(name, location, distance, rating, comments) {
		this.name = name;
		this.location = location;
		this.distance = distance;
		this.rating = rating;
		this.comments = comments;
	}
}

export default class App {
	constructor() {
		this.pages = [new HomePage()];

		this.hikes = [
			new Hike(
				"Tricky Trails",
				"Lakebed, Utah",
				10.4,
				4,
				"This hike was nice and hike-like. Glad I didn't bring a bike."
			),
			new Hike(
				"Mondo Mountains",
				"Black Hills, South Dakota",
				20.86,
				3,
				"Not the best, but would probably do again. Note to self: don't forget the sandwiches next time."
			),
			new Hike(
				"Pesky Peaks",
				"Bergenhagen, Norway",
				8.2,
				5,
				"Short but SO sweet!!"
			),
			new Hike(
				"Rad Rivers",
				"Moriyama, Japan",
				12.3,
				4,
				"Took my time with this one. Great view!"
			),
			new Hike(
				"Dangerous Dirt",
				"Cactus, Arizona",
				19.34,
				2,
				"Too long, too hot. Also that snakebite wasn't very fun."
			)
		];
	}

	goToHike(arg) {
		this.pages.push(new EditHikePage(arg.data));
	}

	goBack() {
		this.pages.pop();
	}
}
