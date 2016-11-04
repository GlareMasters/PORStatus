function ServerOnline(serverip){
	$.getJSON('http://dev.mcapi.ca/query/' + serverip + '/players', function(json){
		if (json.status !== true) {
			$('#mcUp').html("null");
		}
	});
}