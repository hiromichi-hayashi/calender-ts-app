export function setGeolocation() {
	//現在の天気を取得する場所の名前
	let targetCityName = "kamakura";
	let appId = import.meta.env.VITE_API_KEY;

	const requestUrl =
		"https://api.openweathermap.org/data/2.5/weather?APPID=" +
		appId +
		"&lang=ja&units=metric&q=" +
		targetCityName +
		",jp;";

	let xhr = new XMLHttpRequest();

	function successCallback(position: any) {
		console.log(position.coords);
	}

	function errorCallback(error: any) {
		console.log(error);
		alert(error.message);
	}

	navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

	//通信方式とURLを設定
	xhr.open("GET", requestUrl);

	//通信を実行する
	xhr.send();

	//通信ステータスが変わったら実行される関数
	xhr.onreadystatechange = function () {
		//通信が完了
		if (xhr.readyState == 4) {
			ShowTodaysWeather(xhr.responseText);
		}
	};

	/**
	 * 今日の天気を表示する
	 */
	function ShowTodaysWeather(response: any) {
		let obj = JSON.parse(response);

		let weather = obj.weather[0].description;
		let city = obj.name;
		let temp = obj.main.temp;

		console.log("現在の" + city + "の天気は" + weather);
		console.log("気温は" + temp + "度です。");
	}
}
