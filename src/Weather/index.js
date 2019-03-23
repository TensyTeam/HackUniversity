import React from 'react';
import PropTypes from 'prop-types';

import './style.css'


export default class Weather extends React.Component {

	render() {
		return (
			<div class="weather_block">
				{this.props.children}
			</div>
		)
	}

}
