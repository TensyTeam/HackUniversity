import React from 'react'

import {appId, appCode} from './keys'

import Map from './Map'
// import './service' as H


// export default class App extends React.Component {
// 	// <Map app_id={ appId } app_code={ appCode } />
// 	render() {
// 		// console.log()
// 		return (
// 			<div></div>
// 		)
// 	}
// }


export default class App extends React.Component {
	render() {
		return (
			<Map
			 app_id={ appId }
			  app_code={ appCode }
			  lat={52.5159}
			  lng={13.3777}
			  zoom={14}
			  
			  />
		)
	}
}