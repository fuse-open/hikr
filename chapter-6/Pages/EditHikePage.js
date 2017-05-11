var Context = require("Modules/Context");

var hike = this.Parameter;

var name = hike.map(function(x) { return x.name; });
var location = hike.map(function(x) { return x.location; });
var distance = hike.map(function(x) { return x.distance; });
var rating = hike.map(function(x) { return x.rating; });
var comments = hike.map(function(x) { return x.comments; });

function cancel() {
	// Refresh hike value to reset dependent Observables' values
	hike.value = hike.value;
	router.goBack();
}

function save() {
	Context.updateHike(hike.value.id, name.value, location.value, distance.value, rating.value, comments.value);
	router.goBack();
}

module.exports = {
	name: name,
	location: location,
	distance: distance,
	rating: rating,
	comments: comments,

	cancel: cancel,
	save: save
};