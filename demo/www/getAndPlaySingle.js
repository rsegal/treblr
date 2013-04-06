function getSingleTrack(trackName) {
    selectedTrack = trackName;
    var track = singleTrackList[trackName];
    if (track === undefined) { // not saved locally yet
	track = $.ajax({
	    type: "get",
	    url: "./track_list/" + trackName,
	    success: function(data) {
		return data;
	    }
	});
	singleTrackList[trackName] = track;
    }
}

function playSingleTrack() {
    singleTrackList[selectedTrack].play();
};

function pauseSingleTrack() {
    singleTrackList[selectedTrack].pause();
}

function stopSingleTrack() {
    singleTrackList[selectedTrack].stop();
}

$(document).ready(function() {
    singleTrackList = {};
    selectedTrack = "";
})