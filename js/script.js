window.onload = function () {
	var h2 = document.createElement('h2');
	var textH2 = document.createTextNode('Добро пожаловать');

	h2.appendChild(textH2);
	document.querySelector('.text').appendChild(h2);

	var tegP = document.createElement('p');
	var textTegP = document.createTextNode('Если вы хотите узнать прогноз погоды нажмите на кнопку "Узнать Прогноз погоды". Потом разрешите узнать место вашего разположения.');
	
	tegP.appendChild(textTegP);
	document.querySelector('.text').appendChild(tegP);




	var button = document.getElementById('Geolocation');
	iMap();

	function iMap() {
		var map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 50.900, lng: 31.320},
			zoom: 5
		});
	};

	button.addEventListener('click', weatherForecast);

	function weatherForecast () {

		navigator.geolocation.getCurrentPosition(
			function (position) {

				position = {
					coords: {
						lat: position.coords.latitude,
						lng: position.coords.longitude
					}
				}

				console.log( "Последний раз вас нашли" + '\n' + position.coords.lat + '\n' +  position.coords.lng);
					map();

					function map () {
						var map = new google.maps.Map(document.getElementById('map'), {
							center: {lat: position.coords.lat, lng: position.coords.lng},
							zoom: 14
						});
						
					};

				var xhr = new XMLHttpRequest();
				var URL = 'https://api.openweathermap.org/data/2.5/weather?lat=' + String(position.coords.lat) + '&'  + 'lon=' + String(position.coords.lng) + '&APPID=3f8430d4d06ce3e26656fc62b981aaf0';
				xhr.open('GET', URL, true);
				
				xhr.send(); 

				

				xhr.onreadystatechange = function () {
					
					if (xhr.readyState !== 4) {
						return
					}
					console.log('end');
					
					if (xhr.status === 200) {
			
						var GetWeath = JSON.parse( xhr.responseText );
						Result();
						
						function Result () {
							document.querySelector('.text').innerHTML = "";

							var result = document.querySelector('.text');

							var tegH3 = document.createElement('h3');
							var textHeadline = document.createTextNode('Прогноз погоды на Сегодне');
							
							result.appendChild(tegH3);
							tegH3.appendChild(textHeadline);
							tegH3.style.textAlign = 'center';

							var weatherIcon = document.createElement('p');
							var img = document.createElement('img');
							
							result.appendChild(weatherIcon);
							weatherIcon.appendChild(img);
							
							img.src = 'https://openweathermap.org/img/w/' + GetWeath.weather[0].icon + '.png';
							img.style.width = '50px';
							img.style.height = '50px';

							var min = + Math.floor( GetWeath.main.temp_min - 273 );
							var temp_min = document.createElement('p');
							var temp_info = document.createTextNode('Минимальная температура: ' + min);

							result.appendChild(temp_min);
							temp_min.appendChild(temp_info);
							
							var max = Math.floor( GetWeath.main.temp_max - 273 );
							var temp_max = document.createElement('p');
							var temp_maxInfo = document.createTextNode('Максимальная температура: ' + max);
								
							result.appendChild(temp_max);
							temp_max.appendChild(temp_maxInfo)
								
							var humidity = Math.floor( GetWeath.main.humidity);
							var Humidity = document.createElement('p');
							var HumidityInfo = document.createTextNode('Влажность: ' + humidity + '%');
								
							result.appendChild(Humidity);
							Humidity.appendChild(HumidityInfo);
							
							var pressure = Math.floor( GetWeath.main.pressure);
							var Pressure = document.createElement('p');
							var PressureInfo = document.createTextNode('Давление: ' + pressure);
								
							result.appendChild(Pressure);
							Pressure.appendChild(PressureInfo)
						}                                                                                                                                                           
						
					} else {
						console.log('error', xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
					}
					
				};

			
			},

			function(error){
				error = {
					code: 'Доступ к месту положения не доступен.',
					message: 'Вы не разрешили доступ к вашему месту расположения.'
				}
				document.querySelector('.text').innerHTML = error.code + '<br>' + error.message;

			}

	)};
}; 
	 