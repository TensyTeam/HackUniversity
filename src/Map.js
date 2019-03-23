import React from 'react'


export default class Map extends React.Component {
    constructor(props) {
        super(props)

        this.platform = null
        this.map = null
        this.state = {
            app_id: props.app_id,
            app_code: props.app_code,
            center: {
                lat: props.lat,
                lng: props.lng,
            },
            zoom: props.zoom,
            // theme: props.theme,
            // style: props.style,
        }
    }

    componentDidMount() {
        function addCircleToMap(map, H){
            map.addObject(new H.map.Circle(
              {lat:52.5159, lng:13.3777},
              1000,
              {
                style: {
                  strokeColor: 'rgba(55, 85, 170, 0.6)',
                  lineWidth: 2,
                  fillColor: 'rgba(0, 128, 0, 0.7)',
                }
              }
            ))
          }

        this.platform = new window.H.service.Platform(this.state)

        let layer = this.platform.createDefaultLayers()
		let container = document.getElementById('here-map')
		container.style = 'height: 100vh'

        this.map = new window.H.Map(container, layer.normal.map, {
			center: this.state.center,
			zoom: this.state.zoom,
        })
        
        addCircleToMap(this.map, window.H)

        // let events = new window.H.mapevents.MapEvents(this.map)
        // // eslint-disable-next-line
        // let behavior = new window.H.mapevents.Behavior(events)
        // // eslint-disable-next-line
        // let ui = new window.H.ui.UI.createDefault(this.map, layer)
    }    

    render() {
        return (
            <div id="here-map" style={{width: '100%', height: '100%', background: 'grey' }} />
        )
    }
}