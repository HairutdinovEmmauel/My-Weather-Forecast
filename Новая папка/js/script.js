window.onload = function () {


	navigator.geolocation.getCurrentPosition(
		function () {
			alert('Последний раз вас засекали здесь: ' +
				position.coords.latitude + ", " + position.coords.longitude );
		}
	);
 	//------------------------------------------------- НАЧАЛО -----------------------------------------------------
	/*
		JavaScript позволяет реализовать поставленную задачу посредством использования Geolocation API. В вашем 
		распоряжении будет небольшой набор функций с помощью которых возможно определение позиции устройства по:

		GPS – для мобильных устройств, наиболее точный метод (погрешность в пределе 10 метров).
		WiFi – доступен для всех подключённых устройств. Довольно точен.
		Геолокация по IP – привязана к региону. Часто даёт большую погрешность, в зависимости от расположения 
		оборудования провайдера.
		При запросе данных, браузер попытается извлечь информацию всеми тремя способами. Позиция по WiFi определяется 
		быстрее по сравнению с GPS и наиболее точна по сравнению с геолокацией по IP.

		Работа с Geolocation API
		Geolocation API довольно-таки неплохо поддерживается браузерами, но всё равно было бы неплохо проверить 
		доступность объекта Window.navigator.

			if (navigator.geolocation) {
			// Геолокация доступна
			}
			else {
			// Геолокация не доступна
			}
	*/

	//--------------------------------------------------------------------------------------------------------------
	/* 
			В объекте navigator.geolocation доступны следующие методы:

		Geolocation.getCurrentPosition() – Определение текущей позиции устройства.
		Geolocation.watchPosition() – Отслеживание изменения позиции устройства и вызов функции обратного вызова.
		Geolocation.clearWatch() – Удаление обработчика метода watchPosition.
		Методы getCurrentPosition() и watchPosition() используются для схожих целей. Оба метода работают асинхронно, 
		пытаясь извлечь позицию устройства.







		navigator.geolocation.getCurrentPosition(

    // Функция обратного вызова при успешном извлечении локации
    function(position) {

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
        

    },
	
		// Функция обратного вызова при неуспешном извлечении локации
		function(error){
	
			
			При неудаче, будет доступен объект error:
	
			error = {
				code - Тип ошибки
						1 - PERMISSION_DENIED
						2 - POSITION_UNAVAILABLE
						3 - TIMEOUT
	
				message - Детальная информация.
			}
			
	
		}
	);
	//-------------------------------------------------------------------------------------------------------------
	*/
	/*
		Браузер позаботится за отображение окна подтверждения, но есть и другой способ. Альтернативный способ может 
		пригодится в случае отказа пользователя, которому в дальнейшем браузер не будет предлагать предоставить 
		доступ.
		
		Безопасные хосты
		Ещё одним препятствием к использованию данного API является обязательная поддержка HTTPS. Согласно новым 
		правилам безопасности, Google Chrome не позволит ненадёжным хостам запускать Geolocation API. Так что вам 
		придётся установить SSL сертификат на ваш домен.
		
		Подробнее об этом можно найти тут.













	*/
	//---------------------------------------------------------------------------------------------------
	/*
	
	извлекаем и отображаем на карте местоположение устройства пользователя.view sourceprint?
	
		findMeButton.on('click', function(){

			navigator.geolocation.getCurrentPosition(function(position) {

			// Текущие координаты.
			var lat = position.coords.latitude;
			var lng = position.coords.longitude;

			// Отрисовка карты.
			var map = new GMaps({
				el: '#map',
				lat: lat,
				lng: lng
			});

			map.addMarker({
				lat: lat,
				lng: lng
			});

    });

});
		
	
*/

	// var map;
	// function initMap() {
	// 	map = new google.maps.Map(document.getElementById('map'), {
	// 		center: {lat: -34.397, lng: 150.644},
	// 		zoom: 8
	// 	});
	// };

	// var latit = position.coords.latitude;
	// var longi = position.coords.longitude;
	
	// navigator.geolocation.getCurrentPosition(
	// 	function () {
	// 		alert('Последний раз вас засекали здесь: ' +
	// 			latit + ", " + longi );
	// 	}
	// );

	// var buttonGeol = document.getElementById('Geolocation');

	// buttonGeol.addEventListener('mousedown', FunGeolocation);
	// function FunGeolocation () {
	// 	map, {
	// 		center: {lat: -34.397, lng: 150.644},
	// 		zoom: 18
	// 	};
	// };
	// }; 
};
/*
В объекте navigator.geolocation доступны следующие методы:

Geolocation.getCurrentPosition() – Определение текущей позиции устройства.
Geolocation.watchPosition() – Отслеживание изменения позиции устройства и вызов функции обратного вызова.
Geolocation.clearWatch() – Удаление обработчика метода watchPosition.
Методы getCurrentPosition() и watchPosition() используются для схожих целей. Оба метода работают асинхронно, 
пытаясь извлечь позицию устройства.

*/
