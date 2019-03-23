import api from './api'


function getWeather(that) {
	const handlerSuccess = (other, res) => {
		console.log(res)
	}

	api(that, handlerSuccess)
}

export { getWeather }