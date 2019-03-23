import React from 'react'

import './style.css'


export default class Add extends React.Component {
	render() {
		return (
			<div id="comp">
				<label for="avatar" onChange={ this.requestImage }>Добавить</label>
				<input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"></input>
	   		</div>
		)
	}

	requestImage = () => {
		console.log(this)
	}
}