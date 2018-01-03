


var json_data;
var weather = [];
// to find the location of user
navigator.geolocation.getCurrentPosition(function(position){
	// call the api when the location is grabbed
	getWeather(position.coords.latitude,position.coords.longitude);
});

function getWeather(lat,lon){
	var url = "https://fcc-weather-api.glitch.me/api/current?"+"lat="+lat+"&lon="+lon;
	var temperature;
	$.getJSON(url,function(data){
		json_data = data;
		weather = json_data.weather;
		temperature = json_data.main.temp;
		$('.text-container').append('<h3 class="place">'+ json_data.name+'</h3>');
		$('.text-container').append('<h3 class="temp">'+temperature+" °C"+'</h3>');
		$('.text-container').append('<h4 class="weather">'+weather[0].description+'</h4>');
		$('.text-container').append('<img src = "'+weather[0].icon+'" class="icon">');
		
		

	});
	
}










