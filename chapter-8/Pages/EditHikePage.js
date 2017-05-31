var Context = require("Modules/Context");

var hike = this.Parameter.map(function(x) { console.log("Fetching id " + x + ", length: " + Context.hikes.length); return Context.hikes.getAt(x)}); //TODO bug is that this isnt returning an observable?

/*
var name = hike.map(function(x) { return x.name; });
var location = hike.map(function(x) { return x.location; });
var distance = hike.map(function(x) { return x.distance; });
var rating = hike.map(function(x) { return x.rating; });
var comments = hike.map(function(x) { return x.comments; });
*/
function cancel() {
	// Refresh hike value to reset dependent Observables' values
	hike.value.reset();
	router.goBack();
}

function save() {
	console.log("Saving hike");
	console.log("New name: " + hike.value.name.value);
	hike.value.save();
	router.goBack();
}

module.exports = {
	/*name: name,
	location: location,
	distance: distance,
	rating: rating,
	comments: comments,*/
	hike: hike,

	cancel: cancel,
	save: save
};