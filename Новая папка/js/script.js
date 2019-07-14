window.onload = function () {
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
			// Функция обратного вызова при успешном извлечении локации
			function (position) {
				position = {
					coords: {
						lat: position.coords.latitude,
						lng: position.coords.longitude
					}
				}

				// Создание своей Функции
				console.log( "Последний раз вас нашли" + '\n' + position.coords.lat + '\n' +  position.coords.lng);
					map();

					function map () {
						var map = new google.maps.Map(document.getElementById('map'), {
							center: {lat: position.coords.lat, lng: position.coords.lng},
							zoom: 14
						});
						
					};

				// 1. Создаём новый объект XMLHttpRequest
				var xhr = new XMLHttpRequest();
				var URL = 'https://api.openweathermap.org/data/2.5/weather?lat=' + String(position.coords.lat) + '&'  + 'lon=' + String(position.coords.lng) + '&APPID=3f8430d4d06ce3e26656fc62b981aaf0';
				// 2. Конфигурируем его: GET-запрос на URL 'phones.json'
				xhr.open('GET', URL, true);
				// Эта конфигуратция не успешная по причине ошибки сервера xhr.open('GET', 'https://api.darksky.net/forecast/97c7f099b8b85f8d0eca0dcf50ec81fd/' + String(position.coords.lat) + ',' + String(position.coords.lng), true);

				// 3. Отсылаем запрос 
				xhr.send(); 

				

				xhr.onreadystatechange = function () {
					
					if (xhr.readyState !== 4) {
						return
					}
					console.log('end'); // Оброботка обьекта завершена
					
					if (xhr.status === 200) {
						// вывести результат
						// console.log('result', JSON.parse( xhr.responseText )); // responseText -- текст ответа.
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
						
						// иконка для погоды 02d.png
					} else {
						// обработать ошибку
						console.log('error', xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
					}
					
				};

				/*
				В объекте position изложена подробная информация
				о позиции устройства:

				position = {
					coords: {
						latitude - Широта.
						longitude - Долгота.
						altitude - Высота в метрах над уровнем моря.
						accuracy - Погрешность в метрах.
						altitudeAccuracy - Погрешность высоты над уровнем моря в метрах.
						heading - Направление устройства по отношению к северу.
						speed - Скорость в метрах в секунду.
					}
					timestamp - Время извлечения информации.
				}
				*/
			},

			// Функция обратного вызова при неуспешном извлечении локации
			function(error){
				error = {
					code: 'Доступ к месту положения не доступен.',
					message: 'Вы не разрешили доступ к вашему месту расположения.'
				}
				document.querySelector('.text').innerHTML = error.code + '<br>' + error.message;

				
			/*    
			
				При неудаче, будет доступен объект error:

				error = {
					code - Тип ошибки
							1 - PERMISSION_DENIED
							2 - POSITION_UNAVAILABLE
							3 - TIMEOUT

					message - Детальная информация.
				}
				
			*/

			}

	)};
}; 
	 