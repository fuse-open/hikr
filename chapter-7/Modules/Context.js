var Observable = require("FuseJS/Observable");
var Backend = require("./Backend");

var hikes = Observable();

function CreateObservableHike(backendHike) {
	var obj = {};
	obj.id = Observable(backendHike.id);
	obj.name = Observable(backendHike.name);
	obj.location = Observable(backendHike.location);
	obj.distance = Observable(backendHike.distance);
	obj.rating = Observable(backendHike.rating);
	obj.comments = Observable(backendHike.comments);

	obj.save = function() {
		Backend.updateHike(obj.id.value, obj.name.value, obj.location.value, obj.distance.value, obj.rating.value, obj.comments.value)
		.catch(function(error) {
			console.log("Couldn't update hike: " + obj.id.value);
		});
	}
	obj.reset = function() {
		obj.id.value = backendHike.id;
		obj.name.value = backendHike.name;
		obj.location.value = backendHike.location;
		obj.distance.value = backendHike.distance;
		obj.rating.value = backendHike.rating;
		obj.comments.value = backendHike.comments;
	}
	return obj;
}
function getHike(id) {
	for(var i = 0; i < hikes.length; i++) {
		if(hikes.getAt(i).id.value==id) {
			return hikes.getAt(i);
		}
	}
}

Backend.getHikes()
	.then(function(newHikes) {
		for(var i = 0; i < newHikes.length; i++) {
			newHikes[i] = CreateObservableHike(newHikes[i]);
		}
		hikes.replaceAll(newHikes);
	})
	.catch(function(error) {
		console.log("Couldn't get hikes: " + error);
	});

module.exports = {
	hikes: hikes,
	getHike: getHike
};