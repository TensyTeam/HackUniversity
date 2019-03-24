import React from 'react'

import {appId, appCode} from '../keys'
import './style.css'

import Map from '../Map'
import Tinder from '../Tinder'
import Add from '../Add'
import Button from '../Button'
import Weather from '../Weather'
import Wardrobe from '../Wardrobe'


export default class App extends React.Component {
	state = {
		maps: true,
		weather: true,
	}

	render() {
		return (
			<React.Fragment>
				<Weather />
				<Tinder />
				<Add />
				<div onClick={ this.handlerWin }><Button class="btn btn-center">Показать</Button></div>
				<div onClick={ this.handlerOpen }>
					<Button class="btn btn-wardrobe" ><i class="fas fa-tshirt"></i></Button>
				</div>
				<Button class="btn"><i class="fas fa-suitcase-rolling"></i></Button>
				{
					this.state.maps && <Map
						app_id={ appId }
						app_code={ appCode }
						lat={ 59.9392 }
						lng={ 30.3165 }
						zoom={ 11 }
					/>
				}
				<Wardrobe>
					<div onClick={ this.handlerClose }>
						<div class="card_content">
		                    <img src="https://i.ibb.co/sHNmPt5/q2.jpg" />
		                    <div class="card_text" >1</div>
		                </div>
						<div class="card_content">
		                    <img src="https://i.ibb.co/sHNmPt5/q2.jpg" />
		                    <div class="card_text" >1</div>
		                </div>
						<div class="card_content">
		                    <img src="https://i.ibb.co/sHNmPt5/q2.jpg" />
		                    <div class="card_text" >1</div>
		                </div>
						<Button class="btn btn-wardrobe" >Закрыть</Button>
					</div>
				</Wardrobe>
			</React.Fragment>
		)
	}

	handlerWin = () => {
		try {
			document.getElementsByClassName('card_block')[0].style = 'transform: translate3d(0px, 0px, 0px);'
		} catch {
			document.getElementById('weather').innerHTML = '<img height=200px width=330px src="https://memepedia.ru/wp-content/uploads/2019/03/mem-kot-tom-19.jpg">'
			document.getElementById('weather').style = 'left: 20px;'
		}
	}

	handlerOpen = () => {

		document.getElementById('root').style = 'position: unset;'
		document.getElementById('wardrobe').style = 'display: unset;'
		document.getElementById('here-map').style = 'display: none;'
	}

	handlerClose = () => {
		document.getElementById('root').style = 'position: fixed;'
		document.getElementById('wardrobe').style = 'display: none;'
		document.getElementById('here-map').style = 'display: unset;'
	}
}
