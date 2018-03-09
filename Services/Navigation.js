import HomePage from 'Pages/HomePage';
import EditHikePage from 'Pages/EditHikePage';

export default class Navigation {
	constructor() {
		this.pages = [];
	}

	goToHome() {
		this.pages.push(new HomePage());
	}

	goToHike(arg) {
		this.pages.push(new EditHikePage(arg.data));
	}

	goBack() {
		this.pages.pop();
	}
}
