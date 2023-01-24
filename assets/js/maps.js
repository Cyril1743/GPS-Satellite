//varibles for map 
// var map
// var lat
// var long
// function initMap() {
//     map = new google.maps.Map($("map")), {
//         center : { lat: 37.0902, lng: 150.644},
//         zoom: 2
//     }
// }
// window.initMap = initMap;
// export {lat, long}
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -37.0902, lng: 95.7129 },
    zoom: 8,
  });
}

window.initMap = initMap;
