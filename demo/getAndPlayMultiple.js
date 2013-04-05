function getMultipleTrack(trackName) {
    var track = selectedTracks[trackName];
    if (track === undefined) { // not in play selection
	track = trackList[trackName];
	if (track === undefined) { // not saved locally at all
            track = $.ajax({
		type: "get",
		url: "./track_list/" + trackName,
		success: function(data) {
                    return data;
		}
            });
            trackList[trackName] = track;
	}
	// need to add to selected tracks either way
	selectedTrack[trackName] = track; 
    }
}

function playMultipleTrack() {
    var len = selectedTracks.length;
    var i;
    for(i=0;i<len;i++) {
	selectedTracks[i].play(); 
    }
}

function pauseMultipleTrack() {
    var len = selectedTracks.length;
    var i;
    for(i=0;i<len;i++) {
        selectedTracks[i].pause();
    }
}

function stopMultipleTrack() {
    var len = selectedTracks.length;
    var i;
    for(i=0;i<len;i++) {
        selectedTracks[i].stop();
    }
}

function unselectTrack(trackName) {
    if (selectedTracks[trackName] !== undefined) {
	delete selectedTracks[trackName];
    }
}

$(document).ready(function() {
    trackList = {};
    selectedTracks = {};
})
