// const markerDomEl = document.createElement("div"); // Create a new, detached DIV
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);
const mapbox = require('mapbox-gl');

function buildMarker (type, coordinates) {
	const markerDomEl = document.createElement("div"); // Create a new, detached DIV
	markerDomEl.style.width = "32px";
	markerDomEl.style.height = "39px";

	switch (type) {
		case 'Activity' : 
			markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
			break;
		case 'Hotel' :
			markerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
			break;
		case 'Restaurant' :
			markerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
			break;
		default :
			markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
	}

	return new mapbox.Marker(markerDomEl).setLngLat(coordinates);
}

module.exports = buildMarker;