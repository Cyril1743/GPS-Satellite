//varibles for maps
var map;
var lat;
var long;
var searchInput = $("#search-bar").val()
var searchButton = $("#search-button")


function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.060150, lng: -95.647301 },
    zoom: 4,
  });
}

window.initMap = initMap;

searchButton.on("click", function(){
    
})