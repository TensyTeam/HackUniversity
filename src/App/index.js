import React from 'react'

import {appId, appCode} from '../keys'
import './style.css'

import Map from '../Map'
import Tinder from '../Tinder'
import Add from '../Add'
import Button from '../Button'
import Weather from '../Weather'


export default class App extends React.Component {
	state = {
		maps: false,
		weather: true,
	}

	render() {
		return (
			<React.Fragment>
				<Weather />
				<Tinder />
				<Add />
				<div onClick={ this.handlerWin }><Button class="btn btn-center">Го</Button></div>
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
			</React.Fragment>
		)
	}

	handlerWin = () => {
		try {
			document.getElementsByClassName('card_block')[0].style = 'transform: translate3d(0px, 0px, 0px);'
		} catch {
			document.getElementById('weather').innerHTML = '<img src="https://memepedia.ru/wp-content/uploads/2019/03/mem-kot-tom-19.jpg">'
			document.getElementById('weather').style = 'left: 20px;'
		}
	}
}
