import React from 'react';

import './style.css'


export default class Add extends React.Component {
	render() {
		return (
			<React.Fragment>
				<label for="avatar" onChange={ this.requestImage }><i class="fas fa-plus"></i></label>
				<input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"></input>
	   		</React.Fragment>
		)
	}

	requestImage = () => {
		console.log(this)
	}
}
