
function refreshDOM(data) {

}

function get(url) {
$.ajax({
	type: "get",
	url: url,
	success: function(data) {
		console.log(data);
	}
});

}

$(document).ready(function() {
});

