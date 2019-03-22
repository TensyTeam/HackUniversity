import React from 'react'

import {appId, appCode} from './keys'

import Map from './Map'


export default class App extends React.Component {
	render() {
		console.log(appId, appCode)
		return (
			<Map app_id={ appId } app_code={ appCode } />
		)
	}
}
