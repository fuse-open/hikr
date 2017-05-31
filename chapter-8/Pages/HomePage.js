var Context = require("Modules/Context");

function goToHike(arg) {
	var hike = arg.data;
	router.push("editHike", hike.id.value);
}

module.exports = {
	hikes: Context.hikes,

	goToHike: goToHike
};