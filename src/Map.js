import React from 'react'


// export default class Map extends React.Component {

//   // For conciseness simply included all parameters in the querystring directly

//   constructor(props) {
//     super(props);
//     this.state = {
//       url: 'https://image.maps.api.here.com/mia/1.6/mapview?w=600&h=300&z=10&t=5&poitxs=16&poitxc=black&poifc=yellow',
//       points: [],
//     }
//   }

//   // Helper function to format list of points

//   getPOIList() {
//     if (this.state.points.length > 0) {
//       let param = '&poi=';
//       for (var poi in this.state.points) {
//         param += poi.latitude + ',' + poi.longitude;
//       }
//       return param;
//     }

//     return '';
//   }

//   // Render method builds the URL dynamically to fetch the image from the
//   // HERE Map Image API

//   render() {
//     return (
//       <img
//         src={ this.state.url
//           + '&app_id=' + this.props.app_id
//           + '&app_code=' + this.props.app_code
//           + this.getPOIList()
//           }
//         alt="Todo Map"/>
//     );
//   }
// }

// const e = React.createElement;

// export default class Map extends React.Component {
// 	constructor(props) {
// 		    super(props)
// 		  }
		
//   componentDidMount() {
//     var platform = new H.service.Platform({
//         app_id: this.props.appId,
//         app_code: this.props.appCode,
//         })

//     var layers = platform.createDefaultLayers();
//     var map = new H.Map(
//         document.getElementById('map'),
//         layers.normal.map,
//         {
//             center: {lat: 42.345978, lng: -83.0405},
//             zoom: 12,
//         });

//     var events = new H.mapevents.MapEvents(map);
//     var behavior = new H.mapevents.Behavior(events);
//     var ui = H.ui.UI.createDefault(map, layers);
//   }

//   render() {
//       return e('div', {"id": "map"});
//   }
// }

export default class Map extends React.Component {
    constructor(props) {
        super(props);

        this.platform = null;
        this.map = null;

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

    // TODO: Add theme selection discussed later HERE

    componentDidMount() {
        this.platform = new window.H.service.Platform(this.state);

        var layer = this.platform.createDefaultLayers();
        var container = document.getElementById('here-map');

        this.map = new window.H.Map(container, layer.normal.map, {
            center: this.state.center,
            zoom: this.state.zoom,
          })

        var events = new window.H.mapevents.MapEvents(this.map);
        // eslint-disable-next-line
        var behavior = new window.H.mapevents.Behavior(events);
        // eslint-disable-next-line
        var ui = new window.H.ui.UI.createDefault(this.map, layer)
    }    

    render() {
        return (
            <div id="here-map" style={{width: '100%', height: '400px', background: 'grey' }} />
        );
    }
}