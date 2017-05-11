var hikes = require("hikes");

function goToHike(arg) {
	var hike = arg.data;
	router.push("editHike", hike);
}

module.exports = {
	hikes: hikes,

	goToHike: goToHike
};