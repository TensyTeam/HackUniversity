import React from 'react'

import {appId, appCode} from '../keys'
import { getWeather } from '../func/methods'
import './style.css'

import Map from '../Map'
import Tinder from '../Tinder'
import Add from '../Add'
import Button from '../Button'
import Weather from '../Weather'


export default class App extends React.Component {
	state = {
		maps: false,
		weather: false
	}

	render() {
		return (
			<React.Fragment>
				<Weather>{this.state.weather === true ? <i class="fas fa-sun"></i> : <i class="fas fa-sun"></i> }</Weather>
				<Tinder />
				<Add />
				<Button class="btn btn-center">Го</Button>
				<Button class="btn"><i class="fas fa-suitcase-rolling"></i></Button>
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
			</React.Fragment>
		)
	}
}
