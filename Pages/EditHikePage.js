var Observable = require("FuseJS/Observable");

var hike = Observable();

var name = hike.map(function(x) { return x.name; });
var location = hike.map(function(x) { return x.location; });
var distance = hike.map(function(x) { return x.distance; });
var rating = hike.map(function(x) { return x.rating; });
var comments = hike.map(function(x) { return x.comments; });

module.exports = {
	name: name,
	location: location,
	distance: distance,
	rating: rating,
	comments: comments
};