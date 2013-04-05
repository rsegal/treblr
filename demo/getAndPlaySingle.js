function getSingleTrack(trackName) {
    selectedTrack = trackName;
    var track = trackList[trackName];
    if (track === undefined) { // not saved locally yet
	track = $.ajax({
	    type: "get",
	    url: "./track_list/" + trackName,
	    success: function(data) {
		return data;
	    }
	});
	trackList[trackName] = track;
    }
}

function playSingleTrack() {
    trackList[selectedTrack].play();
};

function pauseSingleTrack() {
    trackList[selectedTrack].pause();
}

function stopSingleTrack() {
    trackList[selectedTrack].stop();
}

$(document).ready(function() {
    trackList = {};
    selectedTrack = "";
})