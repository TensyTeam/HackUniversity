import api from './api'
import { appId, appCode } from '../keys'


function getWeather(that) {
	const link = 'https://weather.cit.api.here.com/weather/1.0/report.json'

	const data = {
		product: 'observation',
		oneobservation: 'true',
		app_id: appId,
		app_code: appCode,
		name: 'Saint-Petersburg'
	}

	const handlerSuccess = (other, res) => {
		console.log(res)
		let div = '<img src="' + res.observations.location[0].observation[0].iconLink + '" id="api"></br>' + res.observations.location[0].observation[0].temperature + ' °C</br>Ветер: ' + res.observations.location[0].observation[0].windSpeed + ' ' + res.observations.location[0].observation[0].windDescShort + '</br> Влажность: ' + res.observations.location[0].observation[0].humidity  + '%</br>' + res.observations.location[0].observation[0].city
		document.getElementById('weather').innerHTML = div
	}

	api(link, 'GET', data, that, handlerSuccess)
}

function postImage(that, data) {
	const link = 'http://0.0.0.0:5000/'

	const req = {
		data
	}

	const handlerSuccess = (other, res) => {
		console.log(res)
	}

	api(link, 'POST', req, that, handlerSuccess)
}

export { getWeather, postImage }
