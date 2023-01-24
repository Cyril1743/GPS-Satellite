//varibles for maps
var map;
var lat = 39.060150;
var long = -95.647301;
var searchInput = $("#search-bar").val()
var searchButton = $("#button-addon2")


function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: lat, lng: long },
    zoom: 4,
  });
}

window.initMap = initMap;

searchButton.on("click", function(){
    var search = searchInput.replace(" ", "%20")
})