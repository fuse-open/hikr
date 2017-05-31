var Context = require("Modules/Context");

var hike = this.Parameter.map(function(x) { return Context.getHike(x)});

function cancel() {
	hike.value.reset();
	router.goBack();
}

function save() {
	hike.value.save();
	router.goBack();
}

module.exports = {
	hike: hike,

	cancel: cancel,
	save: save
};