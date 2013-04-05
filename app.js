var express = require("express");
var app = express();

var fs = require("fs");
app.use(express.bodyParser());
var trackdata;

function readFile(filename, defaultData, callbackFn) {
	fs.readFile(filename, function(err, data) {
		if (err) {
			console.log("Error reading file: ", filename);
			data = defaultData;
		} else {
			console.log("Success reading file: ", filename);
		}
		if (callbackFn) callbackFn(err, data);
	});
};

function writeFile(filename, data, callbackFn) {
	fs.writeFile(filename, data, function(err) {
		if (err) {
			console.log("Error writing file: ", filename);
		} else {
			console.log("Success writing file: ", filename);
		}
		if (callbackFn) callbackFn(err);
	});
};

// Get all
app.get("/track_list/", function (request, response) {
	console.log("getting /test");
	response.send({
		success: true
	});
});

// Get one
app.get("/track_list/:id", function (request, response) {
	console.log("getting file");
    response.sendfile("track_list/sf_" + request.params.id);
});

// Create one
app.post("/track_list", function(request, response){
	var track = {};
	response.send({
		track: track,
		success: true
	});
});

// Update one
app.put("/track_list/sf_:id", function(request, repsonse){
	var id = request.params.id;
	response.send({
		track: track,
		success: true
	});
});

// Delete all
app.delete("/track_list", function(request, repsonse){
	trackdata = [];
	writeFile("track_list.txt", JSON.stringify(trackdata));
	response.send({
		trackdata: trackdata,
		success: true
	});
});

// Delete one
app.delete("/track_list/sf_:id", function(request, response){
	var id = request.params.id;
	var old = trackdata[id];
	trackdata.splice(id, 1);
	writeFile("track_list.txt", JSON.stringify(trackdata));
	response.send({
		trackdata: old,
		success: (old !== undefined)
	});
});

// Get one html page
app.get("/static/:filename", function(request, response){
    response.sendfile("static/" + request.params.filename);
});

function initServer() {
	var defaultList = "{}";
	readFile("track_list.txt", defaultList, function(err, data) {
		trackdata = JSON.parse(data);
	});
}

initServer();
app.listen(8889);
