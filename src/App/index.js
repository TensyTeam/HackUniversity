import React from 'react'

import {appId, appCode} from '../keys'

import { getWeather } from '../func/methods'
import Map from '../Map'
import './style.css'


export default class App extends React.Component {
	render() {
		return (
			<div>
				<Map
					app_id={ appId }
					app_code={ appCode }
					lat={ 52.5159 }
					lng={ 13.3777 }
					zoom={ 14 }
				/>
				{ getWeather(this) }
			</div>
		)
	}
}