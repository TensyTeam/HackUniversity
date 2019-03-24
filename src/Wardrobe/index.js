import React from 'react'

import './style.css'


export default class Wardrobe extends React.Component {
	render() {
		return (
			<div id="wardrobe">
				{this.props.children}
			</div>
		)
	}
}
