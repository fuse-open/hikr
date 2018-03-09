import SplashPage from 'Pages/SplashPage';
import HomePage from 'Pages/HomePage';
import EditHikePage from 'Pages/EditHikePage';

export default class Navigation {
	constructor() {
		this.pages = [new SplashPage()];
	}

	goToHome() {
		this.pages = [new HomePage()];
	}

	goToHike(arg) {
		this.pages.push(new EditHikePage(arg.data));
	}

	goBack() {
		this.pages.pop();
	}
}
