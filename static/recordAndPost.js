function startRecording() {
    track = newMedia();
    track.startRecord();
}

function stopRecording() {
    track.stopRecord();
}

function finishedRecording() {
    $.ajax({
	type: "post",
	url: serverCoreURL + srcCounter,
	track: track,
	success: function(data) {
	    console.log("Saved " + localCoreURL + srcCounter + "!\n");
	}
    });
}

function newMedia() {
    return Media(localCoreSRC + srcCounter++,finishedRecording);
}

$(document).ready(function() {
    serverCoreURL = "./track_list/sf_";
    localCoreURL = "./sf_";
    srcCounter = 0;
});