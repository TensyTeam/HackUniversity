import React from 'react'

import {appId, appCode} from '../keys'
import { getWeather } from '../func/methods'
import './style.css'

import Map from '../Map'
import Tinder from '../Tinder'
import Add from '../Add'


export default class App extends React.Component {
	state = {
		maps: false,
		weather: false,
	}

	render() {
		return (
			<div>
				<Tinder />
				<Add />
				{
					this.state.maps && <Map
						app_id={ appId }
						app_code={ appCode }
						lat={ 52.5159 }
						lng={ 13.3777 }
						zoom={ 14 }
					/>
				}
				{
					this.state.weather && getWeather(this)
				}
			</div>
		)
	}
}