console.log('running correctly');

const token = require('./mapboxtoken');
const mapboxgl = require("mapbox-gl");
const markerBuilder = require('./marker.js');

mapboxgl.accessToken = token; //Ben's Key

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


// const markerDomEl = document.createElement("div"); // Create a new, detached DIV
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);


markerBuilder('Hotel', [-74.000, 40.715]).addTo(map);

markerBuilder('Restaurant', [-74.010, 40.725]).addTo(map);

markerBuilder('Restaurant', [-74.014, 40.715]).addTo(map);
// fullstack
markerBuilder('Activity', [-74.009, 40.705]).addTo(map);
// central park zoo
markerBuilder('Activity', [-73.9718, 40.7678]).addTo(map);
// prospect park
markerBuilder('Activity', [-73.9690, 40.6602]).addTo(map);
